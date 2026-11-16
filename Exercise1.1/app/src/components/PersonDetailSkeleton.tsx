
export default function PersonDetailSkeleton() {
  return (
    <div className="person-loading">
      <div
        className="person-detail person-detail-skeleton"
        role="region"
        aria-label="Loading person details"
        aria-busy="true"
      >
        <div
          className="skeleton-avatar"
          aria-hidden="true"
        />

        <div
          className="person-information skeleton-information"
          aria-hidden="true"
        >
          <div className="skeleton-line skeleton-eyebrow" />
          <div className="skeleton-line skeleton-name" />
          <div className="skeleton-line skeleton-role" />

          <div className="person-fields skeleton-fields">
            <div className="skeleton-field">
              <div className="skeleton-line skeleton-label" />
              <div className="skeleton-line skeleton-value" />
            </div>

            <div className="skeleton-field">
              <div className="skeleton-line skeleton-label" />
              <div className="skeleton-line skeleton-value" />
            </div>

            <div className="skeleton-field">
              <div className="skeleton-line skeleton-label" />
              <div className="skeleton-line skeleton-value" />
            </div>
          </div>

          <div className="skeleton-line skeleton-heading" />

          <div className="skeleton-description">
            <div className="skeleton-line" />
            <div className="skeleton-line" />
          </div>
        </div>
      </div>

      <p
        className="sr-only"
        role="status"
        aria-live="polite"
      >
        Loading person details...
      </p>
    </div>
  )
}
