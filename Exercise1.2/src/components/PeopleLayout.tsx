
import { NavLink, Outlet } from "react-router";
import { people } from "../data/people";

export default function PeopleLayout() {
  return (
    <main className="people-page">
      <header className="people-header">
        <div>
          <p className="people-eyebrow">DIRECTORY</p>
          <h1>People Directory</h1>
          <p className="people-subtitle">
            Browse and manage your people directory.
          </p>
        </div>

        <span className="people-count">
          {people.length} People
        </span>
      </header>

      <div className="people-grid">
        <aside className="people-sidebar">
          <div className="sidebar-heading">
            <h2>All People</h2>
            <span>{people.length}</span>
          </div>

          <nav aria-label="People directory">
            <ul className="people-list">
              {people.map((person) => (
                <li key={person.id}>
                  <NavLink
                    to={`/people/${person.id}`}
                    className={({ isActive }) =>
                      isActive
                        ? "person-link active"
                        : "person-link"
                    }
                  >
                    <span className="person-avatar" aria-hidden="true">
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>

                    <span className="person-link-info">
                      <span className="person-link-name">
                        {person.name}
                      </span>

                      <span className="person-link-role">
                        {person.role}
                      </span>
                    </span>

                    <span
  className={`status-dot ${
    person.status === "Active"
      ? "status-active"
      : "status-inactive"
  }`}
  aria-hidden="true"
/>

<span className="visually-hidden">
  {`Status: ${person.status}`}
</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <section
          className="people-content"
          aria-label="Selected person details"
        >
          <Outlet />
        </section>
      </div>
    </main>
  );
}
