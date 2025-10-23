# Backend (Express)

This is a minimal backend that exposes `/api/create-order` which returns a mocked checkout URL.

Replace the mock logic in `server.js` with real integration to your chosen fiat on-ramp provider (Transak, MoonPay, Ramp, etc.). Make sure to store API keys in environment variables and never commit them.
