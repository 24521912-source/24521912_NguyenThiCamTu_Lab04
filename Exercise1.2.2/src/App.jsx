
import { Navigate, Route, Routes } from "react-router";
import PeopleLayout from "./PeopleLayout";
import PersonDetail from "./PersonDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/people" replace />} />

      <Route path="/people" element={<PeopleLayout />}>
        <Route
          index
          element={<p>Choose a person from the directory.</p>}
        />
        <Route path=":id" element={<PersonDetail />} />
      </Route>

      <Route path="*" element={<h1>404 — Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
