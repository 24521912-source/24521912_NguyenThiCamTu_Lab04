
import { NavLink, Outlet } from "react-router";
import { people } from "./data/people";
import "./PeopleLayout.css";

export default function PeopleLayout() {
  return (
    <main className="directory-page">
      <header className="directory-header">
        <div>
          <span className="directory-eyebrow">
            TEAM DIRECTORY
          </span>
          <h1>People Directory</h1>
          <p>
            Browse the team and select a person to
            view their information.
          </p>
        </div>

        <span className="directory-count">
          {people.length} people
        </span>
      </header>

      <div className="directory-grid">
        <aside className="people-panel">
          <div className="panel-heading">
            <h2 id="people-list-heading">People</h2>
            <span>{people.length} members</span>
          </div>

          <nav
            className="people-navigation"
            aria-labelledby="people-list-heading"
          >
            {people.length === 0 ? (
              <p className="empty-list">
                No people available.
              </p>
            ) : (
              <ul className="people-list">
                {people.map((person) => (
                  <li key={person.id}>
                    <NavLink
                      to={`/people/${person.id}`}
                      className={({ isActive }) =>
                        `person-link${isActive ? " active" : ""}`
                      }
                      aria-label={`View ${person.name}`}
                    >
                      <span
                        className="person-avatar"
                        aria-hidden="true"
                      >
                        {person.name
                          .split(" ")
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join("")}
                      </span>

                      <span className="person-summary">
                        <strong>{person.name}</strong>
                        <span>{person.role}</span>
                      </span>

                      <span
                        className="person-arrow"
                        aria-hidden="true"
                      >
                        ›
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </aside>

        <div className="details-panel">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
