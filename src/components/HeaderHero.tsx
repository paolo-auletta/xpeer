import logoForest from "../../assets/xpeer-logo/lockup/xpeer-lockup-forest.svg";
import mentorConversation from "../../assets/stock/mentor-conversation.jpg";
import { cn } from "../lib/cn";
import { applicationLinks } from "../lib/applicationLinks";
import { ActionContent, actionPressMotion } from "./ActionContent";

export function Header() {
  return (
    <header className="fixed top-[0.85rem] left-1/2 z-50 grid h-16 w-[min(calc(100%_-_2rem),78rem)] [transform:translateX(-50%)] grid-cols-[1fr_auto_1fr] items-center rounded-[999px] border border-[color-mix(in_srgb,var(--color-forest)_16%,transparent)] bg-[color-mix(in_srgb,var(--color-ivory)_96%,transparent)] py-0 pr-[0.55rem] pl-[1.15rem] [box-shadow:0_0.6rem_2rem_color-mix(in_srgb,var(--color-notte)_8%,transparent)] max-[56rem]:grid-cols-[1fr_auto] max-[42rem]:top-[0.7rem] max-[42rem]:h-[3.45rem] max-[42rem]:w-[calc(100%_-_2rem)] max-[42rem]:pl-[0.85rem]">
      <a
        className="[justify-self:start]"
        href="#top"
        aria-label="X-Peer, back to top"
      >
        <img
          className="h-8 w-auto max-[42rem]:h-[1.6rem]"
          src={logoForest}
          alt="X-Peer"
        />
      </a>

      <nav
        className="flex items-center gap-[clamp(1.15rem,2.5vw,2.6rem)] max-[56rem]:hidden"
        aria-label="Primary navigation"
      >
        <a
          className="relative text-[0.85rem] font-semibold no-underline after:absolute after:bottom-[-0.25rem] after:left-0 after:h-px after:w-full after:origin-right after:[transform:scaleX(0)] after:bg-forest after:[transition-property:transform] after:duration-200 after:ease-[ease] hover:after:origin-left hover:after:[transform:scaleX(1)] motion-reduce:after:duration-[0.01ms]"
          href="#programme"
        >
          programme
        </a>
        <a
          className="relative text-[0.85rem] font-semibold no-underline after:absolute after:bottom-[-0.25rem] after:left-0 after:h-px after:w-full after:origin-right after:[transform:scaleX(0)] after:bg-forest after:[transition-property:transform] after:duration-200 after:ease-[ease] hover:after:origin-left hover:after:[transform:scaleX(1)] motion-reduce:after:duration-[0.01ms]"
          href="#people"
        >
          the people
        </a>
        <a
          className="relative text-[0.85rem] font-semibold no-underline after:absolute after:bottom-[-0.25rem] after:left-0 after:h-px after:w-full after:origin-right after:[transform:scaleX(0)] after:bg-forest after:[transition-property:transform] after:duration-200 after:ease-[ease] hover:after:origin-left hover:after:[transform:scaleX(1)] motion-reduce:after:duration-[0.01ms]"
          href="#who-its-for"
        >
          who it's for
        </a>
      </nav>

      <a
        className={cn(
          "inline-flex min-h-[2.9rem] items-center [justify-self:end] gap-[0.8rem] rounded-[999px] bg-forest px-4 py-[0.65rem] text-[0.84rem] font-bold text-ivory no-underline transition-[background,color] [transition-duration:200ms,200ms] [transition-timing-function:ease,ease] hover:bg-lime hover:text-notte motion-reduce:duration-[0.01ms] max-[42rem]:min-h-[2.55rem] max-[42rem]:gap-[0.45rem] max-[42rem]:px-[0.75rem] max-[42rem]:py-[0.6rem] max-[42rem]:text-[0.72rem]",
          actionPressMotion,
        )}
        href="#applications"
      >
        <ActionContent>apply now</ActionContent>
      </a>
    </header>
  );
}

