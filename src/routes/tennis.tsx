import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Tennis Betting", url: "/tennis" },
];

const faqs = [
  {
    q: "What tennis tournaments can I bet on in India?",
    a: "At 1xBET India you can bet on the four Grand Slams (Australian Open, Roland Garros, Wimbledon, US Open), the full ATP and WTA tours, Challenger and ITF events, plus Davis Cup and Billie Jean King Cup ties.",
  },
  {
    q: "Can I bet on ATP and WTA matches?",
    a: "Yes. Both the men's ATP tour and women's WTA tour are covered with pre-match and live markets on singles and doubles matches throughout the season.",
  },
  {
    q: "What tennis betting markets are available?",
    a: "Common tennis markets include match winner, set betting, first set winner, total games over/under, game handicaps, tie-break markets and outright tournament winner.",
  },
  {
    q: "How does live tennis betting work?",
    a: "Live tennis betting lets you bet while a match is in progress. Odds update point-by-point as breaks of serve, set results and momentum change — with markets like next game winner and set winner available in play.",
  },
];

const tennisEvents = [
  {
    name: "Australian Open 2027",
    sport: "Tennis",
    startDate: "2027-01",
    organizer: "Tennis Australia",
    location: { "@type": "Country", name: "Australia" },
    url: `${SITE_URL}/tennis/grand-slams`,
  },
  {
    name: "Roland Garros 2027",
    sport: "Tennis",
    startDate: "2027-05",
    organizer: "French Tennis Federation",
    location: { "@type": "Country", name: "France" },
    url: `${SITE_URL}/tennis/grand-slams`,
  },
  {
    name: "Wimbledon Championships 2027",
    sport: "Tennis",
    startDate: "2027-06",
    organizer: "All England Lawn Tennis Club",
    location: { "@type": "Country", name: "United Kingdom" },
    url: `${SITE_URL}/tennis/grand-slams`,
  },
  {
    name: "US Open 2027",
    sport: "Tennis",
    startDate: "2027-08",
    organizer: "USTA",
    location: { "@type": "Country", name: "United States" },
    url: `${SITE_URL}/tennis/grand-slams`,
  },
  {
    name: "ATP & WTA Finals 2026",
    sport: "Tennis",
    startDate: "2026-11",
    organizer: "ATP / WTA",
    location: { "@type": "AdministrativeArea", name: "Season Finale" },
    url: `${SITE_URL}/tennis`,
  },
];

