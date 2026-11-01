# TalentOS — Implementation Roadmap

## Horizon 0 — Secure foundation

Goal: establish a deployable, testable and isolated engineering foundation.

Deliver: canonical repository and governance; license decision; application scaffold and lockfile; Supabase project and environment separation; versioned migrations; authentication foundation; RLS baseline and authorization tests; CI for lint, typecheck, tests and build; secret handling; preview deployment.

Exit gate: clean install, CI passes, no privileged key in client bundle, RLS tests pass, migrations reproducible and environment boundaries documented.

## Horizon 1 — Permanent professional identity

Deliver: progressive onboarding; persistent profile; education, experience, skills, projects and certifications; multiple overlapping career records; draft/publish updates and revision history; visibility and field-level privacy controls; export and deletion workflows.

Exit gate: a person can create, update, hide, export and manage one persistent identity with authorization tests.

## Horizon 2 — Recruiter-led discovery

Deliver: recruiter and organization accounts; structured talent search and filters; candidate result/detail pages; saved searches and shortlists; contact requests and candidate responses; organization-private notes and team roles.

Exit gate: recruiter can discover eligible candidates without a vacancy application flow and cannot see private fields or another tenant's data.

## Horizon 3 — AI-assisted matching

Deliver: natural-language vacancy parsing; semantic search; explainable matching; candidate categorization; profile structuring assistant; evaluation and fairness tests.

Exit gate: AI improves search relevance on a documented evaluation set and structured search remains available without AI.

## Horizon 4 — Ecosystem

Deliver: public API and OpenAPI docs; OAuth scopes and developer application management; ATS connectors and webhooks; professional assistance marketplace; optional email and SMS delivery; consent and abuse controls.

Exit gate: external integrations can search and exchange authorized data with auditability.

## Horizon 5 — Global scale

Deliver: localization and internationalization; country-specific taxonomies; credential verification integrations; multi-currency marketplace support; distributed search improvements; advanced abuse prevention; jurisdiction-specific compliance operations.

Exit gate: reliable operation in multiple markets, backed by performance, security and compliance evidence.

## Pilot targets

Proposed targets, not current user counts: 1,000 professionals, 50 recruiters, 20 professional categories, 100 search sessions and at least 10 real recruitment briefs.

## Delivery rules

Build and verify one milestone at a time. Inspect existing resources before changes. Never reset, drop or delete existing data to make progress. Never add unrelated existing applications to this project. No paid commitments without explicit approval. No feature is complete without tests, authorization, documentation and error states. Report actual results and blockers; never claim an unverified deployment.
