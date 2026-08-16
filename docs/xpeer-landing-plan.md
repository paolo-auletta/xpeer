# X-Peer landing page — action plan

**Status:** draft for founder review
**Scope:** first public landing page for the X-Peer mentorship programme
**Decision mode:** plan only; no application code is included yet

## 1. Product brief

X-Peer is a peer mentorship community at Bocconi, built by Bocconi students for Bocconi students. The landing page is the public access point from Instagram and other social channels. It has two jobs:

1. Make the programme feel specific, credible, and human within the first few seconds.
2. Turn that understanding into a qualified application from either a first-year mentee or a second-year mentor.

The primary conversion for the first release is an application. Community recognition, social follows, and future member communications support that conversion but should not compete with it.

The product record is captured in [PRODUCT.md](../PRODUCT.md). The supplied narrative remains the copy source of truth in [landing-copy.md](../landing-copy.md).

## 2. Recommended technical stack

### Recommendation

Use a small, static Vite application with React and TypeScript:

| Layer           | Recommendation                                                                            | Why it belongs                                                                                                     | Boundary                                                                             |
| --------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Build/runtime   | Vite + React + TypeScript                                                                 | Familiar to the founders, fast local feedback, enough room for a responsive page and a few interactions            | No server, auth, database, or API layer in v1                                        |
| Styling         | Tailwind CSS + project CSS variables                                                      | Fast responsive composition while keeping the X-Peer palette and typography explicit                               | Do not let a starter theme define the brand                                          |
| Components      | shadcn/ui selectively                                                                     | Use its accessible source components when a real interaction needs one (for example mobile nav, dialog, accordion) | Do not import a full dashboard-style component system or its default visual language |
| Icons           | Supplied X-Peer PNGs/SVGs first; a small UI icon set only for affordances                 | The four supplied topic icons are part of the identity                                                             | Do not replace the supplied icons with generic icon tiles                            |
| Forms           | Tally first; Google Forms fallback; both sync to Google Sheets                            | Removes custom data handling while preserving a practical review workflow                                          | No custom form API or database in v1                                                 |
| Hosting         | Static deployment, defaulting to Vercel; Cloudflare Pages is an equivalent alternative    | Git-based deploys, previews, custom domain support, and no server maintenance                                      | Confirm the domain/provider before launch                                            |
| Package manager | npm unless the repository standard changes                                                | Lowest-friction onboarding for a small founding team                                                               | Keep lockfile committed                                                              |
| Quality         | TypeScript, ESLint, production build, browser smoke checks, manual responsive/a11y review | A one-page marketing site needs reliable delivery more than a large test harness                                   | Add Playwright/Vitest only when a real behavior justifies it                         |

Vite's current React template supports the intended TypeScript setup and static asset imports. shadcn/ui is an open-code component system rather than a fixed visual theme, which makes selective adoption compatible with a custom X-Peer design. The exact package versions and Tailwind setup should be pinned when the scaffold is created, not guessed in this planning document.

### What we do not need yet

- No Next.js/SSR requirement: the page is public, static, and content-led.
- No database, authentication, CMS, member dashboard, or matching engine.
- No custom email pipeline; form notifications and the review sheet are sufficient for the first cohort.
- No analytics dependency until there is a confirmed consent and measurement decision.
- No large UI kit, animation framework, or state-management library.

## 3. Form decision and operating model

The separate [forms plan](xpeer-forms-plan.md) contains the provider comparison and setup checklist. The short version is:

- **Recommended pilot:** two branded Tally forms (mentee and mentor), each connected directly to a shared Google Sheet.
- **Fallback:** two Google Forms connected to Google Sheets if Tally's branding, permissions, or review flow are not acceptable.
- **Landing-page behavior:** the site owns the explanation and CTA; the hosted form owns the data collection. Start with an external full-page form handoff rather than an iframe, then add an embedded or popup version only if it improves completion without hurting accessibility.
- **Configuration:** keep the two form URLs in one small config module or `VITE_` environment variables so the founders can replace a form link without touching layout code. These URLs are public identifiers, not secrets.

The page must never ship with a dead or placeholder application link. If a form URL is not ready, the corresponding CTA should be visibly marked as not yet open and point to an approved contact/update path.

## 4. Page architecture and visitor path

The page follows the supplied copy order, but each section has a conversion job. Anchor names below are implementation targets, not new copy.

### Header

- Forest or ivory logo variant chosen for the current surface.
- Compact anchor navigation to the programme, people, and audience sections.
- Two persistent application actions, with the mentee path visually primary at launch if cohort capacity requires it.
- Mobile navigation uses a native-feeling sheet/dialog only if the number of links requires it; otherwise keep the header quiet and let the page's repeated CTAs do the work.

