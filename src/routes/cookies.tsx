import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — 1xBET India" },
      {
        name: "description",
        content:
          "Cookie policy for 1xBET India. Learn about how we use cookies on our website.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/cookies/" }],
  }),
  component: () => (
    <SEOPage
      title="Cookie Policy"
      description="How we use cookies"
      content={`
1xBET India Cookie Policy

This website uses cookies to enhance your browsing experience.

Types of cookies we use:
- Essential cookies for site functionality
- Analytics cookies for performance tracking
- Marketing cookies for personalised content
- Preference cookies to remember your settings

You can manage your cookie preferences in your browser settings.

By continuing to use this website, you consent to our use of cookies.
      `}
    />
  ),
});
