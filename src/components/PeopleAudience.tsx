import { useRef } from "react";
import communityPhoto from "../../assets/stock/xpeer-community.jpg";
import communityPhoto640 from "../../assets/stock/xpeer-community-640.avif";
import communityPhoto960 from "../../assets/stock/xpeer-community-960.avif";
import communityPhoto1280 from "../../assets/stock/xpeer-community-1280.avif";
import { usePeopleHighlight } from "../hooks/useLandingMotion";
import { applicationForms } from "../lib/applicationLinks";
import { cn } from "../lib/cn";
import { ActionContent, actionPressMotion } from "./ActionContent";
import { ApplicationLink } from "./ApplicationLink";

export function People() {
  const peopleSectionRef = useRef<HTMLElement>(null);
  const peopleHighlightRef = usePeopleHighlight(peopleSectionRef);

  return (
    <section
      ref={peopleSectionRef}
      className="grid grid-cols-[minmax(0,0.78fr)_minmax(32rem,1.22fr)] gap-[clamp(3rem,7vw,8rem)] bg-notte px-[var(--page-pad)] py-[clamp(6.5rem,10vw,10rem)] text-ivory max-[68rem]:grid-cols-[minmax(0,0.82fr)_minmax(27rem,1.18fr)] max-[56rem]:grid-cols-1 max-[42rem]:gap-14 max-[42rem]:pt-[6.5rem] max-[42rem]:pb-20"
      id="people"
    >
      <div className="max-w-[40rem] self-center">
        <h2 className="m-0 pb-[0.08em] font-bold tracking-[-0.04em] text-balance text-[clamp(3.7rem,6.4vw,6.4rem)] leading-none text-lime max-[42rem]:text-[clamp(3.6rem,16vw,4.7rem)]">
          the people are the opportunity.
        </h2>
        <p className="mt-8 mb-0 text-[clamp(1.05rem,1.35vw,1.2rem)] leading-[1.58] text-ivory-muted">
          your mentor connects you to a wider circle: students who have started
          projects, competed, researched, interned, moved to new countries,
          failed, and figured things out the hard way. curious, driven, generous
          with what they know, and impatient to start what no one assigned them.
        </p>
        <p className="mt-8 mb-0 text-[clamp(1.05rem,1.35vw,1.2rem)] leading-[1.58] text-ivory-muted">
          a hackathon, a case team, a conference, an idea outside any syllabus:{" "}
          <strong
            ref={peopleHighlightRef}
            className="people-highlight box-decoration-clone rounded-[0.15em] px-[0.18em] pt-[0.08em] pb-[0.12em] leading-[inherit] font-bold"
          >
            here you'll find the people to make it happen.
          </strong>
        </p>
      </div>
      <figure className="relative m-0 aspect-[1.16] self-center overflow-hidden rounded-3xl after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_55%,color-mix(in_srgb,var(--color-notte)_64%,transparent))] max-[56rem]:aspect-[1.5] max-[42rem]:aspect-[0.92] max-[42rem]:rounded-2xl">
        <picture className="block h-full w-full">
          <source
            type="image/avif"
            srcSet={`${communityPhoto640} 640w, ${communityPhoto960} 960w, ${communityPhoto1280} 1280w`}
            sizes="(max-width: 42rem) 100vw, (max-width: 56rem) 100vw, 55vw"
          />
          <img
            className="h-full w-full object-cover object-center max-[42rem]:[object-position:55%_center]"
            src={communityPhoto}
            width="1800"
            height="1013"
            sizes="(max-width: 42rem) 100vw, (max-width: 56rem) 100vw, 55vw"
            alt="A group of university students talking together in a lecture hall."
            loading="lazy"
          />
        </picture>
        <figcaption className="absolute bottom-6 left-6 z-[1] flex flex-col text-ivory">
          <span className="text-[0.72rem] font-bold tracking-[0.1em] uppercase">
            the wider circle
          </span>
          <strong className="mt-1 text-[clamp(1.35rem,2vw,2rem)] font-semibold">
            people to do it with.
          </strong>
        </figcaption>
      </figure>
    </section>
  );
}

