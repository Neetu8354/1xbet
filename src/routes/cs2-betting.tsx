import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Esports Betting", url: "/esports" },
  { name: "CS2 Betting", url: "/cs2-betting" },
];

export const Route = createFileRoute("/cs2-betting")({
  head: () => ({
    meta: [
      { title: "CS2 Betting India | Counter-Strike 2 Odds & Markets | 1xBET" },
      {
        name: "description",
        content:
          "CS2 betting in India at 1xBET. Live odds on Majors, ESL Pro League, IEM and BLAST. Map winner, round totals and pistol round markets in INR.",
      },
      { property: "og:title", content: "CS2 Betting India | 1xBET" },
      {
        property: "og:description",
        content:
          "Live CS2 odds on Majors, ESL Pro League and BLAST events. Bet in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/cs2-betting` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-esports.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cs2-betting` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="CS2 Betting India"
        description="Counter-Strike 2 odds on Majors, ESL Pro League, IEM and BLAST — pre-match and live markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <img
            src="/assets/seo/cs2-betting-india.webp"
            alt="CS2 betting online India — Counter-Strike 2 Major and tournament odds"
            width="1200"
            height="500"
            fetchPriority="high"
            decoding="async"
            className="mt-4 w-full rounded-lg border"
          />
        }
        sections={[
          {
            heading: "CS2 Betting in India",
            body: (
              <>
                <p>
                  Counter-Strike 2 is the world's most bet-on esport, and CS2 betting is one of the
                  most popular esports categories at 1xBET India. We price every tier of the
                  competitive calendar — Valve Majors, ESL Pro League seasons, IEM stops, BLAST
                  Premier events and qualifiers — with pre-match and live markets on each series.
                </p>
                <p className="mt-2">
                  Check the{" "}
                  <a href="/esports-schedule" className="text-brand underline">
                    esports schedule
                  </a>{" "}
                  for upcoming CS2 fixtures and recent form on the{" "}
                  <a href="/esports-results" className="text-brand underline">
                    esports results
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "Popular CS2 Betting Markets",
            body: (
              <>
                <p>
                  CS2's round-based format creates a wide range of markets on each map and series:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner — the series winner across best-of-one or best-of-three maps</li>
                  <li>Map winner and map handicap (e.g. -1.5 maps)</li>
                  <li>Total rounds and round handicaps per map</li>
                  <li>Pistol round winner — rounds 1 and 13 of each map</li>
                  <li>Correct map score — 2-0, 2-1 and reverse sweep options</li>
                  <li>Outright tournament winner — Majors, EPL and BLAST titles</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Live CS2 Betting",
            body: (
              <p>
                CS2 is ideal for in-play betting: economy rounds, force buys and map vetoes create
                constant momentum swings. The{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                lobby reprices every round in real time, and cash out is available on selected
                markets.
              </p>
            ),
          },
          {
            heading: "More esports betting",
            body: (
              <p>
                Also explore{" "}
                <a href="/dota2-betting" className="text-brand underline">
                  Dota 2 betting
                </a>
                ,{" "}
                <a href="/valorant-betting" className="text-brand underline">
                  Valorant betting
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
