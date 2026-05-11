import { StarMotif } from "@/components/star-motif";

const roles = [
  "Product (UI/UX) Designer",
  "UI / Visual Designer",
  "UX / User Experience Designer",
  "Founding Designer",
  "Design Engineer",
  "Conversation Designer",
  "Brand Designer",
  "Voice AI Designer",
  "Product Engineer",
  "Front-End Engineer",
  "Full-Stack Engineer",
];

export function TalentTypes() {
  return (
    <section style={{ padding: "6rem var(--container-padding)", borderTop: "1px solid var(--grid-line-strong)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}>

        {/* Left label */}
        <div>
          <span className="meta-label" style={{ display: "block", marginBottom: "1rem" }}>
            Talent We Partner With
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            The roles we know best.
          </h2>
        </div>

        {/* Right — role list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
          }}
        >
          {roles.map((role, i) => (
            <div
              key={role}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1.25rem 0",
                borderBottom: i < roles.length - 1 || roles.length % 2 === 0
                  ? "1px solid var(--grid-line)"
                  : "none",
                borderRight: "none",
              }}
            >
              <StarMotif
                className="text-clay"
                style={{ width: 12, height: 12, flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--text-main)",
                  letterSpacing: "-0.01em",
                }}
              >
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