export function Audience() {
  return (
    <section
      className="mx-auto max-w-[91rem] px-[var(--page-pad)] pt-[clamp(6.5rem,10vw,10rem)] pb-[clamp(8rem,12vw,12rem)] max-[42rem]:pt-[6.5rem] max-[42rem]:pb-28"
      id="who-its-for"
    >
      <div className="mt-0 max-[42rem]:flex-col max-[42rem]:gap-[1.2rem] max-[42rem]:[align-items:start]">
        <h2 className="m-0 pb-[0.08em] font-bold tracking-[-0.04em] text-balance text-[clamp(3.7rem,7vw,7rem)] leading-none max-[42rem]:text-[clamp(3.6rem,16vw,4.7rem)]">
          who it's for
        </h2>
        <p className="mt-[1.4rem] mb-0 max-w-[31ch] text-[clamp(1.35rem,2.2vw,2rem)] leading-[1.2] font-normal tracking-[-0.02em] text-forest-muted max-[42rem]:mt-0">
          same community. two ways in.
        </p>
      </div>
      <div className="mt-[clamp(4rem,7vw,6rem)] grid grid-cols-2 gap-[0.8rem] max-[42rem]:mt-14 max-[42rem]:grid-cols-1">
        <article
          className={cn(
            "flex min-h-[34rem] flex-col rounded-[1.4rem] p-[clamp(1.5rem,3vw,2.5rem)] max-[42rem]:min-h-[27rem] max-[42rem]:p-[1.3rem]",
            "bg-lime text-notte",
          )}
        >
          <span className="flex aspect-square h-10 w-10 items-center justify-center self-end rounded-[50%] border border-current p-0 text-[0.78rem] font-bold">
            01
          </span>
          <div className="mt-auto pt-20 max-[42rem]:pt-14">
            <p className="mt-0 mb-6 text-[clamp(2.8rem,5vw,5rem)] leading-[1.02] font-bold tracking-[-0.04em] max-[42rem]:text-[3.4rem]">
              first-year students
            </p>
            <p className="m-0 max-w-[31rem] text-[clamp(1.15rem,1.65vw,1.45rem)] leading-[1.42]">
              they want a head start: they're curious, ambitious, a little
              impatient, and more likely to ask the right question now than
              wonder, a year from now, what they missed.
            </p>
          </div>
          <ApplicationLink
            application={applicationForms.mentee}
            className={cn(
              "relative mt-[clamp(3.5rem,6vw,5.5rem)] flex min-h-11 items-center justify-between border-t border-current pt-4 text-[0.92rem] font-bold no-underline before:absolute before:top-[-1px] before:left-0 before:h-px before:w-full before:origin-left before:[transform:scaleX(0)] before:bg-current before:[transition-property:transform] before:duration-200 before:ease-xpeer-out fine-pointer:hover:before:[transform:scaleX(1)] motion-reduce:before:duration-[0.01ms] max-[42rem]:mt-10",
              actionPressMotion,
            )}
          >
            <ActionContent>apply as a mentee</ActionContent>
          </ApplicationLink>
        </article>
        <article
          className={cn(
            "flex min-h-[34rem] flex-col rounded-[1.4rem] p-[clamp(1.5rem,3vw,2.5rem)] max-[42rem]:min-h-[27rem] max-[42rem]:p-[1.3rem]",
            "bg-forest text-ivory",
          )}
        >
          <span className="flex aspect-square h-10 w-10 items-center justify-center self-end rounded-[50%] border border-current p-0 text-[0.78rem] font-bold">
            02
          </span>
          <div className="mt-auto pt-20 max-[42rem]:pt-14">
            <p className="mt-0 mb-6 text-[clamp(2.8rem,5vw,5rem)] leading-[1.02] font-bold tracking-[-0.04em] max-[42rem]:text-[3.4rem]">
              second-year students
            </p>
            <p className="m-0 max-w-[31rem] text-[clamp(1.15rem,1.65vw,1.45rem)] leading-[1.42]">
              they remember their own beginning clearly enough to want to make
              someone else's better.
            </p>
          </div>
          <ApplicationLink
            application={applicationForms.mentor}
            className={cn(
              "relative mt-[clamp(3.5rem,6vw,5.5rem)] flex min-h-11 items-center justify-between border-t border-current pt-4 text-[0.92rem] font-bold no-underline before:absolute before:top-[-1px] before:left-0 before:h-px before:w-full before:origin-left before:[transform:scaleX(0)] before:bg-current before:[transition-property:transform] before:duration-200 before:ease-xpeer-out fine-pointer:hover:before:[transform:scaleX(1)] motion-reduce:before:duration-[0.01ms] max-[42rem]:mt-10",
              actionPressMotion,
            )}
          >
            <ActionContent>join as a mentor</ActionContent>
          </ApplicationLink>
        </article>
      </div>
    </section>
  );
}
