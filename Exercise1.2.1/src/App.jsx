
import { Link, Route, Routes } from "react-router";

function HomePage() {
  return (
    <main className="page">
      <h1>Home Page</h1>
      <p>
        Welcome to Lab 4 Exercise 1.2.1.
        This page demonstrates React Router v7 declarative routing.
      </p>

      <Link to="/about" className="page-link">
        Visit About Page
      </Link>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page">
      <h1>About Page</h1>
      <p>
        This page demonstrates navigation between declarative routes.
      </p>

      <Link to="/" className="page-link">
        Back to Home
      </Link>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="page">
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>

      <Link to="/" className="page-link">
        Return to Home
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Lab 4 — Exercise 1.2.1</h2>
        <p>React Router v7 Declarative Routing</p>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
