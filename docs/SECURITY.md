# TalentOS — Security, Privacy and Trust

Security and privacy are release blockers, not post-launch enhancements.

## Core requirements

- Least privilege across users, organizations, providers and administrators.
- Row Level Security for user-owned and tenant-owned data.
- Server-side authorization for every sensitive operation.
- Never expose Supabase service-role keys or privileged secrets to browsers.
- Keep private files in private storage; issue short-lived signed URLs only after authorization.
- Validate inputs at API and database boundaries.
- Rate-limit authentication, search, contact requests, exports and messaging.
- Log security-relevant actions without logging secrets or unnecessary personal data.
- Maintain backups, recovery procedures and incident response documentation.
- Scan dependencies and review third-party licenses.

## Profile privacy

Support public, recruiter-discoverable, private and temporarily unavailable modes. Field-level visibility applies to contact details, precise location, salary expectations, documents and references.

Search results must not reveal private fields. Public indexing is opt-in and limited to explicitly public fields. Authenticated search, APIs, exports and integrations enforce the same permissions.

## Consent and contact

Candidates control contact preferences and can accept or reject contact requests. Support blocking, reporting, opt-out and revocation. Bulk communications require appropriate consent or another valid legal basis, enforce unsubscribe rules and applicable anti-spam requirements, and use provider suppression lists.

## Evidence and verification

Distinguish self-declared, endorsed and independently verified claims. Record source, timestamp, scope and expiry where relevant. Uploading a document or extracting data with AI does not make a claim verified.

## AI and fairness

No invented credentials, work history or endorsements. No inference or use of protected/sensitive traits for matching. No hidden ranking criteria. No automated hiring decisions or rejection solely from AI scores. Expose job-related explanations and missing information. Allow corrections and dispute reporting. Test outcomes for disparate impact. Missing data is unknown, not evidence of lack of ability.

## Data lifecycle and global compliance

Provide access, correction, export, visibility/restriction and deletion workflows subject to applicable retention requirements. Define retention schedules for accounts, documents, audit logs, communications and backups. Deletion must cover derived indexes and queued processing within documented windows.

Before operating in each jurisdiction, assess applicable data protection, employment, anti-discrimination, automated decision-making, consumer protection, electronic marketing and cross-border transfer obligations. Examples may include GDPR/UK GDPR, Nigeria Data Protection Act and CCPA/CPRA where applicable. This document is not legal advice; obtain jurisdiction-specific review.

## Release security gates

Before accepting real personal data: RLS tests for every private table; cross-tenant isolation tests; authorization tests for all API routes; file access/upload tests; authentication/session tests; rate-limit tests; dependency and secret scanning; backup/restore rehearsal; incident response owner; privacy notice and terms review.

Publish a security contact and responsible disclosure process before public launch. Triage vulnerability reports privately.
