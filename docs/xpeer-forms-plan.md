# X-Peer forms and application operations

**Status:** draft for founder review  
**Goal:** collect mentee and mentor applications without building a backend

## 1. Recommendation

Pilot two Tally forms:

- `X-Peer — mentee application`
- `X-Peer — mentor application`

Connect each form directly to a Google Sheet owned by the founding team. Keep the forms separate so the question flow, eligibility language, and review filters can differ without conditional-logic complexity.

Google Forms remains the fallback if the team prefers the most familiar workflow or wants to avoid a second account. It is operationally safe but visually harder to make feel like X-Peer.

## 2. Provider comparison

| Option | Strengths | Trade-offs | Recommendation |
| --- | --- | --- | --- |
| Tally | Branded layouts, hosted links, embeds/popups, conditional logic, and a current free Google Sheets integration; its pricing page advertises unlimited forms/submissions within fair-use guidelines | Free forms retain Tally branding; custom domain/removing branding is a paid concern; privacy/DPA still needs founder review | **Best first pilot** |
| Google Forms | Familiar, free, easy collaboration, native response-to-Sheets workflow, straightforward stop/close controls | Limited visual control and weaker brand continuity; embeds can feel visually disconnected | **Fallback / fastest launch** |
| Fillout | Modern form builder, flexible question types, Google Sheets integration | Verify current free-tier limits and branding before committing | Good alternative if Tally's editor or terms do not fit |
| Custom form/backend | Full control over design and data model | Adds hosting, security, spam handling, validation, privacy, maintenance, and review tooling | Defer until the programme needs matching, accounts, or a member dashboard |

Provider pricing and limits can change. Re-check the selected provider's current plan and terms immediately before launch.

## 3. Proposed workflow

1. Create the mentee and mentor forms in the shared X-Peer account.
2. Add the approved questions, required fields, consent copy, and a clear submission expectation.
3. Connect each form to its own tab in one shared Google workbook, or to two workbooks if access boundaries require it.
4. Restrict Sheet access to the founders/reviewers who genuinely need it.
5. Submit one dummy response from desktop and mobile; verify every field maps to the correct column and that notifications arrive as expected.
6. Delete the dummy response and record who owns the live forms and Sheet.
7. Add the live URLs to the site's central config and test every repeated CTA in production.

## 4. Question design principles

The founders still need to author the exact application questions. The form plan should preserve these principles:

- Ask only for information needed to select, contact, and match participants.
- Separate eligibility/context questions from reflective questions so applicants understand the flow.
- Make the year/programme and Bocconi contact address explicit where required by the programme.
- Tell applicants what happens after submission and when they should expect a reply, once that process is confirmed.
- Avoid collecting sensitive personal data unless there is a documented reason and an approved handling plan.
- Use a required consent checkbox with a short explanation of purpose, access, retention, and contact. Link to a privacy notice when one exists.
- If applications may close, set a clear closed-form message rather than leaving a dead CTA on the site.

## 5. Landing-page integration

### Default v1: external hosted form

- The X-Peer page explains the programme and owns the CTA language.
- The CTA navigates to the hosted form's full-page URL.
- Keep the form URL in `src/config` or a `VITE_` environment variable so it is easy to rotate.
- Use descriptive labels such as “apply as a first year — opens application form” for assistive technology.
- Preserve a back path to the landing page and add a contact fallback if a form is closed or unavailable.

### Optional v1.1: embedded or popup form

Try an embed/popup only after the external form works. Validate:

- no nested scrollbars on phone;
- keyboard focus enters and exits the form predictably;
- the provider's branding does not conflict with the X-Peer page;
- submissions still sync correctly;
- errors and success states remain visible and understandable.

## 6. Data and privacy checklist

Tally states that it is based in Belgium, encrypts form data in transit and at rest, stores form data in Europe, and provides a DPA; it also states that the form creator controls the collected responses. Those statements are useful inputs, not a substitute for the founders' own privacy review or legal advice.

Before launch, confirm:

- who is the data controller for X-Peer's applications;
- what data is collected and why;
- where the response Sheet is stored and who can access it;
- how long applications are retained and how they are deleted;
- what communication applicants are consenting to;
- whether a privacy notice or institutional Bocconi process applies;
- what happens if a participant asks for access or deletion.

Do not add analytics pixels or marketing integrations to the forms until the same consent and retention decisions are settled.

## 7. Launch checklist

- [ ] Mentee form approved and published.
- [ ] Mentor form approved and published.
- [ ] Google Sheets tabs created and access reviewed.
- [ ] Consent and retention wording approved.
- [ ] Test submissions completed and removed.
- [ ] Form owners and backup owner recorded.
- [ ] Live URLs added to the site config.
- [ ] Every CTA tested on narrow mobile and desktop.
- [ ] Closed-form behavior documented.
- [ ] Post-launch review date set to inspect response quality and completion friction.

## 8. Escalation point for custom software

Revisit a custom application system only when one of these becomes true:

- applications need authenticated Bocconi-only access;
- mentors and mentees must be matched automatically;
- reviewers need role-based workflows beyond Sheets;
- applicants need status updates or a member account;
- the programme has enough volume that manual review is the bottleneck;
- the team needs a durable data model that a hosted form cannot provide.

Until then, a hosted form plus a carefully owned Sheet is the lower-risk system.

## 9. Official references checked

- [Tally pricing](https://tally.so/pricing)
- [Tally Google Sheets integration](https://tally.so/help/google-sheets-integration)
- [Tally embed documentation](https://tally.so/help/embed-your-form)
- [Tally GDPR overview](https://tally.so/help/gdpr)
- [Google Forms help](https://support.google.com/docs/answer/6281888)
- [Google Forms response management](https://support.google.com/docs/answer/139706)
