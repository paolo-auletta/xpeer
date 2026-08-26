import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import arinaPhoto from "../../assets/foto/Arina, BIEM.webp";
import filippoPhoto from "../../assets/foto/Filippo, BIEM.webp";
import flavioPhoto from "../../assets/foto/Flavio, BIEM.webp";
import juliettePhoto from "../../assets/foto/Juliette, BEMACC.webp";
import katarinaPhoto from "../../assets/foto/Katarina, BESS.webp";
import neelPhoto from "../../assets/foto/Neel, BAI.webp";
import paoloPhoto from "../../assets/foto/Paolo, BEMACS.webp";
import rebecaPhoto from "../../assets/foto/Rebeca, BIEM.webp";
import { usePeopleHighlight } from "../hooks/useLandingMotion";
import { applicationForms } from "../lib/applicationLinks";
import { cn } from "../lib/cn";
import { ActionContent, actionPressMotion } from "./ActionContent";
import { ApplicationLink } from "./ApplicationLink";
import { ArrowIcon } from "./ArrowIcon";

const communityMembers = [
  {
    name: "Filippo",
    programme: "BIEM",
    image: filippoPhoto,
    width: 900,
    height: 600,
    objectPosition: "50% 45%",
  },
  {
    name: "Juliette",
    programme: "BEMACC",
    image: juliettePhoto,
    width: 899,
    height: 1200,
    objectPosition: "50% 48%",
  },
  {
    name: "Paolo",
    programme: "BEMACS",
    image: paoloPhoto,
    width: 800,
    height: 800,
    objectPosition: "50% 35%",
  },
  {
    name: "Flavio",
    programme: "BIEM",
    image: flavioPhoto,
    width: 800,
    height: 1200,
    objectPosition: "50% 42%",
  },
  {
    name: "Katarina",
    programme: "BESS",
    image: katarinaPhoto,
    width: 913,
    height: 1200,
    objectPosition: "50% 45%",
  },
  {
    name: "Neel",
    programme: "BAI",
    image: neelPhoto,
    width: 800,
    height: 1200,
    objectPosition: "50% 42%",
  },
  {
    name: "Rebeca",
    programme: "BIEM",
    image: rebecaPhoto,
    width: 900,
    height: 675,
    objectPosition: "50% 45%",
  },
  {
    name: "Arina",
    programme: "BIEM",
    image: arinaPhoto,
    width: 900,
    height: 1200,
    objectPosition: "50% 40%",
  },
] as const;

const carouselAutoplayDelay = 5000;
const carouselManualResumeDelay = 7000;
const carouselControlClassName =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-ivory)_36%,transparent)] bg-transparent text-ivory transition-[border-color,color,transform] duration-[140ms] ease-xpeer-out enabled:cursor-pointer enabled:active:[transform:scale(0.96)] disabled:cursor-not-allowed disabled:opacity-35 motion-reduce:duration-[80ms] fine-pointer:enabled:hover:border-lime fine-pointer:enabled:hover:text-lime";
const carouselSlides = [0, 1, 2].flatMap((copyIndex) =>
  communityMembers.map((member, logicalIndex) => ({
    member,
    logicalIndex,
    isClone: copyIndex !== 1,
    key: `${copyIndex}-${member.name}`,
  })),
);

function getCarouselSlideOffset(track: HTMLDivElement, index: number) {
  const slide = track.children.item(index);
  if (!(slide instanceof HTMLElement)) return index * track.clientWidth;

  return (
    slide.getBoundingClientRect().left -
    track.getBoundingClientRect().left +
    track.scrollLeft
  );
}

function getNearestCarouselSlide(track: HTMLDivElement) {
  let nearestIndex = 0;
  let nearestDistance = Number.POSITIVE_INFINITY;

  for (let index = 0; index < track.children.length; index += 1) {
    const distance = Math.abs(
      track.scrollLeft - getCarouselSlideOffset(track, index),
    );

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  }

  return nearestIndex;
}

function normalizeCarouselPosition(track: HTMLDivElement) {
  if (track.clientWidth === 0) return 0;

  const physicalIndex = getNearestCarouselSlide(track);
  let indexShift = 0;

  if (physicalIndex < communityMembers.length) {
    indexShift = communityMembers.length;
  } else if (physicalIndex >= communityMembers.length * 2) {
    indexShift = -communityMembers.length;
  }

  if (indexShift !== 0) {
    track.scrollLeft +=
      getCarouselSlideOffset(track, physicalIndex + indexShift) -
      getCarouselSlideOffset(track, physicalIndex);
  }

  return indexShift;
}

function PeopleSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const targetIndexRef = useRef(0);
  const targetPhysicalIndexRef = useRef<number>(communityMembers.length);
  const animationFrameRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const [manualPauseUntil, setManualPauseUntil] = useState(0);

  const pauseAutoplayAfterInteraction = useCallback(() => {
    setManualPauseUntil(Date.now() + carouselManualResumeDelay);
  }, []);

  const cancelSlideAnimation = useCallback((syncToPosition = true) => {
    const track = trackRef.current;

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    isAnimatingRef.current = false;

    if (!track) return;

    track.style.scrollSnapType = "";

    const indexShift = normalizeCarouselPosition(track);
    targetPhysicalIndexRef.current += indexShift;

    if (!syncToPosition || track.clientWidth === 0) return;

    const physicalIndex = getNearestCarouselSlide(track);
    const index = physicalIndex % communityMembers.length;

    targetPhysicalIndexRef.current = physicalIndex;
    targetIndexRef.current = index;
    setActiveIndex(index);
  }, []);

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    },
    [],
  );

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const alignToActiveSlide = () => {
      if (isAnimatingRef.current || track.clientWidth === 0) return;
      track.scrollLeft = getCarouselSlideOffset(
        track,
        targetPhysicalIndexRef.current,
      );
    };

    alignToActiveSlide();
    const resizeObserver = new ResizeObserver(alignToActiveSlide);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, []);

  const animateBy = useCallback((indexDelta: number) => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    isAnimatingRef.current = false;
    track.style.scrollSnapType = "none";
    const indexShift = normalizeCarouselPosition(track);
    targetPhysicalIndexRef.current += indexShift;

    let destinationPhysicalIndex =
      targetPhysicalIndexRef.current + indexDelta;

    while (destinationPhysicalIndex < communityMembers.length - 1) {
      destinationPhysicalIndex += communityMembers.length;
    }

    while (destinationPhysicalIndex > communityMembers.length * 2) {
      destinationPhysicalIndex -= communityMembers.length;
    }

    const nextIndex =
      ((destinationPhysicalIndex % communityMembers.length) +
        communityMembers.length) %
      communityMembers.length;
    const destination = getCarouselSlideOffset(
      track,
      destinationPhysicalIndex,
    );

    targetPhysicalIndexRef.current = destinationPhysicalIndex;
    targetIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      isAnimatingRef.current = false;
      track.scrollLeft = destination;
      targetPhysicalIndexRef.current += normalizeCarouselPosition(track);
      track.style.scrollSnapType = "";
      return;
    }

    const start = track.scrollLeft;
    const distance = destination - start;

    if (Math.abs(distance) < 1) {
      isAnimatingRef.current = false;
      track.scrollLeft = destination;
      targetPhysicalIndexRef.current += normalizeCarouselPosition(track);
      track.style.scrollSnapType = "";
      return;
    }

    const duration = Math.min(
      520,
      280 +
        (Math.abs(distance) /
          Math.max(
            1,
            getCarouselSlideOffset(track, 2) -
              getCarouselSlideOffset(track, 1),
          )) *
          45,
    );
    const startedAt = performance.now();

    isAnimatingRef.current = true;
    track.style.scrollSnapType = "none";

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      track.scrollLeft = start + distance * easedProgress;

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(tick);
        return;
      }

      track.scrollLeft = destination;
      targetPhysicalIndexRef.current += normalizeCarouselPosition(track);
      animationFrameRef.current = null;
      isAnimatingRef.current = false;
      track.style.scrollSnapType = "";
    };

    animationFrameRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let isIntersecting = false;

    const updateAutoplayEligibility = () => {
      setCanAutoplay(
        isIntersecting && !document.hidden && !reducedMotionQuery.matches,
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        updateAutoplayEligibility();
      },
      { threshold: 0.4 },
    );

    observer.observe(track);
    document.addEventListener("visibilitychange", updateAutoplayEligibility);
    reducedMotionQuery.addEventListener("change", updateAutoplayEligibility);

    return () => {
      observer.disconnect();
      document.removeEventListener(
        "visibilitychange",
        updateAutoplayEligibility,
      );
      reducedMotionQuery.removeEventListener(
        "change",
        updateAutoplayEligibility,
      );
    };
  }, []);

  useEffect(() => {
    if (!canAutoplay) return;

    const pauseRemaining = Math.max(0, manualPauseUntil - Date.now());
    const delay =
      pauseRemaining > 0 ? pauseRemaining : carouselAutoplayDelay;

    const timeout = window.setTimeout(() => {
      setManualPauseUntil(0);
      animateBy(1);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, animateBy, canAutoplay, manualPauseUntil]);

  const moveBy = (distance: number) => {
    pauseAutoplayAfterInteraction();
    animateBy(distance);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0 || isAnimatingRef.current) return;

    normalizeCarouselPosition(track);
    const physicalIndex = getNearestCarouselSlide(track);
    const nextIndex = physicalIndex % communityMembers.length;

    targetPhysicalIndexRef.current = physicalIndex;
    targetIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <figure className="m-0 min-w-0 self-center">
      <div className="relative overflow-hidden rounded-3xl bg-forest max-[42rem]:rounded-2xl">
        <div
          ref={trackRef}
          className="flex aspect-[1.16] snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] max-[56rem]:aspect-[1.5] max-[42rem]:aspect-[0.92] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="X-Peer community members"
          onScroll={handleScroll}
          onPointerDown={() => {
            pauseAutoplayAfterInteraction();
            cancelSlideAnimation();
          }}
          onWheel={() => {
            pauseAutoplayAfterInteraction();
            cancelSlideAnimation();
          }}
          onKeyDown={pauseAutoplayAfterInteraction}
          tabIndex={0}
        >
          {carouselSlides.map(
            ({ member, logicalIndex, isClone, key }) => (
              <article
                className="relative isolate h-full flex-[0_0_100%] snap-start overflow-hidden"
                role={isClone ? undefined : "group"}
                aria-roledescription={isClone ? undefined : "slide"}
                aria-label={
                  isClone
                    ? undefined
                    : `${member.name}, ${member.programme}, ${logicalIndex + 1} of ${communityMembers.length}`
                }
                aria-hidden={isClone || undefined}
                key={key}
              >
                <img
                  className="h-full w-full object-cover"
                  src={member.image}
                  width={member.width}
                  height={member.height}
                  style={{ objectPosition: member.objectPosition }}
                  alt={isClone ? "" : `${member.name}, ${member.programme}.`}
                  loading={isClone ? "eager" : "lazy"}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,color-mix(in_srgb,var(--color-notte)_18%,transparent)_58%,color-mix(in_srgb,var(--color-notte)_94%,transparent)_100%)]"
                  aria-hidden="true"
                />
                <div className="absolute right-6 bottom-6 left-6 z-[1] flex items-end justify-between gap-6 text-ivory max-[42rem]:right-5 max-[42rem]:bottom-5 max-[42rem]:left-5">
                  <div className="flex min-w-0 flex-col">
                    <strong className="text-[clamp(1.8rem,3vw,2.8rem)] leading-none font-bold tracking-[-0.035em]">
                      {member.name}
                    </strong>
                    <span className="mt-2 text-[0.72rem] font-bold tracking-[0.1em] uppercase">
                      {member.programme}
                    </span>
                  </div>
                  <span className="shrink-0 text-[0.72rem] font-bold tracking-[0.08em] tabular-nums">
                    {String(logicalIndex + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
      <figcaption className="mt-5 flex items-center justify-between gap-6 max-[42rem]:flex-col max-[42rem]:items-start max-[42rem]:gap-4">
        <p className="m-0 max-w-[28ch] text-[clamp(1rem,1.25vw,1.15rem)] leading-[1.45] text-ivory-muted">
          follow us on Instagram to learn more.
        </p>
        <div className="flex shrink-0 items-center gap-2 max-[42rem]:w-full max-[42rem]:justify-between">
          <span
            className="mr-1 text-[0.72rem] font-bold tracking-[0.08em] text-ivory-muted tabular-nums"
            aria-live={canAutoplay && manualPauseUntil === 0 ? "off" : "polite"}
            aria-atomic="true"
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(communityMembers.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              className={carouselControlClassName}
              type="button"
              aria-label="Previous community member"
              onPointerDown={() => {
                pauseAutoplayAfterInteraction();
                cancelSlideAnimation(false);
              }}
              onClick={() => moveBy(-1)}
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              className={carouselControlClassName}
              type="button"
              aria-label="Next community member"
              onPointerDown={() => {
                pauseAutoplayAfterInteraction();
                cancelSlideAnimation(false);
              }}
              onClick={() => moveBy(1)}
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

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
      <PeopleSlider />
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
