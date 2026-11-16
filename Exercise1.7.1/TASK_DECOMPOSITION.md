
# Task Decomposition — Lab 4, Exercise 1.7.1

## Project Overview

**Course:** UIT Web Application Development 2026  
**Exercise:** 1.7.1 — Data Fetching & Express Hygiene  
**Technology:** React, Vite, JavaScript, Express, Node.js  
**Environment:** Windows, VS Code, PowerShell, npm, Git

### Project Status

- Project rules: Available
- Task decomposition: In progress
- React/Vite setup: Not started
- Express backend: Not started
- Application source code: Not started
- AI Failure Audit: Not started

### API Contract (Planned)

The frontend and backend will use the same API endpoints.

**GET /api/channels/:channelId/messages**

- Purpose: Retrieve messages for a specific channel.
- Success status: 200 OK
- Response: JSON array of message objects.
- Empty channel: Return an empty array.

**POST /api/channels/:channelId/messages**

- Purpose: Create a message in a specific channel.
- Request body: `author` and `text`.
- Success status: 201 Created
- Invalid payload: 400 Bad Request
- Response: Newly created message object.

**Message structure:**

```json
{
  "id": "unique-message-id",
  "channelId": "nasa",
  "author": "Alice",
  "text": "Hello!",
  "createdAt": "ISO-8601 timestamp"
}
```

**Error structure:**

```json
{
  "error": "Descriptive error message"
}
```

The exact API contract will be confirmed before backend implementation.

---

## T01 — Repository Audit, Planning & Project Setup

**Objective:** Inspect the repository, establish the development environment, and prepare project documentation.

**Prerequisites:**
- Node.js and npm available.
- Existing Git repository identified.
- Project rules available.

**Files to Create or Modify:**
- TASK_DECOMPOSITION.md
- Project_rules.md (only if necessary)
- AI_FAILURE_AUDIT.md
- package.json and Vite configuration files during setup

**Implementation Requirements:**
- Preserve existing Lab 4 exercises.
- Define the API contract.
- Prepare task decomposition.
- Initialize React with Vite.
- Verify npm scripts.
- Prepare the AI Failure Audit outline.

**Acceptance Criteria:**
- Task decomposition is complete.
- React/Vite project starts successfully.
- Existing Git history remains intact.
- No unrelated project files are modified.

**Verification Steps:**
- Check Node.js and npm versions.
- Check npm scripts.
- Run the development server.
- Run available build/lint scripts.
- Check Git status.

**Status:** DONE

**Suggested Commit:**
`chore(ex1.7.1): initialize project and planning documents`

---

## T02 — Express REST API & Payload Validation

**Objective:** Implement the backend API for retrieving and creating messages.

**Prerequisites:** T01 completed.

**Files to Create or Modify:**
- Backend entry point (path to be confirmed)
- Backend package configuration
- TASK_DECOMPOSITION.md

**API Contract:**
- GET /api/channels/:channelId/messages
- POST /api/channels/:channelId/messages
- JSON request/response bodies

**Implementation Requirements:**
- Install and configure Express.
- Enable express.json().
- Configure CORS for the actual frontend origin.
- Validate required POST fields.
- Generate stable message IDs.
- Handle errors and return correct HTTP status codes.
- Do not add MongoDB unless explicitly required.

**Acceptance Criteria:**
- GET returns the expected message structure.
- POST accepts valid messages.
- Invalid payloads return HTTP 400.
- Server remains stable after invalid requests.
- CORS works for the configured frontend.

**Verification Steps:**
- Test GET requests.
- Test valid POST requests.
- Test missing and invalid fields.
- Inspect server logs.

**Status:** TODO

**Suggested Commit:**
`feat(ex1.7.1): implement Express messages API`

---

## T03 — useForumMessages Hook & AbortController

**Objective:** Implement a reusable custom hook for asynchronous message fetching.

**Prerequisites:** T02 completed.

**Files to Create or Modify:**
- src/hooks/useForumMessages.js
- Relevant frontend modules
- TASK_DECOMPOSITION.md

**API Contract:**
- GET /api/channels/:channelId/messages
- Hook exposes data, loading, error, and refresh behavior.

