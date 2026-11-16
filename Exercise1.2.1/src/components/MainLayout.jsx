
import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-content">
          <Link to="/" className="site-brand">
            RouterLab
          </Link>

          <p className="site-subtitle">
            React Router v7 — Nested Layout Architecture
          </p>
        </div>
      </header>

      <div className="layout-container">
        <aside className="sidebar" aria-label="Page navigation">
          <h2 className="sidebar-title">Navigation</h2>

          <nav aria-label="Main navigation">
            <ul className="navigation-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content" id="main-content">
          <Outlet />
        </main>
      </div>

      <footer className="site-footer">
        <p>Lab 4 — Exercise 1.2.1 | React Router v7</p>
      </footer>
    </div>
  );
}
