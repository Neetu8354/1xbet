import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Cricket Betting", url: "/cricket" },
];

const faqs = [
  {
    q: "What is cricket betting?",
    a: "Cricket betting lets you predict outcomes of cricket matches — match winner, top batsman, total runs, wickets and more — across formats like IPL, T20, ODI and Test cricket, pre-match or live.",
  },
  {
    q: "How can I bet on IPL matches?",
    a: "Register an account, deposit in INR via UPI or another supported payment method, open the cricket section, choose an IPL match and market, and confirm your selection on the bet slip.",
  },
  {
    q: "What cricket betting markets are available?",
    a: "Common cricket markets include match winner, toss winner, top batsman, top bowler, total runs, total wickets, innings scores, over-by-over markets and outright tournament winner.",
  },
  {
    q: "Can I place live cricket bets?",
    a: "Yes. Live cricket betting lets you bet ball-by-ball while a match is in progress, with odds updating on every run, wicket and over. Cash out is available on selected markets.",
  },
  {
    q: "What payment methods are supported?",
    a: "1xBET India supports INR deposits and withdrawals via UPI, Paytm, NetBanking, e-wallets and other methods. Visit the Payments page for the full list, limits and processing times.",
  },
];

const cricketEvents = [
  {
    name: "Indian Premier League 2027 Season",
    sport: "Cricket",
    startDate: "2027-03",
    organizer: "BCCI",
    location: { "@type": "Country", name: "India" },
    url: `${SITE_URL}/ipl-betting`,
  },
  {
    name: "ICC Cricket World Cup 2027",
    sport: "Cricket",
    startDate: "2027-10",
    organizer: "International Cricket Council",
    location: { "@type": "Country", name: "South Africa" },
    url: `${SITE_URL}/cricket`,
  },
  {
    name: "Big Bash League 2026-27 Season",
    sport: "Cricket",
    startDate: "2026-12",
    organizer: "Cricket Australia",
    location: { "@type": "Country", name: "Australia" },
    url: `${SITE_URL}/cricket`,
  },
];