**Implementation Requirements:**
- Use useState and useEffect.
- Fetch messages asynchronously.
- Handle HTTP failures.
- Create AbortController within useEffect.
- Pass signal to fetch.
- Abort requests during cleanup.
- Prevent stale responses.
- Handle deliberate AbortError safely.

**Acceptance Criteria:**
- Messages load correctly.
- Loading and error states update correctly.
- Old requests are cancelled.
- No stale response overwrites current data.
- No unhandled promise rejections.

**Verification Steps:**
- Test normal fetching.
- Test failed HTTP responses.
- Test channel changes.
- Test component unmount behavior.

**Status:** TODO

**Suggested Commit:**
`feat(ex1.7.1): implement abortable messages hook`

---

## T04 — Channel Switcher & Semantic Message Rendering

**Objective:** Create an accessible interface for switching channels and displaying messages.

**Prerequisites:** T03 completed.

**Files to Create or Modify:**
- Frontend components (paths to be confirmed)
- Relevant stylesheets
- TASK_DECOMPOSITION.md

**API Contract:**
- Use the existing useForumMessages hook.
- Display messages using the agreed message structure.

**Implementation Requirements:**
- Implement channel switching.
- Render messages with stable IDs.
- Use semantic dl, dt, and dd elements.
- Display loading, empty, and error states.
- Support keyboard navigation.
- Avoid array indexes as keys.

**Acceptance Criteria:**
- Channel switching works.
- Messages update for the selected channel.
- Semantic HTML is correct.
- Keyboard navigation works.
- UI states are understandable.

**Verification Steps:**
- Switch between available channels.
- Check message rendering.
- Test empty channels.
- Test keyboard navigation.
- Inspect browser Console.

**Status:** TODO

**Suggested Commit:**
`feat(ex1.7.1): add accessible channel messages UI`

---

## T05 — Cancellation Testing & Full-Stack Regression

**Objective:** Verify request cancellation and full-stack reliability.

**Prerequisites:** T04 completed.

**Files to Create or Modify:**
- TASK_DECOMPOSITION.md
- Relevant source files only if fixes are required
- AI_FAILURE_AUDIT.md when a real AI failure is verified

**API Contract:**
- Verify the agreed GET and POST endpoints.

**Implementation Requirements:**
- Test requests using Chrome DevTools.
- Enable Slow 3G throttling.
- Switch channels rapidly.
- Verify obsolete requests are aborted.
- Verify stale responses do not overwrite new data.
- Test valid and invalid POST payloads.
- Check HTTP errors, network failures, and recovery.

**Acceptance Criteria:**
- Request cancellation works.
- No stale UI updates occur.
- API validation behaves correctly.
- No unexpected Console errors remain.
- All required regression tests pass.

**Verification Steps:**
- Inspect Chrome Network requests.
- Test Slow 3G.
- Review Console output.
- Review backend logs.
- Save genuine evidence locally.

**Status:** TODO

**Suggested Commit:**
`test(ex1.7.1): verify cancellation and API regression`

---

## T06 — Documentation, Evidence & Defense

**Objective:** Finalize documentation and prepare for submission and oral defense.

**Prerequisites:** T05 completed.

**Files to Create or Modify:**
- README.md
- TASK_DECOMPOSITION.md
- AI_FAILURE_AUDIT.md (only for genuine recorded incidents)

**Implementation Requirements:**
- Document project setup and execution.
- Document API endpoints and message structure.
- Explain AbortController cleanup.
- Explain CORS and payload validation.
- Review verification evidence.
- Review Git history.
- Prepare oral defense questions.

**Acceptance Criteria:**
- README accurately documents the project.
- All task statuses reflect actual completion.
- AI Failure Audit contains only real incidents.
- Required evidence is saved locally.
- Git history reflects completed work.

**Verification Steps:**
- Run available final checks.
- Review documentation.
- Check Git status.
- Review commit history.
- Practice oral defense.

**Status:** TODO

**Suggested Commit:**
`docs(ex1.7.1): finalize documentation and defense`

---

## Completion Rules

1. Complete one task at a time.
2. Never claim a test passed without running it.
3. Update the current task status only after verification.
4. Record genuine AI failures in AI_FAILURE_AUDIT.md.
5. Stage only relevant files.
6. Commit each completed file-changing task.
7. Preserve previous Lab 4 exercises.
8. Do not advance without task completion confirmation.
