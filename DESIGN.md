---
name: X-Peer
description: "A warm editorial system for one-year-ahead peer mentorship at Bocconi."
colors:
  forest: "#0e4034"
  notte: "#06231c"
  lime: "#ceee5c"
  ivory: "#f5f4ec"
  forest-muted: "#3e6a61"
  ivory-muted: "#d4d7c5"
typography:
  display:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(3.7rem, 7vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  display-italic:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(3.8rem, 5.7vw, 5.9rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  statement:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(2.7rem, 5.7vw, 5.7rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  body-large:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(1.08rem, 1.5vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "clamp(1.03rem, 1.35vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.08em"
rounded:
  control: "1rem"
  panel: "1.25rem"
  card: "1.5rem"
  feature: "1.75rem"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "0.45rem"
  sm: "0.7rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  page-gutter: "clamp(1.25rem, 4.25vw, 4.75rem)"
  section-block: "clamp(6.5rem, 10vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.05rem 0.75rem 1.2rem"
    height: "3.2rem"
  button-primary-hover:
    backgroundColor: "{colors.notte}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.forest}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.05rem 0.75rem 1.2rem"
    height: "3.2rem"
  button-secondary-hover:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.notte}"
    rounded: "{rounded.pill}"
  navigation-action:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1rem"
    height: "2.9rem"
  application-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.notte}"
    rounded: "{rounded.control}"
    padding: "1.1rem"
    height: "7.3rem"
  application-secondary:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.notte}"
    rounded: "{rounded.control}"
    padding: "1.1rem"
    height: "7.3rem"
---

# Design System: X-Peer

## Overview

**Creative North Star: "The One-Year Handoff"**

X-Peer makes mentorship visible as one student passing hard-won context to another only a year behind. The world is warm, candid, and editorial: generous ivory reading fields open into full forest rooms, while documentary student photography keeps every promise attached to real people rather than club symbolism.

The system feels ambitious without hype. Large lowercase Figtree statements carry the narrative, lime marks the moment knowledge or opportunity changes hands, and compact controls keep action close without turning the experience into generic student-organization chrome. Composition should feel deliberately edited, never assembled from arbitrary dividers, interchangeable cards, or abstract network diagrams.

**Key Characteristics:**

- Photo-led and human before diagrammatic or institutional.
- Editorial scale with plainspoken, lowercase copy.
- Ivory reading fields alternating with immersive forest rooms.
- Lime reserved for handoffs, outcomes, and decisive action.
- Compact navigation and clearly distinct audience paths.

## Colors

The palette moves between quiet paper, immersive evergreen rooms, and one vivid lime signal.

### Primary

- **Bocconi Forest** (`#0e4034`): The primary brand field, default text color, and confident action surface.
- **Muted Forest** (`#3e6a61`): Supporting copy and metadata on ivory where full forest would compete with the headline.

### Secondary

- **Handoff Lime** (`#ceee5c`): The visible transfer signal for emphasized conclusions, route marks, selected chips, and the highest-energy action surfaces.

### Tertiary

### Neutral

- **Night Forest** (`#06231c`): The deepest room color, image wash, and high-contrast ink against lime or ivory.
- **Reading Ivory** (`#f5f4ec`): The default canvas and light text color on forest rooms.
- **Soft Ivory** (`#d4d7c5`): Secondary text in dark rooms, preserving hierarchy without introducing gray.

### Named Rules

**The Handoff Signal Rule.** Lime marks a transfer, consequence, or next step; it is not ambient decoration.

**The Two-Room Rule.** Build atmosphere through ivory reading fields and full forest rooms, then use Night Forest only when a deeper, more intimate register is required.

## Typography

**Display Font:** Figtree (with sans-serif fallback)  
**Body Font:** Figtree (with sans-serif fallback)  
**Label Font:** Figtree (with sans-serif fallback)

**Character:** One family does all the work, shifting from intimate light statements to emphatic heavy headlines. The result is direct and youthful without relying on ornamental display type.

### Hierarchy

- **Display** (700, `clamp(3.7rem, 7vw, 7rem)`, 0.92): Primary section promises; keep line breaks short, balanced, and editorial.
- **Display Italic** (700 italic, `clamp(3.8rem, 5.7vw, 5.9rem)`, 0.94): A rare opening or quoted promise, never a default treatment for every headline.
- **Statement** (300, `clamp(2.7rem, 5.7vw, 5.7rem)`, 1.06): Human-scale declarations that turn bold only at the resolved phrase.
- **Body Large** (400, `clamp(1.08rem, 1.5vw, 1.3rem)`, 1.55): Explanatory copy with an approximate 28–35rem measure.
- **Body** (400, `clamp(1.03rem, 1.35vw, 1.2rem)`, 1.55): Supporting narrative and card copy.
- **Label** (700, `0.72rem`, `0.08em` tracking): Numbers, pins, captions, and small navigation cues; uppercase only where the label behaves like metadata.

### Named Rules

**The One-Family Rule.** Create voice through Figtree weight, scale, italic, and case before introducing another typeface.

**The Resolution Rule.** Light statements may turn bold at their emotional conclusion; do not sprinkle mixed weights without a narrative reason.

## Layout

The system uses a broad editorial shell (`91rem`) with fluid horizontal gutters (`clamp(1.25rem, 4.25vw, 4.75rem)`) and generous section spacing (`clamp(6.5rem, 10vw, 10rem)`). Wide layouts favor one meaningful asymmetry or a clear two-column relationship; related routes may use equal halves when comparison is the point.

At `68rem`, wide relationships tighten; at `56rem`, major two-column compositions become one column; at `42rem`, the system becomes a direct mobile reading sequence with compact gutters (`1.15rem`). Paired audience paths stack and touch actions expand to full width. Keep the first actionable choice visible early, but do not promote any one landing-page composition into a universal template.

**The Structured Relationship Rule.** Every split must express a real relationship—handoff, comparison, or context and proof—not merely fill available width.

## Elevation & Depth

The system is flat and tonal by default. Depth comes from changing whole-room color, image washes, overlapping labels, and scale. The compact floating navigation is the only persistently lifted surface, using a diffuse low shadow (`0 0.6rem 2rem color-mix(in srgb, var(--notte) 8%, transparent)`); outlined controls use inset strokes rather than card shadows.

### Shadow Vocabulary

- **Floating Frame** (`0 0.6rem 2rem color-mix(in srgb, var(--notte) 8%, transparent)`): Reserved for the compact fixed navigation frame.
- **Inset Outline** (`inset 0 0 0 1px var(--forest)`): Gives secondary controls definition without lifting them from the page.

### Named Rules

**The Flat-by-Default Rule.** Do not scatter ambient card shadows; use tonal rooms, borders, or photographic layering unless an element genuinely floats above the document.

## Shapes

The form language alternates between compact capsules and gently rounded editorial panels. Pills (`999px`) belong to the navigation action, identity pins, and short trait chips; primary application choices use compact panels (`1rem`). Circles (`50%`) hold sequence numbers or directional controls. Large photographs and statement panels use soft corners (`1.25rem` to `1.75rem`) that feel friendly without becoming bubbly.

Circular geometry must carry meaning such as sequence, continuity, or the widening mentorship cycle. It is not a license for abstract people maps, orbit diagrams, or doubled icon treatments.

## Components

Components feel direct, compact, and tactile; every state should reinforce the same handoff logic as the content.

### Buttons

- **Shape:** Application choices use gently curved corners (`1rem`); pills are reserved for the navigation action and metadata-scale controls.
- **Primary:** Forest on ivory with strong Figtree labels, compact vertical padding, and one circular down-right arrow.
- **Hover / Focus:** Hover rises slightly (`0.1–0.15rem`) and changes tone in `180ms ease`; keyboard focus uses a visible lime outline (`0.2rem`) with a clear offset (`0.25rem`).
- **Secondary:** Ivory with a one-pixel forest inset outline; on hover it gains a clearer Forest edge while keeping Night Forest text.
- **Application Actions:** Present both routes as active, equally legible choices. Form integration may be attached later without changing their visual state.

### Chips

- **Style:** Small Figtree labels in ivory capsules with Night Forest ink; use lime for the selected or narratively emphasized trait.
- **State:** Chips annotate people or sequence; they are not decoration and should not multiply into a generic tag cloud.

### Cards / Containers

- **Corner Style:** Soft editorial corners (`1rem` to `1.5rem`) with no default shadow.
- **Background:** Use Forest, Lime, Ivory, or photography as decisive full surfaces.
- **Shadow Strategy:** Flat by default; refer to Elevation & Depth.
- **Border:** Thin, low-contrast rules may clarify internal structure, but not act as arbitrary section dividers.
- **Internal Padding:** Responsive card padding begins near `1.3rem` and expands to `2.5rem` where long-form reading needs more air.

### Navigation

- **Style:** A compact ivory floating capsule with the supplied X-Peer lockup, a short centered link group on wide screens, and one Forest action pill.
- **States:** Text links reveal a restrained underline; the action turns lime and rises slightly. The link group disappears below `56rem`, preserving the brand and primary action.
- **Constraint:** Navigation must remain compact and content-proportional, never a tall or full-width institutional bar.

### One-Year Markers

Sequence markers pair an ivory capsule with a lime numbered circle, connected only when a single purposeful route clarifies a real student-to-student handoff. Use one icon or route treatment per idea; never show doubled variants or substitute an abstract network.

No input or field pattern has shipped yet. Document hosted-form fields only after the application experience exists.

## Do's and Don'ts

### Do:

- **Do** let documentary student photography carry the human proof, with labels tied to specific people or moments.
- **Do** use actual supplied X-Peer logos, Figtree files, and the selected supplied path-illustration style.
- **Do** reserve lime for handoffs, resolved statements, selected details, and decisive actions.
- **Do** give split audiences two clearly structured paths with equal dignity and distinct color roles.
- **Do** replace the temporary stock photography with real X-Peer or member photography when it becomes available.

### Don't:

- **Don't** fall back to generic club chrome, tall navigation, or full-width institutional headers.
- **Don't** use arbitrary dividers, layouts, or card grids that do not express a content relationship.
- **Don't** use abstract people/network diagrams when photography or a direct one-to-one handoff can tell the story.
- **Don't** show doubled icon variants or multiple competing illustration styles for the same idea.
- **Don't** invent application fields, form behavior, social links, or member claims before those facts exist.
