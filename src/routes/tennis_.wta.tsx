import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Tennis Betting", url: "/tennis" },
  { name: "WTA Betting", url: "/tennis/wta" },
];

export const Route = createFileRoute("/tennis_/wta")({
  head: () => ({
    meta: [
      { title: "WTA Tennis Betting India | WTA 1000 & Finals Odds | 1xBET" },
      {
        name: "description",
        content:
          "WTA tennis betting in India at 1xBET. Live odds on WTA 1000 events, 500s, 250s and the WTA Finals — match and set markets in INR.",
      },
      { property: "og:title", content: "WTA Tennis Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live WTA odds on 1000-level events and the WTA Finals. Bet in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/tennis/wta` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/tennis/wta` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="WTA Tennis Betting"
        description="Women's tour odds on WTA 1000, 500 and 250 events plus the WTA Finals"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "WTA betting at 1xBET India",
            body: (
              <p>
                The WTA tour is the women's professional circuit — WTA 1000 events alongside the
                ATP's Masters stops, WTA 500 and 250 tournaments worldwide, the four Grand Slams and
                the season-ending WTA Finals. All WTA matches are best-of-three sets, which makes
                them more volatile than men's five-set Slam matches.
              </p>
            ),
          },
          {
            heading: "Popular WTA betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner and set betting</li>
                  <li>Total games and game handicaps</li>
                  <li>First set winner and tie-break markets</li>
                  <li>Outright tournament winner</li>
                </ul>
                <p className="mt-2">
                  Breaks of serve are more frequent on the women's tour, so handicaps and totals
                  often price tighter than equivalent ATP markets — worth comparing before betting.
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
                <a href="/tennis/grand-slams" className="text-brand underline">
                  Grand Slam betting
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
