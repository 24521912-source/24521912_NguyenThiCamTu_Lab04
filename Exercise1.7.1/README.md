
# ForumFlow — Data Fetching & Express Hygiene

## 1. Project Overview

ForumFlow is a full-stack React and Express application developed for UIT Web Application Development 2026, Lab 4, Exercise 1.7.1.

The exercise focuses on asynchronous React data fetching, custom hooks, request cancellation, semantic HTML, CORS configuration, REST API design, and server-side input validation.

The application provides a channel-based discussion interface where users can view and post messages.

## 2. Technologies

### Frontend
- React
- Vite
- JavaScript
- CSS
- Fetch API
- AbortController

### Backend
- Node.js
- Express
- CORS middleware
- Node.js Crypto API

### Development Tools
- VS Code
- PowerShell
- npm
- Git
- Chrome DevTools

## 3. Project Structure

```text
Exercise1.7.1/
|-- public/
|-- server/
|   `-- index.js
|-- src/
|   |-- hooks/
|   |   `-- useForumMessages.js
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- AI_FAILURE_AUDIT.md
|-- Project_rules.md
|-- TASK_DECOMPOSITION.md
|-- README.md
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- eslint.config.js
`-- index.html
```

## 4. Installation

### Requirements

- A compatible Node.js version for the installed Vite release
- npm
- A modern web browser

### Install dependencies

```powershell
npm install
```

### Start the frontend

```powershell
npm run dev
```

Use the local URL displayed by Vite.

### Start the backend

Open a separate PowerShell terminal.

Set `CLIENT_ORIGIN` to the actual frontend origin.

For example, if Vite uses port 5173:

```powershell
$env:CLIENT_ORIGIN = "http://localhost:5173"
npm run server
```

The Express API listens on:

```text
http://localhost:3001
```

The frontend and backend must be running simultaneously for message fetching and posting.

## 5. API Contract

### GET Messages

```http
GET /api/channels/:channelId/messages
```

Retrieves messages belonging to the selected channel.

Success status:

```text
200 OK
```

Response:

```json
[
  {
    "id": "unique-message-id",
    "channelId": "nasa",
    "author": "Alice",
    "text": "Hello!",
    "createdAt": "2026-11-16T10:00:00.000Z"
  }
]
```

An empty channel returns an empty JSON array.

### POST Message

```http
POST /api/channels/:channelId/messages
Content-Type: application/json
```

Request body:

```json
{
  "author": "Alice",
  "text": "Hello!"
}
```

Success status:

```text
201 Created
```

The response contains the newly created message, including a generated UUID and timestamp.

### Error Responses

Invalid payload:

```text
400 Bad Request
```

Invalid JSON body:

```text
400 Bad Request
```

Oversized JSON body:

```text
413 Payload Too Large
```

Unknown endpoint:

```text
404 Not Found
```

Unexpected server failure:

```text
500 Internal Server Error
```

Error response format:

```json
{
  "error": "Descriptive error message"
}
```

## 6. Input Validation

The Express backend validates incoming POST requests.

Both `author` and `text` must:

- Exist in the request body.
- Be strings.
- Contain non-whitespace characters.
- Respect the allowed length limits.

Maximum lengths:

- Author: 100 characters.
- Message: 2000 characters.

Invalid requests return HTTP 400.

Valid messages are assigned stable IDs using `randomUUID()`.

## 7. Custom Hook — useForumMessages

The `useForumMessages` hook separates asynchronous data-fetching logic from UI components.

It exposes:

| Property | Responsibility |
|---|---|
| data | Current channel messages |
| loading | Request loading state |
| error | Request error information |
| refresh | Reload current channel messages |
| postMessage | Send a message through the API |

The hook uses:

- `useState` for state management.
- `useEffect` for fetching messages.
- `useCallback` for reusable callbacks.
- `fetch()` for HTTP requests.
- `AbortController` for cancellation.

### Request Cancellation

Each fetching effect creates a new `AbortController`.

The controller signal is passed to `fetch()`.

When the selected channel changes or the component unmounts, the cleanup function aborts the previous request.

The hook checks cancellation status before updating React state.

This prevents obsolete fetch results from overwriting current channel data.

Intentional request cancellation is not displayed as an ordinary user-facing error.

## 8. Channel Switching

The application contains three demonstration channels:

- nasa
- esports-tribunal
- notNasa

Selecting a channel triggers a request for its messages.

The application displays:

- Loading state during fetching.
- Empty state when no messages exist.
- Error state when fetching fails.
- Message list when fetching succeeds.

Users can refresh messages manually.

## 9. Semantic HTML and Accessibility

The interface uses semantic HTML for message presentation.

Each message is rendered using a stable message ID as its React key.

Message details are structured using:

- `article`
- `dl`
- `dt`
- `dd`
- `time`

The interface also includes:

- Accessible form labels.
- Semantic buttons.
- Keyboard navigation.
- Visible focus indicators.
- Loading and error status announcements.
- Responsive layouts.
- Reduced-motion support.

## 10. CORS Configuration

The backend uses Express CORS middleware.

The allowed frontend origin is provided through the `CLIENT_ORIGIN` environment variable.

CORS controls which browser origins can access API responses.

CORS does not provide user authentication or authorization.

## 11. Data Storage

Messages are stored in an in-memory JavaScript Map on the Express server.

Messages are grouped by channel ID.

No external database is required for this exercise.

Restarting the backend clears all stored messages.

The application does not claim to provide persistent storage.

## 12. Verification

The verification workflow covers:

### Backend
- GET endpoint and JSON response structure.
- POST requests with valid data.
- POST requests with invalid payloads.
- HTTP status codes.
- Channel data separation.
- CORS response headers.
- Unknown API routes.

### Frontend
- Loading state.
- Empty state.
- Error state.
- Channel switching.
- Message submission.
- Refresh behavior.
- Keyboard interaction.
- Responsive layout.

### Request Cancellation
- Chrome DevTools Network inspection.
- Slow 3G throttling.
- Rapid channel switching.
- Cancellation of obsolete GET requests.
- Protection against stale response updates.

### Quality Checks

```powershell
npm run lint
npm run build
git diff --check
```

The actual verification outcomes are recorded through task completion records and locally preserved evidence.

## 13. Known Limitations

- Messages are stored only in server memory.
- Data is lost when the backend restarts.
- The application has no user authentication.
- The frontend uses a local development API URL.
- Message creation requires an active backend connection.
- The exercise does not implement MongoDB or production deployment.

## 14. Task Workflow

The project follows six development tasks:

- T01: Repository Audit, Planning & Project Setup
- T02: Express REST API & Payload Validation
- T03: useForumMessages Hook & AbortController
- T04: Channel Switcher & Semantic Message UI
- T05: Cancellation Testing & Full-Stack Regression
- T06: Documentation, Evidence & Defense

Each completed file-changing task is tracked through Git commits.

The task decomposition contains the current task statuses.

AI-generated failures are documented separately only when supported by actual evidence.

## 15. Course Information

**Course:** UIT Web Application Development 2026

**Lab:** Lab 4

**Exercise:** 1.7.1 — Data Fetching & Express Hygiene

**Project:** ForumFlow

**Purpose:** Educational full-stack application demonstrating reliable asynchronous data fetching and Express API hygiene.
