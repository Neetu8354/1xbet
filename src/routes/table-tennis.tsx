import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Table Tennis Betting", url: "/table-tennis" },
];

const faqs = [
  {
    q: "What table tennis competitions can I bet on?",
    a: "You can explore betting markets across WTT events, ITTF championships, Olympic competitions, and professional table tennis leagues.",
  },
  {
    q: "How does table tennis handicap betting work?",
    a: "Handicap betting adjusts the advantage or disadvantage between players through game or point differences.",
  },
  {
    q: "Can I bet on live table tennis matches?",
    a: "Yes, live table tennis betting allows users to explore available markets while matches are in progress.",
  },
  {
    q: "What are WTT betting markets?",
    a: "WTT betting markets include match winners, handicaps, totals, correct scores, and tournament winner options.",
  },
  {
    q: "How many games are played in professional table tennis?",
    a: "The number of games depends on the competition format. Many professional matches are played as best-of-five or best-of-seven games.",
  },
];

const tableTennisEvents = [
  {
    name: "WTT Grand Smash 2027",
    sport: "Table Tennis",
    startDate: "2027-02",
    organizer: "WTT",
    location: { "@type": "AdministrativeArea", name: "Worldwide" },
    url: `${SITE_URL}/table-tennis/wtt`,
  },
  {
    name: "ITTF World Table Tennis Championships 2027",
    sport: "Table Tennis",
    startDate: "2027-05",
    organizer: "ITTF",
    location: { "@type": "AdministrativeArea", name: "Worldwide" },
    url: `${SITE_URL}/table-tennis/ittf`,
  },
  {
    name: "WTT Champions Series 2026-27",
    sport: "Table Tennis",
    startDate: "2026-10",
    organizer: "WTT",
    location: { "@type": "AdministrativeArea", name: "Worldwide" },
    url: `${SITE_URL}/table-tennis`,
  },
];

