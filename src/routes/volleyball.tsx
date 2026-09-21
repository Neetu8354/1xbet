import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Volleyball Betting", url: "/volleyball" },
];

const faqs = [
  {
    q: "What volleyball competitions can I bet on?",
    a: "You can explore volleyball betting markets across competitions including VNL, World Championships, Olympic tournaments, club leagues, and beach volleyball events.",
  },
  {
    q: "How does volleyball set betting work?",
    a: "Set betting allows users to predict outcomes related to individual sets or the final set score of a volleyball match.",
  },
  {
    q: "What is volleyball handicap betting?",
    a: "Volleyball handicap betting gives one team an advantage or disadvantage through set or point adjustments.",
  },
  {
    q: "Can I bet on VNL matches live?",
    a: "Yes, live volleyball betting allows users to explore available markets while VNL matches are in progress.",
  },
  {
    q: "Which volleyball leagues are available?",
    a: "Major volleyball leagues include international tournaments, European club competitions, and domestic leagues from countries such as Italy, Poland, Turkey, and Brazil.",
  },
];

const volleyballEvents = [
  {
    name: "Volleyball Nations League 2027",
    sport: "Volleyball",
    startDate: "2027-05",
    organizer: "FIVB",
    location: { "@type": "AdministrativeArea", name: "Worldwide" },
    url: `${SITE_URL}/volleyball/vnl`,
  },
  {
    name: "FIVB Volleyball World Championship 2027",
    sport: "Volleyball",
    startDate: "2027-08",
    organizer: "FIVB",
    location: { "@type": "AdministrativeArea", name: "Worldwide" },
    url: `${SITE_URL}/volleyball/world-championship`,
  },
  {
    name: "FIVB Club World Championship 2026",
    sport: "Volleyball",
    startDate: "2026-12",
    organizer: "FIVB",
    location: { "@type": "AdministrativeArea", name: "Worldwide" },
    url: `${SITE_URL}/volleyball`,
  },
];

