import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/full-version")({
  head: () => ({
    meta: [
      { title: "Full Version — 1xBET India" },
      {
        name: "description",
        content:
          "Access the full version of 1xBET India website. Complete sportsbook, casino and all features.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/full-version/" }],
  }),
  component: () => (
    <SEOPage
      title="Full Version"
      description="Access the complete 1xBET India experience"
      content={`
This is the full version of 1xBET India website. You have access to all features including:

- Complete sportsbook
- All casino games
- Live betting
- Account management
- Deposit and withdrawal options
- Customer support

Enjoy the full 1xBET India experience.
      `}
    />
  ),
});
