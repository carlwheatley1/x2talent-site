const items = [
  "Greenlite AI",
  "MEXT",
  "500 Startups",
  "Meta",
  "Instagram",
  "Applied Intuition",
  "BCG Digital Ventures",
  "Fulcrum AI",
  "Startupbootcamp",
  "Plug And Play",
  "Vali Health",
];

export function MarqueeBand() {
  const all = [...items, ...items];

  return (
    <div className="marquee-container reveal">
      <div className="marquee" id="marquee">
        {all.map((name, i) => (
          <span key={`${name}-${i}`} className="marquee-item solid">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
