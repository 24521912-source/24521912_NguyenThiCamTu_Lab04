
# React Router v7 — Declarative Routing & Nested Layout

## 1. Project Overview

This project was developed for UIT Web Application Development 2026, Lab 4, Exercise 1.2.1.

The application demonstrates modern declarative routing with React Router v7, including nested routes, reusable layouts, index routes, client-side navigation, and active navigation states.

The project uses React, Vite, and React Router.

## 2. Objectives

The main objectives are to:

- Use the modern React Router v7 declarative API.
- Replace obsolete React Router v5 routing patterns.
- Configure routes with `Routes`, `Route`, and `element`.
- Implement parent and child routes.
- Render nested content using `Outlet`.
- Reuse a shared application layout.
- Navigate between pages using `NavLink`.
- Indicate the active route using `isActive`.
- Support keyboard navigation and responsive layouts.

## 3. Technology Stack

- React
- React Router v7
- Vite
- JavaScript (JSX)
- CSS
- npm
- Git

## 4. Project Structure

The main application files are organized as follows:

    src/
    ├── components/
    │   └── MainLayout.jsx
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── AboutPage.jsx
    │   ├── ContactPage.jsx
    │   └── NotFoundPage.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx

The repository also contains project configuration and documentation files.

## 5. Installation

### Prerequisites

Install Node.js and npm before running the application.

### Install Dependencies

Run the following command from the Exercise1.2.1 directory:

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open the local URL displayed by Vite.

### Production Build

```bash
npm run build
```

### Linting

If the lint script is configured:

```bash
npm run lint
```

## 6. Route Configuration

The application uses declarative routing.

| Path | Component | Purpose |
|------|-----------|---------|
| / | HomePage | Default/index page |
| /about | AboutPage | Information page |
| /contact | ContactPage | Additional child route |
| Other paths | NotFoundPage | Unknown route fallback |

All pages are nested under a shared layout.

## 7. Nested Layout Architecture

The parent route renders `MainLayout`.

The shared layout includes:

- Application header
- Sidebar navigation
- Main content area
- Application footer

The `Outlet` component determines where matched child routes are rendered.

This architecture allows multiple pages to share the same layout without duplicating common UI elements.

## 8. Active Navigation

The sidebar uses `NavLink` instead of ordinary anchor elements.

The `isActive` callback determines which navigation link matches the current route.

Active links receive dedicated CSS styling.

React Router also provides `aria-current="page"` for active NavLink elements.

The Home navigation link uses the `end` property to ensure appropriate exact route matching.

## 9. Accessibility and Responsive Design

The application includes:

- Semantic header, nav, main, and footer elements.
- Descriptive navigation links.
- Visible keyboard focus styles.
- Keyboard-accessible navigation.
- Responsive layout rules.
- Reduced-motion support for navigation transitions.
- Visual feedback for active navigation.

These features support usability and accessibility but do not independently establish full WCAG conformance.

## 10. Verification Checklist

The following checks should be completed locally:

- Home, About, and Contact routes display correctly.
- Nested routes render within the shared layout.
- The index route loads correctly.
- Unknown routes display the not-found page.
- NavLink active states match the current URL.
- Keyboard navigation works.
- Browser Back and Forward work.
- Refreshing a nested URL works.
- The layout remains usable at a 375px viewport.
- Browser Console is checked for runtime errors.
- Available build and lint scripts are executed.

Actual verification results must be recorded or confirmed by the developer.

## 11. Development Workflow

The implementation follows a task-based development process:

- T01: Repository Audit & Task Decomposition
- T02: React Router v7 Setup & Declarative Migration
- T03: Nested Routes & Shared Layout
- T04: NavLink & Active Navigation
- T05: Final Regression, Documentation & Defense

Each completed task is reviewed and committed separately.

`TASK_DECOMPOSITION.md` tracks progress.

`AI_FAILURE_AUDIT.md` is reserved for verified incidents involving incorrect AI-generated code or guidance.

## 12. Scope

This implementation covers Lab 4 Exercise 1.2.1.

Dynamic person routes, `useParams`, person-detail lookup, and the responsive master-detail directory belong to Exercise 1.2.2 and are outside the scope of this project.

## 13. Conclusion

This project illustrates how modern declarative routing can organize a React application around reusable layouts and nested child routes.

The implementation provides a foundation for extending the application with additional routes while preserving shared navigation and layout structures.
