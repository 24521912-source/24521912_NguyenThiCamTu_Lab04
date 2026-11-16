
export default function AboutPage() {
  return (
    <section className="page-content">
      <span className="page-label">ABOUT</span>
      <h1>About This Exercise</h1>

      <p>
        Exercise 1.2.1 focuses on declarative routing
        and reusable layout architecture.
      </p>

      <div className="info-panel">
        <h2>Nested Route Architecture</h2>
        <p>
          The shared layout stays mounted while the
          matched child route changes inside Outlet.
        </p>
      </div>
    </section>
  );
}
