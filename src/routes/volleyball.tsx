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
    a: "You can bet on the Volleyball Nations League (VNL), FIVB World Championships, Olympic volleyball, club leagues such as Italy's SuperLega and Poland's PlusLiga, and beach volleyball tournaments including the Beach Pro Tour.",
  },
  {
    q: "How does volleyball set betting work?",
    a: "Set betting lets you predict the exact set outcome of a match — for example a 3-0 or 3-1 result in indoor volleyball, or 2-0/2-1 in beach volleyball. You can also bet on individual set winners.",
  },
  {
    q: "What is volleyball handicap betting?",
    a: "Handicap betting applies a set or points advantage to one team — for example -1.5 sets means the favourite must win 3-0 or 3-1, while a points handicap works like a spread on total points won.",
  },
  {
    q: "Can I bet on VNL matches live?",
    a: "Yes — live betting is available on Volleyball Nations League matches and most professional competitions, with odds updating after every set and key points.",
  },
  {
    q: "Which volleyball leagues are available?",
    a: "Markets cover the VNL, FIVB World and Club World Championships, Italy's SuperLega, Poland's PlusLiga, Brazil's Superliga, Russia's Super League, Turkey's Sultanlar Ligi and the beach volleyball Beach Pro Tour.",
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
        title: "Volleyball Betting India | VNL & World Championship Odds | 1xBET",
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
          headline: "Volleyball Betting India — VNL & World Championship Odds",
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
        title="Volleyball Betting India"
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
            heading: "Volleyball Betting Guide",
            body: (
              <>
                <p>
                  Volleyball is played year-round across national team tournaments and professional
                  club leagues, making it a reliable betting sport even when the bigger leagues are
                  quiet. At 1xBET India you can bet on the{" "}
                  <a href="/volleyball/vnl" className="text-brand underline">
                    Volleyball Nations League
                  </a>
                  , the{" "}
                  <a href="/volleyball/world-championship" className="text-brand underline">
                    FIVB World Championship
                  </a>
                  , Olympic volleyball, Europe's top club leagues and beach volleyball tours.
                </p>
                <p className="mt-2">
                  Pre-match and{" "}
                  <a href="/volleyball/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  are available on every competition, with markets covering match winners, set
                  betting, handicaps, totals and outrights — all settled in INR.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Volleyball Betting Odds",
            body: (
              <p>
                Volleyball odds are shaped by roster strength, recent form, injuries to key hitters
                and setters, home-court advantage and head-to-head records. Because volleyball has
                no draws, prices are two-way and favourites are often short — which is why set and
                handicap markets carry most of the value. Compare current prices on the{" "}
                <a href="/volleyball/odds" className="text-brand underline">
                  volleyball odds
                </a>{" "}
                page and check recent form on{" "}
                <a href="/volleyball/results" className="text-brand underline">
                  volleyball results
                </a>
                .
              </p>
            ),
          },
          {
            heading: "VNL Betting India",
            body: (
              <>
                <p>
                  The Volleyball Nations League is the biggest annual national-team competition — 16
                  men's and 16 women's teams playing a multi-week preliminary round before the
                  finals. Because the VNL runs every summer with several matches per day, it is the
                  busiest volleyball betting window of the year. Popular markets include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Match winner</li>
                  <li>Set handicap (±1.5 sets)</li>
                  <li>Correct set score — 3-0, 3-1, 3-2</li>
                  <li>Total points over/under</li>
                  <li>Set winners and set totals</li>
                  <li>VNL outright winner</li>
                </ul>
                <p className="mt-2">
                  See the full{" "}
                  <a href="/volleyball/vnl" className="text-brand underline">
                    VNL betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "World Championship Betting",
            body: (
              <p>
                The FIVB Volleyball World Championship is the sport's premier national-team
                tournament, held every four years with the world's top-ranked sides. Markets cover
                group-stage matches, knockout rounds, outright winner and top-scorer specials.
                National-team tournaments reward research on squad rotation — coaches rest starters
                heavily in early group games. Full coverage on the{" "}
                <a href="/volleyball/world-championship" className="text-brand underline">
                  World Championship page
                </a>
                .
              </p>
            ),
          },
          {
            heading: "Club Volleyball Leagues",
            body: (
              <p>
                Club volleyball provides year-round markets: Italy's SuperLega, Poland's PlusLiga,
                Brazil's Superliga, Russia's Super League and Turkey's Sultanlar Ligi are among the
                strongest competitions, with the FIVB Club World Championship closing the club
                calendar each December. League matches often feature clearer form signals than
                national-team games, making handicaps and totals the markets of choice.
              </p>
            ),
          },
          {
            heading: "Beach Volleyball Betting",
            body: (
              <p>
                Beach volleyball — two players per side, best-of-three sets to 21 — is covered on
                the Beach Pro Tour and at the Olympics. The shorter format and smaller rosters make
                pair chemistry and recent tournament form the key factors. Markets include match
                winner, set score (2-0/2-1) and total points.
              </p>
            ),
          },
          {
            heading: "Volleyball Betting Markets Explained",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Set Betting Explained</h3>
                <p>
                  Set betting predicts the exact set outcome — 3-0, 3-1 or 3-2 in indoor volleyball,
                  2-0 or 2-1 on the beach. It pays better than the moneyline on strong favourites
                  and is the natural market when you expect a clean sweep.
                </p>
                <h3 className="mt-3 font-semibold">Volleyball Handicap Betting</h3>
                <p>
                  Handicaps apply a set or points advantage — a -1.5 set handicap requires a 3-0 or
                  3-1 win, while points handicaps work like a spread on total points won across the
                  match.
                </p>
                <h3 className="mt-3 font-semibold">Total Points Betting</h3>
                <p>
                  Totals are over/under markets on combined points — useful when you expect a long
                  five-setter or a quick sweep without picking a winner.
                </p>
                <h3 className="mt-3 font-semibold">Match Winner</h3>
                <p>
                  The simplest market — pick the team to win the match. Two-way, no draws, so prices
                  on heavy favourites are usually short.
                </p>
                <h3 className="mt-3 font-semibold">Outright Winner</h3>
                <p>
                  Tournament markets for the VNL, World Championship, Club Worlds and domestic
                  league titles.
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
                  Live volleyball betting reprices after every set and during scoring runs — a
                  service run of 4–5 points can flip set-winner prices mid-rally window. In-play
                  markets include next-set winner, live handicaps, updated totals, race-to-X points
                  and match winner.
                </p>
                <p className="mt-2">
                  The best live windows come between sets, when prices reset before the next set
                  starts. Follow every match on the{" "}
                  <a href="/volleyball/live" className="text-brand underline">
                    live volleyball
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "How to Analyse Volleyball Matches",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Recent form and set differentials</h3>
                <p>
                  Set win-loss ratios reveal more than match results — a team losing 2-3 repeatedly
                  is playing better than its record suggests.
                </p>
                <h3 className="mt-3 font-semibold">Key player availability</h3>
                <p>
                  Volleyball squads lean heavily on their opposite hitter and setter — check
                  lineups, injuries and rotation news before betting.
                </p>
                <h3 className="mt-3 font-semibold">Head-to-head records</h3>
                <p>
                  Style matchups matter: strong serving teams trouble poor receivers regardless of
                  ranking.
                </p>
                <h3 className="mt-3 font-semibold">Home court and travel</h3>
                <p>
                  Home advantage is real in volleyball, and congested VNL or club schedules create
                  fatigue spots worth targeting.
                </p>
              </>
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
                for deposit limits, self-exclusion tools and safer-gambling resources, or{" "}
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
                Follow the VNL, World Championships, club leagues and beach volleyball with a full
                range of markets — set betting, handicaps, totals and outrights. Deposit and
                withdraw in INR via{" "}
                <a href="/payments" className="text-brand underline">
                  supported payment methods
                </a>
                , check fixtures on the{" "}
                <a href="/volleyball/schedule" className="text-brand underline">
                  volleyball schedule
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
