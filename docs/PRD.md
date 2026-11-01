# TalentOS — Product Requirements Document

**Status:** Approved product direction; implementation not yet started.  
**Codename:** TalentOS (working name; final brand not selected).  
**Product:** Global professional identity and talent discovery infrastructure.

## 1. Vision

Give every individual a persistent professional identity that can be maintained over time and discovered by authorized organizations. People document their professional journey once. Recruiters define job-related requirements and search the talent pool rather than relying exclusively on applications. AI helps structure requirements, find related skills and explain matches. Individuals retain control over visibility and contact.

**Mission:** Make professional capabilities easier to document, discover, understand and connect with opportunities.

## 2. Problem

Individuals repeatedly recreate CVs, maintain fragmented work histories and remain undiscovered unless they apply. Recruiters receive large volumes of applications, manually screen documents and miss relevant people because of keyword or platform fragmentation. Vacancy-centric workflows make job seekers responsible for initiating nearly every connection.

## 3. Non-negotiable principles

1. Identity before vacancies.
2. People before applications.
3. Persistent, portable professional records.
4. Free core access forever as a product commitment.
5. Individual ownership and privacy controls.
6. Open-source software and interoperable APIs.
7. Explainable AI assistance with human oversight.
8. Self-declared, endorsed and verified claims remain distinct.
9. Support non-linear careers and overlapping work.
10. Global architecture with jurisdiction-aware operations.

## 4. User roles

- Talent: maintains a professional identity, controls visibility and responds to contact requests.
- Recruiter: defines requirements, searches, filters, shortlists and requests contact.
- Organization administrator: manages teams, organization profile and integrations.
- Service provider: offers optional profile, portfolio and career assistance.
- Developer/integrator: uses documented APIs and contributes to open source.
- Platform operator: maintains reliability and safety; administrative privilege does not imply unrestricted access to private profile content.

## 5. Universal Professional Identity

Each individual receives a stable internal identity and non-sequential public profile identifier. The profile exists independently of vacancies and organizations.

Profile sections:
- Professional identity: display name, headline, summary, country/region/city, languages and contact preferences.
- Education: institution, qualification, field, dates, status and evidence.
- Employment and engagements: employer/client, title, type, location, dates, responsibilities, achievements and skills used.
- Skills: taxonomy identifier, user description, optional proficiency, evidence and endorsements.
- Projects: name, description, role, contribution, methods/tools, outcomes and portfolio links.
- Certifications: issuer, credential, dates, identifier and verification status.
- Achievements: awards, publications, recognition and community contributions.
- Career preferences: desired roles, industries, employment types, remote/relocation preference and availability.
- Optional references and supporting documents with explicit access controls.

A person may have concurrent employment, freelance engagements, entrepreneurship, volunteering and projects. Do not force a single linear career path.

Support progressive onboarding, draft/publish updates, revision history, timestamps, JSON/PDF export, correction and deletion workflows. Profile completeness is informational and must not be treated as a proxy for ability.

## 6. Privacy and discoverability

Visibility modes: public, recruiter-discoverable, private and temporarily unavailable.

Support field-level visibility for email, phone, precise location, salary expectations, documents and references. Recruiters may discover a match without automatically receiving private contact information. Contact requests must be accepted or declined by the individual. Support blocking, reporting, contact preferences and audit trails.

Public indexing is opt-in and restricted to explicitly public fields. Authenticated search and APIs must enforce the same authorization rules. No crawler or API may bypass visibility settings.

## 7. Recruiter experience

Recruiters can register individually or through an organization. Organization verification status must be visible to candidates.

Search inputs: role/title, skills, experience, industry, education, certifications, projects, achievements, country, region, city, authorized distance radius, remote eligibility, relocation preference, employment type, availability and languages.

Criteria must be job-related and lawful. Do not offer protected or sensitive characteristics as filters or ranking inputs.

Results show permitted profile information, relevant experience, matching skills, qualifications, authorized location precision, evidence status and explanations. Recruiters can sort, filter, compare, save searches, create organization-private shortlists and request contact.

Vacancies are optional structured search briefs. Recruiters must be able to source candidates without publishing a vacancy.

## 8. AI-assisted intelligence

AI is an optional adapter layer. Core profile management and structured search must work without an external AI provider.

