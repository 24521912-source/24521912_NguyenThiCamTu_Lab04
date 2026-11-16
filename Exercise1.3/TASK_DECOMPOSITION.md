
# Task Decomposition — Lab 4 Exercise 1.3

## Project Overview

**Course:** UIT Web Application Development 2026  
**Exercise:** 1.3 — Legacy Validation Anti-Patterns  
**Focus:** Diagnosing chained useEffect validation and implementing synchronous derived validation.

This exercise analyzes the risks of chained useEffect hooks across InputField and SimpleForm.

The five-effect sequence shown in the lecture is illustrative. Any actual rendering behavior or errors must be verified in the application.

Sprint 2's full Context-Driven Form Engine is outside the mandatory scope of this exercise.

## Working Rules

- Complete one task at a time.
- Follow Project_rules.md.
- Verify changes before committing.
- Use Conventional Commits.
- Do not fabricate test results or failure reports.
- Document real AI-related failures independently.
- Preserve unrelated exercises and repository files.

## T01 — Repository Audit & Task Decomposition

**Objective:** Establish the verified project baseline and documentation.

**Prerequisites:**
- Access to the Lab 4 repository.
- PowerShell, VS Code, npm, and Git.

**Files:**
- TASK_DECOMPOSITION.md
- Project_rules.md (preserve existing content)
- AI_FAILURE_AUDIT.md (empty outline)

**Implementation Requirements:**
- Inspect the current working directory.
- Inspect Git status and recent commits.
- Identify existing application files.
- Verify the environment before initializing React.
- Define the exercise scope and milestones.
- Prepare an empty AI failure audit outline.

**Acceptance Criteria:**
- Repository structure is understood.
- Project rules remain intact.
- Task documentation exists.
- AI failure audit outline exists.
- No unrelated files are modified.
- Changes are verified before committing.

**Verification:**
- Get-ChildItem -Name
- git status -sb
- git diff --check
- git diff --cached

**Status:** DONE

**Suggested Commit:**
docs(ex1.3): establish project rules and task plan

---

## T02 — Validation Data Flow & Anti-Pattern Diagnosis

**Objective:** Analyze the problematic validation update chain.

**Prerequisites:**
- T01 completed.
- A reproducible React baseline is available.

**Files:**
- Application files: pending initialization and inspection.
- TASK_DECOMPOSITION.md

**Implementation Requirements:**
- Identify ownership of field and form state.
- Explain the five-effect validation chain.
- Demonstrate redundant state synchronization.
- Examine potential stale updates and effect loops.
- Observe actual behavior using React DevTools.
- Separate lecture examples from observed failures.

**Acceptance Criteria:**
- InputField and SimpleForm behavior can be examined.
- State ownership is documented.
- Effect dependencies are understood.
- Actual observations are distinguished from hypothetical risks.

**Verification:**
- Run available project scripts.
- Inspect React DevTools.
- Examine browser Console.
- Record only verified findings.

### Observed Baseline Findings

The legacy validation implementation intentionally contains five chained useEffect hooks across InputField and SimpleForm.

Running ESLint reported four errors under the react-hooks/set-state-in-effect rule:

1. InputField.jsx: setDisplayError(error)
2. SimpleForm.jsx: setIsEmailValid(valid)
3. SimpleForm.jsx: setIsFormValid(isEmailValid)
4. SimpleForm.jsx: setEmailError(...)

These findings confirm that the baseline contains synchronous state updates inside effects.

They do not independently prove that an infinite loop, race condition, or specific number of additional renders occurred.

The validation architecture will be refactored in T03. ESLint is expected to report errors for the intentionally preserved legacy baseline.

**Status:** DONE

**Suggested Commit:**
test(ex1.3): establish validation anti-pattern baseline

---

## T03 — Synchronous Derived Validation Refactor

**Objective:** Replace redundant effect-driven validation with synchronous derived state.

**Prerequisites:**
- T02 completed.
- Validation rules and state ownership documented.

**Files:**
- Application files: pending inspection.
- TASK_DECOMPOSITION.md