### Hero — “a year ahead” made immediate

- **Direction:** ivory editorial, as selected in the first discussion round.
- **Copy:** use the opening quote, the one-sentence X-Peer description, and the two supplied CTA labels from `landing-copy.md`.
- **Composition:** large text block on the left; a contained media composition on the right rather than a full-bleed background. The media slot can hold a small set of approved mentor photos or a short muted video with a poster frame.
- **Conversion:** both application actions are visible without scrolling; the page should make the audience and the one-year-ahead mechanism obvious before any decorative motion begins.
- **Media recommendation for v1:** build the component so static approved photos ship first, with a video mode that can be enabled later without changing the hero layout. Video must have a poster, captions or a nearby text alternative where relevant, no audio autoplay, and a reduced-motion fallback.

### The problem — replace luck with a better starting point

- Use the “too much of university depends on who you happen to meet” passage as a high-contrast editorial break, likely on a forest field with lime emphasis.
- Keep this section short and typographically decisive; it is the reason to believe the programme should exist, not a second hero.

### Programme — “one year ahead”

- Introduce the proximity of the mentor relationship before listing benefits.
- Present the four supplied icons as a paced grid/list:
  - `assets/icons/xpeer_icon_direction.png`
  - `assets/icons/xpeer_icon_your_studies.png`
  - `assets/icons/xpeer_icon_getting_in.png`
  - `assets/icons/xpeer_icon_life_in_milan.png`
- Pair each icon with the exact supplied topic label and supporting copy. The icons should be allowed to carry real visual scale instead of being reduced to tiny bullets.
- End with the “it stops feeling like a programme and starts feeling like a friendship” line as the emotional turn.

### Community — “the people”

- Make the wider circle concrete with approved mentor portraits/profiles when available.
- Use real names, programmes, locations, and experiences only after the founders approve the data and image permissions. Do not invent biographies, testimonials, or outcomes.
- The section should visually feel like a network around the mentor relationship, not a generic three-card feature grid.
- Retain “the people are the opportunity” as the section's memorable line.

### Audience — “who it's for”

- Two clear paths: first years and second years.
- Explain the mindset and motivation for each audience in the supplied voice.
- Repeat the relevant CTA close to each path so a visitor does not have to return to the hero.

### Close — applications and the widening circle

- Forest closing band with the supplied “applications for the first cohort are open” message.
- Repeat the two application buttons.
- Finish on “today's mentees become tomorrow's mentors” so the programme's loop is clear.

### Footer

- X-Peer mark/lockup, social links, contact address, and a privacy/data-handling link once approved.
- Keep the footer useful but visually quiet; it should not introduce unsupported claims or a fake newsletter signup.

## 5. Visual direction and design rules

The existing identity kit is the visual authority. The landing page should extend it rather than create a separate website style.

### Tokens

Use CSS variables with the supplied values as the initial source of truth:

```text
forest  #0E4034
notte   #06231C
lime    #CDEE5C
olive   #6B8F14
ivory   #F5F4EC
white   #FFFFFF
```

Use the local Figtree files in `assets/Font - Figtree/` with explicit weights. Do not fetch a replacement web font at runtime.

### Composition grammar

- Ivory is the primary reading field for the first viewport; forest owns full-width moments and contrast sections; lime is a deliberate signal, not a sprinkle of random accents.
- Keep the typography generous and editorial, with lowercase copy preserved where supplied.
- Prefer solid color fields, strong type scale, intentional cropping, and asymmetry over generic SaaS cards, glassmorphism, or gradient decoration.
- Let the supplied icons and approved portraits do the proving. Do not fill missing content with stock photography, invented quotes, counters, or logos.
- Use one spacing rhythm across sections, but vary density so the scroll has a clear pace: statement, explanation, visual proof, audience choice, action.

### Interaction and motion

- Motion should clarify the relationship between sections or bring approved media to life, not turn the page into a demo.
- Respect `prefers-reduced-motion`; content must be fully usable with motion disabled.
- Keep hover/focus states obvious on lime/forest combinations and maintain visible keyboard focus.
- Any hero video is optional media, not a required source of meaning. The poster and text must carry the message alone.

## 6. Content and asset checklist

### Already supplied

- Approved narrative and CTA labels in `landing-copy.md`.
- Figtree font family, including regular, italic, and weight variants.
- Horizontal, vertical, mark, avatar, and favicon logo variants.
- Four topic icon assets.
- Instagram mentor-card reference for tone and visual language.

### Needed before implementation is considered ready

