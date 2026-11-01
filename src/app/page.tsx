const principles = [
  { number: "01", title: "One professional identity", description: "Build a structured record of your experience, skills, projects and qualifications. Update it as your career grows." },
  { number: "02", title: "You control discovery", description: "Choose what is visible, who can find you and how organizations may contact you. Private means private." },
  { number: "03", title: "Recruiters search by capability", description: "Organizations describe job-related needs and discover relevant people without waiting for repeated CV submissions." },
];

const safeguards = ["Your profile is not public by default", "Self-declared and verified claims stay distinct", "AI assists; people remain responsible for hiring", "No selling candidate personal data", "Core access is intended to remain free"];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TalentOS home"><span className="brand-mark">T</span> TalentOS</a>
        <a className="header-link" href="https://github.com/akameredon/talentos" target="_blank" rel="noreferrer">Open source ↗</a>
      </header>
      <section className="hero" id="top">
        <p className="eyebrow">A better way to connect talent and opportunity</p>
        <h1>Your career.<br /><span>One lasting identity.</span></h1>
        <p className="hero-copy">Stop rewriting your CV for every opportunity. Build one professional identity, keep it current, and choose when the right organizations can discover you.</p>
        <div className="hero-actions"><a className="primary-link" href="https://github.com/akameredon/talentos" target="_blank" rel="noreferrer">Explore the project <span aria-hidden="true">↗</span></a><span className="status-note">Early development · Horizon 0</span></div>
        <div className="identity-preview" aria-label="Illustrative professional profile structure">
          <div className="preview-top"><span className="preview-dot" /><span>PROFESSIONAL IDENTITY</span><span className="preview-private">Privacy-led by design</span></div>
          <div className="preview-content"><div className="avatar-placeholder">P</div><div><div className="preview-name">Your professional story</div><div className="preview-role">Skills · Experience · Projects · Learning</div></div></div>
          <div className="preview-tags"><span>Capabilities</span><span>Work history</span><span>Qualifications</span><span>Portfolio</span></div>
          <p className="preview-foot">Illustrative concept — not a live profile or searchable candidate database.</p>
        </div>
      </section>
      <section className="section principles" id="how-it-works">
        <p className="eyebrow">Designed around people, not paperwork</p><h2>One identity. More meaningful discovery.</h2>
        <div className="principle-grid">{principles.map((item) => <article className="principle-card" key={item.number}><span className="card-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </section>
      <section className="section trust-section"><div><p className="eyebrow">Trust is a foundation, not a feature</p><h2>Your information.<br />Your decision.</h2><p className="trust-copy">An open-source platform can still protect private information. TalentOS is being designed so that software transparency never means exposing people’s personal data.</p></div><ul className="safeguard-list">{safeguards.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></section>
      <section className="closing"><p className="eyebrow">Built in the open</p><h2>Help shape a fairer talent network.</h2><p>TalentOS is at the foundation stage. Product specifications and implementation decisions are published for community review.</p><a className="primary-link" href="https://github.com/akameredon/talentos" target="_blank" rel="noreferrer">View source and roadmap ↗</a></section>
      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">T</span> TalentOS</a><span>Open infrastructure. Individual control.</span><span>© {new Date().getFullYear()} TalentOS</span></footer>
    </main>
  );
}
