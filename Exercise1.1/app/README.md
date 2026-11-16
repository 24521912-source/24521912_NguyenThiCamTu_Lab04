
# Lab 04 — Exercise 1.1

## Performance & Resiliency Architectural Upgrades

A React application demonstrating component-level code
splitting, accessible loading states, layout stability,
and lazy-loading error handling.

## Technologies

- React 19
- TypeScript
- Vite
- CSS

## Features

### Lazy Loading

The PersonDetail component is loaded dynamically using
React.lazy() and import().

The component is requested when the user selects
"View Details".

### Suspense Boundary

React Suspense provides a fallback while the lazy
component is loading.

### Dimension-Matched Skeleton

The loading skeleton follows the main structure of
the PersonDetail component, including the avatar,
profile information, and description.

The layout is designed to reduce unexpected
layout movement during loading.

### Accessibility

The loading interface uses meaningful ARIA semantics,
including aria-busy and a polite loading announcement.

The application also supports keyboard interaction,
responsive layouts, and reduced-motion preferences.

### Error Handling

An Error Boundary provides an error message and a
page reload option if the lazy component fails to load.

## Installation

Run the following commands in the app directory:

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL displayed by Vite.

## Production Build

```bash
npm run build
npm run preview
```

## Verification

The exercise includes manual verification of:

- Dynamic JavaScript chunk loading
- Suspense fallback behavior
- Loading under network throttling
- Layout stability and CLS inspection
- Accessibility semantics
- Keyboard navigation
- Responsive behavior at 375px
- Lazy chunk failure and recovery
- Build and lint checks
- Regression of existing functionality

Performance scores must be based on actual measurements.
No fixed CLS or Lighthouse result is assumed.

## Exercise Scope

This project implements Lab 04, Exercise 1.1 only.

Later exercises and sprints are excluded.
