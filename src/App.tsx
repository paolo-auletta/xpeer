import { useEffect, useRef, useState, type RefObject } from "react";
import logoForest from "../assets/xpeer-logo/lockup/xpeer-lockup-forest.svg";
import logoIvory from "../assets/xpeer-logo/lockup/xpeer-lockup-ivory.svg";
import mentorConversation from "../assets/stock/mentor-conversation.jpg";
import communityPhoto from "../assets/stock/xpeer-community.jpg";
import directionIcon from "../assets/icons/selected/direction.png";
import studiesIcon from "../assets/icons/selected/your-studies.png";
import gettingInIcon from "../assets/icons/selected/getting-in.png";
import milanIcon from "../assets/icons/selected/life-in-milan.png";
import { cn, tw } from "./tailwind";

const pathways = [
  {
    number: "01",
    title: "direction",
    description:
      "which paths genuinely fit you, including the ones with no map",
    image: directionIcon,
    alt: "A guided line moving forward.",
  },
  {
    number: "02",
    title: "your studies",
    description: "how to approach Bocconi, and where your effort is best spent",
    image: studiesIcon,
    alt: "An open book with a highlighted point.",
  },
  {
    number: "03",
    title: "getting in",
    description:
      "which associations, spring weeks and internships to aim for, and how",
    image: gettingInIcon,
    alt: "A guided path passing through an arch.",
  },
  {
    number: "04",
    title: "life in Milan",
    description:
      "settling in, finding a rhythm, feeling at home in a city that isn't yours yet",
    image: milanIcon,
    alt: "A path settling within a wider circle.",
  },
] as const;

function useScrollHighlight(): RefObject<HTMLElement | null> {
  const highlightRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = highlightRef.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const section = element.closest<HTMLElement>("#people");
    let frame = 0;

    const updateHighlight = () => {
      frame = 0;

      if (reducedMotion.matches) {
        element.style.setProperty("--people-highlight-progress", "1");
        return;
      }

      const { top, height } = element.getBoundingClientRect();
      const sectionBottom = section?.getBoundingClientRect().bottom ?? top + height;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollY = window.scrollY;
      const startScroll = scrollY + top + height - viewportHeight - 8;
      const finishScroll = scrollY + sectionBottom - viewportHeight;
      const scrollRange = Math.max(1, finishScroll - startScroll);
      const progress = Math.min(
        1,
        Math.max(0, (scrollY - startScroll) / scrollRange),
      );

      element.style.setProperty(
        "--people-highlight-progress",
        progress.toFixed(3),
      );
    };

    const scheduleUpdate = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(updateHighlight);
      }
    };

    const onMotionPreferenceChange = () => scheduleUpdate();

    updateHighlight();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    reducedMotion.addEventListener("change", onMotionPreferenceChange);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", onMotionPreferenceChange);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return highlightRef;
}

function useRevealOnView(): [RefObject<HTMLElement | null>, boolean] {
  const revealRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = revealRef.current;

    if (!element) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [revealRef, isVisible];
}

