import { expect, test } from "@playwright/test";

test("keeps the mobile landing experience fast, accessible, and actionable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page).toHaveTitle("X-Peer — peer mentorship at Bocconi");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "X-Peer — peer mentorship at Bocconi",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://xpeer.example",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://xpeer.example/social-preview.jpg",
  );

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

test("provides a keyboard bypass for the fixed navigation", async ({ page }) => {
  await page.goto("/");

  const skipLink = page.getByRole("link", { name: "skip to content" });
  await skipLink.focus();
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
});