export const Route = createFileRoute("/tennis")({
  head: () => ({
    meta: [
      { title: "Tennis Betting India | ATP, WTA & Grand Slam Odds | 1xBET" },
      {
        name: "description",
        content:
          "Tennis betting in India at 1xBET. Live odds on Grand Slams, ATP and WTA tours — match winner, set betting and total games markets in INR.",
      },
      {
        property: "og:title",
        content: "Tennis Betting India | ATP, WTA & Grand Slam Odds | 1xBET",
      },
      {
        property: "og:description",
        content: "Live tennis odds on Grand Slams, ATP and WTA events. Bet in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/tennis` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-tennis.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:title",
        content: "Tennis Betting India | ATP, WTA & Grand Slam Odds | 1xBET",
      },
      {
        name: "twitter:description",
        content: "Live tennis odds on Grand Slams, ATP and WTA events. Bet in INR at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-tennis.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/tennis` }],
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
          name: "Upcoming tennis tournaments at 1xBET India",
          itemListElement: tennisEvents.map((e, i) => ({
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
          headline: "Tennis Betting India — Live ATP, WTA & Grand Slam Betting",
          dateModified: "2026-09-21",
          author: { "@type": "Organization", name: "1xBET Tennis Content Team" },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/tennis`,
          image: `${SITE_URL}/assets/seo/og-tennis.png`,
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Tennis Betting India – Live ATP, WTA & Grand Slam Betting"
        description="Grand Slam, ATP and WTA odds — match, set and game markets, pre-match and live in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <>
            <img
              src="/assets/seo/tennis-betting-india.webp"
              alt="Tennis betting India — ATP, WTA and Grand Slam live odds"
              width="1200"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Written by: 1xBET Tennis Content Team · Reviewed by our tennis analysts · Last
              updated: 21 September 2026
            </p>
            <nav
              aria-label="Tennis quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Tennis Odds
              </a>
              <a
                href="/tennis/schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Tennis Schedule
              </a>
              <a
                href="/tennis/grand-slams"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Grand Slam Betting
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Tennis Betting at 1xBET India",
            body: (
              <>
                <p>
                  Tennis runs nearly year-round, making it one of the deepest sports on the
                  sportsbook for Indian bettors. From January's Australian Open to the season-ending
                  ATP and WTA Finals in November, professional tennis offers singles and doubles
                  matches almost every day — all with pre-match and live markets priced in INR.
                </p>
                <p className="mt-2">
                  1xBET India covers the four Grand Slams, the full{" "}
                  <a href="/tennis/atp" className="text-brand underline">
                    ATP
                  </a>{" "}
                  and{" "}
                  <a href="/tennis/wta" className="text-brand underline">
                    WTA
                  </a>{" "}
                  tours, Challenger and ITF events, plus Davis Cup and Billie Jean King Cup ties.
                  Check upcoming fixtures on the{" "}
                  <a href="/tennis/schedule" className="text-brand underline">
                    tennis schedule
                  </a>{" "}
                  and recent form on the{" "}
                  <a href="/tennis/results" className="text-brand underline">
                    tennis results
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Tennis Betting Odds",
            body: (
              <p>
                Tennis odds at 1xBET India are shown in decimal format — your stake multiplied by
                the price is your potential return. Match winner prices move with ranking, recent
                form, surface record, head-to-head history and injury news. Because tennis is an
                individual sport, a single fitness concern can shift a market quickly, so always
                check the displayed odds beside each market before confirming a bet.
              </p>
            ),
          },
          {
            heading: "ATP Tennis Betting",
            body: (
              <p>
                The men's ATP tour runs from January's Australian swing through the Masters 1000
                events — Indian Wells, Miami, Monte Carlo, Madrid, Rome, Canada, Cincinnati,
                Shanghai and Paris — to the ATP Finals in November. Five-set Grand Slam matches and
                best-of-three tour events price differently, so format matters when comparing
                markets. See the{" "}
                <a href="/tennis/atp" className="text-brand underline">
                  ATP betting guide
                </a>{" "}
                for the full tournament calendar and market detail.
              </p>
            ),
          },
          {
            heading: "WTA Tennis Betting",
            body: (
              <p>
                The women's WTA tour mirrors the ATP calendar with its own 1000-level events, WTA
                Finals and all four Grand Slams. WTA matches are best-of-three sets throughout,
                which makes them more volatile than men's five-set Slam matches — breaks of serve
                are more common and favourites win less predictably. Explore the{" "}
                <a href="/tennis/wta" className="text-brand underline">
                  WTA betting guide
                </a>{" "}
                for tournament coverage and market options.
              </p>
            ),
          },
          {
            heading: "Grand Slam Betting",
            body: (
              <p>
                The four Grand Slams are the biggest tennis betting events of the year, each with
                two weeks of markets across 128-player singles draws:
              </p>
            ),
          },
          {
            heading: "Australian Open, Roland Garros, Wimbledon & US Open",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Australian Open</strong> (January, hard court) — the season's first
                    major, played in Melbourne's summer heat
                  </li>
                  <li>
                    <strong>Roland Garros</strong> (May-June, clay) — the slowest surface, favouring
                    baseline grinders
                  </li>
                  <li>
                    <strong>Wimbledon</strong> (June-July, grass) — the fastest surface, rewarding
                    big servers
                  </li>
                  <li>
                    <strong>US Open</strong> (August-September, hard court) — the year's final Slam
                    in New York
                  </li>
                </ul>
                <p className="mt-2">
                  Each Slam offers outright winner, quarter winner, stage-of-elimination and daily
                  match markets. Read the{" "}
                  <a href="/tennis/grand-slams" className="text-brand underline">
                    Grand Slam betting guide
                  </a>{" "}
                  for surface-by-surface detail.
                </p>
              </>
            ),
          },
          {
            heading: "Live Tennis Betting Guide",
            body: (
              <>
                <img
                  src="/assets/seo/live-tennis-betting.webp"
                  alt="Live tennis betting odds — point-by-point in-play markets on every match"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Tennis reprices on every point — no other sport moves as granularly. A break of
                  serve, a tie-break, a medical timeout or a fifth-set momentum swing all shift odds
                  in real time. In-play markets include next game winner, set winner, game handicaps
                  and revised match winner prices, with cash out on selected markets.
                </p>
                <p className="mt-2">
                  Follow matches in the{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  lobby, where point-by-point scores sit beside each market.
                </p>
              </>
            ),
          },
          {
            heading: "Tennis Betting Markets Explained",
            body: (
              <>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Match winner</strong> — which player wins the match
                  </li>
                  <li>
                    <strong>Set betting</strong> — exact set score, e.g. 2-0 or 2-1
                  </li>
                  <li>
                    <strong>First set winner</strong> — who takes the opening set
                  </li>
                  <li>
                    <strong>Total games</strong> — over/under on games played in the match
                  </li>
                  <li>
                    <strong>Game handicap</strong> — backing a player with a games advantage or
                    deficit
                  </li>
                  <li>
                    <strong>Tie-break markets</strong> — whether a set or match goes to a tie-break
                  </li>
                  <li>
                    <strong>Outright winner</strong> — tournament, quarter and half-of-draw markets
                  </li>
                </ul>
                <p className="mt-2">
                  Surface records matter — a clay-court specialist's odds differ sharply between
                  Roland Garros and Wimbledon. Check head-to-heads by surface before betting.
                </p>
              </>
            ),
          },
          {
            heading: "Responsible Tennis Betting",
            body: (
              <p>
                Tennis betting should be entertainment, not a way to make guaranteed income. Only
                bet if you are 18+ and eligible, set personal limits and never chase losses. Use the
                account controls on{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>
                , review INR options on{" "}
                <a href="/payments" className="text-brand underline">
                  Payments
                </a>{" "}
                and the rules on{" "}
                <a href="/terms" className="text-brand underline">
                  Terms & Conditions
                </a>
                .
              </p>
            ),
          },
        ]}
      >
        <section className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Tennis Betting FAQs</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <nav aria-label="Tennis betting resources" className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Tennis betting resources</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            <li>
              <a href="/tennis/atp" className="block rounded-md border p-3 hover:bg-accent">
                ATP Betting
              </a>
            </li>
            <li>
              <a href="/tennis/wta" className="block rounded-md border p-3 hover:bg-accent">
                WTA Betting
              </a>
            </li>
            <li>
              <a href="/tennis/grand-slams" className="block rounded-md border p-3 hover:bg-accent">
                Grand Slam Betting
              </a>
            </li>
            <li>
              <a href="/tennis/results" className="block rounded-md border p-3 hover:bg-accent">
                Tennis Results
              </a>
            </li>
            <li>
              <a href="/tennis/schedule" className="block rounded-md border p-3 hover:bg-accent">
                Tennis Schedule
              </a>
            </li>
            <li>
              <a href="/sports" className="block rounded-md border p-3 hover:bg-accent">
                All Sports Betting
              </a>
            </li>
          </ul>
        </nav>
      </SEOPage>
    </>
  ),
});
