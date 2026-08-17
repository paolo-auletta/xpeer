import logoIvory from "../../assets/xpeer-logo/lockup/xpeer-lockup-ivory.svg";
import { useRevealOnView } from "../hooks/useLandingMotion";
import { applicationLinks } from "../lib/applicationLinks";
import { cn } from "../lib/cn";
import { ArrowIcon } from "./ArrowIcon";

export function Applications() {
  const [applicationsRef, applicationsVisible] = useRevealOnView();

  return (
    <section
      ref={applicationsRef}
      className="relative min-h-0 overflow-hidden bg-forest px-[var(--page-pad)] py-[clamp(6rem,9vw,8rem)] text-ivory max-[42rem]:pt-[5.5rem] max-[42rem]:pb-20"
      id="applications"
    >
      <div
        className="absolute right-[-15rem] bottom-[-24rem] h-[58rem] w-[58rem] max-[42rem]:right-[-15rem] max-[42rem]:bottom-[-10rem] max-[42rem]:h-[32rem] max-[42rem]:w-[32rem]"
        aria-hidden="true"
      >
        <span
          className={cn(
            "absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] rounded-[50%] border border-[color-mix(in_srgb,var(--color-lime)_40%,transparent)]",
            applicationsVisible &&
              "animate-application-ring-grow motion-reduce:animate-none",
            "h-full w-full",
          )}
        />
        <span
          className={cn(
            "absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] rounded-[50%] border border-[color-mix(in_srgb,var(--color-lime)_40%,transparent)]",
            applicationsVisible &&
              "animate-application-ring-grow motion-reduce:animate-none",
            "h-[70%] w-[70%] [animation-delay:80ms]",
          )}
        />
        <span
          className={cn(
            "absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)] rounded-[50%] border border-[color-mix(in_srgb,var(--color-lime)_40%,transparent)]",
            applicationsVisible &&
              "animate-application-ring-grow motion-reduce:animate-none",
            "h-[38%] w-[38%] bg-[color-mix(in_srgb,var(--color-lime)_8%,transparent)] [animation-delay:160ms]",
          )}
        />
      </div>
      <div className="relative z-[2] mx-auto grid max-w-[91rem] grid-cols-[minmax(0,1fr)_minmax(23rem,0.72fr)] gap-[clamp(3rem,7vw,8rem)] max-[56rem]:grid-cols-1 max-[42rem]:gap-10">
        <div>
          <h2 className="m-0 pb-[0.08em] font-bold tracking-[-0.04em] text-balance max-w-[10ch] text-[clamp(4rem,7.5vw,7.2rem)] leading-none max-[42rem]:max-w-[9ch] max-[42rem]:text-[clamp(3.6rem,16vw,4.7rem)]">
            applications for the first cohort are open.
          </h2>
        </div>
        <div className="grid self-center gap-[0.7rem]">
          <a
            className={cn(
              "grid min-h-[6.7rem] cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border-0 p-[1.1rem] text-left text-notte opacity-100 transition-shadow duration-200 ease-xpeer-out hover:[box-shadow:0_0.8rem_2rem_color-mix(in_srgb,var(--color-notte)_28%,transparent)] motion-reduce:duration-[0.01ms] max-[42rem]:min-h-[5.9rem]",
              "bg-lime",
              "group transition-[transform] duration-[140ms] ease-xpeer-out active:[transform:scale(0.97)] motion-reduce:duration-[80ms] motion-reduce:active:[transform:scale(0.985)]",
            )}
            href={applicationLinks.mentee}
          >
            <span className="flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-current text-[0.72rem] font-bold">
              01
            </span>
            <span className="flex flex-col gap-[0.3rem] [transition-property:transform] duration-200 ease-xpeer-out fine-pointer:group-hover:[transform:translateX(0.22rem)] motion-reduce:duration-[0.01ms]">
              <b className="text-[clamp(1.15rem,1.8vw,1.55rem)]">
                apply as a mentee
              </b>
            </span>
            <span className="flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-forest bg-forest text-[0.9rem] font-bold text-ivory">
              <ArrowIcon className="[transition-property:transform] duration-200 ease-xpeer-out fine-pointer:group-hover:[transform:rotate(-45deg)_scale(0.94)] motion-reduce:duration-[0.01ms]" />
            </span>
          </a>
          <a
            className={cn(
              "grid min-h-[6.7rem] cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border-0 p-[1.1rem] text-left text-notte opacity-100 transition-shadow duration-200 ease-xpeer-out hover:[box-shadow:0_0.8rem_2rem_color-mix(in_srgb,var(--color-notte)_28%,transparent)] motion-reduce:duration-[0.01ms] max-[42rem]:min-h-[5.9rem]",
              "bg-ivory hover:bg-ivory",
              "group transition-[transform] duration-[140ms] ease-xpeer-out active:[transform:scale(0.97)] motion-reduce:duration-[80ms] motion-reduce:active:[transform:scale(0.985)]",
            )}
            href={applicationLinks.mentor}
          >
            <span className="flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-current text-[0.72rem] font-bold">
              02
            </span>
            <span className="flex flex-col gap-[0.3rem] [transition-property:transform] duration-200 ease-xpeer-out fine-pointer:group-hover:[transform:translateX(0.22rem)] motion-reduce:duration-[0.01ms]">
              <b className="text-[clamp(1.15rem,1.8vw,1.55rem)]">
                join as a mentor
              </b>
            </span>
            <span className="flex h-[2.2rem] w-[2.2rem] flex-none items-center justify-center rounded-[50%] border border-forest bg-forest text-[0.9rem] font-bold text-ivory">
              <ArrowIcon className="[transition-property:transform] duration-200 ease-xpeer-out fine-pointer:group-hover:[transform:rotate(-45deg)_scale(0.94)] motion-reduce:duration-[0.01ms]" />
            </span>
          </a>
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
          <a className="text-[0.85rem] font-semibold no-underline" href="#programme">
            programme
          </a>
          <a className="text-[0.85rem] font-semibold no-underline" href="#people">
            people
          </a>
          <a
            className="text-[0.85rem] font-semibold no-underline"
            href="#who-its-for"
          >
            who it's for
          </a>
          <a
            className="text-[0.85rem] font-semibold no-underline"
            href="#applications"
          >
            applications
          </a>
        </nav>
        <a
          className="inline-flex items-center [justify-self:end] gap-[0.45rem] text-[0.75rem] text-ivory-muted no-underline max-[56rem]:[justify-self:start]"
          href="#top"
        >
          back to top <ArrowIcon direction="up" />
        </a>
      </div>
    </footer>
  );
}
