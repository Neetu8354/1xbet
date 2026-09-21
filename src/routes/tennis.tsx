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
        title="Tennis Betting India - Live ATP, WTA & Grand Slam Betting"
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
                  Tennis is one of the most popular international sports with matches taking place
                  throughout the year across major tournaments and professional tours. At 1xBET
                  India, tennis fans can explore betting opportunities across{" "}
                  <a href="/tennis/atp" className="text-brand underline">
                    ATP
                  </a>
                  ,{" "}
                  <a href="/tennis/wta" className="text-brand underline">
                    WTA
                  </a>
                  ,{" "}
                  <a href="/tennis/grand-slams" className="text-brand underline">
                    Grand Slam tournaments
                  </a>
                  , Challenger events, and other professional competitions.
                </p>
                <p className="mt-2">
                  From pre-match markets to{" "}
                  <a href="/live" className="text-brand underline">
                    live tennis betting
                  </a>
                  , users can access different betting options including match winners, set betting,
                  total games, handicaps, tie-break markets, and tournament outcomes.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Tennis Betting Odds",
            body: (
              <p>
                Tennis odds change continuously based on player form, rankings, court surface,
                injuries, and match conditions. Before placing a bet, understanding recent
                performances, head-to-head records, and playing styles can help users analyze
                available markets. Check upcoming fixtures on the{" "}
                <a href="/tennis/schedule" className="text-brand underline">
                  tennis schedule
                </a>{" "}
                and recent form on the{" "}
                <a href="/tennis/results" className="text-brand underline">
                  tennis results
                </a>{" "}
                page.
              </p>
            ),
          },
          {
            heading: "ATP Tennis Betting",
            body: (
              <>
                <p>
                  ATP tennis features some of the world's leading male tennis players competing
                  across major tournaments and international events. ATP betting markets include
                  match winner, set scores, total games, handicaps, and tournament winner
                  selections.
                </p>
                <p className="mt-2">
                  Factors such as player ranking, recent results, service performance, return
                  statistics, and surface preference can influence match outcomes. Hard courts, clay
                  courts, and grass courts each create different playing conditions that can impact
                  player performance. See the full{" "}
                  <a href="/tennis/atp" className="text-brand underline">
                    ATP betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "WTA Tennis Betting",
            body: (
              <>
                <p>
                  WTA tournaments provide exciting betting opportunities throughout the season.
                  Users can follow women's professional tennis events and explore markets including
                  match winners, set betting, total games, and outright tournament winners.
                </p>
                <p className="mt-2">
                  Player consistency, recent form, surface performance, and previous match history
                  are important factors to consider when analyzing WTA matches — read the{" "}
                  <a href="/tennis/wta" className="text-brand underline">
                    WTA betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "Grand Slam Tennis Betting",
            body: (
              <>
                <p>
                  Grand Slam tournaments are among the biggest events in professional tennis and
                  attract worldwide attention. The four major tournaments include:
                </p>
                <h3 className="mt-3 font-semibold">Australian Open</h3>
                <p>
                  The Australian Open is the first Grand Slam tournament of the year and is played
                  on hard courts. Players compete for one of tennis's most prestigious titles.
                </p>
                <h3 className="mt-3 font-semibold">French Open</h3>
                <p>
                  The French Open, also known as Roland Garros, is famous for clay-court
                  competition. Players with strong endurance and baseline skills often perform well
                  on this surface.
                </p>
                <h3 className="mt-3 font-semibold">Wimbledon</h3>
                <p>
                  Wimbledon is the oldest Grand Slam tournament and is played on grass courts. Fast
                  serves and strong net play are important elements on this surface.
                </p>
                <h3 className="mt-3 font-semibold">US Open</h3>
                <p>
                  The US Open is played on hard courts and features some of the most competitive
                  matches of the tennis season. Explore all four on the{" "}
                  <a href="/tennis/grand-slams" className="text-brand underline">
                    Grand Slam betting
                  </a>{" "}
                  page.
                </p>
              </>
            ),
          },
          {
            heading: "Popular Tennis Betting Markets",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Match Winner Betting</h3>
                <p>Match winner betting allows users to select which player will win the match.</p>
                <h3 className="mt-3 font-semibold">Set Betting</h3>
                <p>
                  Set betting focuses on predicting the final set outcome, such as a straight-set
                  victory or a three-set match.
                </p>
                <h3 className="mt-3 font-semibold">Total Games Betting</h3>
                <p>
                  Total games markets involve predicting whether the number of games played will be
                  over or under a specific value.
                </p>
                <h3 className="mt-3 font-semibold">Handicap Betting</h3>
                <p>
                  Handicap markets adjust the starting advantage between players and provide
                  additional betting options.
                </p>
                <h3 className="mt-3 font-semibold">Tie-Break Betting</h3>
                <p>
                  Tie-break markets allow users to predict whether a tie-break will occur during a
                  match.
                </p>
                <h3 className="mt-3 font-semibold">Tournament Winner Betting</h3>
                <p>
                  Users can select players they believe have the potential to win major tournaments.
                </p>
              </>
            ),
          },
          {
            heading: "Live Tennis Betting",
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
                  Live tennis betting allows users to follow matches while they are happening and
                  explore changing odds during different moments of play.
                </p>
                <p className="mt-2">
                  Tennis matches can change quickly due to breaks of serve, momentum shifts,
                  injuries, and tie-break situations. Live betting markets provide options based on
                  real-time match developments — follow the action in the{" "}
                  <a href="/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  section.
                </p>
              </>
            ),
          },
          {
            heading: "How to Analyze Tennis Matches Before Betting",
            body: (
              <>
                <p>Understanding key match factors can help users make informed decisions:</p>
                <h3 className="mt-3 font-semibold">Player Form</h3>
                <p>Review recent performances, winning streaks, and tournament results.</p>
                <h3 className="mt-3 font-semibold">Head-to-Head Records</h3>
                <p>Previous meetings between players can provide useful historical information.</p>
                <h3 className="mt-3 font-semibold">Court Surface</h3>
                <p>Players often perform differently on clay, grass, and hard courts.</p>
                <h3 className="mt-3 font-semibold">Fitness and Schedule</h3>
                <p>Recent workload, injuries, and tournament schedules may affect performance.</p>
                <h3 className="mt-3 font-semibold">Playing Style</h3>
                <p>
                  Serve strength, return ability, and tactical approach can influence match
                  outcomes.
                </p>
              </>
            ),
          },
          {
            heading: "Tennis Betting Tips",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Research player statistics before selecting markets.</li>
                <li>Compare odds across available betting options.</li>
                <li>Consider tournament importance and player motivation.</li>
                <li>Follow recent tennis news and updates.</li>
                <li>Avoid making decisions based only on rankings.</li>
              </ul>
            ),
          },
          {
            heading: "Responsible Tennis Betting",
            body: (
              <p>
                Sports betting should always be approached responsibly. Set personal limits,
                understand the risks involved, and only participate if you meet the legal age
                requirements in your location. Visit{" "}
                <a href="/responsible-gaming" className="text-brand underline">
                  Responsible Gaming
                </a>{" "}
                for account controls and safer-gambling resources.
              </p>
            ),
          },
          {
            heading: "Explore Tennis Betting Markets",
            body: (
              <p>
                Follow ATP, WTA, and Grand Slam tournaments with a wide range of tennis betting
                markets. Explore match odds,{" "}
                <a href="/live" className="text-brand underline">
                  live betting options
                </a>
                , and tournament selections at 1xBET India — deposit and withdraw in INR via{" "}
                <a href="/payments" className="text-brand underline">
                  supported payment methods
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
