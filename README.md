# CryptoBuy Starter

This repository contains a minimal frontend (React + Vite + Tailwind) and backend (Node + Express) starter for a crypto-buy site.

## Quick start

1. Open two terminals.

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run start
```

Frontend will run on `http://localhost:5173` (Vite default). Backend will run on `http://localhost:3000`.

The frontend's Buy button calls the backend `/api/create-order` which returns a mocked payment URL. Replace the mock in `backend/server.js` with your chosen on-ramp provider's API.