- Final mentee and mentor form URLs (or confirmation that the forms are still being built).
- Final social URLs/handles and a contact email.
- Hero media choice: approved photo collage, video, or both with a fallback poster.
- Approved mentor portraits and the minimum profile facts that may be shown publicly.
- Cohort dates, eligibility/selection notes, and what happens after submission.
- Privacy/consent wording and the Google Sheet owners/permissions.
- Domain and hosting account, plus the production URL.
- Social preview image and page metadata (title, description, favicon, Open Graph image).

## 7. Implementation phases

### Phase 0 — confirm decisions

- Approve this plan's stack and page direction.
- Decide Tally versus Google Forms after creating one representative test form.
- Freeze the first-release copy and provide the missing links/media.

### Phase 1 — scaffold and system

- Create the Vite React TypeScript app and baseline scripts.
- Add Tailwind and the X-Peer CSS variables.
- Register Figtree locally and add the chosen logo/mark assets.
- Add a small `src/config` module for form URLs, social links, and contact details.
- Establish semantic page sections and responsive layout primitives.

### Phase 2 — build the page

- Implement the header/hero first and verify the first viewport on mobile and desktop.
- Add the problem, programme, people, audience, close, and footer sections in copy order.
- Add only the shadcn/ui primitives that solve a real interaction.
- Add photo/video media as a replaceable component with accessible fallback behavior.

### Phase 3 — application handoff

- Wire both CTAs to the selected hosted forms.
- Test the external handoff from every repeated CTA and from mobile.
- Submit dummy applications, verify the Sheet mapping, and remove test data.
- Add a visible confirmation/help path for closed forms or missing URLs.

### Phase 4 — production readiness

- Add title, description, canonical URL, favicon, Open Graph/Twitter metadata, and a meaningful `404` fallback if the host supports it.
- Verify keyboard navigation, focus, contrast, text resizing, reduced motion, image alt text, form link labels, and mobile overflow.
- Run typecheck, lint, production build, and a browser smoke pass at representative widths.
- Optimize images (correct dimensions, modern format where appropriate, lazy-load below-fold media) and keep the first viewport light.

### Phase 5 — launch and handoff

- Connect the repository to the chosen host and configure the custom domain.
- Confirm production form URLs and Sheet permissions one more time.
- Record the launch URL, form owners, content update procedure, and rollback path.
- Revisit analytics only after the team agrees on a privacy-respecting measurement plan.

## 8. Acceptance criteria

The first release is ready when:

- A first-time visitor can identify X-Peer, the one-year-ahead mechanism, and the two audiences in one viewport.
- Both application CTAs work from the hero, audience section, and closing section on phone and desktop.
- The page uses the supplied copy, Figtree font, logos, palette, and topic icons without invented claims.
- The hero has an approved media asset or an intentional, documented fallback; no blank placeholder ships.
- Applications land in the agreed Google Sheet with an agreed owner and consent wording.
- The page remains readable and navigable with keyboard focus, reduced motion, and narrow mobile widths.
- The production build is reproducible from a clean install and has no console errors or broken asset requests.

## 9. Decision register

| ID  | Decision              | Current state                                              | Owner/action                                                                        |
| --- | --------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| D1  | Primary page outcome  | **Confirmed:** applications                                | Keep both paths visible; optimize hierarchy after cohort capacity is known          |
| D2  | Visual first viewport | **Confirmed:** ivory editorial                             | Implement forest/lime contrast moments below and around it                          |
| D3  | Hero media            | **Open:** approved photos, video, or both                  | Provide assets and choose the v1 mode                                               |
| D4  | Form provider         | **Open:** Tally recommended; Google Forms fallback         | Run one test form and check branding, Sheets sync, permissions, and privacy wording |
| D5  | Hosting/domain        | **Open:** Vercel default; Cloudflare Pages equivalent      | Confirm the account and production domain                                           |
| D6  | Public proof          | **Open:** mentor portraits/profile facts and permissions   | Approve the first set or launch typographic/icon-led                                |
| D7  | Measurement           | **Open:** no analytics by default                          | Decide whether a privacy-respecting tool is needed after launch                     |
| D8  | Cohort operations     | **Open:** dates, eligibility, selection, response timeline | Add only confirmed details to page/forms                                            |

## 10. Official references checked

- [Vite documentation](https://vite.dev/guide/)
- [shadcn/ui Vite installation](https://ui.shadcn.com/docs/installation/vite)
- [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Tally pricing and free-plan details](https://tally.so/pricing)
- [Tally Google Sheets integration](https://tally.so/help/google-sheets-integration)
- [Tally embed options](https://tally.so/help/embed-your-form)
- [Google Forms help](https://support.google.com/docs/answer/6281888)
