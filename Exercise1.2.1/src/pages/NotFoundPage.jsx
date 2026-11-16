
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="page-content">
      <span className="page-label">ERROR 404</span>
      <h1>Page Not Found</h1>

      <p>
        The requested page does not exist.
      </p>

      <Link to="/" className="action-link">
        Return to Home
      </Link>
    </section>
  );
}
