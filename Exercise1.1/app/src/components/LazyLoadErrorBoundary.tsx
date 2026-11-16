
import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface LazyLoadErrorBoundaryProps {
  children: ReactNode
}

interface LazyLoadErrorBoundaryState {
  hasError: boolean
}

export default class LazyLoadErrorBoundary extends Component<
  LazyLoadErrorBoundaryProps,
  LazyLoadErrorBoundaryState
> {
  state: LazyLoadErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(): LazyLoadErrorBoundaryState {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Detail rendering failed:', error, info)
    }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="detail-error"
          role="alert"
          aria-labelledby="detail-error-title"
        >
          <h2 id="detail-error-title">
            Unable to load person details
          </h2>

          <p>
            The requested content could not be displayed.
            Please check your connection and try again.
          </p>

          <button
            type="button"
            className="details-button"
            onClick={this.handleReload}
          >
            Reload page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