function ArrowIcon({
  direction = "down-right",
  className = "",
}: {
  direction?: "down-right" | "down" | "up";
  className?: string;
}) {
  const path = {
    "down-right": "M4 4l8 8M6 12h6V6",
    down: "M8 3v10M4 9l4 4 4-4",
    up: "M8 13V3M4 7l4-4 4 4",
  }[direction];

  return (
    <svg
      className={cn(tw.arrowIcon, className)}
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

function Header() {
  return (
    <header className={tw.header}>
      <a className={tw.brandLink} href="#top" aria-label="X-Peer, back to top">
        <img className={tw.headerLogo} src={logoForest} alt="X-Peer" />
      </a>

      <nav className={tw.desktopNav} aria-label="Primary navigation">
        <a className={tw.desktopNavLink} href="#programme">
          programme
        </a>
        <a className={tw.desktopNavLink} href="#people">
          the people
        </a>
        <a className={tw.desktopNavLink} href="#who-its-for">
          who it's for
        </a>
      </nav>

      <a
        className={cn(tw.headerAction, tw.actionMotion)}
        href="#applications"
      >
        <span className={tw.actionLabel}>apply now</span>
        <ArrowIcon className={tw.actionArrow} />
      </a>
    </header>
  );
}

function HeroVisual() {
  return (
    <figure className={tw.heroVisual}>
      <img
        className={tw.heroPhoto}
        src={mentorConversation}
        alt="University students talking together between lectures."
        fetchPriority="high"
      />
      <div className={tw.heroWash} aria-hidden="true" />
      <div className={tw.heroHandoff} aria-hidden="true">
        <span className={tw.yearPin}>
          <b className={tw.yearPinNumber}>01</b>
          mentee
        </span>
        <svg
          className={tw.heroBridge}
          viewBox="0 0 100 32"
          preserveAspectRatio="none"
        >
          <path
            className={tw.heroBridgePath}
            d="M0 16 C 30 -8, 70 -8, 100 16"
          />
        </svg>
        <span className={tw.yearPin}>
          <b className={tw.yearPinNumber}>02</b>
          mentor
        </span>
      </div>
      <figcaption className={tw.heroCaption}>
        <span className={tw.captionLabel}>one year apart</span>
        <strong className={tw.captionStrong}>close enough to remember.</strong>
      </figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section className={tw.heroSection} id="top">
      <div className={tw.hero}>
        <div className={tw.heroCopy}>
          <h1 className={tw.heroTitle}>
            <span className={tw.heroTitleLine}>if you want to go fast, go alone.</span>
            <span className={tw.heroTitleAccent}>
              if you want to go far, go together.
            </span>
          </h1>
          <p className={tw.heroSummary}>
            xpeer is a peer mentorship community at Bocconi. mentees and mentors
            are one year apart, with a circle of people worth knowing.
          </p>
          <div className={tw.heroActions} aria-label="Application paths">
            <a
              className={cn(
                tw.action,
                tw.actionPrimary,
                tw.actionMotion,
              )}
              href="#applications"
            >
              <span className={tw.actionLabel}>apply as a mentee</span>
              <ArrowIcon className={cn(tw.actionIcon, tw.actionArrow)} />
            </a>
            <a
              className={cn(
                tw.action,
                tw.actionSecondary,
                tw.actionMotion,
              )}
              href="#applications"
            >
              <span className={tw.actionLabel}>join as a mentor</span>
              <ArrowIcon className={cn(tw.actionIcon, tw.actionArrow)} />
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className={tw.problem} id="why-xpeer">
      <div className={tw.problemInner}>
        <h2 className={tw.problemStatement}>
          too much of university depends on who you happen to meet in the first
          weeks.
        </h2>
        <div className={tw.problemStory}>
          <p className={tw.problemStoryText}>
            sometimes, it's the person who tells you which exam really matters,
            which association is worth applying to, how spring weeks work, or
            simply that the confusion you feel is normal. meeting them usually
            comes down to luck.
            <strong className={tw.problemStoryStrong}>
              we built something better.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

function Programme() {
  return (
    <section className={tw.programme} id="programme">
      <div className={tw.programmeIntro}>
        <div className={tw.programmeHeading}>
          <h2 className={tw.programmeTitle}>one year ahead</h2>
          <div>
            <p className={tw.programmeSubheading}>
              close enough to remember. far enough ahead to help.
            </p>
          </div>
        </div>
      </div>

      <div className={tw.pathways} aria-label="Four areas of mentorship">
        {pathways.map((pathway, index) => (
          <article
            className={cn(
              tw.pathway,
              index % 2 === 1 && tw.pathwayEven,
              index >= 2 && tw.pathwayTopBorder,
              index === 1 && tw.pathwayMobileTopBorder,
            )}
            key={pathway.title}
          >
            <div className={tw.pathwayTopline}>
              <span className={tw.pathwayNumber}>{pathway.number}</span>
              <div className={tw.pathwayImage}>
                <img
                  className={tw.pathwayImageContent}
                  src={pathway.image}
                  alt={pathway.alt}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={tw.pathwayCopy}>
              <h3 className={tw.pathwayTitle}>{pathway.title}</h3>
              <p className={tw.pathwayDescription}>{pathway.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={tw.friendship}>
        <p className={tw.friendshipText}>
          give it a year and it stops feeling like a programme
          <strong className={tw.friendshipStrong}>
            and starts feeling like a friendship.
          </strong>
        </p>
      </div>
    </section>
  );
}

function People() {
  const peopleHighlightRef = useScrollHighlight();

  return (
    <section className={tw.people} id="people">
      <div className={tw.peopleCopy}>
        <h2 className={tw.peopleTitle}>the people are the opportunity.</h2>
        <p className={tw.peopleParagraph}>
          your mentor connects you to a wider circle: students who have started
          projects, competed, researched, interned, moved to new countries,
          failed, and figured things out the hard way. curious, driven, generous
          with what they know, and impatient to start what no one assigned them.
        </p>
        <p className={tw.peopleParagraph}>
          a hackathon, a case team, a conference, an idea outside any syllabus:{" "}
          <strong ref={peopleHighlightRef} className={tw.peopleHighlight}>
            here you'll find the people to make it happen.
          </strong>
        </p>
      </div>
      <figure className={tw.peoplePhoto}>
        <img
          className={tw.peoplePhotoImage}
          src={communityPhoto}
          alt="A group of university students talking together in a lecture hall."
          loading="lazy"
        />
        <figcaption className={tw.peopleCaption}>
          <span className={tw.captionLabel}>the wider circle</span>
          <strong className={tw.captionStrong}>people to do it with.</strong>
        </figcaption>
      </figure>
    </section>
  );
}

function Audience() {
  return (
    <section className={tw.audience} id="who-its-for">
      <div className={tw.audienceHeading}>
        <h2 className={tw.audienceTitle}>who it's for</h2>
        <p className={tw.audienceSubheading}>same community. two ways in.</p>
      </div>
      <div className={tw.audienceSplit}>
        <article className={cn(tw.audiencePath, tw.audiencePathFirst)}>
          <span className={tw.audienceNumber}>01</span>
          <div className={tw.audiencePathCopy}>
            <p className={tw.audienceLabel}>first-year students</p>
            <p className={tw.audienceDescription}>
              they want a head start: they're curious, ambitious, a little
              impatient, and more likely to ask the right question now than
              wonder, a year from now, what they missed.
            </p>
          </div>
          <a
            className={cn(tw.audienceLink, tw.actionMotion)}
            href="#applications"
          >
            <span className={tw.actionLabel}>apply as a mentee</span>
            <ArrowIcon className={tw.actionArrow} />
          </a>
        </article>
        <article className={cn(tw.audiencePath, tw.audiencePathSecond)}>
          <span className={tw.audienceNumber}>02</span>
          <div className={tw.audiencePathCopy}>
            <p className={tw.audienceLabel}>second-year students</p>
            <p className={tw.audienceDescription}>
              they remember their own beginning clearly enough to want to make
              someone else's better.
            </p>
          </div>
          <a
            className={cn(tw.audienceLink, tw.actionMotion)}
            href="#applications"
          >
            <span className={tw.actionLabel}>join as a mentor</span>
            <ArrowIcon className={tw.actionArrow} />
          </a>
        </article>
      </div>
    </section>
  );
}

function Applications() {
  const [applicationsRef, applicationsVisible] = useRevealOnView();

  return (
    <section ref={applicationsRef} className={tw.applications} id="applications">
      <div className={tw.applicationsRings} aria-hidden="true">
        <span
          className={cn(
            tw.applicationRing,
            applicationsVisible && tw.applicationRingGrow,
            tw.applicationRingLarge,
          )}
        />
        <span
          className={cn(
            tw.applicationRing,
            applicationsVisible && tw.applicationRingGrow,
            tw.applicationRingMedium,
          )}
        />
        <span
          className={cn(
            tw.applicationRing,
            applicationsVisible && tw.applicationRingGrow,
            tw.applicationRingSmall,
          )}
        />
      </div>
      <div className={tw.applicationsContent}>
        <div>
          <h2 className={tw.applicationsTitle}>
            applications for the first cohort are open.
          </h2>
        </div>
        <div className={tw.applicationsActions}>
          <button
            className={cn(
              tw.applicationButton,
              tw.applicationButtonPrimary,
              tw.actionMotion,
            )}
            type="button"
          >
            <span className={tw.applicationButtonNumber}>01</span>
            <span className={cn(tw.applicationButtonLabel, tw.actionLabel)}>
              <b className={tw.applicationButtonLabelStrong}>apply as a mentee</b>
            </span>
            <span className={tw.applicationButtonArrow}>
              <ArrowIcon className={tw.actionArrow} />
            </span>
          </button>
          <button
            className={cn(
              tw.applicationButton,
              tw.applicationButtonSecondary,
              tw.actionMotion,
            )}
            type="button"
          >
            <span className={tw.applicationButtonNumber}>02</span>
            <span className={cn(tw.applicationButtonLabel, tw.actionLabel)}>
              <b className={tw.applicationButtonLabelStrong}>join as a mentor</b>
            </span>
            <span className={tw.applicationButtonArrow}>
              <ArrowIcon className={tw.actionArrow} />
            </span>
          </button>
        </div>
        <p className={tw.applicationsClosing}>
          today's mentees become{" "}
          <strong className={tw.applicationsClosingStrong}>
            <span className={tw.applicationsUnbroken}>tomorrow's mentors</span>.
            the circle only ever widens.
          </strong>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={tw.footer}>
      <div className={tw.footerLead}>
        <a href="#top" aria-label="X-Peer, back to top">
          <img className={tw.footerLogo} src={logoIvory} alt="X-Peer" />
        </a>
        <p className={tw.footerLeadText}>
          if you want to go fast, go alone. if you want to go far, go together.
        </p>
      </div>
      <div className={tw.footerBottom}>
        <p className={tw.footerMeta}>peer mentorship, one year apart.</p>
        <nav className={tw.footerNav} aria-label="Footer navigation">
          <a className={tw.footerNavLink} href="#programme">
            programme
          </a>
          <a className={tw.footerNavLink} href="#people">
            people
          </a>
          <a className={tw.footerNavLink} href="#who-its-for">
            who it's for
          </a>
          <a className={tw.footerNavLink} href="#applications">
            applications
          </a>
        </nav>
        <a className={tw.footerTop} href="#top">
          back to top <ArrowIcon direction="up" />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="bg-ivory">
        <Hero />
        <Problem />
        <Programme />
        <People />
        <Audience />
        <Applications />
      </main>
      <Footer />
    </>
  );
}
