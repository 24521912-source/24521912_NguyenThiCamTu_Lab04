## Recorded Issues

### AF-001 — ESLint Errors in the Legacy Validation Baseline

**Task:** T02 — Validation Data Flow & Anti-Pattern Diagnosis

**Category:** AI-generated code / instruction issue

**Severity:** Low — Expected anti-pattern identified during baseline verification

**Status:** Identified — Pending refactor in T03

#### 1. AI Suggestion

The AI suggested implementing a legacy validation example using five chained `useEffect` hooks across `InputField` and `SimpleForm`.

The implementation was intentionally designed to demonstrate redundant state synchronization and effect-driven validation.

However, the AI did not initially make it sufficiently clear that the example would trigger ESLint errors under the project's React Hooks rules.

#### 2. Actual Observation

Running `npm run lint` produced four errors under the `react-hooks/set-state-in-effect` rule.

The reported locations were:

- `src/components/InputField.jsx:17` — `setDisplayError(error)`
- `src/components/SimpleForm.jsx:16` — `setIsEmailValid(valid)`
- `src/components/SimpleForm.jsx:22` — `setIsFormValid(isEmailValid)`
- `src/components/SimpleForm.jsx:30` — `setEmailError(...)`

ESLint reported:

**4 problems (4 errors, 0 warnings).**

#### 3. Root Cause

The implementation synchronously updated React state inside several `useEffect` hooks.

These effects were being used to calculate or synchronize values that could instead be derived directly from the current form state.

This design can introduce unnecessary cascading renders and increase state synchronization complexity.

The ESLint results do not independently prove that an infinite loop or race condition occurred.

#### 4. Current Handling

The legacy implementation is being preserved in T02 as an intentionally problematic baseline for analysis.

The underlying validation logic has not yet been refactored.

The planned correction in T03 is to replace redundant effect-driven validation with synchronous derived validation.

#### 5. Verification Evidence

**Confirmed:**
- ESLint reported four errors.
- All four errors belonged to `react-hooks/set-state-in-effect`.
- The errors were associated with synchronous state updates inside effects.

**Not yet verified:**
- Successful lint after refactoring.
- Reduction in actual React commits.
- Final regression results.

#### 6. Lessons Learned

AI-generated examples should be checked against the project's linting rules, even when they intentionally demonstrate problematic code.

A teaching example may be useful for analyzing an anti-pattern while still failing static analysis.

Expected baseline failures should be clearly distinguished from unexpected implementation failures.

#### 7. Resolution

**Pending — T03: Synchronous Derived Validation Refactor**

**Fix Commit:** Not available yet.