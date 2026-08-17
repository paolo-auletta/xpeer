import logoIvory from "../../assets/xpeer-logo/lockup/xpeer-lockup-ivory.svg";
import { type RevealState, useRevealOnView } from "../hooks/useLandingMotion";
import { applicationForms } from "../lib/applicationLinks";
import { cn } from "../lib/cn";
import { ActionContent, actionPressMotion } from "./ActionContent";
import { ApplicationLink } from "./ApplicationLink";
import { ArrowIcon } from "./ArrowIcon";

const applicationRingSizes = [
  "h-full w-full",
  "h-[70%] w-[70%] [animation-delay:80ms]",
  "h-[38%] w-[38%] bg-[color-mix(in_srgb,var(--color-lime)_8%,transparent)] [animation-delay:160ms]",
] as const;

function ApplicationRings({ state }: { state: RevealState }) {
  const isPending = state === "pending";

  return (
    <div
      className="absolute right-[-15rem] bottom-[-24rem] h-[58rem] w-[58rem] max-[42rem]:right-[-15rem] max-[42rem]:bottom-[-10rem] max-[42rem]:h-[32rem] max-[42rem]:w-[32rem]"
      aria-hidden="true"
    >
      {applicationRingSizes.map((size) => (
        <span
          className={cn(
            "absolute top-1/2 left-1/2 rounded-[50%] border border-[color-mix(in_srgb,var(--color-lime)_40%,transparent)]",
            isPending
              ? "opacity-0 [transform:translate(-50%,-50%)_scale(0.9)] motion-reduce:opacity-100 motion-reduce:[transform:translate(-50%,-50%)_scale(1)]"
              : "opacity-100 [transform:translate(-50%,-50%)_scale(1)]",
            state === "revealed" &&
              "animate-application-ring-grow motion-reduce:animate-none",
            size,
          )}
          key={size}
        />
      ))}
    </div>
  );
}

