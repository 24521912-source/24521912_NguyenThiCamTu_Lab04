
# Task Decomposition — Lab 4 Exercise 1.2.1

## Project Overview

**Course:** UIT Web Application Development 2026  
**Exercise:** 1.2.1 — Declarative Syntax Updates & React Router v7 Layout Architecture  
**Environment:** Windows, VS Code, PowerShell, npm, Git  
**Scope:** React Router v7, declarative routing, nested routes, shared layouts, Outlet, NavLink, and active navigation.

## Workflow Rules

- Complete tasks sequentially.
- Do not implement features before completing the initial documentation task.
- Verify changes before marking a task DONE.
- Use only npm scripts available in the project.
- Commit changes after each completed task.
- Keep AI Failure Audit entries based on actual incidents.
- Preserve unrelated exercises and existing functionality.
- Do not fabricate test results or Git commit hashes.

## Status Definitions

- TODO: Not started.
- IN PROGRESS: Currently being implemented or verified.
- BLOCKED: Cannot proceed until an identified issue is resolved.
- DONE: Implementation, verification, and Git commit completed.

---

## T01 — Repository Audit & Task Decomposition

**Objective:** Establish a verified project baseline and required documentation.

**Prerequisites:** Access to the existing repository, VS Code, PowerShell, npm, and Git.

**Files to create or modify:**
- TASK_DECOMPOSITION.md
- PROJECT_RULES.md (create or update only when appropriate)
- AI_FAILURE_AUDIT.md (create if missing)

**Implementation Requirements:**
- Inspect repository structure and Git status.
- Identify the existing application and dependencies.
- Review existing React Router configuration where applicable.
- Create this task decomposition.
- Establish project rules and an empty AI Failure Audit structure.
- Preserve existing files and unrelated work.

**Acceptance Criteria:**
- Repository structure has been inspected.
- Relevant application directory has been identified.
- Project documentation is available.
- No application behavior has been changed.
- Documentation changes are committed.

**Verification Steps:**
- Review documentation contents.
- Run `git diff --check`.
- Review staged changes.
- Verify the Git commit.

**Status:** DONE

**Suggested Git Commit Message:**
`docs(ex1.2.1): establish project rules and task plan`

---

## T02 — React Router v7 Setup & Declarative Migration

**Objective:** Configure or verify React Router v7 declarative routing and replace outdated routing syntax where necessary.

**Prerequisites:** T01 DONE.

**Files to create or modify:**
- Existing application entry point (verify path).
- Existing routing component (verify path).
- package.json and lockfile only if dependency changes are necessary.
- TASK_DECOMPOSITION.md.

**Implementation Requirements:**
- Verify the installed React Router version.
- Use a compatible router provider.
- Use Routes and Route.
- Use the element prop for route rendering.
- Remove incompatible legacy patterns when present.
- Avoid duplicate router wrappers.
- Preserve existing application functionality.

**Acceptance Criteria:**
- The application renders through React Router v7.
- Declarative routes resolve correctly.
- No incompatible v5 routing syntax remains in migrated code.
- No routing-related runtime errors are observed.

**Verification Steps:**
- Run available project checks.
- Open the application in a browser.
- Check direct route navigation.
- Check browser Console.
- Verify refresh behavior.

**Status:** DONE

**Suggested Git Commit Message:**
`feat(ex1.2.1): configure declarative routing`

---

## T03 — Nested Routes & Shared Layout

**Objective:** Implement parent-child route relationships with a reusable layout.

**Prerequisites:** T02 DONE.

**Files to create or modify:**
- Shared layout component (verify or choose path).
- Route configuration component (verify path).
- Child page components (verify or choose paths).
- TASK_DECOMPOSITION.md.

**Implementation Requirements:**
- Define a parent route.
- Define appropriate child routes.
- Render child content using Outlet.
- Provide an index/default child route.
- Preserve the shared layout during navigation.
- Avoid unnecessary component duplication.

**Acceptance Criteria:**
- Parent and child routes render correctly.
- Outlet renders the matched child component.
- Shared layout remains visible during child navigation.
- Direct navigation and refresh work.

**Verification Steps:**
- Navigate between child routes.
- Check default/index rendering.
- Test direct URLs and refresh.
- Test browser back/forward.
- Check Console for errors.

**Status:** DONE

**Suggested Git Commit Message:**
`feat(ex1.2.1): implement nested routes and shared layout`

---

## T04 — NavLink & Active Navigation

**Objective:** Provide accessible navigation with clear active-route feedback.

**Prerequisites:** T03 DONE.

**Files to create or modify:**
- Shared navigation component or layout (verify path).
- Relevant stylesheet (verify path).
- TASK_DECOMPOSITION.md.

**Implementation Requirements:**
- Use NavLink for route navigation.
- Use the isActive callback to assign active classes.
- Provide a visually distinguishable active state.
- Support keyboard navigation.
- Provide visible keyboard focus.
- Ensure basic usability at a 375px viewport.

**Acceptance Criteria:**
- Navigation links resolve correctly.
- The matching link is clearly active.
- Keyboard navigation works.
- Focus indicators are visible.
- The navigation does not cause horizontal overflow at 375px.

**Verification Steps:**
- Test mouse navigation.
- Test Tab, Shift+Tab, and Enter.
- Verify active states for each route.
- Check browser history.
- Check layout at 375px.
- Check Console for errors.

**Status:** DONE

**Suggested Git Commit Message:**
`feat(ex1.2.1): add active navigation with NavLink`

---

## T05 — Final Regression, Documentation & Defense

**Objective:** Verify Exercise 1.2.1 and prepare a maintainable, defensible submission.

**Prerequisites:** T01–T04 DONE.

**Files to create or modify:**
- README.md (create or update as appropriate).
- TASK_DECOMPOSITION.md.
- AI_FAILURE_AUDIT.md (only if real incidents require entries).
- Existing application files only when fixing verified problems.

**Implementation Requirements:**
- Review React Router v7 usage.
- Verify declarative and nested routing.
- Verify shared layout and Outlet.
- Verify active navigation.
- Check direct URLs, refresh, and browser history.
- Run existing automated checks.
- Review project documentation and Git history.
- Prepare explanations for an oral defense.

**Acceptance Criteria:**
- Required routing functionality has been verified.
- Available automated checks pass.
- No unresolved blocking runtime errors remain.
- Documentation reflects the actual implementation.
- Git history contains the completed task changes.
- AI Failure Audit reflects genuine incidents only.

**Verification Steps:**
- Run available test, lint, and build scripts.
- Inspect browser Console.
- Verify all implemented routes.
- Test refresh and back/forward.
- Check keyboard navigation.
- Check layout at 375px.
- Inspect Git history and working tree.

**Status:** DONE

**Suggested Git Commit Message:**
`docs(ex1.2.1): complete regression and documentation`

---

## Completion Checklist

- [ ] T01 completed and committed.
- [ ] T02 completed and committed.
- [ ] T03 completed and committed.
- [ ] T04 completed and committed.
- [ ] T05 completed and committed.
- [ ] React Router v7 behavior verified.
- [ ] Nested routes and Outlet verified.
- [ ] NavLink active state verified.
- [ ] Available automated checks completed.
- [ ] AI Failure Audit reviewed.
- [ ] README reviewed.
- [ ] Git history reviewed.

## Scope Exclusions

Exercise 1.2.2, dynamic person details, useParams, people.find,
master-detail CSS Grid, PersonDetail 404 behavior, Exercise 1.3,
backend APIs, Express, and MongoDB are outside this task plan.
