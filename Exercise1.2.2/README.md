
# Responsive Master-Detail People Directory

## Project Overview

This project was developed for UIT Web Application Development 2026, Lab 4, Exercise 1.2.2.

It demonstrates a responsive master-detail interface using React, React Router v7, and CSS Grid.

Users can browse a list of people, select a person, and view the corresponding profile through a dynamic URL.

The application uses local demonstration data and does not require a backend service.

## Technologies

- React 19
- React Router v7
- Vite
- JavaScript and JSX
- CSS Grid
- Semantic HTML
- Git

## Features

### Master-Detail Navigation

The interface contains two main areas:

- Master: A navigation list of people.
- Detail: Information about the selected person.

React Router keeps the layout structure consistent while switching between detail routes.

### Dynamic Routing

The application supports:

- `/` — Redirects to the directory.
- `/people` — Displays the directory.
- `/people/:id` — Displays a selected person.
- Unknown routes — Display a page-not-found message.

The `useParams()` hook extracts the person ID from the URL.

The application uses `people.find()` to retrieve the corresponding record.

### Responsive Layout

CSS Grid is used to create a two-column desktop layout.

The desktop reference is:

`grid-template-columns: minmax(280px, 1fr) 2fr;`

On narrow screens, the layout switches to a single column.

The interface is designed to support a 375px viewport without horizontal overflow.

### Error Handling

If a person ID does not match any record, the application displays a clear not-found state.

Missing records are checked before accessing their properties to prevent runtime errors.

### Accessibility

The interface includes:

- Semantic HTML elements.
- Accessible navigation links.
- Visible keyboard focus.
- Active navigation styling.
- Keyboard-based navigation.
- Description lists using `dl`, `dt`, and `dd`.

## Project Structure

```text
Exercise1.2.2/
|-- public/
|-- src/
|   |-- data/
|   |   `-- people.js
|   |-- App.jsx
|   |-- main.jsx
|   |-- PeopleLayout.jsx
|   |-- PeopleLayout.css
|   |-- PersonDetail.jsx
|   `-- PersonDetail.css
|-- index.html
|-- package.json
|-- TASK_DECOMPOSITION.md
|-- Project_rules.md
|-- AI_FAILURE_AUDIT.md
`-- README.md
```

This structure lists the main project files. Additional Vite configuration and style files may also be present.

## Installation

Requirements:

- Node.js
- npm

Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Quality Checks

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Manual Verification

The manual verification checklist covers:

1. Navigation between different people.
2. Correct person details for valid IDs.
3. Not-found handling for invalid IDs.
4. Direct URL access and browser refresh.
5. Browser Back and Forward navigation.
6. Desktop and mobile layouts.
7. Keyboard navigation and visible focus.
8. Browser Console errors.
9. Preservation of previously implemented routing concepts.

Actual verification results must be recorded only after testing.

## Learning Outcomes

This exercise demonstrates:

- Nested routing with React Router.
- Dynamic URL parameters.
- Reusable layouts with Outlet.
- Active navigation with NavLink.
- Safe data lookup and error handling.
- Responsive CSS Grid layouts.
- Semantic HTML for structured information.
- Regression testing and Git-based development.

## Development Documentation

- `Project_rules.md` — Project development rules.
- `TASK_DECOMPOSITION.md` — Task planning and progress.
- `AI_FAILURE_AUDIT.md` — Verified AI-generated mistakes, if any.

## Scope

This exercise uses local demonstration data.

Backend APIs, database integration, authentication, and unrelated Lab 4 exercises are outside its scope.
