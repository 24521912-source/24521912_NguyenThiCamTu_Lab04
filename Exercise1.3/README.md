# Lab 4 — Exercise 1.3: Legacy Validation Anti-Patterns

## 1. Overview

This exercise investigates validation anti-patterns caused by chained `useEffect` hooks across React components.

The initial implementation used five effects to synchronize input values, field validity, form validity, and error messages between `InputField` and `SimpleForm`.

The refactored implementation replaces effect-driven validation with synchronous derived validation.

## 2. Learning Objectives

- Understand cascading re-renders caused by redundant state synchronization.
- Identify potential stale state and infinite loop risks.
- Distinguish React state from derived values.
- Implement synchronous validation using a pure function.
- Improve input accessibility with React `useId` and ARIA attributes.
- Verify application behavior using ESLint, browser DevTools, and React DevTools.

## 3. Technology Stack

- React
- Vite
- JavaScript (JSX)
- CSS
- ESLint
- Git

## 4. Project Structure

```text
src/
├── components/
│   ├── InputField.jsx
│   └── SimpleForm.jsx
├── utils/
│   └── validation.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 5. Running the Application

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run static analysis:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## 6. Legacy Validation Architecture

The original implementation demonstrated five chained effects:

1. Synchronizing child input values with parent state.
2. Validating the parent email value.
3. Calculating overall form validity.
4. Storing validation errors in separate state.
5. Synchronizing parent errors back to the child.

This architecture introduced redundant state and unnecessary synchronization steps.

During baseline analysis, ESLint reported four `react-hooks/set-state-in-effect` errors.

These findings identified problematic state updates inside effects. They did not independently establish that a runtime infinite loop or race condition occurred.

## 7. Refactored Architecture

The updated implementation uses `SimpleForm` as the single source of truth for the email value.

The pure `validateForm(values)` function calculates field errors directly from the current input values.

Form validity is derived from the validation result rather than stored in a separate state variable.

The `InputField` component receives its current value, error, and update callback through props.

No validation-specific `useEffect` chain is required.

## 8. Accessibility

The implementation uses:

- `useId` to generate stable element identifiers.
- `htmlFor` to connect labels with inputs.
- `aria-invalid` to expose invalid input state.
- `aria-describedby` to associate validation messages with inputs.
- `role="alert"` for error notification semantics.
- Visible focus indicators and invalid input styling.

Context was reviewed but not introduced because the current form has simple parent-child state ownership.

## 9. Verification

The final verification covers:

- Empty and invalid email values.
- Valid email input and error clearing.
- Form validity and Submit button state.
- Browser Console warnings and runtime errors.
- Validation effect removal.
- Keyboard accessibility.
- Responsive layout at a 375px viewport.
- ESLint and production build.
- React DevTools Profiler, when available.

Verification results must be recorded based on actual execution, not assumed from the implementation.

## 10. AI Failure Audit

The `AI_FAILURE_AUDIT.md` document records observed issues and their verified causes.

The initial legacy baseline produced four React Hooks ESLint errors. These were preserved for analysis and addressed through the synchronous validation refactor.

## 11. Scope

This exercise focuses on diagnosing and correcting legacy validation anti-patterns.

The full Sprint 2 Context-Driven Multi-Field Form Engine, including `FormContext` and `ShowData`, is outside the implemented scope.

## 12. Conclusion

Synchronous derived validation simplifies state management by removing redundant effect-driven updates.

The resulting architecture makes validation behavior easier to understand, maintain, and verify while preserving the original form functionality.
