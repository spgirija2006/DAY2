# DAY2 — Simple Login Demo

This is a minimal static website with a demo login page and dashboard. It's intended as a small front-end prototype (no real authentication).

Files:

- `index.html` — Login page (form validated by `app.js`).
- `styles.css` — Styling for login and dashboard.
- `app.js` — Client-side logic (demo auth).
- `dashboard.html` — Protected page shown after login.

Demo credentials:

- Email: `user@example.com`
- Password: `password123`

Run locally (quick options):

1) Open `index.html` directly in a browser (file://). For proper relative routing, a local server is recommended.

2) Start a simple Python HTTP server (recommended):

```powershell
cd "c:\Users\Windows\OneDrive\Desktop\FULLSTACK\DAY2"
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

Notes:

- This is a demo only — replace client-side checks with real server authentication for production.
- If you want a tiny server to accept credentials, ask and I can add a simple `server.py` example.
