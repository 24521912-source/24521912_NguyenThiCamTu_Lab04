
# Task Decomposition — Exercise 1.2.2

## Project Information

- Course: UIT Web Application Development 2026
- Lab: Lab 4
- Exercise: 1.2.2 — Refactoring for Master-Detail Views via React Router & CSS Grid
- Project: Responsive Master-Detail People Directory
- Tools: VS Code, PowerShell, npm, Git
- Framework: React with React Router v7
- Previous exercise: Exercise 1.2.1

## Project Objectives

Build a responsive master-detail interface that allows users to select a person from a list and view their details.

The implementation must reuse the existing React Router knowledge and components from Exercise 1.2.1 where appropriate.

### Core Requirements

- Use React Router v7.
- Support dynamic routes such as `/people/:id`.
- Use `useParams()` to extract the selected person ID.
- Use `people.find()` to retrieve the matching record.
- Use `NavLink` for master-list navigation.
- Use `Outlet` for nested detail content.
- Use CSS Grid for the desktop master-detail layout.
- Support a single-column layout on narrow screens.
- Use semantic HTML, including `dl`, `dt`, and `dd`.
- Handle unknown person IDs without crashing.
- Preserve existing Exercise 1.2.1 functionality.
- Verify accessibility and responsive behavior.

## Development Rules

1. Complete one task at a time.
2. Inspect existing files before changing code.
3. Preserve unrelated exercises and existing Git history.
4. Use actual repository paths.
5. Test changes before marking a task DONE.
6. Record genuine AI-caused errors in AI_FAILURE_AUDIT.md.
7. Commit each completed task with file changes.
8. Never claim a test passed without verification.
9. Do not upload project files to ChatGPT.
10. Follow Project_rules.md throughout development.

## Task Status Overview

| ID | Task | Status |
|---|---|---|
| T01 | Repository Audit & Task Decomposition | IN PROGRESS |
| T02 | People Data Contract & Route Integration | TODO |
| T03 | PeopleLayout & Responsive CSS Grid | TODO |
| T04 | PersonDetail & Not Found Handling | TODO |
| T05 | Regression, Accessibility & Responsive Verification | TODO |
| T06 | Final Documentation & Defense | TODO |

---

## T01 — Repository Audit & Task Decomposition

### Objective
Inspect the repository and establish project documentation before implementing features.

### Prerequisites
- Lab 4 repository exists.
- Exercise 1.2.1 has been implemented.
- Git is available.

### Files to Create or Modify
- `Exercise1.2.2/Project_rules.md`
- `Exercise1.2.2/TASK_DECOMPOSITION.md`
- `Exercise1.2.2/AI_FAILURE_AUDIT.md`

### Input / Output Contract
- Input: Existing repository structure and Exercise 1.2.1.
- Output: Verified project context and documentation for Exercise 1.2.2.

### Implementation Requirements
- Inspect the repository structure.
- Check Git status and recent commits.
- Identify existing React Router components.
- Identify existing scripts and dependencies.
- Create or update task documentation.
- Prepare an empty AI Failure Audit.
- Do not implement application features.

### Key Invariants
- Existing exercises remain unchanged.
- No unrelated files are staged.
- Existing task history is preserved.

### Acceptance Criteria
- [ ] Repository structure inspected.
- [ ] Exercise 1.2.1 integration reviewed.
- [ ] Project rules reviewed.
- [ ] Task decomposition completed.
- [ ] AI Failure Audit scaffold prepared.
- [ ] Documentation changes reviewed.
- [ ] Relevant changes committed.

### Verification Steps
- Check repository and current branch.
- Inspect documentation.
- Run `git diff --check`.
- Review staged files before committing.
- Confirm the commit using Git history.

### Status
DONE

### Suggested Git Commit Message
`docs(ex1.2.2): initialize project planning and audit structure`

---

## T02 — People Data Contract & Route Integration

### Objective
Establish a consistent people data model and integrate master-detail routes into the existing React Router setup.

### Prerequisites
- T01 completed.
- Existing router structure inspected.

### Files to Create or Modify
To be verified from the existing repository before implementation.

### Input / Output Contract
- Input: Existing routes and people data, if available.
- Output: Stable person IDs and working master-detail route declarations.

### Implementation Requirements
- Inspect existing person data and components.
- Reuse existing data where possible.
- Use stable, unique person IDs.
- Configure `/people/:id` consistently.
- Preserve existing routes.
- Avoid unnecessary dependencies.

### Key Invariants
- Route parameters match component expectations.
- Existing navigation remains functional.
- No unrelated route is removed.

### Acceptance Criteria
- [ ] People data contract is consistent.
- [ ] Stable IDs are used.
- [ ] Master-detail routes are configured.
- [ ] Existing routes are preserved.
- [ ] Applicable checks pass.
- [ ] Changes committed.

### Verification Steps
- Inspect route declarations.
- Verify dynamic route matching.
- Run configured checks.
- Review Git changes.

### Status
DONE

### Suggested Git Commit Message
`feat(ex1.2.2): integrate people data and detail routes`

---

## T03 — PeopleLayout & Responsive CSS Grid

### Objective
Implement the master navigation and responsive two-column layout.

### Prerequisites
- T02 completed.
- People data and routes available.

### Files to Create or Modify
To be verified before implementation.

### Input / Output Contract
- Input: People collection and nested routing.
- Output: Responsive master list with an Outlet for detail content.

### Implementation Requirements
- Create or update PeopleLayout.
- Render people using stable keys.
- Use NavLink for navigation.
- Provide visible active and focus states.
- Use Outlet for the detail region.
- Apply CSS Grid on desktop.
- Use `minmax(280px, 1fr) 2fr` where practical.
- Switch to one column on narrow screens.
- Avoid horizontal overflow.