function HeroVisual() {
  return (
    <figure className="relative m-0 aspect-[0.84] min-h-[34rem] max-h-[47rem] self-center overflow-hidden rounded-[1.75rem] max-[68rem]:min-h-0 max-[56rem]:aspect-[1.18] max-[56rem]:min-h-0 max-[42rem]:h-svh max-[42rem]:min-h-svh max-[42rem]:max-h-none max-[42rem]:w-full max-[42rem]:rounded-none max-[42rem]:[aspect-ratio:auto] max-[42rem]:[grid-area:1/1]">
      <img
        className="h-full w-full animate-hero-photo-in object-cover [object-position:57%_center] motion-reduce:animate-hero-photo-fade"
        src={mentorConversation}
        alt="University students talking together between lectures."
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,color-mix(in_srgb,var(--color-notte)_76%,transparent))] max-[42rem]:bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-notte)_7%,transparent)_0%,color-mix(in_srgb,var(--color-notte)_24%,transparent)_30%,color-mix(in_srgb,var(--color-notte)_83%,transparent)_55%,color-mix(in_srgb,var(--color-notte)_96%,transparent)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[47%] right-[clamp(1rem,6%,2.25rem)] left-[clamp(1rem,7%,2.5rem)] grid grid-cols-[auto_minmax(2.75rem,1fr)_auto] items-center max-[42rem]:hidden"
        aria-hidden="true"
      >
        <span className="relative z-[1] flex items-center gap-[0.45rem] whitespace-nowrap rounded-[999px] bg-ivory py-[0.35rem] pr-[0.65rem] pl-[0.35rem] text-[0.72rem] font-bold text-notte uppercase">
          <b className="inline-flex h-8 w-8 items-center justify-center rounded-[50%] bg-lime text-[0.78rem]">
            01
          </b>
          mentee
        </span>
        <svg
          className="h-[clamp(2.5rem,7vw,4.25rem)] w-[calc(100%_+_0.3rem)] -mx-[0.15rem] overflow-visible"
          viewBox="0 0 100 32"
          preserveAspectRatio="none"
        >
          <path
            className="animate-handoff-flow fill-none stroke-lime [stroke-dasharray:7_5] [stroke-linecap:round] [stroke-width:2.75] [vector-effect:non-scaling-stroke] motion-reduce:animate-none"
            d="M0 16 C 30 -8, 70 -8, 100 16"
          />
        </svg>
        <span className="relative z-[1] flex items-center gap-[0.45rem] whitespace-nowrap rounded-[999px] bg-ivory py-[0.35rem] pr-[0.65rem] pl-[0.35rem] text-[0.72rem] font-bold text-notte uppercase">
          <b className="inline-flex h-8 w-8 items-center justify-center rounded-[50%] bg-lime text-[0.78rem]">
            02
          </b>
          mentor
        </span>
      </div>
      <figcaption className="absolute bottom-6 left-6 z-[1] flex flex-col text-ivory max-[42rem]:hidden">
        <span className="text-[0.72rem] font-bold tracking-[0.1em] uppercase">
          one year apart
        </span>
        <strong className="mt-1 text-[clamp(1.35rem,2vw,2rem)] font-semibold">
          close enough to remember.
        </strong>
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <section className="bg-notte text-ivory" id="top">
      <div className="mx-auto grid min-h-svh max-w-[91rem] grid-cols-[minmax(0,1fr)_minmax(29rem,0.92fr)] grid-rows-[1fr_auto] gap-[clamp(2.5rem,4vw,5rem)] px-[var(--page-pad)] pt-[clamp(7.5rem,12vh,9rem)] pb-7 max-[68rem]:grid-cols-[minmax(0,1fr)_minmax(25rem,0.82fr)] max-[68rem]:gap-10 max-[56rem]:grid-cols-1 max-[56rem]:grid-rows-[auto_auto_auto] max-[56rem]:pt-[7.5rem] max-[42rem]:min-h-svh max-[42rem]:max-w-none max-[42rem]:grid-cols-1 max-[42rem]:grid-rows-1 max-[42rem]:gap-0 max-[42rem]:p-0">
        <div className="self-center max-w-[46rem] py-8 pb-12 max-[56rem]:pb-0 max-[42rem]:relative max-[42rem]:z-[2] max-[42rem]:max-w-none max-[42rem]:[align-self:end] max-[42rem]:px-[var(--page-pad)] max-[42rem]:pt-0 max-[42rem]:pb-[max(1.2rem,env(safe-area-inset-bottom))] max-[42rem]:text-ivory max-[42rem]:[grid-area:1/1]">
          <h1 className="m-0 max-w-[14ch] pb-[0.08em] text-[clamp(3.35rem,5.1vw,5.25rem)] leading-[0.98] font-extrabold tracking-[-0.04em] text-ivory text-balance max-[68rem]:text-[clamp(3.55rem,7vw,5.2rem)] max-[56rem]:max-w-[12ch] max-[42rem]:max-w-[16ch] max-[42rem]:text-[clamp(2.65rem,10.5vw,3.5rem)] max-[42rem]:leading-[0.99] max-[42rem]:tracking-[-0.04em] max-[42rem]:text-ivory">
            <span className="block">
              if you want to go fast, go alone.
            </span>
            <span className="mt-[0.22em] block font-black text-lime max-[42rem]:mt-[0.28em] max-[42rem]:text-lime">
              if you want to go far, <span className="hero-underline">go together</span>.
            </span>
          </h1>
          <p className="mt-[clamp(1.8rem,3.5vw,2.8rem)] mb-0 max-w-[35rem] text-[clamp(1.08rem,1.45vw,1.32rem)] leading-[1.48] max-[42rem]:mt-4 max-[42rem]:max-w-[33ch] max-[42rem]:text-[clamp(1rem,4.6vw,1.12rem)] max-[42rem]:leading-[1.48] max-[42rem]:tracking-[-0.015em] max-[42rem]:text-ivory-muted">
            xpeer is a peer mentorship community at Bocconi. mentees and mentors
            are one year apart, with a circle of people worth knowing.
          </p>
          <div
            className="mt-8 grid max-w-[35rem] grid-cols-2 gap-[0.6rem] max-[42rem]:mt-[0.9rem] max-[42rem]:grid-cols-1 max-[42rem]:gap-[0.45rem]"
            aria-label="Application paths"
          >
            <a
              className={cn(
                "inline-flex min-h-[3.75rem] items-center justify-between gap-4 rounded-[0.9rem] py-[0.55rem] pr-[0.6rem] pl-4 text-[0.95rem] font-bold no-underline max-[42rem]:min-h-[2.9rem] max-[42rem]:w-full max-[42rem]:py-[0.55rem]",
                "bg-lime text-notte hover:text-notte",
                actionPressMotion,
              )}
              href={applicationLinks.mentee}
            >
              <ActionContent arrowClassName="box-content rounded-[50%] bg-forest p-[0.55rem] text-ivory">
                apply as a mentee
              </ActionContent>
            </a>
            <a
              className={cn(
                "inline-flex min-h-[3.75rem] items-center justify-between gap-4 rounded-[0.9rem] py-[0.55rem] pr-[0.6rem] pl-4 text-[0.95rem] font-bold no-underline max-[42rem]:min-h-[2.9rem] max-[42rem]:w-full max-[42rem]:py-[0.55rem]",
                "bg-ivory text-notte [box-shadow:inset_0_0_0_1px_color-mix(in_srgb,var(--color-forest)_48%,transparent)] hover:text-notte hover:[box-shadow:inset_0_0_0_1px_color-mix(in_srgb,var(--color-forest)_48%,transparent)] max-[42rem]:[box-shadow:none] max-[42rem]:hover:[box-shadow:none]",
                actionPressMotion,
              )}
              href={applicationLinks.mentor}
            >
              <ActionContent arrowClassName="box-content rounded-[50%] bg-forest p-[0.55rem] text-ivory">
                join as a mentor
              </ActionContent>
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
