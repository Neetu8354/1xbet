import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Ice Hockey Betting", url: "/ice-hockey" },
  { name: "KHL Betting", url: "/ice-hockey/khl" },
];

export const Route = createFileRoute("/ice-hockey_/khl")({
  head: () => ({
    meta: [
      { title: "KHL Betting India | Gagarin Cup & Live Odds | 1xBET" },
      {
        name: "description",
        content:
          "KHL betting in India at 1xBET. Odds on every Kontinental Hockey League game and Gagarin Cup playoffs — puck line, totals and live markets in INR.",
      },
      { property: "og:title", content: "KHL Betting India | 1xBET" },
      {
        property: "og:description",
        content: "KHL and Gagarin Cup odds — puck line, totals and live hockey betting in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ice-hockey/khl` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ice-hockey/khl` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="KHL Betting India"
        description="Kontinental Hockey League odds — puck line, totals and Gagarin Cup outrights in INR"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "KHL betting at 1xBET India",
            body: (
              <p>
                The Kontinental Hockey League is the strongest competition outside the NHL, with
                clubs across Russia and neighbouring countries playing a regular season from
                September before the Gagarin Cup playoffs. KHL puck drops fall in convenient evening
                slots for India, making it the most watchable top-tier league for Indian bettors.
              </p>
            ),
          },
          {
            heading: "Popular KHL betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner — regulation time or including OT/shootout</li>
                  <li>Puck line (±1.5 goals) — strong value on underdogs</li>
                  <li>Total goals over/under — KHL games trend lower-scoring</li>
                  <li>Period betting and both-teams-to-score</li>
                  <li>Gagarin Cup and conference outrights</li>
                </ul>
                <p className="mt-2">
                  The KHL's structured, defence-first style means under-totals and +1.5 puck-line
                  covers hit more often than in the NHL — a useful angle when comparing prices.
                </p>
              </>
            ),
          },
          {
            heading: "More ice hockey betting",
            body: (
              <p>
                Also see{" "}
                <a href="/ice-hockey/nhl" className="text-brand underline">
                  NHL betting
                </a>
                ,{" "}
                <a href="/ice-hockey/live" className="text-brand underline">
                  live hockey
                </a>
                ,{" "}
                <a href="/ice-hockey/odds" className="text-brand underline">
                  odds
                </a>
                ,{" "}
                <a href="/ice-hockey/schedule" className="text-brand underline">
                  schedule
                </a>{" "}
                and{" "}
                <a href="/ice-hockey/results" className="text-brand underline">
                  results
                </a>
                , or return to{" "}
                <a href="/ice-hockey" className="text-brand underline">
                  ice hockey betting
                </a>
                . Players must be 18+ — see{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>
                .
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
