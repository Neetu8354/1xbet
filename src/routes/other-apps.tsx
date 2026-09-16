import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/other-apps")({
  head: () => ({
    meta: [
      { title: "Other Apps — 1xBET India" },
      {
        name: "description",
        content:
          "Download other 1xBET India apps. Desktop app, Windows app, and alternative platforms.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/other-apps" }],
  }),
  component: () => (
    <SEOPage
      title="Other Apps"
      description="Other 1xBET India applications"
      content={`
Explore other 1xBET India applications and platforms.

Available apps:
- Desktop app for Windows
- Mac application
- Linux app
- Mobile web browser version
- APK direct download

Access 1xBET India on any device.
      `}
    />
  ),
});
