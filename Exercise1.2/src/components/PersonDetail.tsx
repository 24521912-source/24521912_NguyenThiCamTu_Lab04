
import { Link, useParams } from "react-router";
import { people } from "../data/people";

export default function PersonDetail() {
  const { id } = useParams<{ id: string }>();

  const person = people.find(
    (item) => item.id === id
  );

  if (!person) {
    return (
      <section
        className="person-not-found"
        role="status"
        aria-labelledby="not-found-title"
      >
        <div className="not-found-icon" aria-hidden="true">
          !
        </div>

        <h2 id="not-found-title">Person Not Found</h2>

        <p>
          We could not find a person with the ID "{id}".
        </p>

        <Link to="/people" className="back-to-directory">
          Back to People Directory
        </Link>
      </section>
    );
  }

  return (
    <article className="person-detail">
      <header className="person-detail-header">
        <div className="detail-avatar" aria-hidden="true">
          {person.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>

        <div className="detail-heading">
          <p className="detail-eyebrow">PERSON PROFILE</p>
          <h2>{person.name}</h2>
          <p className="detail-role">{person.role}</p>
        </div>

        <span
          className={`detail-status ${
            person.status === "Active"
              ? "detail-status-active"
              : "detail-status-inactive"
          }`}
        >
          {person.status}
        </span>
      </header>

      <section className="person-information">
        <h3>Personal Information</h3>

        <dl className="person-definition-list">
          <div className="person-definition-item">
            <dt>Person ID</dt>
            <dd>{person.id}</dd>
          </div>

          <div className="person-definition-item">
            <dt>Full Name</dt>
            <dd>{person.name}</dd>
          </div>

          <div className="person-definition-item">
            <dt>Role</dt>
            <dd>{person.role}</dd>
          </div>

          <div className="person-definition-item">
            <dt>Department</dt>
            <dd>{person.department}</dd>
          </div>

          <div className="person-definition-item">
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </dd>
          </div>

          <div className="person-definition-item">
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${person.phone}`}>
                {person.phone}
              </a>
            </dd>
          </div>

          <div className="person-definition-item">
            <dt>Location</dt>
            <dd>{person.location}</dd>
          </div>

          <div className="person-definition-item">
            <dt>Status</dt>
            <dd>{person.status}</dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
