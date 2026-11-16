
import { Link } from "react-router";

export default function PeopleIndex() {
  return (
    <div className="people-empty-state">
      <div className="empty-state-icon" aria-hidden="true">
        👥
      </div>

      <h2>Select a Person</h2>

      <p>
        Choose someone from the directory to explore
        their profile and information.
      </p>

      <Link to="/people/1" className="empty-state-link">
        View First Profile
      </Link>
    </div>
  );
}