- Profile assistant proposes structured skills, responsibilities and achievements from user-supplied text; individual approval is required.
- Vacancy assistant converts natural-language descriptions into structured criteria and asks clarifying questions.
- Semantic search finds related terminology without falsely equating credentials.
- Matching evaluates job-related skills, experience, qualifications, projects and work arrangement.
- Explanations show satisfied criteria, gaps and unavailable evidence.
- Career assistance suggests transferable skills and development paths, clearly distinguished from qualifications.

No fabricated credentials, hidden sensitive-trait inference, automatic hiring decisions or rejection solely from AI output. Recruiters retain human oversight. Missing information is unknown, not evidence of inability.

## 9. Marketplace and communications

Optional marketplace services include profile creation, experience documentation, skill identification, portfolio development, credential organization, translation and career consultation. The individual owns the profile and approves changes before publication. Prohibit invented work history and fraudulent qualifications.

Initial communications: contact requests, candidate responses, opportunity notifications and interview invitations. Later optional services: bulk email/SMS, templates, segmentation, scheduling and delivery tracking. Enforce consent, preferences, rate limits, provider rules and applicable anti-spam law. Display metered costs before sends.

## 10. Open developer ecosystem

Provide versioned REST APIs, OpenAPI documentation, scoped OAuth authorization, rate limits, pagination, audit logs, webhook signatures and stable error formats. API domains include identity, profiles, skills, experience, education, projects, search, matches, organizations, recruitment, shortlists and contact requests.

External ATS workflow: ATS submits a recruitment brief; TalentOS searches eligible profiles; authorized results are returned; recruiter continues in the ATS. Do not return private contact data without required permission.

## 11. Free-core operating model

Always free: registration, professional identity creation and updates, basic profile export, recruiter registration, core talent search, basic filters, shortlists, contact requests, basic workspace, opportunity notifications and public developer documentation.

Optional revenue: profile assistance, paid third-party verification where a provider charges, metered SMS/email, enterprise support, custom integrations, hosted enterprise services, donations, grants and sponsorships. Do not sell candidate personal information or paywall basic discovery.

## 12. MVP scope

Required: authentication and recovery; individual profile with experience, education, skills and projects; profile editing, visibility and contact preferences; basic export; recruiter and organization registration; structured search and filters; candidate result/detail views; shortlists; contact requests; authorization; audit logging; abuse controls; responsive UX; automated tests and public documentation.

Deferred: autonomous agents, automated employment decisions, universal credential verification, every ATS connector, advanced bulk campaigns, complex marketplace payments, blockchain, premature microservices and paid AI dependencies.

## 13. Acceptance criteria

An individual can register, add multiple experiences and skills, update one persistent profile, control discoverability, hide contact information and export data.

A recruiter can define structured criteria, search by skills/experience/location, inspect match explanations, save a shortlist and request contact.

A recruiter cannot access private fields, another organization's notes or a hidden profile. Contact requests can be accepted or rejected. Sensitive actions are audited.

## 14. Success metrics

North-star: successful talent connections — an organization discovers a person, the person chooses to engage, and both progress to a meaningful recruitment interaction.

Supporting metrics: active/discoverable profiles, profile update rate, active recruiters, search-to-shortlist conversion, shortlist-to-contact conversion, response rate, time to identify qualified candidates, match relevance, fairness metrics, API uptime, search latency, security incidents and infrastructure cost per active user.

## 15. Pilot and risks

Proposed targets, not current users: 1,000 professionals, 50 recruiters, 20 categories, 100 search sessions and at least 10 real recruitment briefs.

Risks include insufficient talent supply, weak recruiter participation, false profile claims, privacy violations, algorithmic bias, infrastructure cost, fake recruiters, spam, low digital literacy, vendor lock-in and jurisdictional compliance. Mitigate through focused two-sided onboarding, evidence labels, privacy-by-design, explainable matching, rate limits, assisted onboarding, provider adapters and jurisdiction reviews.

## 16. Definition of done

A feature is complete only when frontend, backend, database, authorization, validation, error handling, loading/empty states, responsive behavior, tests, documentation and required security review are complete. No fake search results, placeholder buttons represented as working features, simulated verification or unverified deployment claims.
