"use client";

import Link from "next/link";
import { StarMotif } from "@/components/star-motif";
import { SiteFooter } from "@/components/site-footer";
import { SystemGrid } from "@/components/system-grid";

const TALLY_URL = "https://tally.so/r/eqQgEQ";
const GET_STARTED_URL = "https://tally.so/r/68xBLe";

export default function ForCandidates() {
  return (
    <>
      <SystemGrid />

      {/* Nav */}
      <nav style={{ background: "transparent", backdropFilter: "none", WebkitBackdropFilter: "none", borderBottom: "none" }}>
        <Link href="/" className="logo" style={{ textDecoration: "none", color: "#fff" }}>
          X2TALENT
        </Link>
        <div className="nav-status">
          <div className="status-dot" />
          <span className="meta-label" style={{ color: "#fff" }}>FOR CANDIDATES</span>
        </div>
      </nav>

      <main>
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="section-inverted" style={{ padding: "10rem var(--container-padding) 6rem" }}>
          <div style={{ maxWidth: 800 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <StarMotif className="text-clay" />
              <span className="meta-label">For Candidates</span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              What&rsquo;s it been like?<br />Let&rsquo;s partner together to find your next design role.
            </h1>
            <p
              className="panel-desc"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: 560, opacity: 0.75 }}
            >
              We do more than place you. We help you win.
            </p>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────── */}
        <section style={{ padding: "6rem var(--container-padding)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "4rem" }}>
            <StarMotif className="text-clay" />
            <span className="meta-label">Our Services</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>

            {/* Service 1: Portfolio Review */}
            <div className="panel" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="meta-label">Service .01</span>
                <StarMotif />
              </div>
              <h3 className="panel-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)" }}>
                Get Honest Feedback on Your Work
              </h3>
              <p className="panel-desc">
                Your portfolio is your voice. We&rsquo;ll review it the way hiring managers will—looking for clarity, process thinking, and the design decisions that set you apart. We don&rsquo;t just say &ldquo;looks good.&rdquo; We&rsquo;ll tell you what works, what doesn&rsquo;t, and why it matters.
              </p>
              <p className="panel-desc">
                Whether you&rsquo;re building a portfolio from scratch or refining an existing one, we&rsquo;ll help you tell your story in a way that opens doors.
              </p>
            </div>

            {/* Service 2: Interview Prep */}
            <div className="panel" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="meta-label">Service .02</span>
                <StarMotif className="text-clay" />
              </div>
              <h3 className="panel-title" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)" }}>
                Interview Confidence, Without the Stress
              </h3>
              <p className="panel-desc">
                Interviews are uncomfortable. We get it. That&rsquo;s why we coach you through the actual questions you&rsquo;ll face—design process deep-dives, cross-functional collaboration scenarios, pressure testing under real constraints.
              </p>
              <p className="panel-desc">
                You&rsquo;ll know what to expect. You&rsquo;ll know what interviewers are actually looking for. You&rsquo;ll walk in confident.
              </p>
            </div>

            {/* Service 3: Job Search Strategy */}
            <div className="panel" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="meta-label">Service .03</span>
                <StarMotif />
              </div>
              <h3 className="panel-title text-acid" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)" }}>
                A Real Plan for Finding the Right Role
              </h3>
              <p className="panel-desc">
                Job searching as a designer can feel like noise—endless listings, unclear role expectations, vague team dynamics. We help you cut through it.
              </p>
              <p className="panel-desc">
                Together, we&rsquo;ll clarify what you actually want in a role, where those opportunities exist, and how to position yourself for the ones that matter. No spray-and-pray. Just strategy.
              </p>
            </div>
          </div>
        </section>

        {/* ── How It Works ─────────────────────────────── */}
        <section className="section-inverted" style={{ padding: "6rem var(--container-padding)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <span className="meta-label" style={{ display: "block", marginBottom: "1.5rem" }}>
              How It Works
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
              }}
            >
              Part of Your Partnership with X2Talent
            </h2>
            <p className="panel-desc" style={{ fontSize: "clamp(1rem, 1.75vw, 1.15rem)", opacity: 0.8, lineHeight: 1.8 }}>
              If you need advice for your job search, interview prep, or portfolio review, we are here to help you. These services are available as part of your partnership with X2Talent. Whether you&rsquo;re preparing for interviews while we source opportunities, or you&rsquo;re refining your approach between searches, we&rsquo;ll be there.
            </p>
          </div>
        </section>

        {/* ── Expectation Setting ───────────────────────── */}
        <section style={{ padding: "6rem var(--container-padding)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="meta-label" style={{ display: "block", marginBottom: "1.5rem" }}>
                Honest by Default
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                What We Can Promise. What We Can&rsquo;t.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingTop: "0.5rem" }}>
              <p className="panel-desc" style={{ lineHeight: 1.8 }}>
                We can promise speed. We can promise specialized knowledge. We can promise honest feedback—even when it&rsquo;s hard to hear.
              </p>
              <p className="panel-desc" style={{ lineHeight: 1.8 }}>
                We&rsquo;re not always able to provide talent after an interview, but we will when we can. Sometimes the right role doesn&rsquo;t exist in your timeline. Sometimes a team isn&rsquo;t the right cultural fit. Sometimes the market just doesn&rsquo;t support your profile at that moment.
              </p>
              <p className="panel-desc" style={{ lineHeight: 1.8 }}>
                What matters to us is that you&rsquo;re moving forward—either with us or toward something better for your career.
              </p>
              <a
                href={GET_STARTED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
