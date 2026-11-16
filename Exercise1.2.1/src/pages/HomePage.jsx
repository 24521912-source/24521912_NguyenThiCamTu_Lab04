
import { Link } from "react-router";

export default function HomePage() {
  return (
    <section className="page-content">
      <span className="page-label">HOME</span>
      <h1>Welcome to RouterLab</h1>

      <p>
        This application demonstrates nested routes and
        shared layouts with React Router v7.
      </p>

      <div className="info-panel">
        <h2>What you will learn</h2>
        <p>
          Parent routes define shared UI, while child routes
          render their content through the Outlet component.
        </p>
      </div>

      <Link to="/about" className="action-link">
        Explore the About Page
      </Link>
    </section>
  );
}
