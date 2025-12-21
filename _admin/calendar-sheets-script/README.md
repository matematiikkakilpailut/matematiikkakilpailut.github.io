# Calendar Sheets Script

Google Apps Script for managing calendar events in Google Sheets with TypeScript.

The Google Sheet is
<https://docs.google.com/spreadsheets/d/14EKYflIcfZ6S9wQJTomRhHA3HR9IZJHsMlJmQ2izaOk/edit>
and the CSV is at
<https://docs.google.com/spreadsheets/d/e/2PACX-1vR6soREOyUSs0E7KDfFpZpIpckFg7My9ia5w0FxaGZFcxXIP8T9DBfbWo5ACuxXQ4bi98szlUsrpnCQ/pub?gid=0&single=true&output=csv>.


## Setup

```bash
cd _admin/calendar-sheets-script
npm install
npx clasp login
```

## Development Workflow

### Push local changes to Google
```bash
npm run push
```

### Pull changes from Google (if you edited in web editor)
```bash
npm run pull
```

### Open the script in web browser
```bash
npm run open
```
