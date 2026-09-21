import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Kabaddi Betting", url: "/kabaddi" },
];

export const Route = createFileRoute("/kabaddi")({
  head: () => ({
    meta: [
      { title: "Kabaddi Betting India | Pro Kabaddi League Odds | 1xBET" },
      {
        name: "description",
        content:
          "Kabaddi betting in India at 1xBET. Live odds on Pro Kabaddi League matches — match winner, handicap and total points markets in INR.",
      },
      { property: "og:title", content: "Kabaddi Betting India | 1xBET" },
      {
        property: "og:description",
        content: "Live Pro Kabaddi League odds — match winner and points markets in INR at 1xBET.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/kabaddi` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/kabaddi` }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Kabaddi Betting India"
        description="Pro Kabaddi League and international kabaddi odds — match and points markets in INR"
        breadcrumbs={breadcrumbItems}
        sections={[
          {
            heading: "Kabaddi betting at 1xBET India",
            body: (
              <p>
                Kabaddi is one of India's homegrown sporting success stories, and the Pro Kabaddi
                League has turned it into a prime-time betting sport. We cover the PKL season — from
                the league stage to playoffs and the final — plus international kabaddi
                competitions.
              </p>
            ),
          },
          {
            heading: "Popular kabaddi betting markets",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner — including tie-break outcomes</li>
                  <li>Point handicap — adjusted raiding/defence advantage</li>
                  <li>Total points over/under</li>
                  <li>Half-time/full-time results</li>
                  <li>Top raider and top defender markets</li>
                  <li>Outright PKL champion</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Live kabaddi betting",
            body: (
              <p>
                All-outs and super raids swing kabaddi scores fast — live odds update raid-by-raid
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
                <a href="/football" className="text-brand underline">
                  football
                </a>{" "}
                and{" "}
                <a href="/badminton" className="text-brand underline">
                  badminton
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