export const Route = createFileRoute("/volleyball")({
  head: () => ({
    meta: [
      {
        title: "Volleyball Betting India | VNL, World Championship & Live Odds | 1xBET",
      },
      {
        name: "description",
        content:
          "Volleyball betting in India at 1xBET. Live odds on VNL, World Championships and club leagues — set betting, handicaps, totals and live markets in INR.",
      },
      {
        property: "og:title",
        content: "Volleyball Betting India | VNL & World Championship Odds | 1xBET",
      },
      {
        property: "og:description",
        content:
          "Follow VNL, club and international volleyball odds with set betting, totals and live volleyball markets at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/volleyball` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-volleyball.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:title",
        content: "Volleyball Betting India | VNL & World Championship Odds | 1xBET",
      },
      {
        name: "twitter:description",
        content:
          "Follow VNL, club and international volleyball odds with set betting, totals and live volleyball markets at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-volleyball.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/volleyball` }],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Volleyball competitions covered at 1xBET India",
          itemListElement: volleyballEvents.map((e, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "SportsEvent",
              name: e.name,
              sport: e.sport,
              startDate: e.startDate,
              eventStatus: "https://schema.org/EventScheduled",
              location: e.location,
              organizer: { "@type": "Organization", name: e.organizer },
              url: e.url,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Volleyball Betting India — VNL, World Championship & Live Volleyball Odds",
          dateModified: "2026-09-21",
          author: { "@type": "Organization", name: "1xBET Volleyball Content Team" },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/volleyball`,
          image: `${SITE_URL}/assets/seo/og-volleyball.png`,
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Volleyball Betting India - VNL, World Championship & Live Volleyball Odds"
        description="VNL, World Championship and club volleyball odds — set betting, handicaps, totals and live markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <>
            <img
              src="/assets/seo/volleyball-betting-india.webp"
              alt="Volleyball betting India — VNL and World Championship odds with live markets"
              width="1200"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Written by: 1xBET Volleyball Content Team · Reviewed by our volleyball analysts · Last
              updated: 21 September 2026
            </p>
            <nav
              aria-label="Volleyball quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/volleyball/live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Volleyball Odds
              </a>
              <a
                href="/volleyball/vnl"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                VNL Betting
              </a>
              <a
                href="/volleyball/schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Volleyball Schedule
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Volleyball Betting at 1xBET India",
            body: (
              <>
                <p>
                  Volleyball is one of the most popular international sports, offering exciting
                  betting opportunities throughout the year. At 1xBET India, users can explore
                  volleyball betting markets across major competitions including the FIVB{" "}
                  <a href="/volleyball/vnl" className="text-brand underline">
                    Volleyball Nations League (VNL)
                  </a>
                  ,{" "}
                  <a href="/volleyball/world-championship" className="text-brand underline">
                    World Championships
                  </a>
                  , Olympic tournaments, Club World Championships, and leading domestic leagues.
                </p>
                <p className="mt-2">
                  With pre-match and{" "}
                  <a href="/volleyball/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  options available, volleyball fans can follow professional matches and explore
                  markets including match winners, set betting, handicaps, totals, correct set
                  scores, and tournament winner selections.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Volleyball Betting Odds",
            body: (
              <p>
                Volleyball odds are influenced by several factors including team performance, player
                form, tournament importance, injuries, rankings, and recent match results. Analysing
                these factors can help users understand different betting markets before selecting
                an option. Compare current prices on the{" "}
                <a href="/volleyball/odds" className="text-brand underline">
                  volleyball odds
                </a>{" "}
                page.
              </p>
            ),
          },
          {
            heading: "Volleyball Nations League (VNL) Betting",
            body: (
              <>
                <p>
                  The Volleyball Nations League is one of the biggest international volleyball
                  competitions, featuring top national teams from around the world. Both men's and
                  women's tournaments attract global audiences and provide multiple betting
                  opportunities.
                </p>
                <p className="mt-2">Popular VNL betting markets include:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Match winner</li>
                  <li>Set winner</li>
                  <li>Set handicap</li>
                  <li>Total sets over/under</li>
                  <li>Total points over/under</li>
                  <li>Correct set score</li>
                  <li>Tournament winner</li>
                </ul>
                <p className="mt-2">
                  Team strength, recent performances, player availability, and tactical approach can
                  influence match outcomes during the competition. See the{" "}
                  <a href="/volleyball/vnl" className="text-brand underline">
                    VNL betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "World Championship Volleyball Betting",
            body: (
              <p>
                The Volleyball World Championship brings together leading national teams competing
                for one of the sport's most prestigious titles. World Championship betting markets
                include match outcomes, set markets, totals, and tournament winner selections.
                Important factors to consider include team rankings, previous tournament
                performances, offensive strength, defensive organisation, and player combinations —
                explore the{" "}
                <a href="/volleyball/world-championship" className="text-brand underline">
                  World Championship page
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Olympic Volleyball Betting",
            body: (
              <p>
                Olympic volleyball tournaments feature the world's strongest teams competing on an
                international stage. Both indoor volleyball and beach volleyball events provide
                unique betting opportunities. Users can explore markets related to match winners,
                sets, points, and tournament outcomes.
              </p>
            ),
          },
          {
            heading: "Club Volleyball Betting",
            body: (
              <>
                <p>
                  Club volleyball competitions provide year-round betting opportunities through some
                  of the strongest domestic leagues.
                </p>
                <p className="mt-2">Popular club competitions include:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Italian Volleyball League</li>
                  <li>Polish Volleyball League</li>
                  <li>Turkish Volleyball League</li>
                  <li>Brazilian Volleyball League</li>
                </ul>
                <p className="mt-2">
                  Club volleyball matches often feature different playing styles, making team
                  analysis important before exploring betting markets.
                </p>
              </>
            ),
          },
          {
            heading: "Beach Volleyball Betting",
            body: (
              <p>
                Beach volleyball offers a different format compared with indoor volleyball. Matches
                are played between pairs, creating unique strategies and betting opportunities.
                Popular beach volleyball markets include match winners, set results, and tournament
                outcomes.
              </p>
            ),
          },
          {
            heading: "Popular Volleyball Betting Markets",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Match Winner Betting</h3>
                <p>
                  Match winner betting allows users to select which team will win a volleyball
                  match. This is one of the most common betting markets available.
                </p>
                <h3 className="mt-3 font-semibold">Set Betting</h3>
                <p>
                  Set betting focuses on predicting individual set outcomes or the final set score
                  of a match. Volleyball matches can be highly competitive, making set markets
                  popular among fans.
                </p>
                <h3 className="mt-3 font-semibold">Set Handicap Betting</h3>
                <p>
                  Set handicap betting gives one team an advantage or disadvantage in terms of sets.
                  This creates additional betting options between teams with different strengths.
                </p>
                <h3 className="mt-3 font-semibold">Total Points Betting</h3>
                <p>
                  Total points betting focuses on whether the combined points scored during a match
                  will be over or under a selected number.
                </p>
                <h3 className="mt-3 font-semibold">Total Sets Betting</h3>
                <p>
                  Users can predict whether a match will finish with a higher or lower number of
                  sets.
                </p>
                <h3 className="mt-3 font-semibold">Correct Set Score Betting</h3>
                <p>
                  Correct set score markets allow users to predict the exact final set result of a
                  volleyball match.
                </p>
                <h3 className="mt-3 font-semibold">Tournament Winner Betting</h3>
                <p>
                  Tournament winner markets allow users to select teams expected to perform strongly
                  throughout major competitions.
                </p>
              </>
            ),
          },
          {
            heading: "Live Volleyball Betting",
            body: (
              <>
                <img
                  src="/assets/seo/live-volleyball-betting.webp"
                  alt="Live volleyball betting — in-play set betting and totals markets on every match"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live volleyball betting allows users to follow matches while they are happening
                  and explore changing odds during different stages of play.
                </p>
                <p className="mt-2">
                  Volleyball matches can change quickly because of momentum shifts, technical
                  timeouts, service runs, and tactical changes. Live betting markets may include set
                  winners, point totals, match outcomes, and other in-play options — follow the
                  action in the{" "}
                  <a href="/volleyball/live" className="text-brand underline">
                    live volleyball
                  </a>{" "}
                  section.
                </p>
              </>
            ),
          },
          {
            heading: "How to Analyse Volleyball Matches Before Betting",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Team Form</h3>
                <p>
                  Review recent results, winning streaks, and overall team performance before
                  selecting markets.
                </p>
                <h3 className="mt-3 font-semibold">Player Availability</h3>
                <p>
                  Key players can influence volleyball matches significantly. Check injuries, squad
                  changes, and player fitness.
                </p>
                <h3 className="mt-3 font-semibold">Head-to-Head Records</h3>
                <p>Previous meetings between teams can provide useful historical information.</p>
                <h3 className="mt-3 font-semibold">Attack and Defence Performance</h3>
                <p>
                  Consider attacking efficiency, blocking ability, serving quality, and defensive
                  organisation.
                </p>
                <h3 className="mt-3 font-semibold">Tournament Importance</h3>
                <p>
                  Teams may have different motivations depending on whether they are competing in
                  league matches, championships, or qualification events.
                </p>
                <h3 className="mt-3 font-semibold">Home Advantage</h3>
                <p>
                  Some teams perform differently depending on venue conditions and home support.
                </p>
              </>
            ),
          },
          {
            heading: "Volleyball Betting Tips",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Research team statistics before selecting betting markets.</li>
                <li>
                  Compare different betting options instead of focusing only on match winners.
                </li>
                <li>Follow player updates and tournament news.</li>
                <li>Consider recent form and competition level.</li>
                <li>Set personal limits and approach betting responsibly.</li>
              </ul>
            ),
          },
          {
            heading: "Responsible Volleyball Betting",
            body: (
              <p>
                Sports betting should always be approached responsibly. Understand the risks
                involved, set personal limits, and participate only if you meet the legal age
                requirements in your location. Visit{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                for account controls and safer-gambling resources, or{" "}
                <a href="/contact" className="text-brand underline">
                  contact support
                </a>{" "}
                for account help.
              </p>
            ),
          },
          {
            heading: "Explore Volleyball Betting Markets",
            body: (
              <p>
                Follow VNL, World Championship, Olympic, club, and beach volleyball competitions
                with a wide range of betting options. Explore volleyball{" "}
                <a href="/volleyball/odds" className="text-brand underline">
                  odds
                </a>
                , set markets, totals, handicaps, and live betting opportunities at 1xBET India —
                deposit and withdraw in INR via{" "}
                <a href="/payments" className="text-brand underline">
                  supported payment methods
                </a>
                , and review our{" "}
                <a href="/terms" className="text-brand underline">
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-brand underline">
                  Privacy Policy
                </a>
                .
              </p>
            ),
          },
        ]}
      >
        <section className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Volleyball Betting FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <nav aria-label="Volleyball betting resources" className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Volleyball betting resources</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            <li>
              <a href="/volleyball/vnl" className="block rounded-md border p-3 hover:bg-accent">
                VNL Betting
              </a>
            </li>
            <li>
              <a
                href="/volleyball/world-championship"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                World Championship
              </a>
            </li>
            <li>
              <a href="/volleyball/live" className="block rounded-md border p-3 hover:bg-accent">
                Live Volleyball
              </a>
            </li>
            <li>
              <a href="/volleyball/odds" className="block rounded-md border p-3 hover:bg-accent">
                Volleyball Odds
              </a>
            </li>
            <li>
              <a href="/volleyball/results" className="block rounded-md border p-3 hover:bg-accent">
                Volleyball Results
              </a>
            </li>
            <li>
              <a
                href="/volleyball/schedule"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                Volleyball Schedule
              </a>
            </li>
          </ul>
        </nav>
      </SEOPage>
    </>
  ),
});
