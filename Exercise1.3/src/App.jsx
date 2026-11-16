
import SimpleForm from './components/SimpleForm.jsx';
import './App.css';

export default function App() {
  return (
    <main className="page">
      <section className="form-card">
        <h1>Legacy Validation Lab</h1>

        <p className="description">
          Exercise 1.3 — Diagnosing chained useEffect hooks.
        </p>

        <SimpleForm />
      </section>
    </main>
  );
}
