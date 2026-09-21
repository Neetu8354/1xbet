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
    a: "Cricket betting involves predicting possible outcomes of cricket matches or events through different available betting markets.",
  },
  {
    q: "Can I bet on IPL matches online?",
    a: "Yes, IPL matches are available through cricket betting markets during the tournament season.",
  },
  {
    q: "What cricket betting markets are available?",
    a: "Cricket betting markets may include match winners, player performances, runs, wickets, toss outcomes, and live betting options.",
  },
  {
    q: "What is live cricket betting?",
    a: "Live cricket betting allows users to place bets while a match is happening with updated odds based on current match conditions.",
  },
  {
    q: "How can I practice responsible betting?",
    a: "Users should set limits, understand risks, and only participate within their personal budget.",
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
            heading: "Cricket Betting at 1xBET India",
            body: (
              <>
                <p>
                  Cricket is one of the most popular sports in India, followed by millions of fans
                  across the country. From international tournaments to domestic leagues, cricket
                  offers exciting opportunities throughout the year. 1xBET India provides cricket
                  betting markets covering major competitions, including{" "}
                  <a href="/ipl-betting" className="text-brand underline">
                    IPL
                  </a>
                  , ICC tournaments, international series, and domestic cricket events.
                </p>
                <p className="mt-2">
                  Users can explore different cricket betting options with updated{" "}
                  <a href="/cricket-odds" className="text-brand underline">
                    odds
                  </a>
                  , match markets, and{" "}
                  <a href="/cricket-live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  opportunities across various competitions.
                </p>
              </>
            ),
          },
          {
            heading: "Cricket Coverage at 1xBET India",
            body: (
              <>
                <p>1xBET India covers a wide range of cricket tournaments and events, including:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <a href="/ipl-betting" className="text-brand underline">
                      Indian Premier League (IPL)
                    </a>
                  </li>
                  <li>ICC Cricket World Cup</li>
                  <li>ICC T20 World Cup</li>
                  <li>ODI Series</li>
                  <li>Test Matches</li>
                  <li>The Ashes</li>
                  <li>Big Bash League (BBL)</li>
                  <li>Caribbean Premier League (CPL)</li>
                  <li>SA20 League</li>
                  <li>Ranji Trophy</li>
                  <li>Syed Mushtaq Ali Trophy</li>
                </ul>
                <p className="mt-2">
                  With coverage of major cricket competitions, users can follow their favourite
                  teams, players, and matches on the{" "}
                  <a href="/cricket-schedule" className="text-brand underline">
                    cricket schedule
                  </a>{" "}
                  throughout the season.
                </p>
              </>
            ),
          },
          {
            heading: "Cricket Betting Markets",
            body: (
              <>
                <p>
                  Cricket offers multiple betting markets based on different match outcomes and
                  player performances. Popular cricket betting markets include:
                </p>
                <h3 className="mt-3 font-semibold">Match Winner</h3>
                <p>
                  Predict which team will win the cricket match based on team strength, current
                  form, player availability, and match conditions.
                </p>
                <h3 className="mt-3 font-semibold">Toss Winner</h3>
                <p>
                  The toss can influence match strategies, especially in limited-overs cricket.
                  Users can predict which team will win the toss before the match begins.
                </p>
                <h3 className="mt-3 font-semibold">Top Run Scorer</h3>
                <p>
                  Select the player who is expected to score the highest number of runs in a match
                  or tournament.
                </p>
                <h3 className="mt-3 font-semibold">Top Wicket Taker</h3>
                <p>
                  Choose bowlers who may have the biggest impact by taking important wickets during
                  the game.
                </p>
                <h3 className="mt-3 font-semibold">Total Runs and Wickets</h3>
                <p>
                  Predict possible match statistics, including total runs scored or wickets taken
                  during an innings or match.
                </p>
                <h3 className="mt-3 font-semibold">Player Performance Markets</h3>
                <p>
                  Follow individual player statistics, including batting, bowling, and overall match
                  performances.
                </p>
              </>
            ),
          },
          {
            heading: "Live Cricket Betting",
            body: (
              <p>
                Live cricket betting allows users to follow matches while they are being played.
                Odds can change based on match situations, including runs scored, wickets lost,
                required run rate, and player performances. Bet in play via the{" "}
                <a href="/cricket-live" className="text-brand underline">
                  live cricket betting
                </a>{" "}
                section.
              </p>
            ),
          },
          {
            heading: "IPL Betting Online",
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
                  The Indian Premier League is one of the biggest cricket tournaments in the world.
                  Featuring international stars and top domestic players, IPL creates interest among
                  cricket fans globally.
                </p>
                <p className="mt-2">IPL betting markets may include:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Match winner</li>
                  <li>Tournament winner</li>
                  <li>Top run scorer</li>
                  <li>Top wicket taker</li>
                  <li>Team performance markets</li>
                  <li>Live betting options</li>
                </ul>
                <p className="mt-2">
                  Before selecting any market, users should consider team combinations, player form,
                  pitch conditions, and recent performances. See the full{" "}
                  <a href="/ipl-betting" className="text-brand underline">
                    IPL betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Understanding Cricket Odds",
            body: (
              <>
                <p>
                  Cricket odds represent the possible outcomes of different betting markets. Odds
                  can change depending on factors such as:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Team performance</li>
                  <li>Player availability</li>
                  <li>Match conditions</li>
                  <li>Pitch report</li>
                  <li>Weather conditions</li>
                  <li>Live match situations</li>
                </ul>
                <p className="mt-2">
                  Understanding these factors helps users make informed decisions when exploring
                  cricket betting markets — compare current prices on the{" "}
                  <a href="/cricket-odds" className="text-brand underline">
                    cricket odds
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "Live Cricket Betting Experience",
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
                  Live cricket betting allows users to participate while matches are in progress.
                  Cricket is a changing sport where every over, boundary, and wicket can influence
                  the direction of a game.
                </p>
                <p className="mt-2">Live markets may include:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Next over predictions</li>
                  <li>Match winner updates</li>
                  <li>Total runs</li>
                  <li>Player performance</li>
                  <li>Wicket predictions</li>
                </ul>
                <p className="mt-2">
                  Users should always review updated information and current odds before placing any
                  bet — follow the action in the{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  lobby.
                </p>
              </>
            ),
          },
          {
            heading: "How to Start Cricket Betting",
            body: (
              <>
                <p>Starting cricket betting involves a simple process:</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Create an account.</li>
                  <li>
                    Select your preferred{" "}
                    <a href="/payments" className="text-brand underline">
                      payment method
                    </a>
                    .
                  </li>
                  <li>Open the cricket betting section.</li>
                  <li>Choose a match and available market.</li>
                  <li>Review the odds and betting details.</li>
                  <li>Confirm your selection.</li>
                </ol>
                <p className="mt-2">
                  Always check match information and available markets before confirming a bet.
                </p>
              </>
            ),
          },
          {
            heading: "Responsible Cricket Betting",
            body: (
              <>
                <p>
                  Cricket betting should always be approached responsibly. Users should be 18 years
                  or older and follow responsible gaming practices.
                </p>
                <p className="mt-2">Responsible betting includes:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Setting personal limits</li>
                  <li>Managing your betting budget</li>
                  <li>Avoiding chasing losses</li>
                  <li>Taking regular breaks</li>
                  <li>Understanding betting risks</li>
                </ul>
                <p className="mt-2">
                  Responsible gaming helps maintain a balanced and controlled betting experience —
                  visit{" "}
                  <a href="/responsible-gaming" className="text-brand underline">
                    Responsible Gaming
                  </a>{" "}
                  for account controls and resources.
                </p>
              </>
            ),
          },
          {
            heading: "Why Choose 1xBET India for Cricket Betting",
            body: (
              <>
                <p>
                  1xBET India provides access to a variety of cricket competitions, betting markets,
                  and live match options. Key features include:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Cricket coverage from international and domestic competitions</li>
                  <li>IPL and T20 betting markets</li>
                  <li>Live cricket betting options</li>
                  <li>Updated match odds</li>
                  <li>
                    Multiple{" "}
                    <a href="/payments" className="text-brand underline">
                      payment options
                    </a>
                  </li>
                  <li>
                    <a href="/help" className="text-brand underline">
                      Customer support
                    </a>{" "}
                    assistance
                  </li>
                </ul>
              </>
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
