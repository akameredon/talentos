# TalentOS — Technical Architecture

**Status:** Proposed architecture. No production services or database are provisioned yet.

## 1. Approach

Start with a modular monolith, not distributed microservices. Keep domain boundaries explicit so modules can be extracted later when scale and operational evidence justify it.

## 2. Proposed stack

- Web: Next.js App Router, TypeScript, accessible components and Tailwind CSS.
- Backend: server-side application services and versioned API routes.
- Database: PostgreSQL.
- Authentication: Supabase Auth.
- Authorization: server-side checks plus PostgreSQL Row Level Security (RLS).
- Search: PostgreSQL indexes, full-text search and pg_trgm.
- Semantic retrieval: pgvector only after baseline search is measured.
- Files: private object storage with short-lived signed URLs.
- Jobs: background queue/worker for indexing, notifications and AI tasks.
- AI: provider-neutral adapter; no provider is mandatory for core workflows.
- Testing: unit, integration, RLS authorization and browser end-to-end tests.
- Delivery: CI checks and separate preview/production environments.

Verify versions and provider selections when implementation begins. Avoid floating production dependencies.

## 3. Logical modules

Identity/authentication; professional profile; privacy/consent; taxonomy/skills; search/matching; organizations/recruiter workspace; shortlists/contact requests; notifications/communications; marketplace (later); developer API/integrations; audit/moderation/administration.

## 4. Data domains

Identity/access: users, profiles, profile_visibility, profile_privacy_settings, organizations, organization_members, roles, permissions, user_consents.

Professional record: education, employment_history, skills, profile_skills, projects, certifications, achievements, languages, professional_references, career_preferences, profile_revisions, profile_evidence.

Recruitment: vacancies, recruitment_requirements, saved_searches, search_sessions, candidate_matches, shortlists, shortlist_members, contact_requests, interview_invitations, recruitment_notes, candidate_responses.

Later marketplace: service_providers, service_listings, service_orders, service_deliverables, service_reviews, marketplace_disputes.

Later communications: communication_preferences, communication_campaigns, communication_recipients, communication_deliveries, message_templates, notification_events.

Later developer ecosystem: api_applications, api_permissions, api_tokens, webhook_subscriptions, webhook_events, integration_logs.

Governance: audit_logs, consent_records, data_export_requests, data_deletion_requests, abuse_reports, security_events.

## 5. Data invariants

- Internal IDs are not public profile identifiers.
- A person can have overlapping work and project records.
- Standard taxonomy IDs coexist with user-authored descriptions.
- Evidence and verification status are separate from a claim.
- Profile ownership is explicit.
- Organization data and private recruiter notes are tenant-isolated.
- Visibility checks apply to UI, server functions, database access and APIs.
- Search indexes do not leak fields hidden by the owner.
- Profile revisions are auditable and exportable.
- Sensitive personal attributes are not used for ranking.

## 6. Search pipeline

Authenticate recruiter and resolve organization scope; validate criteria and reject prohibited sensitive criteria; apply visibility and consent constraints; execute indexed structured filters; apply full-text relevance; optionally apply semantic retrieval; rank using explicit job-related criteria; return permitted fields and match explanations; audit access and contact actions.

Structured search must work without AI. AI matching can be asynchronous.

## 7. API conventions

Versioned routes under /api/v1; OpenAPI; OAuth 2.0 with narrow scopes for third-party clients; short-lived access tokens and revocation; cursor pagination; idempotency for retryable writes; standardized errors; request IDs; audit correlation; signed webhooks with retries and replay protection; per-client rate limits.

## 8. Environments

Separate local, preview/staging and production environments. Never use production personal data in tests. Use synthetic fixtures. Keep secrets in deployment secret stores, not source control. Database changes are versioned migrations. Backups and restore tests are required before real user data is collected.

## 9. Target repository layout

- apps/web
- apps/worker (only when background processing is needed)
- packages/ui, database, auth, search, matching, ai-adapters, validation, shared-types
- supabase/migrations, seed, tests
- docs
- tests/unit, integration, e2e
- .github/workflows

Do not create empty abstractions solely to match a directory tree.

## 10. Performance targets

Initial targets to benchmark, not guarantees: structured search P95 under 500 ms on the agreed pilot dataset; typical result page P95 under 1 second; AI matching asynchronous where needed; cursor pagination for large result sets; observable and recoverable index refresh.

Optimize query plans, indexes, pagination, caching and background work before introducing a dedicated search service. Extract modules only when measured operational need justifies it.
