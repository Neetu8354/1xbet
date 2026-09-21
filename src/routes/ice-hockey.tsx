import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

const SITE_URL = "https://www.1xbetindia.live";

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Sports", url: "/sports" },
  { name: "Ice Hockey Betting", url: "/ice-hockey" },
];

const faqs = [
  {
    q: "What ice hockey leagues can I bet on?",
    a: "You can explore betting markets across competitions such as NHL, KHL, IIHF World Championship, and international hockey tournaments.",
  },
  {
    q: "What is puck line betting in hockey?",
    a: "Puck line betting uses a goal handicap between two teams, usually set around 1.5 goals.",
  },
  {
    q: "How does hockey totals betting work?",
    a: "Hockey totals betting focuses on whether the combined goals scored by both teams will be over or under a selected number.",
  },
  {
    q: "Can I bet on NHL matches live?",
    a: "Yes, live hockey betting allows users to follow matches and explore available markets while games are in progress.",
  },
  {
    q: "What hockey tournaments are available for betting?",
    a: "Major tournaments include NHL events, Stanley Cup Playoffs, KHL competitions, IIHF World Championship, and other international hockey events.",
  },
];

const hockeyEvents = [
  {
    name: "NHL 2026-27 Season & Stanley Cup Playoffs",
    sport: "Ice Hockey",
    startDate: "2026-10",
    organizer: "NHL",
    location: { "@type": "Country", name: "United States" },
    url: `${SITE_URL}/ice-hockey/nhl`,
  },
  {
    name: "KHL 2026-27 Season & Gagarin Cup",
    sport: "Ice Hockey",
    startDate: "2026-09",
    organizer: "KHL",
    location: { "@type": "Country", name: "Russia" },
    url: `${SITE_URL}/ice-hockey/khl`,
  },
  {
    name: "IIHF World Championship 2027",
    sport: "Ice Hockey",
    startDate: "2027-05",
    organizer: "IIHF",
    location: { "@type": "AdministrativeArea", name: "Europe" },
    url: `${SITE_URL}/ice-hockey`,
  },
];

