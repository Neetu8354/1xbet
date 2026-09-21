import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Tennis Betting", url: "/tennis" },
  { name: "Grand Slam Betting", url: "/tennis/grand-slams" },
];

export const Route = createFileRoute("/tennis_/grand-slams")({
  head: () => ({
    meta: [
      { title: "Grand Slam Tennis Betting | Australian Open, Wimbledon & US Open | 1xBET" },
      {
        name: "description",
        content:
          "Grand Slam tennis betting at 1xBET India. Odds on Australian Open, Roland Garros, Wimbledon and US Open — match, set and outright markets in INR.",
      },
      { property: "og:title", content: "Grand Slam Tennis Betting | 1xBET India" },
      {
        property: "og:description",
        content: "Odds on all four Grand Slams — match, set and outright markets in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/tennis/grand-slams` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/tennis/grand-slams` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Grand Slam Tennis Betting"
        description="Australian Open, Roland Garros, Wimbledon and US Open odds — the four majors"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "The four Grand Slams",
            body: (
              <>
                <p>
                  The Grand Slams are tennis's biggest betting events — each a two-week,
                  128-player-draw tournament with daily match markets and outrights throughout.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Australian Open</strong> — January, hard court, Melbourne
                  </li>
                  <li>
                    <strong>Roland Garros</strong> — May-June, clay, Paris
                  </li>
                  <li>
                    <strong>Wimbledon</strong> — June-July, grass, London
                  </li>
                  <li>
                    <strong>US Open</strong> — August-September, hard court, New York
                  </li>
                </ul>
              </>
            ),
          },
          {
            heading: "Grand Slam betting markets",
            body: (
              <>
                <p>
                  Slam markets include outright winner, quarter and half-of-draw winners,
                  stage-of-elimination, plus match winner, set betting, total games and handicaps on
                  every match. Men's singles is best-of-five sets — the only events where five-set
                  markets apply — while women's and doubles matches are best-of-three.
                </p>
                <p className="mt-2">
                  Surface history is the key input: clay specialists dominate Roland Garros odds,
                  big servers shorten at Wimbledon, and hard-court form matters most in Melbourne
                  and New York.
                </p>
              </>
            ),
          },
          {
            heading: "More tennis betting",
            body: (
              <p>
                Also see{" "}
                <a href="/tennis/atp" className="text-brand underline">
                  ATP betting
                </a>
                ,{" "}
                <a href="/tennis/wta" className="text-brand underline">
                  WTA betting
                </a>
                , the{" "}
                <a href="/tennis/schedule" className="text-brand underline">
                  tennis schedule
                </a>{" "}
                and{" "}
                <a href="/tennis/results" className="text-brand underline">
                  results
                </a>
                , or return to{" "}
                <a href="/tennis" className="text-brand underline">
                  tennis betting
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
