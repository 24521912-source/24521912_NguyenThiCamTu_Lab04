
# Task Decomposition — Lab 04, Exercise 1.1

## Project Information

- Course: UIT Web Application Development 2026
- Exercise: 1.1 — Performance & Resiliency Architectural Upgrades
- Environment: Windows, VS Code, PowerShell, npm, Git
- Framework: React 19
- Build tool: Vite, if confirmed by repository inspection
- Language: TypeScript, if compatible with the existing project
- Repository root: LAB4
- Exercise directory: Exercise1.1

## Scope

This exercise focuses on:

1. Lazy-loading PersonDetail with React.lazy and dynamic import.
2. Rendering the lazy component inside a Suspense boundary.
3. Providing a dimension-matched skeleton loading fallback.
4. Applying meaningful aria-busy and aria-live semantics.
5. Verifying loading behavior, layout stability, accessibility and regression.

Exercise 1.2 and all subsequent exercises are excluded.

## Working Rules

- Complete one task at a time.
- Verify the actual repository before modifying source code.
- Do not overwrite unrelated Lab 4 exercises.
- Do not install unnecessary dependencies.
- Use only verified file paths for implementation.
- Run relevant checks before committing.
- Update task status after verification.
- Commit each completed task that changes project files.
- Record actual AI-generated failures independently.
- Do not invent test results, performance scores or commit hashes.

## Task Status

| ID | Task | Status |
|---|---|---|
| T01 | Repository Audit & Project Documentation | IN PROGRESS |
| T02 | PersonDetail Lazy Loading & Code Splitting | TODO |
| T03 | Suspense Skeleton & Accessible Loading | TODO |
| T04 | Performance, Resilience & Regression Verification | TODO |
| T05 | Final Documentation & Defense Preparation | TODO |

---

## T01 — Repository Audit & Project Documentation

### Objective

Inspect the existing repository, establish the exercise
scope and create the initial project documentation.

### Prerequisites

- VS Code and PowerShell are available.
- The LAB4 directory can be opened.
- Git commands can be executed.

### Planned Files

- Exercise1.1/TASK_DECOMPOSITION.md
- Exercise1.1/Project_rules.md
- Exercise1.1/AI_FAILURE_AUDIT.md

### Acceptance Criteria

- Repository location has been identified.
- Git status and history have been inspected.
- The exercise directory has been inspected.
- React/Vite configuration has been checked or its absence recorded.
- TASK_DECOMPOSITION.md exists.
- Project rules have been reviewed.
- An empty AI Failure Audit template exists.
- No unrelated exercise has been modified.
- All available baseline checks have been recorded.
- Relevant changes are committed successfully.

### Verification

- Check the exercise directory contents.
- Check Git status.
- Review documentation for missing sections.
- Check Markdown files for unresolved placeholders.
- Check Git diff before staging.
- Confirm the actual Git commit.

### Proposed Commit

docs(ex1.1): establish project rules and task plan

### Actual Commit

Not recorded.

---

## T02 — PersonDetail Lazy Loading & Code Splitting

### Objective

Integrate PersonDetail as a lazily imported React component.

### Prerequisites

- T01 is completed and committed.
- The application structure is confirmed.
- The component export and props contract is defined.

### Planned Files

To be confirmed after repository inspection.

### Contract and Invariants

- The lazy import must resolve to a compatible React component.
- Import and export paths must be correct.
- Existing application behavior must remain functional.
- No unnecessary routing dependency may be introduced.
- Lazy loading must not be confused with API data fetching.

### Acceptance Criteria

- PersonDetail is loaded with React.lazy.
- A valid dynamic import is used.
- The component can render within the application.
- Production build output is inspected for code splitting.
- No unrelated behavior is broken.

### Verification

- Inspect the actual import/export contract.
- Run available project checks.
- Inspect relevant build output.
- Check browser Console for errors.

### Proposed Commit

feat(ex1.1): add lazy loaded person detail

### Status

DONE

---

## T03 — Suspense Skeleton & Accessible Loading

### Objective

Provide an accessible loading state while the lazy component loads.

### Prerequisites

- T02 is completed and committed.
- The actual PersonDetail layout is known.

### Planned Files

To be confirmed after T02.

### Contract and Invariants

- The lazy component must be wrapped in Suspense.
- The skeleton should reserve approximately the same
  space as the final detail layout.
- Loading announcements must be meaningful.
- ARIA attributes must reflect the loading state.
- Artificial production delays must not be introduced.

### Acceptance Criteria

- Suspense renders the skeleton during loading.
- The skeleton resolves to PersonDetail.
- Loading state uses appropriate accessibility semantics.
- The interface remains usable at narrow viewport widths.
- Reduced-motion preferences are respected.

### Verification

- Use browser Network throttling.
- Inspect the skeleton's visible dimensions.
- Check loading text and ARIA attributes.
- Check keyboard behavior and 375px layout.
- Run available project checks.

### Proposed Commit

feat(ex1.1): add accessible suspense skeleton

### Status
DONE

---

## T04 — Performance, Resilience & Regression Verification

### Objective

Verify loading behavior, layout stability, accessibility
and application reliability.

### Prerequisites

- T03 is completed and committed.
- The application runs successfully.

### Planned Files

To be confirmed according to actual verification needs.

### Acceptance Criteria

- Lazy chunk behavior has been inspected.
- Loading fallback behavior has been verified.
- Layout shifts have been inspected or measured.
- Actual CLS observations are recorded when available.
- Browser Console and Network checks are completed.
- Import failure behavior is reviewed.
- Keyboard and responsive regression checks are completed.
- Relevant build, lint and test scripts are executed if available.
- No fabricated verification results are documented.

### Verification

- Chrome DevTools Network
- Chrome DevTools Performance
- Browser Console
- Responsive viewport at 375px
- Keyboard accessibility checks
- Available npm scripts

### Proposed Commit

test(ex1.1): verify lazy loading and layout stability

### Status

TODO

---

## T05 — Final Documentation & Defense Preparation

### Objective

Review the exercise deliverables and prepare a short
technical defense.

### Prerequisites

- T04 is completed and committed.
- Verification evidence has been collected locally.

### Planned Files

To be confirmed after implementation.

### Acceptance Criteria

- Exercise requirements are reviewed against the implementation.
- Documentation reflects actual project behavior.
- Git history contains verified task commits.
- AI Failure Audit contains only verified incidents.
- Evidence is organized locally.
- A short defense explanation is prepared.
- No unrelated exercise is modified.

### Defense Topics

1. What is code splitting?
2. Why use React.lazy?
3. What does Suspense do?
4. Why does skeleton geometry matter?
5. What is Cumulative Layout Shift?
6. How do aria-busy and aria-live work?
7. How was lazy loading verified?
8. What are the limitations of Suspense?

### Proposed Commit

docs(ex1.1): finalize documentation and defense

### Status

TODO

---

## Completion Policy

A task is complete only when:

1. Its acceptance criteria have been verified.
2. The student confirms the actual results.
3. TASK_DECOMPOSITION.md is updated.
4. Relevant Git changes are committed successfully.

Do not advance automatically to the next task.
