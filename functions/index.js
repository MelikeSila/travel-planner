const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { defineSecret } = require('firebase-functions/params');
const { initializeApp } = require('firebase-admin/app');
const nodemailer = require('nodemailer');

initializeApp();

const smtpUser = defineSecret('SMTP_USER');
const smtpPass = defineSecret('SMTP_PASS');

exports.sendShareNotification = onDocumentCreated(
  {
    document: 'shares/{shareId}',
    secrets: [smtpUser, smtpPass],
  },
  async (event) => {
    const data = event.data.data();
    const { ownerDisplayName, ownerEmail, recipientEmail, type, access, trip, scenario } = data;

    const itemName = type === 'trip'
      ? (trip && trip.title) || 'Trip'
      : (scenario && scenario.title) || 'Scenario';
    const itemType = type === 'trip' ? 'trip' : 'scenario';
    const accessLabel = access === 'write' ? 'read & write' : 'read only';
    const senderName = ownerDisplayName || ownerEmail;

    const user = smtpUser.value();
    const pass = smtpPass.value();

    if (!user || !pass) {
      console.warn(
        'SMTP secrets not set. Run:\n' +
        'firebase functions:secrets:set SMTP_USER\n' +
        'firebase functions:secrets:set SMTP_PASS\n' +
        'Then redeploy: firebase deploy --only functions'
      );
      return null;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    });

    const projectId = process.env.GCLOUD_PROJECT;
    const appUrl = `https://${projectId}.web.app`;

    await transporter.sendMail({
      from: `"RouteLog" <${user}>`,
      to: recipientEmail,
      subject: `${senderName} shared a ${itemType} with you on RouteLog`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px">
          <div style="font-size:24px;font-weight:700;letter-spacing:-.03em;margin-bottom:4px">✈ RouteLog</div>
          <div style="font-size:13px;color:#6b6760;margin-bottom:24px">Trip Planner</div>
          <div style="border:1px solid #e2ddd5;border-radius:10px;padding:24px">
            <p style="margin:0 0 16px;font-size:15px;line-height:1.5;color:#1a1916">
              <strong>${senderName}</strong> shared the <strong>${itemType}</strong>
              "<strong>${itemName}</strong>" with you.
            </p>
            <p style="margin:0 0 20px;font-size:13px;color:#6b6760">
              Access: ${accessLabel}
            </p>
            <a href="${appUrl}" style="display:inline-block;padding:10px 24px;background:#1a1916;color:#fff;text-decoration:none;border-radius:6px;font-size:14px;font-weight:500">Open in RouteLog</a>
          </div>
          <div style="margin-top:16px;font-size:11px;color:#9e9a93">
            RouteLog &middot; <a href="${appUrl}" style="color:#9e9a93">${appUrl}</a>
          </div>
        </div>
      `
    });

    console.log(`Share notification sent to ${recipientEmail} for ${itemType} "${itemName}"`);
    return null;
  }
);
