
import { Outlet } from "react-router";

export default function PeopleLayout() {
  return (
    <main>
      <h1>People Directory</h1>
      <p>Select a person to view their details.</p>
      <Outlet />
    </main>
  );
}
