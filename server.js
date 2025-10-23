require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

// Simple health
app.get('/api/health', (req, res) => res.json({ ok: true }))

// Create a mock order — replace this with real on-ramp provider integration
app.post('/api/create-order', (req, res) => {
  const { amount, currency } = req.body
  if (!amount || !currency) return res.status(400).json({ message: 'Missing amount or currency' })

  // In production: call provider SDK/API with your API key and return provider checkout url
  // Example mock payment URL
  const checkoutUrl = `https://example-onramp.com/checkout?amount=${encodeURIComponent(amount)}&currency=${encodeURIComponent(currency)}`

  // For affiliate revenue tracking, you might want to append your affiliate id
  // e.g., checkoutUrl += '&affiliate_id=YOUR_AFF_ID'

  return res.json({ paymentUrl: checkoutUrl })
})

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`))
