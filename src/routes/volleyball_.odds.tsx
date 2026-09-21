import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Volleyball Betting", url: "/volleyball" },
  { name: "Volleyball Odds", url: "/volleyball/odds" },
];

export const Route = createFileRoute("/volleyball_/odds")({
  head: () => ({
    meta: [
      { title: "Volleyball Odds | VNL, Club & International Lines | 1xBET India" },
      {
        name: "description",
        content:
          "Latest volleyball odds at 1xBET India — match winner, set handicap and totals on VNL, World Championship and club league matches in INR.",
      },
      { property: "og:title", content: "Volleyball Odds | 1xBET India" },
      {
        property: "og:description",
        content: "VNL, club and international volleyball odds — set handicaps and totals in INR.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/volleyball/odds` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-volleyball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/volleyball/odds` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Volleyball Odds"
        description="Match winner, set handicap and totals on VNL, World Championship and club matches"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "How volleyball odds work",
            body: (
              <p>
                Volleyball odds are shown in decimal format — stake × price = total return. With no
                draws, all markets are two-way, so favourites price short and most value sits in set
                handicap and correct-score lines. Odds move on lineup news, injuries to key hitters
                and setters, and recent set-differential form.
              </p>
            ),
          },
          {
            heading: "Reading the main volleyball lines",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Match winner — two-way, no draw</li>
                <li>Set handicap — usually ±1.5 sets</li>
                <li>Correct score — exact set result (3-0, 3-1, 3-2)</li>
                <li>Total points over/under</li>
                <li>Set winners and set totals</li>
              </ul>
            ),
          },
          {
            heading: "Pre-match vs live odds",
            body: (
              <p>
                Pre-match prices settle once lineups are announced;{" "}
                <a href="/volleyball/live" className="text-brand underline">
                  live odds
                </a>{" "}
                then reprice after every set. Check the{" "}
                <a href="/volleyball/schedule" className="text-brand underline">
                  volleyball schedule
                </a>{" "}
                for today's matches and{" "}
                <a href="/volleyball/results" className="text-brand underline">
                  results
                </a>{" "}
                for recent form. Return to{" "}
                <a href="/volleyball" className="text-brand underline">
                  volleyball betting
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
