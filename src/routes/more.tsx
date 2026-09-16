import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/more")({
  head: () => ({
    meta: [
      { title: "More Betting Options — 1xBET India" },
      {
        name: "description",
        content:
          "Explore more betting options at 1xBET India. Virtual sports, Toto, TV games, politics and special markets.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/more" }],
  }),
  component: () => (
    <SEOPage
      title="More Betting Options"
      description="Explore additional betting markets at 1xBET India"
      content={`
Discover additional betting opportunities beyond traditional sports at 1xBET India.

More betting options include:
- Virtual sports betting
- Toto pools and lottery
- TV games and entertainment
- Political betting markets
- Special events and awards

Explore diverse betting opportunities at 1xBET India.
      `}
    />
  ),
});
