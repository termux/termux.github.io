---
layout: page
title: Security Incident Response Checklist
redirect_from: /security-incident-response-checklist
page_ref: /security-incident-response-checklist.html
---

A Termux security incident response will normally have the following `5` phases.

- [Phase 1: Initial Assessment and Validation](#phase-1-initial-assessment-and-validation)
- [Phase 2: Immediate Response and Mitigation](#phase-2-immediate-response-and-mitigation)
- [Phase 3: Impact Assessment and User Analysis](#phase-3-impact-assessment-and-user-analysis)
- [Phase 4: Communication and Release](#phase-4-communication-and-release)
- [Phase 5: Post-Incident Review](#phase-5-post-incident-review)

See also [Emergency Contacts](#emergency-contacts).

---

&nbsp;





## Phase 1: Initial Assessment and Validation

### Updates

<< Use this section to detail the report received, initial assessment, and validation results. >>

Example:

I have reviewed the security report and confirmed this vulnerability exists in termux component or package FOOBAR.

Assessment of exploitability:

- Attack complexity: [High/Medium/Low]
- Prerequisites: [Authentication required/Network access/Specific configuration/etc]
- User interaction required: [Yes/No]

Potential impact:
- User data confidentiality: [At risk/Not affected]
- Termux VPS integrity: [At risk/Not affected]
- Estimated affected installations: [Number/Percentage]

### Resources

- [Termux Security Policy](https://termux.dev/security)
- [CVE Scoring Calculator](https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator)

### Tasks

- [ ] Reproduce the vulnerability in test environment.
- [ ] Assess CVSS score and severity level.
- [ ] Check if vulnerability affects current stable release.
- [ ] Check if vulnerability affects current beta release (if applicable).
- [ ] Determine if this requires immediate action or can wait for next release cycle.
- [ ] Document technical details and root cause.

### Assessment Summary

- **Severity Level**: `Critical|High|Medium|Low`
- **CVSS Score**: `X.X`
- **Affects versions**: `X.Y.Z to X.Y.Z`
- **Root cause**: Brief technical explanation
- **Introduced in commit/version**: `commit-hash` or `vX.Y.Z`
- **Attack vector**: `Malicious termux package|another installed app|...`
- **Estimated timeline for fix**: `X days/weeks`

---

&nbsp;





## Phase 2: Immediate Response and Mitigation

### Updates

<< Document immediate actions taken and mitigation strategies or call out any blockers or challenges. >>

Example:

Working on hotfix for component FOOBAR version X.Y.Z. Temporary workaround available by removing/disabling [feature/package].

### Tasks

- [ ] Implement immediate workaround if possible.
- [ ] Update security advisory draft.
- [ ] Prepare patch/hotfix.
- [ ] Test fix thoroughly in development environment.
- [ ] Prepare updated Docker images and binaries.
- [ ] Draft security advisory for GitHub Security Advisories.
- [ ] Consider if coordinated disclosure timeline needs adjustment.

### Mitigation Details

- **Workaround available**: `Yes|No` - If yes, describe briefly
- **Fix implemented on**: `YYYY-MM-DD`
- **Patch/hotfix version**: `vX.Y.Z`
- **GitHub Security Advisory ID**: `GHSA-XXXX-XXXX-XXXX`

---

&nbsp;





## Phase 3: Impact Assessment and User Analysis

### Updates

<< Analysis of potential impact on the Termux deployments. >>

Based on app-download statistics from F-Droid, or package download statistics from VPS, approximately X installations may be affected.

### Tasks

- [ ] Estimate number of vulnerable installations.
- [ ] Assess if default configurations are vulnerable.
- [ ] If possible, review if vulnerability has been exploited (check logs etc).
- [ ] Determine if any user data may have been compromised.
- [ ] Check for indicators of active exploitation in the wild.

### Analysis Notes

_Document your impact assessment process and findings._

### Impact Summary

- **Estimated vulnerable installations**: `~X out of Y`
- **Default configuration vulnerable**: `Yes|No`
- **Evidence of exploitation**: `Found|Not found|Unknown`
- **User data potentially at risk**: `Email content|Credentials|Keys|Configuration|None`
- **Confidence in assessment**: `High|Medium|Low`

---

&nbsp;





## Phase 4: Communication and Release

### Updates

<< Communication strategy and release timeline. >>

Security release vX.Y.Z will be published on YYYY-MM-DD with coordinated disclosure.

### Tasks

**Pre-release preparation:**

- [ ] Finalize security patch.
- [ ] Prepare release notes with security details.
- [ ] Update documentation if needed.
- [ ] Test automated update mechanisms.
- [ ] Prepare GitHub Security Advisory.

**Communication channels:**

- [ ] Draft announcement for Termux community on website, reddit and matrix/discord.
- [ ] Prepare release announcement for GitHub.
- [ ] Draft security advisory content.
- [ ] Consider notification to major distributors/packagers.

**Release execution:**

- [ ] Update bootstraps for termux-app (if applicable).
- [ ] Publish patched version to GitHub releases.
- [ ] Publish GitHub Security Advisory.
- [ ] Post to community channels (reddit/matrix/discord).
- [ ] Update project website/documentation.
- [ ] Submit CVE request if warranted (CVSS ≥ 4.0).

**Post-release:**

- [ ] Monitor community channels for questions.
- [ ] Track adoption of security update.
- [ ] Follow up on any additional reports.
- [ ] Document lessons learned.

### Communication Record

- **Security release published**: `YYYY-MM-DD HH:MM UTC`
- **GitHub Security Advisory**: `GHSA-XXXX-XXXX-XXXX`
- **CVE ID** (if applicable): `CVE-YYYY-XXXXX`
- **Community announcement**: [Link to forum post]
- **Estimated time to 50% adoption**: `X days/weeks`

---

&nbsp;





## Phase 5: Post-Incident Review

### What went well?
- 

### What could be improved?
- 

### Action items for future incidents:
- [ ] 
- [ ] 
- [ ] 

### Process improvements:
- [ ] 
- [ ] 

---

&nbsp;





## Emergency Contacts

- [@Grimler91](https://github.com/Grimler91) ([grimler@termux.dev](mailto:grimler@termux.dev))
- [@agnostic-apollo](https://github.com/agnostic-apollo) ([agnostic-apollo@termux.dev](mailto:agnostic-apollo@termux.dev))

---

&nbsp;