export const Route = createFileRoute("/cricket")({
  head: () => ({
    meta: [
      { title: "Cricket Betting India | IPL & Live Cricket Odds | 1xBET" },
      {
        name: "description",
        content:
          "Cricket betting in India at 1xBET. Bet on IPL, T20, ODI and Test matches with live cricket odds, ball-by-ball in-play markets and fast INR payouts.",
      },
      {
        property: "og:title",
        content: "Cricket Betting India | IPL & Live Cricket Odds | 1xBET",
      },
      {
        property: "og:description",
        content:
          "Live cricket odds on IPL, T20, ODI and Test matches. Bet ball-by-ball in INR at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/cricket` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-cricket.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:title",
        content: "Cricket Betting India | IPL & Live Cricket Odds | 1xBET",
      },
      {
        name: "twitter:description",
        content:
          "Live cricket odds on IPL, T20, ODI and Test matches. Bet ball-by-ball in INR at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-cricket.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cricket` }],
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
          name: "Upcoming cricket tournaments at 1xBET India",
          itemListElement: cricketEvents.map((e, i) => ({
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
          headline: "Cricket Betting India — IPL & Live Cricket Odds",
          dateModified: "2026-09-21",
          author: { "@type": "Organization", name: "1xBET Cricket Content Team" },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/cricket`,
          image: `${SITE_URL}/assets/seo/og-cricket.png`,
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Cricket Betting India – IPL & Live Cricket Odds"
        description="Bet on IPL, T20, ODI and Test cricket with live ball-by-ball odds — in INR on desktop or mobile"
        breadcrumbs={breadcrumbItems}
        topContent={
          <>
            <img
              src="/assets/seo/cricket-betting-india.webp"
              alt="Cricket betting India — IPL and live cricket odds on T20, ODI and Test matches"
              width="1200"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Written by: 1xBET Cricket Content Team · Last updated: 21 September 2026
            </p>
            <nav
              aria-label="Cricket quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/cricket-live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Cricket Odds
              </a>
              <a
                href="/ipl-betting"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                IPL Betting
              </a>
              <a
                href="/cricket-schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Cricket Schedule
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Online Cricket Betting in India",
            body: (
              <>
                <p>
                  Cricket is India's favourite sport and the centrepiece of online cricket betting
                  at 1xBET India. We cover every major competition — the{" "}
                  <a href="/ipl-betting" className="text-brand underline">
                    Indian Premier League (IPL)
                  </a>
                  , ICC T20 and ODI World Cups, Test series, The Ashes, Big Bash League, SA20,
                  Caribbean Premier League and India's domestic Ranji Trophy and Syed Mushtaq Ali
                  Trophy.
                </p>
                <p className="mt-2">
                  Whether you follow T20 franchise leagues or five-day Test cricket, the cricket
                  section brings pre-match and{" "}
                  <a href="/cricket-live" className="text-brand underline">
                    live cricket betting
                  </a>{" "}
                  markets together in one place — priced in INR and accessible on desktop or the{" "}
                  <a href="/app" className="text-brand underline">
                    mobile app
                  </a>
                  . Check upcoming fixtures on the{" "}
                  <a href="/cricket-schedule" className="text-brand underline">
                    cricket schedule
                  </a>{" "}
                  and recent form on the{" "}
                  <a href="/cricket-results" className="text-brand underline">
                    cricket results
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "Best Cricket Betting Markets",
            body: (
              <>
                <p>
                  Cricket's format produces deeper markets than almost any other sport. Every match
                  offers options across innings, overs and individual players:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Match winner</strong> — which team wins the match or series
                  </li>
                  <li>
                    <strong>Toss winner</strong> — who wins the pre-match coin toss
                  </li>
                  <li>
                    <strong>Top batsman / top bowler</strong> — the leading run-scorer or
                    wicket-taker for a team or the match
                  </li>
                  <li>
                    <strong>Total runs / total wickets</strong> — over/under on innings and match
                    totals
                  </li>
                  <li>
                    <strong>Innings and over-by-over markets</strong> — runs in an over, next
                    wicket, session results
                  </li>
                  <li>
                    <strong>Player performance</strong> — combined runs, wickets and catches markets
                  </li>
                  <li>
                    <strong>Method of dismissal</strong> — how the next wicket falls
                  </li>
                  <li>
                    <strong>Outright winner</strong> — tournament and league champions, series
                    winners
                  </li>
                </ul>
                <p className="mt-2">
                  Market availability varies by format and match coverage — compare prices on the{" "}
                  <a href="/cricket-odds" className="text-brand underline">
                    cricket odds
                  </a>{" "}
                  page before confirming a bet.
                </p>
              </>
            ),
          },
          {
            heading: "IPL Betting Guide",
            body: (
              <>
                <img
                  src="/assets/seo/ipl-betting-india.webp"
                  alt="IPL betting India — Indian Premier League match, player and outright odds"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  The IPL is the biggest cricket betting event of the year — ten franchises, 70+
                  matches and nightly double-headers through the season. We price every IPL match
                  weeks in advance with outright winner, top run-scorer (Orange Cap) and top
                  wicket-taker (Purple Cap) markets alongside ball-by-ball in-play betting.
                </p>
                <p className="mt-2">
                  IPL betting online rewards context: pitch reports, dew factors, toss decisions and
                  head-to-head records all shape prices. Chasing teams with strong finishers often
                  offer live value, and odds boosts plus IPL-specific offers appear on the{" "}
                  <a href="/promotions" className="text-brand underline">
                    promotions
                  </a>{" "}
                  page during the season. See the full{" "}
                  <a href="/ipl-betting" className="text-brand underline">
                    IPL betting guide
                  </a>{" "}
                  for market-by-market detail.
                </p>
              </>
            ),
          },
          {
            heading: "How Cricket Odds Work",
            body: (
              <>
                <p>
                  Cricket odds show the potential return on a selection — your stake multiplied by
                  the decimal price. A ₹1,000 bet at odds of 1.80 returns ₹1,800 (₹800 profit).
                  Prices reflect each team's assessed chance of winning and move with team news,
                  pitch conditions, the toss and in-play events.
                </p>
                <p className="mt-2">
                  Formats matter when reading cricket odds in India: T20 matches compress into a few
                  hours of high variance, while Test match odds drift across five days and can
                  include the draw as a third outcome. Our{" "}
                  <a href="/cricket-odds" className="text-brand underline">
                    cricket odds guide
                  </a>{" "}
                  explains formats, implied probability and how to compare markets.
                </p>
              </>
            ),
          },
          {
            heading: "Live Cricket Betting Explained",
            body: (
              <>
                <img
                  src="/assets/seo/live-cricket-betting.webp"
                  alt="Live cricket betting odds — ball-by-ball in-play markets on every over"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live cricket betting lets you bet while a match is in progress, with odds updating
                  ball-by-ball. Every boundary, wicket and bowling change reprices the match winner
                  market — and in-play options extend to next over runs, next wicket method, session
                  totals and revised innings scores.
                </p>
                <p className="mt-2">
                  Momentum swings fast in T20 cricket: a team needing 60 off 30 balls can become
                  favourite after one big over. Follow the action in the{" "}
                  <a href="/cricket-live" className="text-brand underline">
                    live cricket betting
                  </a>{" "}
                  section or the{" "}
                  <a href="/live" className="text-brand underline">
                    live lobby
                  </a>
                  , where cash out is available on selected markets to settle bets before the result
                  is decided.
                </p>
              </>
            ),
          },
          {
            heading: "Cricket Betting Tips",
            body: (
              <>
                <p>
                  Cricket rewards preparation. Before placing a bet, experienced cricket bettors
                  check:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Pitch and weather conditions — dry pitches favour spin, overcast conditions help
                    swing bowlers
                  </li>
                  <li>The toss — chasing sides hold a strong record in dew-affected T20 games</li>
                  <li>
                    Recent form and head-to-head records on the{" "}
                    <a href="/cricket-results" className="text-brand underline">
                      cricket results
                    </a>{" "}
                    page
                  </li>
                  <li>Team news — injuries, rested players and squad rotation in long series</li>
                  <li>
                    Venue history — some grounds consistently produce high or low first-innings
                    scores
                  </li>
                  <li>Format-specific stats — a strong Test side may be vulnerable in T20s</li>
                </ul>
                <p className="mt-2">
                  Set a budget per series and compare odds across markets — handicaps and top-player
                  markets often price differently to the match winner for the same game.
                </p>
              </>
            ),
          },
          {
            heading: "Safe & Responsible Cricket Betting",
            body: (
              <p>
                Cricket betting should be entertainment, not a source of income. Only bet if you are
                18+ and eligible, set deposit and loss limits, and never chase losses. Manage your
                account with the tools on{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>
                , review INR deposit and withdrawal options on{" "}
                <a href="/payments" className="text-brand underline">
                  Payments
                </a>
                , and read the full rules on{" "}
                <a href="/terms" className="text-brand underline">
                  Terms & Conditions
                </a>
                . Our platform uses SSL encryption and verified payment processing — support is
                available 24/7 via{" "}
                <a href="/contact" className="text-brand underline">
                  Contact
                </a>
                .
              </p>
            ),
          },
        ]}
      >
        <section className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Cricket Betting FAQs</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <nav aria-label="Cricket betting resources" className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Cricket betting resources</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            <li>
              <a href="/ipl-betting" className="block rounded-md border p-3 hover:bg-accent">
                IPL Betting
              </a>
            </li>
            <li>
              <a href="/cricket-live" className="block rounded-md border p-3 hover:bg-accent">
                Live Cricket Betting
              </a>
            </li>
            <li>
              <a href="/cricket-odds" className="block rounded-md border p-3 hover:bg-accent">
                Cricket Odds
              </a>
            </li>
            <li>
              <a href="/cricket-results" className="block rounded-md border p-3 hover:bg-accent">
                Cricket Results
              </a>
            </li>
            <li>
              <a href="/cricket-schedule" className="block rounded-md border p-3 hover:bg-accent">
                Cricket Schedule
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
