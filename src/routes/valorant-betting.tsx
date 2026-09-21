import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Esports Betting", url: "/esports" },
  { name: "Valorant Betting", url: "/valorant-betting" },
];

export const Route = createFileRoute("/valorant-betting")({
  head: () => ({
    meta: [
      { title: "Valorant Betting India | VCT & Champions Odds | 1xBET" },
      {
        name: "description",
        content:
          "Valorant betting in India at 1xBET. Live odds on VCT leagues, Masters and Champions. Map winner, round totals and pistol round markets in INR.",
      },
      { property: "og:title", content: "Valorant Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live Valorant odds on VCT, Masters and Champions. Bet in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/valorant-betting` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-esports.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/valorant-betting` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Valorant Betting India"
        description="Valorant odds on the Champions Tour — VCT leagues, Masters and Champions, pre-match and live in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <img
            src="/assets/seo/valorant-betting-india.webp"
            alt="Valorant betting India — VCT and Champions tournament odds"
            width="1200"
            height="500"
            fetchPriority="high"
            decoding="async"
            className="mt-4 w-full rounded-lg border"
          />
        }
        sections={[
          {
            heading: "Valorant Betting in India",
            body: (
              <>
                <p>
                  Valorant betting covers Riot Games' official circuit: the four VCT international
                  leagues (Americas, EMEA, Pacific and China), Masters events and Valorant Champions
                  — the world championship that closes each season.
                </p>
                <p className="mt-2">
                  Fixtures are listed on the{" "}
                  <a href="/esports-schedule" className="text-brand underline">
                    esports schedule
                  </a>{" "}
                  and recent results on the{" "}
                  <a href="/esports-results" className="text-brand underline">
                    esports results
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "Popular Valorant Betting Markets",
            body: (
              <>
                <p>Valorant's round format mirrors CS2, so its markets will feel familiar:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner across best-of-three or best-of-five series</li>
                  <li>Map winner and map handicap</li>
                  <li>Total rounds over/under per map</li>
                  <li>Pistol round winner and first blood</li>
                  <li>Correct map score and outright tournament winner</li>
                </ul>
                <p className="mt-2">
                  Agent compositions and the map veto phase can shift a match-up significantly —
                  teams with deep map pools hold an edge in longer series.
                </p>
              </>
            ),
          },
          {
            heading: "Live Valorant Betting",
            body: (
              <p>
                Bonus rounds, ultimates and eco swings make Valorant one of the most volatile
                in-play esports. Follow round-by-round odds in the{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section, with cash out on selected markets.
              </p>
            ),
          },
          {
            heading: "More esports betting",
            body: (
              <p>
                Also explore{" "}
                <a href="/cs2-betting" className="text-brand underline">
                  CS2 betting
                </a>
                ,{" "}
                <a href="/dota2-betting" className="text-brand underline">
                  Dota 2 betting
                </a>{" "}
                and{" "}
                <a href="/lol-betting" className="text-brand underline">
                  LoL betting
                </a>
                , or return to the{" "}
                <a href="/esports" className="text-brand underline">
                  esports betting hub
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
