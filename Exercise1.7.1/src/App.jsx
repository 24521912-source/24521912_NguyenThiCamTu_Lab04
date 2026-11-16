
import { useState } from 'react'
import useForumMessages from './hooks/useForumMessages'
import './App.css'

const CHANNELS = [
  {
    id: 'nasa',
    name: 'NASA',
    description: 'Space exploration and discoveries',
    symbol: '✦',
  },
  {
    id: 'esports-tribunal',
    name: 'Esports Tribunal',
    description: 'Competitive gaming discussions',
    symbol: '◆',
  },
  {
    id: 'notNasa',
    name: 'Not NASA',
    description: 'Everything beyond space',
    symbol: '◈',
  },
]

function formatDate(dateString) {
  const date = new Date(dateString)

  if (Number.isNaN(date.getTime())) {
    return 'Unknown date'
  }

  return date.toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

function MessageCard({ message }) {
  return (
    <article className="message-card">
      <div className="message-avatar" aria-hidden="true">
        {message.author?.charAt(0).toUpperCase() || '?'}
      </div>

      <div className="message-content">
        <dl className="message-details">
          <div className="message-heading">
            <dt className="visually-hidden">Author</dt>
            <dd className="message-author">
              {message.author}
            </dd>

            <dt className="visually-hidden">Date posted</dt>
            <dd className="message-date">
              <time dateTime={message.createdAt}>
                {formatDate(message.createdAt)}
              </time>
            </dd>
          </div>

          <div className="message-body">
            <dt className="visually-hidden">Message</dt>
            <dd className="message-text">
              {message.text}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

function MessageList({ data, loading, error, onRetry }) {
  if (loading) {
    return (
      <div className="state-panel" role="status">
        <div className="loading-spinner" aria-hidden="true" />
        <h3>Loading messages</h3>
        <p>Fetching the latest channel messages...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="state-panel error-panel" role="alert">
        <span className="state-symbol" aria-hidden="true">
          !
        </span>
        <h3>Unable to load messages</h3>
        <p>{error}</p>
        <button
          type="button"
          className="secondary-button"
          onClick={onRetry}
        >
          Try again
        </button>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="state-panel" role="status">
        <span className="state-symbol" aria-hidden="true">
          ✉
        </span>
        <h3>No messages yet</h3>
        <p>Start the conversation by posting a message.</p>
      </div>
    )
  }

  return (
    <div className="message-list">
      {data.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  )
}

function MessageComposer({ channelId, onPostMessage }) {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [success, setSuccess] = useState('')

  const canSubmit =
    author.trim().length > 0 &&
    text.trim().length > 0 &&
    !submitting

  async function handleSubmit(event) {
    event.preventDefault()

    setSubmitError('')
    setSuccess('')

    if (!canSubmit) {
      return
    }

    setSubmitting(true)

    try {
      await onPostMessage({
        author: author.trim(),
        text: text.trim(),
      })

      setText('')
      setSuccess('Message posted successfully.')
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Unable to post the message.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="composer-section" aria-labelledby="composer-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">JOIN THE CONVERSATION</span>
          <h2 id="composer-title">New message</h2>
        </div>
      </div>

      <form
        key={channelId}
        className="composer-form"
        onSubmit={handleSubmit}
      >
        <div className="field-group">
          <label htmlFor="message-author">Your name</label>
          <input
            id="message-author"
            name="author"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value)
              setSubmitError('')
              setSuccess('')
            }}
            placeholder="Enter your name"
          />
        </div>

        <div className="field-group">
          <label htmlFor="message-text">Your message</label>
          <textarea
            id="message-text"
            name="text"
            rows={4}
            maxLength={2000}
            required
            value={text}
            onChange={(event) => {
              setText(event.target.value)
              setSubmitError('')
              setSuccess('')
            }}
            placeholder="Share something with the channel..."
          />
          <span className="character-count">
            {text.length} / 2000 characters
          </span>
        </div>

        {submitError && (
          <p className="form-feedback form-error" role="alert">
            {submitError}
          </p>
        )}

        {success && (
          <p className="form-feedback form-success" role="status">
            {success}
          </p>
        )}

        <button
          type="submit"
          className="primary-button"
          disabled={!canSubmit}
        >
          {submitting ? 'Posting...' : 'Post message'}
          <span aria-hidden="true">↗</span>
        </button>
      </form>
    </section>
  )
}

function App() {
  const [channelId, setChannelId] = useState('nasa')

  const {
    data,
    loading,
    error,
    refresh,
    postMessage,
  } = useForumMessages(channelId)

  const activeChannel =
    CHANNELS.find((channel) => channel.id === channelId) ??
    CHANNELS[0]

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Forum navigation">
        <div className="brand">
          <div className="brand-icon" aria-hidden="true">
            F
          </div>

          <div>
            <strong>ForumFlow</strong>
            <span>Community workspace</span>
          </div>
        </div>

        <div className="navigation-label">WORKSPACE</div>

        <nav className="channel-navigation" aria-label="Channels">
          {CHANNELS.map((channel) => (
            <button
              key={channel.id}
              type="button"
              className={
                channelId === channel.id
                  ? 'channel-button active'
                  : 'channel-button'
              }
              aria-current={
                channelId === channel.id ? 'page' : undefined
              }
              onClick={() => setChannelId(channel.id)}
            >
              <span className="channel-symbol" aria-hidden="true">
                {channel.symbol}
              </span>
              <span>{channel.name}</span>
              {channelId === channel.id && (
                <span className="active-indicator" aria-hidden="true" />
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <span className="connection-dot" aria-hidden="true" />
          <span>Local development workspace</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            Workspace <span aria-hidden="true">/</span>
            <strong>{activeChannel.name}</strong>
          </div>

          <span className="environment-tag">
            DEVELOPMENT
          </span>
        </header>

        <div className="content-container">
          <section className="channel-hero">
            <div className="hero-decoration" aria-hidden="true">
              {activeChannel.symbol}
            </div>

            <span className="hero-label">COMMUNITY CHANNEL</span>
            <h1>{activeChannel.name}</h1>
            <p>{activeChannel.description}</p>

            <div className="hero-meta">
              <span className="hero-meta-dot" aria-hidden="true" />
              <span>Channel ID: {channelId}</span>
            </div>
          </section>

          <section
            className="messages-section"
            aria-labelledby="messages-title"
            aria-busy={loading}
          >
            <div className="section-heading">
              <div>
                <span className="eyebrow">DISCUSSION BOARD</span>
                <h2 id="messages-title">Messages</h2>
              </div>

              <div className="section-actions">
                {!loading && !error && (
                  <span className="message-count">
                    {data.length} messages
                  </span>
                )}

                <button
                  type="button"
                  className="refresh-button"
                  onClick={refresh}
                  disabled={loading}
                  aria-label="Refresh channel messages"
                >
                  <span aria-hidden="true">↻</span>
                  Refresh
                </button>
              </div>
            </div>

            <MessageList
              data={data}
              loading={loading}
              error={error}
              onRetry={refresh}
            />
          </section>

          <MessageComposer
            key={channelId}
            channelId={channelId}
            onPostMessage={postMessage}
          />
        </div>

        <footer className="app-footer">
          <span>ForumFlow · Lab 4 — Exercise 1.7.1</span>
          <span>React + Express REST API</span>
        </footer>
      </main>
    </div>
  )
}

export default App
