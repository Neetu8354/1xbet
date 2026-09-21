import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Badminton Betting", url: "/badminton" },
];

export const Route = createFileRoute("/badminton")({
  head: () => ({
    meta: [
      { title: "Badminton Betting India | BWF World Tour Odds | 1xBET" },
      {
        name: "description",
        content:
          "Badminton betting in India at 1xBET. Live odds on BWF World Tour events, World Championships and Olympics — match winner and totals in INR.",
      },
      { property: "og:title", content: "Badminton Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live badminton odds on BWF World Tour and championships. Bet in INR at 1xBET.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/badminton` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/badminton` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Badminton Betting India"
        description="BWF World Tour, World Championship and Olympic badminton odds — in INR"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Badminton betting at 1xBET India",
            body: (
              <p>
                Badminton has a passionate following in India — home to Olympic medallists and World
                Tour winners. We cover the full BWF World Tour (Super 1000 to Super 300 events), the
                World Championships, Thomas and Uber Cups and Olympic badminton.
              </p>
            ),
          },
          {
            heading: "Popular badminton betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner — best-of-three games to 21 points</li>
                  <li>Game handicap and correct score in games</li>
                  <li>Total points over/under</li>
                  <li>First game winner</li>
                  <li>Outright tournament winner</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Live badminton betting",
            body: (
              <p>
                Rallies and game intervals reprice badminton matches constantly — follow live odds
                in the{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>{" "}
                section. Players must be 18+ — see{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>
                .
              </p>
            ),
          },
          {
            heading: "More sports",
            body: (
              <p>
                Explore{" "}
                <a href="/cricket" className="text-brand underline">
                  cricket
                </a>
                ,{" "}
                <a href="/kabaddi" className="text-brand underline">
                  kabaddi
                </a>{" "}
                and{" "}
                <a href="/table-tennis" className="text-brand underline">
                  table tennis
                </a>
                , or browse all markets on the{" "}
                <a href="/sports" className="text-brand underline">
                  sports betting hub
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
