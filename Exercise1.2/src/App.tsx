
import { Navigate, Route, Routes } from "react-router";
import PeopleLayout from "./components/PeopleLayout";
import PeopleIndex from "./components/PeopleIndex";

function HomePage() {
  return <Navigate to="/people" replace />;
}

function NotFoundPage() {
  return (
    <main className="route-not-found">
      <h1>404</h1>
      <p>Page not found.</p>
      <a href="/people">Back to People Directory</a>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/people" element={<PeopleLayout />}>
        <Route index element={<PeopleIndex />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
