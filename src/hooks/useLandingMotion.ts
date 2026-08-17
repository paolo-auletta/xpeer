import { useEffect, useRef, useState, type RefObject } from "react";

export function usePeopleHighlight(
  sectionRef: RefObject<HTMLElement | null>,
): RefObject<HTMLElement | null> {
  const highlightRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = highlightRef.current;

    const section = sectionRef.current;

    if (!element || !section) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateHighlight = () => {
      frame = 0;

      if (reducedMotion.matches) {
        element.style.setProperty("--people-highlight-progress", "1");
        return;
      }

      const { top, height } = element.getBoundingClientRect();
      const sectionBottom = section.getBoundingClientRect().bottom;
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
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
  }, [sectionRef]);

  return highlightRef;
}

export type RevealState = "pending" | "revealed" | "static";

function getInitialRevealState(): RevealState {
  if (
    typeof window === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    return "static";
  }

  return "pending";
}

export function useRevealOnView(): [RefObject<HTMLElement | null>, RevealState] {
  const revealRef = useRef<HTMLElement>(null);
  const [state, setState] = useState<RevealState>(getInitialRevealState);

  useEffect(() => {
    if (state !== "pending") {
      return;
    }

    const element = revealRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState("revealed");
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
  }, [state]);

  return [revealRef, state];
}