export function Applications() {
  const [applicationsRef, applicationsRevealState] = useRevealOnView();

  return (
    <section
      ref={applicationsRef}
      className="relative min-h-0 overflow-hidden bg-forest px-[var(--page-pad)] py-[clamp(6rem,9vw,8rem)] text-ivory max-[42rem]:pt-[5.5rem] max-[42rem]:pb-20"
      id="applications"
    >
      <ApplicationRings state={applicationsRevealState} />
      <div className="relative z-[2] mx-auto grid max-w-[91rem] grid-cols-[minmax(0,1fr)_minmax(23rem,0.72fr)] gap-[clamp(3rem,7vw,8rem)] max-[56rem]:grid-cols-1 max-[42rem]:gap-10">
        <div>
          <h2 className="m-0 pb-[0.08em] font-extrabold tracking-[-0.04em] text-balance max-w-[10ch] text-[clamp(4rem,7.5vw,7.2rem)] leading-none max-[42rem]:max-w-[9ch] max-[42rem]:text-[clamp(3.6rem,16vw,4.7rem)]">
            applications for the first cohort{" "}
            <span
              className={cn(
                "hero-underline hero-underline--on-reveal text-lime",
                applicationsRevealState === "revealed" &&
                  "hero-underline--revealed",
              )}
            >
              are open.
            </span>
          </h2>
        </div>
        <div className="grid self-center gap-[0.7rem]">
          <ApplicationLink
            application={applicationForms.mentee}
            className={cn(
              "grid min-h-[6.7rem] cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border-0 p-[1.1rem] text-left text-notte opacity-100 transition-shadow duration-200 ease-xpeer-out hover:[box-shadow:0_0.8rem_2rem_color-mix(in_srgb,var(--color-notte)_28%,transparent)] motion-reduce:duration-[0.01ms] max-[42rem]:min-h-[5.9rem]",
              "bg-lime",
              actionPressMotion,
            )}
          >
            <span className="flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-current text-[0.72rem] font-bold">
              01
            </span>
            <ActionContent
              labelClassName="flex flex-col gap-[0.3rem]"
              arrowContainerClassName="flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-forest bg-forest text-[0.9rem] font-bold text-ivory"
            >
              <b className="text-[clamp(1.15rem,1.8vw,1.55rem)]">
                apply as a mentee
              </b>
            </ActionContent>
          </ApplicationLink>
          <ApplicationLink
            application={applicationForms.mentor}
            className={cn(
              "grid min-h-[6.7rem] cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border-0 p-[1.1rem] text-left text-notte opacity-100 transition-shadow duration-200 ease-xpeer-out hover:[box-shadow:0_0.8rem_2rem_color-mix(in_srgb,var(--color-notte)_28%,transparent)] motion-reduce:duration-[0.01ms] max-[42rem]:min-h-[5.9rem]",
              "bg-ivory hover:bg-ivory",
              actionPressMotion,
            )}
          >
            <span className="flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-current text-[0.72rem] font-bold">
              02
            </span>
            <ActionContent
              labelClassName="flex flex-col gap-[0.3rem]"
              arrowContainerClassName="flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-forest bg-forest text-[0.9rem] font-bold text-ivory"
            >
              <b className="text-[clamp(1.15rem,1.8vw,1.55rem)]">
                join as a mentor
              </b>
            </ActionContent>
          </ApplicationLink>
        </div>
        <p className="col-span-full mt-0 mr-0 mb-0 ml-auto max-w-[31ch] pb-[0.08em] text-right text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1.12] font-light text-balance max-[56rem]:ml-0 max-[56rem]:text-left max-[42rem]:mt-2 max-[42rem]:max-w-[24ch] max-[42rem]:text-[clamp(1.8rem,8vw,2.35rem)]">
          today's mentees become{" "}
          <strong className="font-bold text-lime">
            <span className="whitespace-nowrap">tomorrow's mentors</span>. the
            circle only ever widens.
          </strong>
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-notte px-[var(--page-pad)] pt-[clamp(3.5rem,5vw,5rem)] pb-8 text-ivory max-[42rem]:pt-16">
      <div className="mx-auto flex max-w-[91rem] [align-items:end] justify-between gap-12 max-[42rem]:flex-col max-[42rem]:[align-items:start] max-[42rem]:gap-10">
        <a href="#top" aria-label="X-Peer, back to top">
          <img
            className="h-auto w-[clamp(8rem,16vw,14rem)] max-[42rem]:w-32"
            src={logoIvory}
            alt="X-Peer"
          />
        </a>
        <p className="m-0 max-w-[36ch] text-right text-[clamp(1rem,1.4vw,1.2rem)] leading-normal font-normal tracking-normal text-ivory-muted max-[42rem]:max-w-[34ch] max-[42rem]:text-left max-[42rem]:text-base">
          if you want to go fast, go alone. if you want to go far, go together.
        </p>
      </div>
      <div className="mx-auto mt-[clamp(2.75rem,4vw,4rem)] grid max-w-[91rem] grid-cols-[1fr_auto_1fr] items-center gap-8 border-t [border-top-color:color-mix(in_srgb,var(--color-ivory)_24%,transparent)] pt-[1.3rem] max-[56rem]:grid-cols-1">
        <p className="m-0 text-[0.75rem] text-ivory-muted">
          peer mentorship, one year apart.
        </p>
        <nav
          className="flex gap-[clamp(1rem,2.5vw,2.3rem)] max-[42rem]:flex-wrap max-[42rem]:gap-x-6 max-[42rem]:gap-y-4"
          aria-label="Footer navigation"
        >
          <a
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-[0.85rem] font-semibold no-underline"
            href="#programme"
          >
            programme
          </a>
          <a
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-[0.85rem] font-semibold no-underline"
            href="#people"
          >
            people
          </a>
          <a
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-[0.85rem] font-semibold no-underline"
            href="#who-its-for"
          >
            who it's for
          </a>
          <a
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-[0.85rem] font-semibold no-underline"
            href="#applications"
          >
            applications
          </a>
        </nav>
        <a
          className="inline-flex min-h-11 items-center [justify-self:end] gap-[0.45rem] text-[0.75rem] text-ivory-muted no-underline max-[56rem]:[justify-self:start]"
          href="#top"
        >
          back to top <ArrowIcon direction="up" />
        </a>
      </div>
    </footer>
  );
}
