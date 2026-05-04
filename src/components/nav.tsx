import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <Link href="/" className="logo" style={{ textDecoration: "none" }}>
        X2TALENT
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Link
          href="/for-candidates"
          className="meta-label"
          style={{ textDecoration: "none", color: "var(--text-muted)", transition: "color 0.2s ease" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text-main)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          FOR CANDIDATES
        </Link>
        <div className="nav-status">
          <div className="status-dot" />
          <span className="meta-label">DESIGN RECRUITING // ACTIVE</span>
        </div>
      </div>
    </nav>
  );
}
