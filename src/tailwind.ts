export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const displayHeading =
  "m-0 pb-[0.08em] font-bold tracking-[-0.04em] text-balance";

const actionMotion =
  "group transition-[transform] duration-[140ms] ease-xpeer-out active:[transform:scale(0.97)] motion-reduce:duration-[80ms] motion-reduce:active:[transform:scale(0.985)]";

export const tw = {
  arrowIcon:
    "h-4 w-4 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:1.7]",
  actionMotion,
  actionLabel:
    "[transition-property:transform] duration-200 ease-xpeer-out fine-pointer:group-hover:[transform:translateX(0.22rem)] motion-reduce:duration-[0.01ms]",
  actionArrow:
    "[transition-property:transform] duration-200 ease-xpeer-out fine-pointer:group-hover:[transform:rotate(-45deg)_scale(0.94)] motion-reduce:duration-[0.01ms]",

  header:
    "fixed top-[0.85rem] left-1/2 z-50 grid h-16 w-[min(calc(100%_-_2rem),78rem)] [transform:translateX(-50%)] grid-cols-[1fr_auto_1fr] items-center rounded-[999px] border border-[color-mix(in_srgb,var(--color-forest)_16%,transparent)] bg-[color-mix(in_srgb,var(--color-ivory)_96%,transparent)] py-0 pr-[0.55rem] pl-[1.15rem] [box-shadow:0_0.6rem_2rem_color-mix(in_srgb,var(--color-notte)_8%,transparent)] max-[56rem]:grid-cols-[1fr_auto] max-[42rem]:top-[0.7rem] max-[42rem]:h-[3.45rem] max-[42rem]:w-[calc(100%_-_2rem)] max-[42rem]:pl-[0.85rem]",
  brandLink: "[justify-self:start]",
  headerLogo: "h-8 w-auto max-[42rem]:h-[1.6rem]",
  desktopNav:
    "flex items-center gap-[clamp(1.15rem,2.5vw,2.6rem)] max-[56rem]:hidden",
  desktopNavLink:
    "relative text-[0.85rem] font-semibold no-underline after:absolute after:bottom-[-0.25rem] after:left-0 after:h-px after:w-full after:origin-right after:[transform:scaleX(0)] after:bg-forest after:[transition-property:transform] after:duration-200 after:ease-[ease] hover:after:origin-left hover:after:[transform:scaleX(1)] motion-reduce:after:duration-[0.01ms]",
  headerAction:
    "inline-flex min-h-[2.9rem] items-center [justify-self:end] gap-[0.8rem] rounded-[999px] bg-forest px-4 py-[0.65rem] text-[0.84rem] font-bold text-ivory no-underline transition-[background,color] [transition-duration:200ms,200ms] [transition-timing-function:ease,ease] hover:bg-lime hover:text-notte motion-reduce:duration-[0.01ms] max-[42rem]:min-h-[2.55rem] max-[42rem]:gap-[0.45rem] max-[42rem]:px-[0.75rem] max-[42rem]:py-[0.6rem] max-[42rem]:text-[0.67rem]",

  heroSection: "bg-notte text-ivory",
  hero:
    "mx-auto grid min-h-svh max-w-[91rem] grid-cols-[minmax(0,1fr)_minmax(29rem,0.92fr)] grid-rows-[1fr_auto] gap-[clamp(2.5rem,4vw,5rem)] px-[var(--page-pad)] pt-[clamp(7.5rem,12vh,9rem)] pb-7 max-[68rem]:grid-cols-[minmax(0,1fr)_minmax(25rem,0.82fr)] max-[68rem]:gap-10 max-[56rem]:grid-cols-1 max-[56rem]:grid-rows-[auto_auto_auto] max-[56rem]:pt-[7.5rem] max-[42rem]:min-h-svh max-[42rem]:max-w-none max-[42rem]:grid-cols-1 max-[42rem]:grid-rows-1 max-[42rem]:gap-0 max-[42rem]:p-0",
  heroCopy:
    "self-center max-w-[46rem] py-8 pb-12 max-[56rem]:pb-0 max-[42rem]:relative max-[42rem]:z-[2] max-[42rem]:max-w-none max-[42rem]:[align-self:end] max-[42rem]:px-[var(--page-pad)] max-[42rem]:pt-0 max-[42rem]:pb-[max(1.2rem,env(safe-area-inset-bottom))] max-[42rem]:text-ivory max-[42rem]:[grid-area:1/1]",
  heroTitle:
    "m-0 max-w-[14ch] pb-[0.08em] text-[clamp(3.15rem,4.65vw,4.8rem)] leading-[1.04] font-semibold tracking-[-0.035em] text-ivory text-balance max-[68rem]:text-[clamp(3.5rem,6.7vw,5rem)] max-[56rem]:max-w-[12ch] max-[42rem]:max-w-[16ch] max-[42rem]:text-[clamp(2.65rem,10.5vw,3.5rem)] max-[42rem]:leading-[0.99] max-[42rem]:tracking-[-0.04em] max-[42rem]:text-ivory",
  heroTitleLine: "block",
  heroTitleAccent:
    "mt-[0.22em] block font-bold text-lime max-[42rem]:mt-[0.28em] max-[42rem]:text-lime",
  heroSummary:
    "mt-[clamp(1.8rem,3.5vw,2.8rem)] mb-0 max-w-[35rem] text-[clamp(1.08rem,1.45vw,1.32rem)] leading-[1.48] max-[42rem]:mt-4 max-[42rem]:max-w-[33ch] max-[42rem]:text-[clamp(1rem,4.6vw,1.12rem)] max-[42rem]:leading-[1.48] max-[42rem]:tracking-[-0.015em] max-[42rem]:text-ivory-muted",
  heroActions:
    "mt-8 grid max-w-[35rem] grid-cols-2 gap-[0.6rem] max-[42rem]:mt-[0.9rem] max-[42rem]:grid-cols-1 max-[42rem]:gap-[0.45rem]",
  action:
    "inline-flex min-h-[3.75rem] items-center justify-between gap-4 rounded-[0.9rem] py-[0.55rem] pr-[0.6rem] pl-4 text-[0.95rem] font-bold no-underline max-[42rem]:min-h-[2.9rem] max-[42rem]:w-full max-[42rem]:py-[0.55rem]",
  actionPrimary: "bg-lime text-notte hover:text-notte",
  actionSecondary:
    "bg-ivory text-notte [box-shadow:inset_0_0_0_1px_color-mix(in_srgb,var(--color-forest)_48%,transparent)] hover:text-notte hover:[box-shadow:inset_0_0_0_1px_color-mix(in_srgb,var(--color-forest)_48%,transparent)] max-[42rem]:[box-shadow:none] max-[42rem]:hover:[box-shadow:none]",
  actionIcon:
    "box-content rounded-[50%] bg-forest p-[0.55rem] text-ivory",

  heroVisual:
    "relative m-0 aspect-[0.84] min-h-[34rem] max-h-[47rem] self-center overflow-hidden rounded-[1.75rem] max-[68rem]:min-h-0 max-[56rem]:aspect-[1.18] max-[56rem]:min-h-0 max-[42rem]:h-svh max-[42rem]:min-h-svh max-[42rem]:max-h-none max-[42rem]:w-full max-[42rem]:rounded-none max-[42rem]:[aspect-ratio:auto] max-[42rem]:[grid-area:1/1]",
  heroPhoto:
    "h-full w-full animate-hero-photo-in object-cover [object-position:57%_center] motion-reduce:animate-hero-photo-fade",
  heroWash:
    "absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,color-mix(in_srgb,var(--color-notte)_76%,transparent))] max-[42rem]:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-notte)_7%,transparent)_0%,color-mix(in_srgb,var(--color-notte)_24%,transparent)_30%,color-mix(in_srgb,var(--color-notte)_83%,transparent)_55%,color-mix(in_srgb,var(--color-notte)_96%,transparent)_100%)]",
  heroHandoff:
    "absolute top-[47%] right-[clamp(1rem,6%,2.25rem)] left-[clamp(1rem,7%,2.5rem)] grid grid-cols-[auto_minmax(2.75rem,1fr)_auto] items-center max-[42rem]:hidden",
  heroBridge:
    "h-[clamp(2.5rem,7vw,4.25rem)] w-[calc(100%_+_0.3rem)] -mx-[0.15rem] overflow-visible",
  heroBridgePath:
    "animate-handoff-flow fill-none stroke-lime [stroke-dasharray:7_5] [stroke-linecap:round] [stroke-width:2.75] [vector-effect:non-scaling-stroke] motion-reduce:animate-none",
  yearPin:
    "relative z-[1] flex items-center gap-[0.45rem] whitespace-nowrap rounded-[999px] bg-ivory py-[0.35rem] pr-[0.65rem] pl-[0.35rem] text-[0.72rem] font-bold text-notte uppercase",
  yearPinNumber:
    "inline-flex h-8 w-8 items-center justify-center rounded-[50%] bg-lime text-[0.78rem]",
  heroCaption:
    "absolute bottom-6 left-6 z-[1] flex flex-col text-ivory max-[42rem]:hidden",
  captionLabel:
    "text-[0.72rem] font-bold tracking-[0.1em] uppercase",
  captionStrong:
    "mt-1 text-[clamp(1.35rem,2vw,2rem)] font-semibold",

  problem:
    "bg-forest px-[var(--page-pad)] py-[clamp(6.5rem,9vw,9rem)] text-ivory max-[42rem]:py-20",
  problemInner:
    "mx-auto grid max-w-[91rem] grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] gap-[clamp(4rem,8vw,9rem)] max-[56rem]:grid-cols-1 max-[42rem]:gap-9",
  problemStatement:
    "m-0 max-w-[17ch] [align-self:start] pb-[0.08em] text-[clamp(3.2rem,5.2vw,5.6rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance max-[42rem]:max-w-[16ch] max-[42rem]:text-[clamp(2.65rem,10.5vw,3.5rem)] max-[42rem]:leading-none",
  problemStory:
    "max-w-[40rem] self-center max-[56rem]:ml-0 max-[56rem]:w-[min(100%,42rem)] max-[56rem]:max-w-[46rem]",
  problemStoryText:
    "m-0 text-[clamp(1.25rem,1.8vw,1.65rem)] leading-normal tracking-[-0.015em] text-ivory-muted max-[42rem]:text-[clamp(1.05rem,4.8vw,1.15rem)] max-[42rem]:leading-normal",
  problemStoryStrong:
    "mt-[0.35em] block text-[1.12em] leading-[1.25] font-bold text-lime max-[42rem]:mt-[0.65rem]",

  programme:
    "mx-auto max-w-[91rem] px-[var(--page-pad)] pt-[clamp(6.5rem,10vw,10rem)] pb-[clamp(7rem,12vw,12rem)] max-[42rem]:pt-20 max-[42rem]:pb-[5.5rem]",
  programmeIntro: "m-0 max-w-none",
  programmeHeading: "min-w-0",
  programmeTitle: `${displayHeading} max-w-[10ch] text-[clamp(3.7rem,7vw,7rem)] leading-[0.92] max-[42rem]:text-[clamp(2.75rem,12vw,3.75rem)] max-[42rem]:leading-[0.96]`,
  programmeSubheading:
    "mt-[clamp(1.4rem,2.2vw,2rem)] mb-0 max-w-[22ch] text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.2] font-normal tracking-[-0.02em] text-forest-muted max-[42rem]:mt-4 max-[42rem]:text-[clamp(1.05rem,4.8vw,1.2rem)] max-[42rem]:leading-[1.35]",
  pathways:
    "mt-[clamp(4.5rem,7vw,7rem)] grid grid-cols-2 max-[42rem]:mt-11 max-[42rem]:grid-cols-1",
  pathway:
    "flex min-h-[27rem] flex-col py-6 pr-[clamp(1rem,4vw,4rem)] pb-[clamp(3rem,5vw,5rem)] pl-0 max-[42rem]:min-h-0 max-[42rem]:px-0 max-[42rem]:py-4 max-[42rem]:pb-10",
  pathwayEven:
    "border-l pl-[clamp(1.5rem,4vw,4rem)] pr-0! [border-left-color:color-mix(in_srgb,var(--color-forest)_22%,transparent)] max-[42rem]:border-l-0 max-[42rem]:[border-left-color:currentColor] max-[42rem]:px-0",
  pathwayTopBorder:
    "border-t [border-top-color:color-mix(in_srgb,var(--color-forest)_32%,transparent)]",
  pathwayMobileTopBorder:
    "max-[42rem]:border-t max-[42rem]:[border-top-color:color-mix(in_srgb,var(--color-forest)_32%,transparent)]",
  pathwayTopline:
    "flex items-start justify-between max-[42rem]:grid max-[42rem]:grid-cols-[minmax(0,1fr)_auto] max-[42rem]:gap-4",
  pathwayNumber:
    "text-[0.8rem] font-bold tracking-[0.08em] text-forest-muted",
  pathwayImage:
    "relative h-[clamp(6.5rem,10vw,8rem)] w-[clamp(6.5rem,10vw,8rem)] overflow-hidden rounded-[1.15rem] max-[42rem]:h-[5.5rem] max-[42rem]:w-[5.5rem]",
  pathwayImageContent: "h-full w-full object-contain",
  pathwayCopy:
    "mt-auto pt-16 max-[42rem]:mt-0 max-[42rem]:pt-6",
  pathwayTitle:
    "m-0 pb-[0.07em] text-[clamp(2.35rem,4.5vw,4.6rem)] leading-[1.02] font-bold tracking-[-0.04em] text-accent-text max-[42rem]:text-[clamp(2.4rem,10.5vw,3rem)]",
  pathwayDescription:
    "mt-[1.2rem] mb-0 max-w-[28rem] text-[clamp(1.08rem,1.5vw,1.3rem)] leading-[1.42] max-[42rem]:mt-[0.7rem] max-[42rem]:text-base max-[42rem]:leading-[1.45]",
  friendship:
    "relative mt-[clamp(6rem,10vw,10rem)] flex min-h-[clamp(27rem,38vw,34rem)] items-center justify-center overflow-hidden rounded-[1.25rem] bg-lime p-[clamp(3.5rem,7vw,7rem)] text-notte after:absolute after:top-[-12rem] after:right-[-12rem] after:h-[32rem] after:w-[32rem] after:rounded-[50%] after:border after:border-[color-mix(in_srgb,var(--color-forest)_28%,transparent)] max-[42rem]:min-h-[27rem] max-[42rem]:rounded-2xl max-[42rem]:py-8 max-[42rem]:px-[1.3rem] max-[42rem]:after:top-[-6rem] max-[42rem]:after:right-[-5rem] max-[42rem]:after:h-[20rem] max-[42rem]:after:w-[20rem]",
  friendshipText:
    "relative z-[1] m-0 max-w-[18ch] pb-[0.1em] text-center text-[clamp(2.7rem,5.7vw,5.7rem)] leading-[1.06] font-light tracking-[-0.04em] text-balance max-[42rem]:text-[clamp(2.45rem,10.8vw,3.25rem)] max-[42rem]:leading-[1.08]",
  friendshipStrong: "mt-[0.15em] block font-bold",

  people:
    "grid grid-cols-[minmax(0,0.78fr)_minmax(32rem,1.22fr)] gap-[clamp(3rem,7vw,8rem)] bg-notte px-[var(--page-pad)] py-[clamp(6.5rem,10vw,10rem)] text-ivory max-[68rem]:grid-cols-[minmax(0,0.82fr)_minmax(27rem,1.18fr)] max-[56rem]:grid-cols-1 max-[42rem]:gap-14 max-[42rem]:pt-[6.5rem] max-[42rem]:pb-20",
  peopleCopy: "max-w-[40rem] self-center",
  peopleTitle: `${displayHeading} text-[clamp(3.7rem,6.4vw,6.4rem)] leading-none text-lime max-[42rem]:text-[clamp(3.6rem,16vw,4.7rem)]`,
  peopleParagraph:
    "mt-8 mb-0 text-[clamp(1.05rem,1.35vw,1.2rem)] leading-[1.58] text-ivory-muted",
  peopleHighlight:
    "people-highlight box-decoration-clone rounded-[0.15em] px-[0.18em] pt-[0.08em] pb-[0.12em] leading-[inherit] font-bold",
  peoplePhoto:
    "relative m-0 aspect-[1.16] self-center overflow-hidden rounded-3xl after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_55%,color-mix(in_srgb,var(--color-notte)_64%,transparent))] max-[56rem]:aspect-[1.5] max-[42rem]:aspect-[0.92] max-[42rem]:rounded-2xl",
  peoplePhotoImage:
    "h-full w-full object-cover object-center max-[42rem]:[object-position:55%_center]",
  peopleCaption: "absolute bottom-6 left-6 z-[1] flex flex-col text-ivory",

  audience:
    "mx-auto max-w-[91rem] px-[var(--page-pad)] pt-[clamp(6.5rem,10vw,10rem)] pb-[clamp(8rem,12vw,12rem)] max-[42rem]:pt-[6.5rem] max-[42rem]:pb-28",
  audienceHeading:
    "mt-0 max-[42rem]:flex-col max-[42rem]:gap-[1.2rem] max-[42rem]:[align-items:start]",
  audienceTitle: `${displayHeading} text-[clamp(3.7rem,7vw,7rem)] leading-none max-[42rem]:text-[clamp(3.6rem,16vw,4.7rem)]`,
  audienceSubheading:
    "mt-[1.4rem] mb-0 max-w-[31ch] text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.2] font-normal tracking-[-0.02em] text-forest-muted max-[42rem]:mt-0",
  audienceSplit:
    "mt-[clamp(4rem,7vw,6rem)] grid grid-cols-2 gap-[0.8rem] max-[42rem]:mt-14 max-[42rem]:grid-cols-1",
  audiencePath:
    "flex min-h-[34rem] flex-col rounded-[1.4rem] p-[clamp(1.5rem,3vw,2.5rem)] max-[42rem]:min-h-[27rem] max-[42rem]:p-[1.3rem]",
  audiencePathFirst: "bg-lime text-notte",
  audiencePathSecond: "bg-forest text-ivory",
  audienceNumber:
    "flex aspect-square h-10 w-10 items-center justify-center self-end rounded-[50%] border border-current p-0 text-[0.78rem] font-bold",
  audiencePathCopy:
    "mt-auto pt-20 max-[42rem]:pt-14",
  audienceLabel:
    "mt-0 mb-6 text-[clamp(2.8rem,5vw,5rem)] leading-[1.02] font-bold tracking-[-0.04em] max-[42rem]:text-[3.4rem]",
  audienceDescription:
    "m-0 max-w-[31rem] text-[clamp(1.15rem,1.65vw,1.45rem)] leading-[1.42]",
  audienceLink:
    "relative mt-[clamp(3.5rem,6vw,5.5rem)] flex items-center justify-between border-t border-current pt-4 text-[0.92rem] font-bold no-underline before:absolute before:top-[-1px] before:left-0 before:h-px before:w-full before:origin-left before:[transform:scaleX(0)] before:bg-current before:[transition-property:transform] before:duration-200 before:ease-xpeer-out fine-pointer:hover:before:[transform:scaleX(1)] motion-reduce:before:duration-[0.01ms] max-[42rem]:mt-10",

  applications:
    "relative min-h-0 overflow-hidden bg-forest px-[var(--page-pad)] py-[clamp(6rem,9vw,8rem)] text-ivory max-[42rem]:pt-[5.5rem] max-[42rem]:pb-20",
  applicationsContent:
    "relative z-[2] mx-auto grid max-w-[91rem] grid-cols-[minmax(0,1fr)_minmax(23rem,0.72fr)] gap-[clamp(3rem,7vw,8rem)] max-[56rem]:grid-cols-1 max-[42rem]:gap-10",
  applicationsTitle: `${displayHeading} max-w-[10ch] text-[clamp(4rem,7.5vw,7.2rem)] leading-none max-[42rem]:max-w-[9ch] max-[42rem]:text-[clamp(3.6rem,16vw,4.7rem)]`,
  applicationsActions: "grid self-center gap-[0.7rem]",
  applicationButton:
    "grid min-h-[6.7rem] cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border-0 p-[1.1rem] text-left text-notte opacity-100 transition-shadow duration-200 ease-xpeer-out hover:[box-shadow:0_0.8rem_2rem_color-mix(in_srgb,var(--color-notte)_28%,transparent)] motion-reduce:duration-[0.01ms] max-[42rem]:min-h-[5.9rem]",
  applicationButtonPrimary: "bg-lime",
  applicationButtonSecondary: "bg-ivory hover:bg-ivory",
  applicationButtonNumber:
    "flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-current text-[0.72rem] font-bold",
  applicationButtonArrow:
    "flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-notte bg-notte text-[0.9rem] font-bold text-ivory",
  applicationButtonLabel: "flex flex-col gap-[0.3rem]",
  applicationButtonLabelStrong:
    "text-[clamp(1.15rem,1.8vw,1.55rem)]",
  applicationsClosing:
    "col-span-full mt-0 mr-0 mb-0 ml-auto max-w-[31ch] pb-[0.08em] text-right text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1.12] font-light text-balance max-[56rem]:ml-0 max-[56rem]:text-left max-[42rem]:mt-2 max-[42rem]:max-w-[24ch] max-[42rem]:text-[clamp(1.8rem,8vw,2.35rem)]",
  applicationsClosingStrong: "font-bold text-lime",
  applicationsUnbroken: "whitespace-nowrap",
  applicationsRings:
    "absolute right-[-15rem] bottom-[-24rem] h-[58rem] w-[58rem] max-[42rem]:right-[-15rem] max-[42rem]:bottom-[-10rem] max-[42rem]:h-[32rem] max-[42rem]:w-[32rem]",
  applicationRing:
    "absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] rounded-[50%] border border-[color-mix(in_srgb,var(--color-lime)_40%,transparent)]",
  applicationRingGrow:
    "animate-application-ring-grow motion-reduce:animate-none",
  applicationRingLarge: "h-full w-full",
  applicationRingMedium: "h-[70%] w-[70%] [animation-delay:80ms]",
  applicationRingSmall:
    "h-[38%] w-[38%] bg-[color-mix(in_srgb,var(--color-lime)_8%,transparent)] [animation-delay:160ms]",

  footer:
    "bg-notte px-[var(--page-pad)] pt-[clamp(3.5rem,5vw,5rem)] pb-8 text-ivory max-[42rem]:pt-16",
  footerLead:
    "mx-auto flex max-w-[91rem] [align-items:end] justify-between gap-12 max-[42rem]:flex-col max-[42rem]:[align-items:start] max-[42rem]:gap-10",
  footerLogo:
    "h-auto w-[clamp(8rem,16vw,14rem)] max-[42rem]:w-32",
  footerLeadText:
    "m-0 max-w-[36ch] text-right text-[clamp(1rem,1.4vw,1.2rem)] leading-normal font-normal tracking-normal text-ivory-muted max-[42rem]:max-w-[34ch] max-[42rem]:text-left max-[42rem]:text-base",
  footerBottom:
    "mx-auto mt-[clamp(2.75rem,4vw,4rem)] grid max-w-[91rem] grid-cols-[1fr_auto_1fr] items-center gap-8 border-t [border-top-color:color-mix(in_srgb,var(--color-ivory)_24%,transparent)] pt-[1.3rem] max-[56rem]:grid-cols-1",
  footerMeta: "m-0 text-[0.75rem] text-ivory-muted",
  footerNav:
    "flex gap-[clamp(1rem,2.5vw,2.3rem)] max-[42rem]:flex-wrap max-[42rem]:gap-x-6 max-[42rem]:gap-y-4",
  footerNavLink: "text-[0.85rem] font-semibold no-underline",
  footerTop:
    "inline-flex items-center [justify-self:end] gap-[0.45rem] text-[0.75rem] text-ivory-muted no-underline max-[56rem]:[justify-self:start]",
} as const;
