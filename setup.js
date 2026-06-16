// Run: node setup.js
// Reads Firebase config from environment variables and writes config.js
const fs = require('fs');
const required = ['FIREBASE_API_KEY','FIREBASE_AUTH_DOMAIN','FIREBASE_PROJECT_ID','FIREBASE_STORAGE_BUCKET','FIREBASE_MESSAGING_SENDER_ID','FIREBASE_APP_ID'];
const missing = required.filter(k => !process.env[k]);
if(missing.length){
  console.error('Missing environment variables:', missing.join(', '));
  console.error('Set them and try again.');
  process.exit(1);
}
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};
const emailjs = {
  publicKey: process.env.EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
  serviceId: process.env.EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: process.env.EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID"
};
fs.writeFileSync('config.js', `const FIREBASE_CONFIG = ${JSON.stringify(config, null, 2)};\n\nconst EMAILJS_CONFIG = ${JSON.stringify(emailjs, null, 2)};\n`);
const sh=Object.entries(config).map(([k,v])=>`export FIREBASE_${k.replace(/([A-Z])/g,'_$1').toUpperCase()}="${v}"`).join('\n');
fs.writeFileSync('config.sh', sh+'\n');
console.log('config.js + config.sh written successfully ✓');
console.log('Set EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID env vars for EmailJS support.');
