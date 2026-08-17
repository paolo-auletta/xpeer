import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function normalizeSiteUrl(value: string | undefined) {
  if (!value) {
    return "";
  }

  if (!/^https?:\/\/[^\s/]+(?:\/[^\s]*)?$/.test(value)) {
    throw new Error("VITE_SITE_URL must use http or https.");
  }

  return value.replace(/\/$/, "");
}

function siteMetadata(siteUrl: string): Plugin {
  return {
    name: "xpeer-site-metadata",
    transformIndexHtml(html) {
      const absolutePreviewUrl = siteUrl
        ? `${siteUrl}/social-preview.jpg`
        : "/social-preview.jpg";
      const siteUrlTags = siteUrl
        ? [
            `<link rel="canonical" href="${siteUrl}" />`,
            `<meta property="og:url" content="${siteUrl}" />`,
          ].join("\n    ")
        : "";

      return html
        .replaceAll('content="/social-preview.jpg"', `content="${absolutePreviewUrl}"`)
        .replace("<!-- site-url -->", siteUrlTags);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "VITE_");
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL);

  return {
    plugins: [react(), tailwindcss(), siteMetadata(siteUrl)],
  };
});
