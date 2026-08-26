import { expect, test } from "@playwright/test";

test("keeps the mobile landing experience fast, accessible, and actionable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page).toHaveTitle(
    "X-Peer — peer mentorship by Bocconi students",
  );
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "X-Peer — peer mentorship by Bocconi students",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://xpeer.example",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://xpeer.example/social-preview.jpg",
  );
  await expect(
    page.getByText(
      "this opportunity is for students determined to excel, open to valuable advice, and ready to give back to the community in the future.",
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      "places are limited to ensure a small, carefully selected community where meaningful connections can grow.",
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      "independent initiative, not affiliated with Bocconi University.",
    ),
  ).toBeVisible();

  const peopleCarousel = page.getByRole("region", {
    name: "X-Peer community members",
  });
  await expect(peopleCarousel.getByRole("group")).toHaveCount(8);
  await expect(
    page.getByText("follow us on Instagram to learn more."),
  ).toBeVisible();

  const nextPerson = page.getByRole("button", {
    name: "Next community member",
  });
  await nextPerson.click({ clickCount: 3 });
  await expect(page.getByText("04 / 08")).toBeVisible();
  const observedCounters = await page.evaluate(
    () =>
      new Promise<string[]>((resolve) => {
        const counter = document.querySelector('[aria-live="polite"]');
        const values: string[] = [];
        const startedAt = performance.now();

        const sample = (now: number) => {
          values.push(counter?.textContent?.replace(/\s+/g, " ").trim() ?? "");

          if (now - startedAt < 650) {
            requestAnimationFrame(sample);
          } else {
            resolve(values);
          }
        };

        requestAnimationFrame(sample);
      }),
  );
  expect([...new Set(observedCounters)]).toEqual(["04 / 08"]);
  await expect
    .poll(() =>
      peopleCarousel.evaluate((element) =>
        Math.round(element.scrollLeft / element.clientWidth),
      ),
    )
    .toBe(11);
  await expect(page.getByText("04 / 08")).toBeVisible();

  const heroImage = page.getByAltText(
    "University students talking together between lectures.",
  );
  await expect(heroImage).toBeVisible();
  await expect
    .poll(() => heroImage.evaluate((image) => image.currentSrc))
    .toContain(".avif");

  const links = page.locator('a[data-application-status="open"]');
  await expect(links).toHaveCount(6);
  await expect(links.nth(0)).toHaveAttribute("href", "https://tally.so/r/rj9eaX");
  await expect(links.nth(1)).toHaveAttribute("href", "https://tally.so/r/obNq7e");
  await expect(links.nth(0)).toHaveAttribute(
    "aria-label",
    "Apply as a mentee — opens the application form",
  );
  await expect(links.nth(1)).toHaveAttribute(
    "aria-label",
    "Join as a mentor — opens the application form",
  );

  const usability = await page.evaluate(() => {
    const visibleLinks = [...document.querySelectorAll<HTMLAnchorElement>("a")]
      .map((link) => ({
        label: link.getAttribute("aria-label") ?? link.textContent?.trim() ?? "",
        rect: link.getBoundingClientRect(),
        isVisuallyHidden: getComputedStyle(link).clipPath === "inset(50%)",
      }))
      .filter(
        ({ isVisuallyHidden, rect }) =>
          !isVisuallyHidden && rect.width > 0 && rect.height > 0,
      );

    return {
      hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth,
      undersizedTargets: visibleLinks
        .filter(({ rect }) => rect.width < 44 || rect.height < 44)
        .map(({ label, rect }) => ({
          label,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        })),
    };
  });

  expect(usability.hasHorizontalOverflow).toBe(false);
  expect(usability.undersizedTargets).toEqual([]);
});

test("automatically advances the visible community carousel without playback controls", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const peopleCarousel = page.getByRole("region", {
    name: "X-Peer community members",
  });
  await peopleCarousel.scrollIntoViewIfNeeded();

  await expect(page.getByText("02 / 08")).toBeVisible({ timeout: 7000 });
  await expect(
    page.getByRole("button", { name: /automatic carousel/i }),
  ).toHaveCount(0);
});

