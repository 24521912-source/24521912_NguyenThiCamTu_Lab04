# People Directory — Lab 4 Exercise 1.2

## Overview

This project demonstrates declarative routing and nested layout architecture using React, TypeScript, Vite, and React Router v7.

The application implements a responsive people directory with client-side navigation, dynamic profile routes, active navigation states, semantic profile information, and graceful handling of unknown person IDs.

The project uses local demonstration data. It does not require a backend or database.

## Course Scope

UIT Web Application Development 2026 — Lab 4

Covered requirements:

- Exercise 1.2 — Declarative Syntax Updates
- Exercise 1.2.1 — React Router v7 Layout Architecture
- Exercise 1.2.2 — Master–Detail Views with React Router and CSS Grid
- Related Sprint 1 router layout and detail route requirements

Exercise 1.3, Sprint 2, Sprint 3, backend development, and MongoDB are outside the project scope.

## Technology Stack

- React 19
- TypeScript
- Vite
- React Router v7
- CSS Grid and responsive CSS
- npm
- Git

## Getting Started

### Prerequisites

Install a Node.js version compatible with the project's Vite version and ensure npm is available.

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### Build the Application

```bash
npm run build
```

### Run Lint Checks

```bash
npm run lint
```

The commands above correspond to the scripts expected from the Vite React + TypeScript starter project. Confirm their availability in `package.json`.

## Application Structure

The main application is organized around the following components:

| File | Responsibility |
|---|---|
| `src/main.tsx` | React application entry point and router context |
| `src/App.tsx` | Declarative route definitions |
| `src/components/PeopleLayout.tsx` | Shared people directory layout and navigation |
| `src/components/PeopleIndex.tsx` | Default nested route content |
| `src/components/PersonDetail.tsx` | Dynamic profile lookup and detail presentation |
| `src/data/people.ts` | Local demonstration data |
| `src/App.css` | Component styling and responsive layout |
| `src/index.css` | Global application styles |

## Routing Architecture

The application uses React Router v7 in Declarative Mode.

| Route | Expected Behavior |
|---|---|
| `/` | Redirects to `/people` |
| `/people` | Displays the directory and index state |
| `/people/:id` | Displays the matching person's profile |
| `/people/:id` with an unknown ID | Displays a person-not-found state |
| Unmatched application paths | Display a general 404 page |

### Nested Layout

`PeopleLayout` contains the shared directory navigation and an `<Outlet />` for nested route content.

The shared layout remains mounted while the selected profile view changes.

### Active