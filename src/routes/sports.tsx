import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports Betting — 1xBET India" },
      {
        name: "description",
        content:
          "Bet on sports online at 1xBET India. Cricket, football, tennis, basketball, esports and more. Live odds, in-play betting and competitive markets.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/sports/" }],
  }),
  component: () => (
    <SEOPage
      title="Sports Betting"
      description="Place bets on all major sports at 1xBET India"
      content={`
Welcome to the 1xBET India sports betting section. We offer comprehensive coverage of all major sports including cricket, football, tennis, basketball, and esports.

Our sportsbook features competitive odds, live in-play betting, and a wide range of markets for every match. Whether you're betting on the IPL, Premier League, or international tournaments, 1xBET India has you covered.

Why choose 1xBET India for sports betting?
- Best odds on cricket and football
- Live streaming of selected matches
- Cash out feature available
- Wide range of betting markets
- Secure and fast payouts

Start betting on your favourite sports today.
      `}
    />
  ),
});
