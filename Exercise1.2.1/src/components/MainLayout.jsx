
import { Link, NavLink, Outlet } from "react-router";

const navigationItems = [
  { path: "/", label: "Home", end: true },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

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
        <aside className="sidebar">
          <h2 className="sidebar-title">Navigation</h2>

          <nav aria-label="Main navigation">
            <ul className="navigation-list">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.end}
                    className={({ isActive }) =>
                      isActive
                        ? "navigation-link navigation-link--active"
                        : "navigation-link"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
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
