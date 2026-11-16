

import express from 'express'
import cors from 'cors'
import { randomUUID } from 'node:crypto'
import process from 'node:process'


const app = express()
const PORT = 3001

const allowedOrigin = process.env.CLIENT_ORIGIN

if (!allowedOrigin) {
  console.error('CLIENT_ORIGIN must be configured.')
  process.exit(1)
}

app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}))

app.use(express.json({ limit: '16kb' }))

const messages = new Map()

app.get('/api/channels/:channelId/messages', (req, res) => {
  const { channelId } = req.params

  const channelMessages = messages.get(channelId) ?? []

  return res.status(200).json(channelMessages)
})

app.post('/api/channels/:channelId/messages', (req, res) => {
  const { channelId } = req.params
  const { author, text } = req.body ?? {}

  if (
    typeof author !== 'string' ||
    typeof text !== 'string' ||
    !author.trim() ||
    !text.trim()
  ) {
    return res.status(400).json({
      error: 'Author and text must be non-empty strings.',
    })
  }

  if (author.trim().length > 100 || text.trim().length > 2000) {
    return res.status(400).json({
      error: 'Author or message exceeds the allowed length.',
    })
  }

  const message = {
    id: randomUUID(),
    channelId,
    author: author.trim(),
    text: text.trim(),
    createdAt: new Date().toISOString(),
  }

  const channelMessages = messages.get(channelId) ?? []
  channelMessages.push(message)
  messages.set(channelId, channelMessages)

  return res.status(201).json(message)
})

app.use((req, res) => {
  return res.status(404).json({
    error: 'Endpoint not found.',
  })
})



app.use((err, req, res, next) => {
  void next


  console.error('API error:', err.message)

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      error: 'Invalid JSON request body.',
    })
  }

  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      error: 'Request body is too large.',
    })
  }

  return res.status(500).json({
    error: 'Internal server error.',
  })
})

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
  console.log(`Allowed frontend origin: ${allowedOrigin}`)
})
