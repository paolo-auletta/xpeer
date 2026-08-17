import { useEffect, useRef, useState, type RefObject } from "react";

export function useScrollHighlight(): RefObject<HTMLElement | null> {
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
  }, []);

  return highlightRef;
}

export function useRevealOnView(): [RefObject<HTMLElement | null>, boolean] {
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