**Implementation Requirements:**
- Define a pure validateForm(values) function.
- Maintain a single source of truth for form values.
- Derive field errors from current values.
- Derive isValid from validation results.
- Eliminate unnecessary validation effects.
- Preserve intended form behavior.

**Acceptance Criteria:**
- Invalid values produce appropriate errors.
- Valid values clear the errors.
- Form validity matches current values.
- Redundant validation effect chains are removed.

**Verification:**
- Test empty, invalid, and valid inputs.
- Inspect the Console.
- Verify current values and error messages.
- Run available lint and build scripts.

**Status:** DONE

**Suggested Commit:**
refactor(ex1.3): derive validation synchronously

---

## T04 — Accessible Error Messaging & Context Review

**Objective:** Improve validation accessibility without introducing unnecessary complexity.

**Prerequisites:**
- T03 completed.

**Files:**
- Application files: pending inspection.
- TASK_DECOMPOSITION.md

**Implementation Requirements:**
- Use useId for stable field identifiers.
- Associate labels with inputs.
- Apply aria-invalid when appropriate.
- Link errors with aria-describedby.
- Check keyboard accessibility.
- Evaluate whether Context is necessary.
- Avoid implementing unrelated Sprint 2 features.

**Acceptance Criteria:**
- Labels are correctly associated with inputs.
- Invalid fields expose accessible error information.
- Keyboard navigation remains functional.
- Context is introduced only if justified.

**Verification:**
- Inspect DOM attributes.
- Test keyboard navigation.
- Check accessibility-related warnings.
- Run available project scripts.

**Status:** DONE

**Suggested Commit:**
fix(ex1.3): improve accessible validation feedback

---

## T05 — Regression, Documentation & Defense

**Objective:** Verify the completed exercise and prepare its final explanation.

**Prerequisites:**
- T01 through T04 completed.

**Files:**
- README.md, if needed.
- TASK_DECOMPOSITION.md
- AI_FAILURE_AUDIT.md, only for real documented issues.
- Existing application files, only if fixes are necessary.

**Implementation Requirements:**
- Verify valid and invalid form behavior.
- Verify error clearing after input changes.
- Inspect React rendering behavior.
- Check for update loops and React warnings.
- Review keyboard and accessibility behavior.
- Check the layout at a 375px viewport.
- Review documentation and Git history.
- Prepare a short oral defense.

**Acceptance Criteria:**
- Functional regression checks pass.
- No observed unwanted validation effect chain remains.
- No observed maximum update depth error remains.
- Accessibility checks are completed.
- Documentation reflects actual implementation.
- Git history contains the verified work.

**Verification:**
- Run available npm scripts.
- Inspect browser Console.
- Inspect React DevTools Profiler.
- Review Git status and commit history.
- Save evidence locally where appropriate.

### Final Review

**Implementation:**
- Reviewed synchronous validation behavior.
- Reviewed accessibility improvements.
- Reviewed the removal of legacy validation effects.
- Updated project documentation.
- Reviewed the AI Failure Audit.

**Final Verification Checklist:**
- [ ] Empty email validation passed.
- [ ] Invalid email validation passed.
- [ ] Valid email validation passed.
- [ ] Error clearing passed.
- [ ] Submit behavior passed.
- [ ] Keyboard navigation passed.
- [ ] ARIA relationships verified.
- [ ] Responsive layout at 375px verified.
- [ ] Browser Console checked.
- [ ] Unwanted effect chaining checked.
- [ ] ESLint passed.
- [ ] Production build passed.
- [ ] Git staged changes reviewed.
- [ ] README completed.
- [ ] AI Failure Audit reviewed.

**Verification Notes:**

Record only actual observations and results.

**Status:** IN PROGRESS

**Status:** DONE

**Suggested Commit:**
docs(ex1.3): finalize verification and defense

---

## Completion Policy

A task is marked DONE only after its acceptance criteria have been verified and any required Git commit has succeeded.

A task must not be considered complete solely because its implementation instructions were provided.