export const Route = createFileRoute("/ice-hockey")({
  head: () => ({
    meta: [
      { title: "Ice Hockey Betting India | NHL, KHL & Live Hockey Odds | 1xBET" },
      {
        name: "description",
        content:
          "Ice hockey betting in India at 1xBET. Live odds on NHL, KHL and IIHF World Championship — puck line, totals, period and live markets in INR.",
      },
      {
        property: "og:title",
        content: "Ice Hockey Betting India | NHL & KHL Odds | 1xBET",
      },
      {
        property: "og:description",
        content:
          "Follow NHL, KHL and IIHF hockey odds with puck line, totals and live betting markets at 1xBET India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ice-hockey` },
      { property: "og:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:title",
        content: "Ice Hockey Betting India | NHL & KHL Odds | 1xBET",
      },
      {
        name: "twitter:description",
        content:
          "Follow NHL, KHL and IIHF hockey odds with puck line, totals and live betting markets at 1xBET India.",
      },
      { name: "twitter:image", content: `${SITE_URL}/assets/seo/og-ice-hockey.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ice-hockey` }],
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
          name: "Ice hockey competitions covered at 1xBET India",
          itemListElement: hockeyEvents.map((e, i) => ({
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
          headline: "Ice Hockey Betting India — NHL, KHL & Live Hockey Odds",
          dateModified: "2026-09-21",
          author: { "@type": "Organization", name: "1xBET Hockey Content Team" },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: `${SITE_URL}/ice-hockey`,
          image: `${SITE_URL}/assets/seo/og-ice-hockey.png`,
        }),
      },
    ],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb items={breadcrumbItems} />
      <SEOPage
        title="Ice Hockey Betting India - NHL, KHL & Live Hockey Odds"
        description="NHL, KHL and IIHF hockey odds — puck line, totals, period and live markets in INR"
        breadcrumbs={breadcrumbItems}
        topContent={
          <>
            <img
              src="/assets/seo/ice-hockey-betting-india.webp"
              alt="Ice hockey betting India NHL odds and live hockey markets"
              width="1200"
              height="500"
              fetchPriority="high"
              decoding="async"
              className="mt-4 w-full rounded-lg border"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Written by: 1xBET Hockey Content Team · Reviewed by our hockey analysts · Last
              updated: 21 September 2026
            </p>
            <nav
              aria-label="Ice hockey quick links"
              className="mt-4 grid grid-cols-1 gap-2 text-sm font-semibold sm:grid-cols-3"
            >
              <a
                href="/ice-hockey/live"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Live Hockey Odds
              </a>
              <a
                href="/ice-hockey/nhl"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                NHL Betting
              </a>
              <a
                href="/ice-hockey/schedule"
                className="rounded-md bg-brand px-3 py-2.5 text-center text-primary-foreground hover:opacity-90"
              >
                Hockey Schedule
              </a>
            </nav>
          </>
        }
        sections={[
          {
            heading: "Ice Hockey Betting at 1xBET India",
            body: (
              <>
                <p>
                  Ice hockey is one of the fastest and most exciting sports in the world, offering
                  betting opportunities throughout the year. At 1xBET India, hockey fans can explore
                  markets across major competitions including the{" "}
                  <a href="/ice-hockey/nhl" className="text-brand underline">
                    NHL
                  </a>
                  ,{" "}
                  <a href="/ice-hockey/khl" className="text-brand underline">
                    KHL
                  </a>
                  , IIHF World Championship, Olympic hockey tournaments, and other international
                  events.
                </p>
                <p className="mt-2">
                  With pre-match and{" "}
                  <a href="/ice-hockey/live" className="text-brand underline">
                    live betting
                  </a>{" "}
                  options available, users can follow hockey games and explore different markets
                  including match winners, puck lines, totals, period betting, player-focused
                  markets, and tournament winner selections.
                </p>
              </>
            ),
          },
          {
            heading: "Latest Ice Hockey Betting Odds",
            body: (
              <p>
                Ice hockey odds are influenced by several factors including team form, player
                availability, offensive and defensive performance, goaltender statistics, injuries,
                and recent match results. Understanding these factors can help users analyse
                different hockey betting markets before making selections. Compare current prices on
                the{" "}
                <a href="/ice-hockey/odds" className="text-brand underline">
                  ice hockey odds
                </a>{" "}
                page.
              </p>
            ),
          },
          {
            heading: "NHL Betting India",
            body: (
              <>
                <p>
                  The NHL is the most popular professional ice hockey league in the world and
                  features top teams competing throughout the regular season and Stanley Cup
                  playoffs.
                </p>
                <p className="mt-2">NHL betting markets include:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Match winner and moneyline betting</li>
                  <li>Regulation time and overtime markets</li>
                  <li>Puck line betting</li>
                  <li>Total goals over/under</li>
                  <li>Period betting</li>
                  <li>Team totals</li>
                  <li>Stanley Cup winner markets</li>
                  <li>Conference and division winner markets</li>
                </ul>
                <p className="mt-2">
                  When analysing NHL games, factors such as team performance, starting goaltenders,
                  recent form, home advantage, and player injuries can influence match outcomes. See
                  the{" "}
                  <a href="/ice-hockey/nhl" className="text-brand underline">
                    NHL betting guide
                  </a>
                  .
                </p>
              </>
            ),
          },
          {
            heading: "KHL Hockey Betting",
            body: (
              <p>
                The Kontinental Hockey League (KHL) is one of the leading professional hockey
                leagues outside North America. Teams from different regions compete in a high-level
                tournament featuring skilled players and tactical gameplay. KHL betting markets
                include match winners, puck lines, totals, period results, and tournament winner
                options — explore the{" "}
                <a href="/ice-hockey/khl" className="text-brand underline">
                  KHL betting guide
                </a>
                .
              </p>
            ),
          },
          {
            heading: "IIHF World Championship Betting",
            body: (
              <>
                <p>
                  The IIHF World Championship brings together national teams from around the world.
                  International hockey tournaments create unique betting opportunities because teams
                  often have different playing styles and strategies.
                </p>
                <p className="mt-2">Popular IIHF betting markets include:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Match winner</li>
                  <li>Tournament winner</li>
                  <li>Total goals</li>
                  <li>Period results</li>
                  <li>Correct score markets</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Stanley Cup Betting",
            body: (
              <p>
                The Stanley Cup Playoffs are among the biggest events in ice hockey. Teams compete
                through multiple playoff rounds before reaching the championship final. Users can
                explore markets including series winners, conference champions, and overall
                tournament winners.
              </p>
            ),
          },
          {
            heading: "Popular Ice Hockey Betting Markets",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Match Winner Betting</h3>
                <p>
                  Match winner betting allows users to select which team will win an ice hockey
                  game. Markets may include regulation-time results or outcomes including overtime
                  depending on the competition rules.
                </p>
                <h3 className="mt-3 font-semibold">Puck Line Betting</h3>
                <p>
                  Puck line betting is similar to handicap betting in other sports. One team
                  receives a goal advantage or disadvantage, commonly set at 1.5 goals.
                </p>
                <h3 className="mt-3 font-semibold">Total Goals Betting</h3>
                <p>
                  Total goals betting focuses on the combined number of goals scored by both teams.
                  Users can select whether the final score will be over or under a specific total.
                </p>
                <h3 className="mt-3 font-semibold">Period Betting</h3>
                <p>
                  Ice hockey games are divided into three periods, creating additional betting
                  opportunities. Users can explore period winners, period totals, and other
                  period-based markets.
                </p>
                <h3 className="mt-3 font-semibold">Both Teams to Score Betting</h3>
                <p>
                  This market focuses on whether both teams will score at least one goal during the
                  match.
                </p>
                <h3 className="mt-3 font-semibold">Correct Score Betting</h3>
                <p>
                  Correct score betting involves predicting the final score outcome of an ice hockey
                  game.
                </p>
              </>
            ),
          },
          {
            heading: "Live Ice Hockey Betting",
            body: (
              <>
                <img
                  src="/assets/seo/live-ice-hockey-betting.webp"
                  alt="Live ice hockey betting — in-play puck line and totals markets on NHL and KHL games"
                  width="1200"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  className="mb-3 w-full rounded-lg border"
                />
                <p>
                  Live hockey betting allows users to follow matches while they are happening and
                  explore changing odds during different moments of play.
                </p>
                <p className="mt-2">
                  Ice hockey can change quickly because of power plays, penalty situations,
                  goaltender changes, and late-game strategies. Live betting markets provide
                  opportunities based on real-time match developments — follow the action in the{" "}
                  <a href="/ice-hockey/live" className="text-brand underline">
                    live hockey
                  </a>{" "}
                  section.
                </p>
              </>
            ),
          },
          {
            heading: "How to Analyse Ice Hockey Matches Before Betting",
            body: (
              <>
                <h3 className="mt-2 font-semibold">Team Performance</h3>
                <p>
                  Review recent results, scoring ability, defensive records, and overall
                  consistency.
                </p>
                <h3 className="mt-3 font-semibold">Goaltender Performance</h3>
                <p>
                  The goalkeeper plays an important role in ice hockey. Recent saves, goals
                  conceded, and starting goalie information can influence match analysis.
                </p>
                <h3 className="mt-3 font-semibold">Player Availability</h3>
                <p>Injuries, suspensions, and lineup changes can affect team strength.</p>
                <h3 className="mt-3 font-semibold">Head-to-Head Records</h3>
                <p>Previous meetings between teams can provide useful historical information.</p>
                <h3 className="mt-3 font-semibold">Home and Away Form</h3>
                <p>
                  Some teams perform differently depending on whether they play at home or away.
                </p>
                <h3 className="mt-3 font-semibold">Power Play and Penalty Kill Statistics</h3>
                <p>Special teams performance can have a major impact on hockey matches.</p>
              </>
            ),
          },
          {
            heading: "Ice Hockey Betting Tips",
            body: (
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Research teams and player statistics before selecting markets.</li>
                <li>
                  Compare different betting options instead of focusing only on match winners.
                </li>
                <li>Consider injuries, recent form, and tournament importance.</li>
                <li>Follow hockey news and lineup updates.</li>
                <li>Set personal limits and approach betting responsibly.</li>
              </ul>
            ),
          },
          {
            heading: "Responsible Ice Hockey Betting",
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
            heading: "Explore Ice Hockey Betting Markets",
            body: (
              <p>
                Follow NHL, KHL, IIHF, and international hockey competitions with a wide range of
                betting options. Explore ice hockey{" "}
                <a href="/ice-hockey/odds" className="text-brand underline">
                  odds
                </a>
                , puck lines, totals, period markets, and live betting opportunities at 1xBET India
                — deposit and withdraw in INR via{" "}
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
          <h2 className="text-xl font-bold sm:text-2xl">Ice Hockey Betting FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-lg border bg-card p-4">
                <summary className="cursor-pointer font-semibold">{f.q}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <nav aria-label="Ice hockey betting resources" className="mt-10">
          <h2 className="text-xl font-bold sm:text-2xl">Ice hockey betting resources</h2>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
            <li>
              <a href="/ice-hockey/nhl" className="block rounded-md border p-3 hover:bg-accent">
                NHL Betting
              </a>
            </li>
            <li>
              <a href="/ice-hockey/khl" className="block rounded-md border p-3 hover:bg-accent">
                KHL Betting
              </a>
            </li>
            <li>
              <a href="/ice-hockey/live" className="block rounded-md border p-3 hover:bg-accent">
                Live Hockey
              </a>
            </li>
            <li>
              <a href="/ice-hockey/odds" className="block rounded-md border p-3 hover:bg-accent">
                Hockey Odds
              </a>
            </li>
            <li>
              <a href="/ice-hockey/results" className="block rounded-md border p-3 hover:bg-accent">
                Hockey Results
              </a>
            </li>
            <li>
              <a
                href="/ice-hockey/schedule"
                className="block rounded-md border p-3 hover:bg-accent"
              >
                Hockey Schedule
              </a>
            </li>
          </ul>
        </nav>
      </SEOPage>
    </>
  ),
});
