"use client";

import Link from "next/link";
import { StarMotif } from "@/components/star-motif";
import { SiteFooter } from "@/components/site-footer";
import { SystemGrid } from "@/components/system-grid";
import { useState } from "react";

export default function FindRole() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    authorized: "",
    sponsorship: "",
    workPreference: "",
    rolesInterested: "",
    salaryRange: "",
    resume: null,
    portfolio: "",
    portfolioPassword: "",
    lookingFor: [],
    currentTitle: "",
    currentCompany: "",
    experience: "",
    message: "",
    aiTools: "",
    aiProjects: "",
    referral: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        lookingFor: checked
          ? [...prev.lookingFor, value]
          : prev.lookingFor.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Handle form submission
  };

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
          <span className="meta-label" style={{ color: "#fff" }}>FIND YOUR NEXT ROLE</span>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="section-inverted" style={{ padding: "6rem var(--container-padding)" }}>
          <div style={{ maxWidth: 800 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <StarMotif className="text-clay" />
              <span className="meta-label">Join X2Talent Network</span>
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
              Find your next design role.
            </h1>
            <p
              className="panel-desc"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: 560, opacity: 0.75 }}
            >
              We partner with the world's most ambitious startups and design organizations. Share your story and let's find the perfect fit.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section style={{ padding: "6rem var(--container-padding)" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* Name Fields */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="panel-input"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid var(--grid-line)",
                      borderRadius: "8px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
                <div>
                  <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="panel-input"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid var(--grid-line)",
                      borderRadius: "8px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="panel-input"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid var(--grid-line)",
                      borderRadius: "8px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
                <div>
                  <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="panel-input"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid var(--grid-line)",
                      borderRadius: "8px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
              </div>

              {/* Location & LinkedIn */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="panel-input"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid var(--grid-line)",
                      borderRadius: "8px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
                <div>
                  <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="panel-input"
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid var(--grid-line)",
                      borderRadius: "8px",
                      fontFamily: "var(--font-display)",
                      fontSize: "0.95rem",
                    }}
                  />
                </div>
              </div>

              {/* Authorization */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.75rem" }}>
                  Are you legally authorized to work in the United States?
                </label>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="authorized"
                      value="yes"
                      checked={formData.authorized === "yes"}
                      onChange={handleChange}
                    />
                    <span className="panel-desc">Yes</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="authorized"
                      value="no"
                      checked={formData.authorized === "no"}
                      onChange={handleChange}
                    />
                    <span className="panel-desc">No</span>
                  </label>
                </div>
              </div>

              {/* Sponsorship */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.75rem" }}>
                  Will you need future sponsorship?
                </label>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="sponsorship"
                      value="yes"
                      checked={formData.sponsorship === "yes"}
                      onChange={handleChange}
                    />
                    <span className="panel-desc">Yes</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="sponsorship"
                      value="no"
                      checked={formData.sponsorship === "no"}
                      onChange={handleChange}
                    />
                    <span className="panel-desc">No</span>
                  </label>
                </div>
              </div>

              {/* Work Preference */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Work Preference
                </label>
                <select
                  name="workPreference"
                  value={formData.workPreference}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    backgroundColor: "var(--bg)",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">On-site</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              {/* Roles Interested */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Roles Interested In?
                </label>
                <select
                  name="rolesInterested"
                  value={formData.rolesInterested}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    backgroundColor: "var(--bg)",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="product-designer">Product (UI/UX) Designer</option>
                  <option value="ui-designer">UI / Visual Designer</option>
                  <option value="ux-designer">UX / User Experience Designer</option>
                  <option value="interaction-designer">Interaction Designer</option>
                  <option value="design-engineer">Design Engineer</option>
                  <option value="product-engineer">Product Engineer</option>
                  <option value="frontend-engineer">Front-End Engineer</option>
                  <option value="fullstack-engineer">Full-Stack Engineer</option>
                </select>
              </div>

              {/* Salary Range */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  What salary range are you looking for?
                </label>
                <input
                  type="text"
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleChange}
                  placeholder="e.g., $120k - $180k"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              {/* Current Title */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Current Title
                </label>
                <input
                  type="text"
                  name="currentTitle"
                  value={formData.currentTitle}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              {/* Current Company */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Current Company
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              {/* Experience */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  How many years of experience do you have?
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              {/* Portfolio */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Portfolio
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://portfolio-link"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              {/* Portfolio Password */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Portfolio Password (if applicable)
                </label>
                <input
                  type="password"
                  name="portfolioPassword"
                  value={formData.portfolioPassword}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              {/* Looking For */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.75rem" }}>
                  What are you looking for?
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="lookingFor"
                      value="full-time"
                      checked={formData.lookingFor.includes("full-time")}
                      onChange={handleChange}
                    />
                    <span className="panel-desc">Full Time Roles</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="lookingFor"
                      value="part-time"
                      checked={formData.lookingFor.includes("part-time")}
                      onChange={handleChange}
                    />
                    <span className="panel-desc">Part Time Roles</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="lookingFor"
                      value="freelance"
                      checked={formData.lookingFor.includes("freelance")}
                      onChange={handleChange}
                    />
                    <span className="panel-desc">Freelance / Contract</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Anything you'd like to tell us about you?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    minHeight: "120px",
                    resize: "vertical",
                  }}
                />
              </div>

              {/* AI Tools */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Any AI tools you've been playing with recently?
                </label>
                <input
                  type="text"
                  name="aiTools"
                  value={formData.aiTools}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              {/* AI Projects */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  Do you have any AI projects to share?
                </label>
                <input
                  type="text"
                  name="aiProjects"
                  value={formData.aiProjects}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              {/* Referral */}
              <div>
                <label className="meta-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                  If you were referred by someone, drop their LinkedIn profile here
                </label>
                <input
                  type="url"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid var(--grid-line)",
                    borderRadius: "8px",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "1rem", alignSelf: "flex-start" }}
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