### Key Invariants
- Master navigation remains available.
- Detail content renders inside the shared layout.
- Keyboard navigation remains usable.

### Acceptance Criteria
- [ ] People list displays correctly.
- [ ] NavLink targets are correct.
- [ ] Active person is distinguishable.
- [ ] Outlet renders child content.
- [ ] Desktop uses two columns.
- [ ] Layout works at 375px.
- [ ] No horizontal overflow.
- [ ] Changes committed.

### Verification Steps
- Test desktop layout.
- Test 375px viewport.
- Check active and focus states.
- Check browser Console.
- Run configured checks.

### Status
DONE

### Suggested Git Commit Message
`feat(ex1.2.2): build responsive people master layout`

---

## T04 — PersonDetail & Not Found Handling

### Objective
Render the selected person's details and handle invalid IDs safely.

### Prerequisites
- T03 completed.
- Dynamic route and people data available.

### Files to Create or Modify
To be verified before implementation.

### Input / Output Contract
- Input: Person ID extracted from the route.
- Output: Matching person details or an explicit not-found state.

### Implementation Requirements
- Use useParams to obtain the ID.
- Find the matching record using people.find.
- Guard against missing records.
- Display person details.
- Use dl, dt, and dd.
- Handle unknown or malformed IDs.
- Avoid runtime exceptions.

### Key Invariants
- Missing records are never dereferenced.
- Valid IDs map to the correct person.
- Invalid IDs display meaningful feedback.

### Acceptance Criteria
- [ ] useParams reads the correct ID.
- [ ] Valid person details render correctly.
- [ ] Semantic description list is used.
- [ ] Unknown IDs display Not Found.
- [ ] Invalid IDs do not crash the application.
- [ ] Direct detail URL works.
- [ ] Changes committed.

### Verification Steps
- Open valid person URLs.
- Open unknown person URLs.
- Refresh the detail page.
- Inspect browser Console.
- Run configured checks.

### Status
DONE

### Suggested Git Commit Message
`feat(ex1.2.2): implement person details and not-found state`

---

## T05 — Regression, Accessibility & Responsive Verification

### Objective
Verify application behavior, accessibility, responsiveness, and compatibility with Exercise 1.2.1.

### Prerequisites
- T04 completed.
- Master-detail implementation available.

### Files to Create or Modify
Only verified files requiring corrections or task-status updates.

### Input / Output Contract
- Input: Completed master-detail interface.
- Output: Verified behavior and documented actual results.

### Implementation Requirements
- Test navigation between people.
- Test browser Back and Forward.
- Test direct URL access and refresh.
- Test unknown person IDs.
- Test keyboard navigation.
- Check visible focus.
- Check desktop and 375px layouts.
- Inspect browser Console.
- Check Exercise 1.2.1 routes.
- Fix verified problems without unnecessary changes.

### Key Invariants
- Existing application routes remain functional.
- No unsupported claims about test results.
- Accessibility is evaluated using actual observations.

### Acceptance Criteria
- [ ] Navigation tested.
- [ ] Back/Forward tested.
- [ ] Direct URL and refresh tested.
- [ ] Invalid IDs tested.
- [ ] Keyboard navigation tested.
- [ ] Focus visibility checked.
- [ ] Responsive behavior checked.
- [ ] No page-wide horizontal overflow.
- [ ] Browser Console checked.
- [ ] Exercise 1.2.1 regression checked.
- [ ] Actual changes committed, if any.

### Verification Steps
- Perform manual browser tests.
- Use Chrome DevTools.
- Run available npm scripts.
- Record actual PASS/FAIL outcomes.
- Review Git changes.

### Status
DONE 

### Suggested Git Commit Message
`test(ex1.2.2): verify navigation and responsive behavior`

---

## T06 — Final Documentation & Defense

### Objective
Finalize documentation, review submission readiness, and prepare for oral defense.

### Prerequisites
- T05 completed.
- Relevant checks verified.

### Files to Create or Modify
- `Exercise1.2.2/TASK_DECOMPOSITION.md`
- `Exercise1.2.2/AI_FAILURE_AUDIT.md` if genuine AI failures occurred.
- Existing README or other relevant documentation, if needed.

### Input / Output Contract
- Input: Verified implementation and test results.
- Output: Final documentation and submission checklist.

### Implementation Requirements
- Review README and existing documentation.
- Review all task statuses.
- Review genuine AI Failure Audit entries.
- Check Git history.
- Preserve relevant screenshots locally.
- Review requirements from the exercise.
- Prepare oral-defense explanations.

### Key Invariants
- Documentation reflects actual implementation.
- No fabricated evidence or commit information.
- No unrelated exercise is modified.

### Acceptance Criteria
- [ ] Final documentation reviewed.
- [ ] Task statuses updated.
- [ ] AI Failure Audit reviewed.
- [ ] Git history inspected.
- [ ] Submission checklist reviewed.
- [ ] Oral-defense questions practiced.
- [ ] Final changes committed, if any.

### Verification Steps
- Review project documentation.
- Inspect Git status.
- Run applicable final checks.
- Confirm actual commits.
- Check submission requirements.

### Status
DONE

### Suggested Git Commit Message
`docs(ex1.2.2): finalize documentation and defense checklist`

---

## Completion Policy

A task is DONE only after its acceptance criteria have been verified.

Each task with file changes must have its own Git commit.

Tasks without file changes do not require an empty commit.

Never fabricate test outcomes, screenshots, or Git commit hashes.
