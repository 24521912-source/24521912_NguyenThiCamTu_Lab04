
import { lazy, Suspense, useState } from 'react'
import type { Person } from './components/PersonDetail'
import PersonDetailSkeleton from './components/PersonDetailSkeleton'
import './App.css'
import LazyLoadErrorBoundary from './components/LazyLoadErrorBoundary'

const PersonDetail = lazy(() => import('./components/PersonDetail'))

const demoPerson: Person = {
  id: 101,
  name: 'Alex Morgan',
  role: 'Frontend Developer',
  email: 'alex@example.com',
  department: 'Engineering',
  description:
    'This is a sample profile used to demonstrate dynamic component loading in React.',
}

function App() {
  const [showDetails, setShowDetails] = useState(false)

  function handleToggleDetails() {
    setShowDetails((previous) => !previous)
  }

  return (
    <main className="app-shell">
      <div className="app-container">
        <header className="page-header">
          <p className="eyebrow">Lab 04 / Exercise 1.1</p>
          <h1>People Directory</h1>
          <p className="page-description">
            Explore how React loads components only when
            they are needed.
          </p>
        </header>

        <section className="directory-card" aria-labelledby="directory-heading">
          <div className="directory-summary">
            <div>
              <h2 id="directory-heading">Directory</h2>
              <p>Select a person to view their details.</p>
            </div>

            <span className="directory-count">
              1 sample profile
            </span>
          </div>

          <div className="person-preview">
            <div className="preview-avatar" aria-hidden="true">
              AM
            </div>

            <div className="preview-information">
              <h3>{demoPerson.name}</h3>
              <p>{demoPerson.role}</p>
            </div>

            <button
              className="details-button"
              type="button"
              onClick={handleToggleDetails}
              aria-expanded={showDetails}
              aria-controls="detail-region"
            >
              {showDetails ? 'Hide Details' : 'View Details'}
            </button>
          </div>
        </section>

        <section
          id="detail-region"
          className="detail-region"
          aria-label="Person details"
        >
          {showDetails ? (
            <LazyLoadErrorBoundary>
  <Suspense fallback={<PersonDetailSkeleton />}>
    <PersonDetail person={demoPerson} />
  </Suspense>
</LazyLoadErrorBoundary>
          ) : (
            <div className="empty-state">
              <p>Choose View Details to load the profile.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
