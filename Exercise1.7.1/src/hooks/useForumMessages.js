
import { useCallback, useEffect, useState } from 'react'

const API_BASE_URL = 'http://localhost:3001'

function createApiError(response, body) {
  const message =
    body &&
    typeof body.error === 'string' &&
    body.error.trim()
      ? body.error
      : `Request failed with HTTP ${response.status}`

  const error = new Error(message)
  error.status = response.status
  return error
}

async function readJson(response) {
  try {
    return await response.json()
  } catch {
    throw new Error('The server returned an invalid JSON response.')
  }
}

export default function useForumMessages(channelId) {
  const [requestVersion, setRequestVersion] = useState(0)

  const [state, setState] = useState({
    channelId: null,
    data: [],
    loading: true,
    error: null,
  })

  const refresh = useCallback(() => {
    setRequestVersion((version) => version + 1)
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    async function loadMessages() {
      if (!channelId) {
        setState({
          channelId,
          data: [],
          loading: false,
          error: 'Please select a channel.',
        })
        return
      }

      setState({
        channelId,
        data: [],
        loading: true,
        error: null,
      })

      try {
        const endpoint =
          `${API_BASE_URL}/api/channels/` +
          `${encodeURIComponent(channelId)}/messages`

        const response = await fetch(endpoint, {
          method: 'GET',
          signal: controller.signal,
        })

        const body = await readJson(response)

        if (!response.ok) {
          throw createApiError(response, body)
        }

        if (!Array.isArray(body)) {
          throw new Error('Invalid messages response format.')
        }

        if (!controller.signal.aborted) {
          setState({
            channelId,
            data: body,
            loading: false,
            error: null,
          })
        }
      } catch (error) {
        if (controller.signal.aborted) {
          return
        }

        setState({
          channelId,
          data: [],
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : 'An unexpected error occurred.',
        })
      }
    }

    loadMessages()

    return () => {
      controller.abort()
    }
  }, [channelId, requestVersion])

  const postMessage = useCallback(
    async ({ author, text }) => {
      if (!channelId) {
        throw new Error('Please select a channel.')
      }

      const endpoint =
        `${API_BASE_URL}/api/channels/` +
        `${encodeURIComponent(channelId)}/messages`

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ author, text }),
      })

      const body = await readJson(response)

      if (!response.ok) {
        throw createApiError(response, body)
      }

      if (!body || typeof body.id !== 'string') {
        throw new Error('Invalid message creation response.')
      }

      refresh()
      return body
    },
    [channelId, refresh],
  )

  const isCurrentChannel = state.channelId === channelId

  return {
    data: isCurrentChannel ? state.data : [],
    loading: isCurrentChannel ? state.loading : true,
    error: isCurrentChannel ? state.error : null,
    refresh,
    postMessage,
  }
}