test("loops circularly and resumes seven seconds after the last manual navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const peopleCarousel = page.getByRole("region", {
    name: "X-Peer community members",
  });
  await peopleCarousel.scrollIntoViewIfNeeded();

  await page.getByRole("button", { name: "Previous community member" }).click();
  await expect(page.getByText("08 / 08")).toBeVisible();
  await expect
    .poll(() =>
      peopleCarousel.evaluate((element) =>
        Math.round(element.scrollLeft / element.clientWidth),
      ),
    )
    .toBe(15);

  const previousPerson = page.getByRole("button", {
    name: "Previous community member",
  });
  await page.evaluate(() => {
    const track = document.querySelector<HTMLElement>(
      '[aria-label="X-Peer community members"]',
    );
    const samples: number[] = [];
    const startedAt = performance.now();
    const testWindow = window as typeof window & {
      __carouselBackwardSamples?: number[];
    };

    testWindow.__carouselBackwardSamples = samples;

    const sample = (now: number) => {
      if (track && track.clientWidth > 0) {
        samples.push(track.scrollLeft / track.clientWidth);
      }

      if (now - startedAt < 650) requestAnimationFrame(sample);
    };

    requestAnimationFrame(sample);
  });
  await previousPerson.click();
  await expect(page.getByText("07 / 08")).toBeVisible();
  await expect
    .poll(() =>
      peopleCarousel.evaluate((element) =>
        Math.round(element.scrollLeft / element.clientWidth),
      ),
    )
    .toBe(14);
  await page.waitForTimeout(700);
  const backwardSamples = await page.evaluate(
    () =>
      (
        window as typeof window & {
          __carouselBackwardSamples?: number[];
        }
      ).__carouselBackwardSamples ?? [],
  );
  expect(backwardSamples.length).toBeGreaterThan(0);
  expect(
    backwardSamples.every(
      (physicalPosition) =>
        physicalPosition >= 13.5 && physicalPosition <= 15.5,
    ),
  ).toBe(true);

  const nextPerson = page.getByRole("button", {
    name: "Next community member",
  });
  await nextPerson.click();
  await expect(page.getByText("08 / 08")).toBeVisible();
  await expect
    .poll(() =>
      peopleCarousel.evaluate((element) =>
        Math.round(element.scrollLeft / element.clientWidth),
      ),
    )
    .toBe(15);

  await page.evaluate(() => {
    const track = document.querySelector<HTMLElement>(
      '[aria-label="X-Peer community members"]',
    );
    const samples: number[] = [];
    const startedAt = performance.now();
    const testWindow = window as typeof window & {
      __carouselLoopSamples?: number[];
    };

    testWindow.__carouselLoopSamples = samples;

    const sample = (now: number) => {
      if (track && track.clientWidth > 0) {
        samples.push(track.scrollLeft / track.clientWidth);
      }

      if (now - startedAt < 650) requestAnimationFrame(sample);
    };

    requestAnimationFrame(sample);
  });
  await nextPerson.click();
  await expect(page.getByText("01 / 08")).toBeVisible();
  await expect
    .poll(() =>
      peopleCarousel.evaluate((element) =>
        Math.round(element.scrollLeft / element.clientWidth),
      ),
    )
    .toBe(8);
  await page.waitForTimeout(700);
  const loopSamples = await page.evaluate(
    () =>
      (
        window as typeof window & {
          __carouselLoopSamples?: number[];
        }
      ).__carouselLoopSamples ?? [],
  );
  expect(loopSamples.length).toBeGreaterThan(0);
  expect(
    loopSamples.every(
      (physicalPosition) =>
        physicalPosition >= 14.5 || physicalPosition <= 8.5,
    ),
  ).toBe(true);

  await nextPerson.click();
  await expect(page.getByText("02 / 08")).toBeVisible();
  await page.waitForTimeout(5500);
  await expect(page.getByText("02 / 08")).toBeVisible();
  await expect(page.getByText("03 / 08")).toBeVisible({ timeout: 2500 });
});

test("does not autoplay positional motion when reduced motion is requested", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const peopleCarousel = page.getByRole("region", {
    name: "X-Peer community members",
  });
  await peopleCarousel.scrollIntoViewIfNeeded();
  await page.waitForTimeout(5300);

  await expect(page.getByText("01 / 08")).toBeVisible();
  await expect(
    page.getByRole("button", { name: /automatic carousel/i }),
  ).toHaveCount(0);
});

test("provides a keyboard bypass for the fixed navigation", async ({ page }) => {
  await page.goto("/");

  const skipLink = page.getByRole("link", { name: "skip to content" });
  await skipLink.focus();
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});