export const Route = createFileRoute("/table-tennis")({
  head: () => ({
    meta: [
      { title: "Table Tennis Betting India | WTT, ITTF & Live Odds | 1xBET" },
      {
        name: "description",
        content:
          "Table tennis betting in India at 1xBET. Live odds on WTT, ITTF championships and pro leagues — game handicaps, totals, correct score and live markets in INR.",
      },
      {
        property: "og:title",
        content: "Table Tennis Betting India | WTT & ITTF Odds | 1xBET",
      },
      {
        property: "og:description",
        content:
          "Follow WTT, ITTF and daily table tennis odds with handicaps, totals, point markets and live betting options at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/table-tennis` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:title",
        content: "Table Tennis Betting India | WTT & ITTF Odds | 1xBET",
      },
      {
        name: "twitter:description",
        content:
          "Follow WTT, ITTF and daily table tennis odds with handicaps, totals, point markets and live betting options at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-table-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/table-tennis` }],
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
          name: "Table tennis competitions covered at 1xBET India",
          itemListElement: tableTennisEvents.map((e, i) => ({
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
          headline: "Table Tennis Betting India — WTT, ITTF & Live Table Tennis Odds",
          dateModified: "2026-09-21",
          author: { "@type": "Organization", name: "1xBET Table Tennis Content Team" },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/table-tennis`,
          image: `${SITE_URL}/assets/seo/og-table-tennis.png`,
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Table Tennis Betting India - WTT, ITTF & Live Table Tennis Odds"
        description="WTT, ITTF and league table tennis odds — handicaps, totals, correct score and live markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <>
            <img
              src="/assets/seo/table-tennis-betting-india.webp"
              alt="Table tennis betting India WTT odds and live table tennis markets"
              width="1200"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Written by: 1xBET Table Tennis Content Team · Reviewed by our table tennis analysts ·
              Last updated: 21 September 2026
            </p>
            <nav
              aria-label="Table tennis quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/table-tennis/live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Table Tennis Odds
              </a>
              <a
                href="/table-tennis/wtt"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                WTT Betting
              </a>
              <a
                href="/table-tennis/schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Table Tennis Schedule
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Table Tennis Betting at 1xBET India",
            body: (
              <>
                <p>
                  Table tennis is one of the fastest-paced indoor sports, offering exciting betting
                  opportunities throughout the year. At 1xBET India, users can explore table tennis
                  betting markets across major international competitions including{" "}
                  <a href="/table-tennis/wtt" className="text-brand underline">
                    World Table Tennis (WTT)
                  </a>{" "}
                  events,{" "}
                  <a href="/table-tennis/ittf" className="text-brand underline">
                    ITTF championships
                  </a>
                  , Olympic tournaments, and professional league matches from Europe and Asia.
                </p>
                <p className="mt-2">
                  With pre-match and{" "}
                  <a href="/table-tennis/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  options available, table tennis fans can follow matches and explore different
                  markets including match winner, game handicap, total points, total games, correct
                  scores, race-to-point markets, and tournament winner selections.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Table Tennis Betting Odds",
            body: (
              <>
                <p>
                  Table tennis odds are influenced by several factors including player rankings,
                  recent form, playing style, tournament level, head-to-head history, and current
                  performance. Since table tennis matches can change quickly, live odds may move
                  after every rally, game, and momentum shift.
                </p>
                <p className="mt-2">
                  Understanding player statistics and match conditions can help users analyse
                  available betting markets before making selections. Compare current prices on the{" "}
                  <a href="/table-tennis/odds" className="text-brand underline">
                    table tennis odds
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "WTT Table Tennis Betting",
            body: (
              <>
                <p>
                  World Table Tennis (WTT) events bring together many of the world's best table
                  tennis players. Major competitions include WTT Grand Smashes, WTT Champions
                  events, and WTT Contender tournaments.
                </p>
                <p className="mt-2">
                  WTT competitions provide a wide range of betting opportunities including:
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Match winner markets</li>
                  <li>Game handicap betting</li>
                  <li>Total games over/under</li>
                  <li>Total points over/under</li>
                  <li>Correct game score</li>
                  <li>Tournament winner markets</li>
                </ul>
                <p className="mt-2">
                  Player rankings, recent tournament results, playing styles, and previous
                  performances are important factors when analysing WTT matches. See the{" "}
                  <a href="/table-tennis/wtt" className="text-brand underline">
                    WTT betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "ITTF Table Tennis Betting",
            body: (
              <p>
                The International Table Tennis Federation (ITTF) organises some of the biggest table
                tennis competitions worldwide. ITTF events include World Championships,
                international tournaments, and Olympic table tennis competitions. ITTF betting
                markets allow users to explore different options such as match outcomes, game
                results, totals, and tournament selections. Factors such as player consistency,
                attacking ability, defensive skills, serve quality, and recent form can influence
                match analysis — explore the{" "}
                <a href="/table-tennis/ittf" className="text-brand underline">
                  ITTF betting page
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Olympic Table Tennis Betting",
            body: (
              <p>
                Olympic table tennis events feature the world's top players competing on an
                international stage. These tournaments attract global attention and provide
                opportunities for fans to follow individual matches and tournament outcomes. Popular
                Olympic table tennis markets include match winner, game betting, and tournament
                winner selections.
              </p>
            ),
          },
          {
            heading: "Professional Table Tennis Leagues",
            body: (
              <p>
                Apart from WTT and ITTF events, professional table tennis matches take place
                regularly across various leagues in Europe and Asia. Daily league competitions
                provide frequent betting opportunities with markets available for match winners,
                handicaps, totals, and live betting.
              </p>
            ),
          },
          {
            heading: "Popular Table Tennis Betting Markets",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Match Winner Betting</h3>
                <p>
                  Match winner betting allows users to select which player will win a table tennis
                  match. It is one of the most common betting markets available.
                </p>
                <h3 className="mt-3 font-semibold">Game Handicap Betting</h3>
                <p>
                  Game handicap betting creates an advantage or disadvantage between players by
                  adjusting the number of games. This provides additional options when analysing
                  matches between players with different rankings or form levels.
                </p>
                <h3 className="mt-3 font-semibold">Total Points Betting</h3>
                <p>
                  Total points betting focuses on the combined points scored during a match. Users
                  can select whether the final points total will be over or under a selected number.
                </p>
                <h3 className="mt-3 font-semibold">Total Games Betting</h3>
                <p>
                  Total games betting involves predicting whether a match will finish with more or
                  fewer games than the available betting line.
                </p>
                <h3 className="mt-3 font-semibold">Correct Score Betting</h3>
                <p>
                  Correct score markets allow users to predict the exact game result of a match,
                  such as 3-0, 3-1, or 3-2 depending on the match format.
                </p>
                <h3 className="mt-3 font-semibold">Race to Points Betting</h3>
                <p>
                  Race-to-point markets focus on which player reaches a specific point target first
                  during a game.
                </p>
                <h3 className="mt-3 font-semibold">First Game Winner Betting</h3>
                <p>
                  This market allows users to predict which player will win the opening game of a
                  table tennis match.
                </p>
              </>
            ),
          },
          {
            heading: "Live Table Tennis Betting",
            body: (
              <>
                <img
                  src="/assets/seo/live-table-tennis-betting.webp"
                  alt="Live table tennis betting — point-by-point in-play odds on WTT and league matches"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live table tennis betting allows users to follow matches while they are happening
                  and explore changing odds throughout the match.
                </p>
                <p className="mt-2">
                  Table tennis is known for quick momentum changes. A single rally, service break,
                  or series of points can change the direction of a game. Live markets may include
                  match winners, game winners, point totals, and race-to-point selections — follow
                  the action in the{" "}
                  <a href="/table-tennis/live" className="text-brand underline">
                    live table tennis
                  </a>{" "}
                  section.
                </p>
              </>
            ),
          },
          {
            heading: "How to Analyse Table Tennis Matches Before Betting",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Player Form</h3>
                <p>
                  Review recent performances, tournament results, winning streaks, and current
                  competitive level.
                </p>
                <h3 className="mt-3 font-semibold">Head-to-Head Records</h3>
                <p>
                  Previous meetings between players can provide useful information about playing
                  styles and match history.
                </p>
                <h3 className="mt-3 font-semibold">Playing Style</h3>
                <p>
                  Consider whether players rely on aggressive attacking shots, defensive techniques,
                  strong serves, or long rallies.
                </p>
                <h3 className="mt-3 font-semibold">Player Rankings</h3>
                <p>
                  Rankings provide an overview of player performance and achievements in
                  professional competitions.
                </p>
                <h3 className="mt-3 font-semibold">Tournament Importance</h3>
                <p>
                  Players may perform differently depending on whether they are competing in major
                  championships or regular league matches.
                </p>
                <h3 className="mt-3 font-semibold">Recent Schedule</h3>
                <p>Recent workload, travel, and recovery time can influence player performance.</p>
              </>
            ),
          },
          {
            heading: "Table Tennis Betting Tips",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Research player statistics before selecting betting markets.</li>
                <li>
                  Compare different betting options instead of focusing only on match winners.
                </li>
                <li>Consider rankings, recent form, and tournament conditions.</li>
                <li>Follow table tennis updates and competition news.</li>
                <li>Set personal limits and approach betting responsibly.</li>
              </ul>
            ),
          },
          {
            heading: "Responsible Table Tennis Betting",
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
            heading: "Explore Table Tennis Betting Markets",
            body: (
              <p>
                Follow WTT events, ITTF championships, Olympic tournaments, and professional table
                tennis competitions with a wide range of betting options. Explore table tennis{" "}
                <a href="/table-tennis/odds" className="text-brand underline">
                  odds
                </a>
                , handicaps, totals, point markets, and live betting opportunities at 1xBET India —
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
          <h2 className="text-xl font-bold sm:text-2xl">Table Tennis Betting FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <nav aria-label="Table tennis betting resources" className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Table tennis betting resources</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            <li>
              <a href="/table-tennis/wtt" className="block rounded-md border p-3 hover:bg-accent">
                WTT Betting
              </a>
            </li>
            <li>
              <a href="/table-tennis/ittf" className="block rounded-md border p-3 hover:bg-accent">
                ITTF Betting
              </a>
            </li>
            <li>
              <a href="/table-tennis/live" className="block rounded-md border p-3 hover:bg-accent">
                Live Table Tennis
              </a>
            </li>
            <li>
              <a href="/table-tennis/odds" className="block rounded-md border p-3 hover:bg-accent">
                Table Tennis Odds
              </a>
            </li>
            <li>
              <a
                href="/table-tennis/results"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                Table Tennis Results
              </a>
            </li>
            <li>
              <a
                href="/table-tennis/schedule"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                Table Tennis Schedule
              </a>
            </li>
          </ul>
        </nav>
      </SEOPage>
    </>
  ),
});
