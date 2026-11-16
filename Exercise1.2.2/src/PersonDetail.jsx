
import { useParams } from "react-router";

export default function PersonDetail() {
  const { id } = useParams();

  return (
    <section aria-labelledby="person-detail-heading">
      <h2 id="person-detail-heading">Person Details</h2>
      <p>Selected person ID: {id}</p>
    </section>
  );
}
