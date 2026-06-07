# RouteLog - Trip Planner

A single-page trip route planner with Firebase Auth + Firestore sync.

Live at: **https://REPLACED_PROJECT_ID.web.app**

## Features

- **🗺️ Map**: Interactive map with Leaflet + OpenStreetMap (4 map styles)
- **✈️ Transport**: Add routes for flights, trains, buses, cars and more
- **🏨 Accommodation**: Enter hotel and accommodation information
- **📍 Activities**: Categorize sights, food, and must-see places
- **💰 Total Cost**: Automatic calculation per currency
- **📋 Copy/Paste**: Move segments, stays, and places between trips
- **↕️ Drag & Drop**: Reorder trips and segments
- **🕐 Time Sorting**: Sort activities by time and show as route on map
- **🏷️ Smart Labels**: Show city labels on hover or by zoom level
- **💾 Data Storage**: IndexedDB + localStorage (offline), Firestore (cloud sync)
- **🔍 Geocoding**: Automatic coordinate resolution via Nominatim (OpenStreetMap)
- **🌐 Multi-language**: Turkish / English / German
- **🔐 Firebase Auth**: Google sign-in, data syncs across devices

## Usage

1. Open the app at **https://REPLACED_PROJECT_ID.web.app** (or serve locally)
2. Create a trip with the "New Trip" button
3. Click on a trip, add transport, accommodation, and activities in the detail view
4. View routes and points on the map
5. Click "Giriş / Login" to sign in with Google — your data syncs to the cloud

## Technologies

- Vanilla JavaScript (ES6+)
- Leaflet.js
- OpenStreetMap / Nominatim
- CSS Custom Properties
- IndexedDB + localStorage
- Firebase Auth + Firestore + Hosting

## Development

Run locally:
```bash
python3 -m http.server 8000
# or open travel-planner.html directly
```

Deploy:
```bash
firebase deploy
```

## License

MIT
