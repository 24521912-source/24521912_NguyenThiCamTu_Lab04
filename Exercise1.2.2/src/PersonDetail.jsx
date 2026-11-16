
import { Link, useParams } from "react-router";
import { people } from "./data/people";
import "./PersonDetail.css";

export default function PersonDetail() {
  const { id } = useParams();

  const person = people.find(
    (item) => item.id === id
  );

  if (!person) {
    return (
      <section
        className="person-not-found"
        aria-labelledby="not-found-heading"
      >
        <div className="not-found-icon" aria-hidden="true">
          ?
        </div>

        <span className="detail-eyebrow">
          PERSON NOT FOUND
        </span>

        <h2 id="not-found-heading">
          We couldn't find that person.
        </h2>

        <p>
          The selected person does not exist in this
          directory. Choose another person from the list
          or return to the directory.
        </p>

        <Link className="back-link" to="/people">
          Back to directory
        </Link>
      </section>
    );
  }

  return (
    <section
      className="person-detail"
      aria-labelledby="person-detail-heading"
    >
      <span className="detail-eyebrow">
        MEMBER PROFILE
      </span>

      <div className="detail-profile-header">
        <div
          className="detail-avatar"
          aria-hidden="true"
        >
          {person.name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
        </div>

        <div className="detail-identity">
          <h2 id="person-detail-heading">
            {person.name}
          </h2>
          <p>{person.role}</p>
        </div>
      </div>

      <div className="detail-divider" />

      <h3 className="detail-section-title">
        Personal Information
      </h3>

      <dl className="detail-list">
        <div className="detail-row">
          <dt>Name</dt>
          <dd>{person.name}</dd>
        </div>

        <div className="detail-row">
          <dt>Role</dt>
          <dd>{person.role}</dd>
        </div>

        <div className="detail-row">
          <dt>Department</dt>
          <dd>{person.department}</dd>
        </div>

        <div className="detail-row">
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </dd>
        </div>
      </dl>

      <Link className="back-link" to="/people">
        Back to directory
      </Link>
    </section>
  );
}
