import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports Betting — 1xBET India" },
      {
        name: "description",
        content:
          "Bet on sports online at 1xBET India. Cricket, football, tennis, basketball, esports and more. Live odds, in-play betting and competitive markets.",
      },
      { property: "og:title", content: "Sports Betting — 1xBET India" },
      {
        property: "og:description",
        content:
          "Bet on sports online at 1xBET India. Cricket, football, tennis, basketball, esports and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/sports" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/sports" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Sports", url: "/sports" },
        ]}
      />
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
- Secure and fast payouts in INR

Popular sports to bet on:
- Cricket: IPL, T20 World Cup, Test matches, ODI series
- Football: Premier League, La Liga, Bundesliga, Serie A, Champions League
- Tennis: Grand Slam tournaments, ATP, WTA events
- Basketball: NBA, EuroLeague, international competitions
- Esports: CS2, Dota 2, League of Legends, Valorant

Start betting on your favourite sports today.
        `}
      />
    </>
  ),
});
