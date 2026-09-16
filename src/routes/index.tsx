import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import {
  Apple,
  BadgeDollarSign,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Dices,
  Download,
  Facebook,
  Gift,
  Headphones,
  Instagram,
  MessageCircle,
  Menu,
  Search,
  Smartphone,
  Trophy,
  Twitter,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "1xBET India — Online Sports Betting, Live Casino & Cricket Betting" },
      {
        name: "description",
        content:
          "1xBET India — your premier destination for online sports betting, live casino games, cricket betting, esports and more. Place bets on live matches, enjoy 1xGames, and get exclusive bonuses.",
      },
      {
        property: "og:title",
        content: "1xBET India — Online Sports Betting, Live Casino & Cricket Betting",
      },
      {
        property: "og:description",
        content:
          "1xBET India — your premier destination for online sports betting, live casino games, cricket betting, esports and more. Place bets on live matches, enjoy 1xGames, and get exclusive bonuses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.1xbetindia.live/",
      },
    ],
  }),
  component: Sportsbook,
});

type Event = {
  id: number;
  league: string;
  country: string;
  time: string;
  home: string;
  away: string;
  score?: string;
  round: string;
  odds: number[];
  live?: boolean;
};

type Pick = { id: string; event: Event; label: string; odd: number };

const events: Event[] = [
  {
    id: 1,
    league: "Indonesia. Super League",
    country: "🇮🇩",
    time: "35:43 / 1st half",
    home: "Garuda Yaksa",
    away: "Persik Kediri",
    score: "0  ·  1",
    round: "Round 2",
    odds: [5.14, 3.66, 1.66, 2.15, 1.26, 1.15],
    live: true,
  },
  {
    id: 2,
    league: "CS 2. Fissure Playground",
    country: "🎮",
    time: "Starting in 9 minutes",
    home: "FURIA",
    away: "G2 Esports",
    round: "Play-off. Round of 8",
    odds: [1.56, 2.43, 2.9, 1.5, 1.35, 1.87],
    live: true,
  },
  {
    id: 3,
    league: "Germany. Bundesliga",
    country: "🇩🇪",
    time: "11 Sep · 22:30",
    home: "Union Berlin",
    away: "Schalke 04",
    round: "Round 3",
    odds: [2.48, 3.68, 2.938, 1.459, 1.326, 1.606],
  },
  {
    id: 4,
    league: "Spain. La Liga",
    country: "🇪🇸",
    time: "11 Sep · 23:00",
    home: "Sevilla",
    away: "Valencia",
    round: "Round 5",
    odds: [2.064, 3.435, 4.165, 1.273, 1.361, 1.848],
  },
  {
    id: 5,
    league: "Italy. Serie A",
    country: "🇮🇹",
    time: "11 Sep · 22:45",
    home: "Unione Venezia",
    away: "Fiorentina",
    round: "Round 4",
    odds: [2.905, 3.45, 2.621, 1.552, 1.358, 1.467],
  },
  {
    id: 6,
    league: "Russia. Premier League",
    country: "🇷🇺",
    time: "11 Sep · 19:00",
    home: "Krylia Sovetov",
    away: "Rodina Moscow",
    round: "Round 8",
    odds: [1.958, 3.835, 4.1, 1.279, 1.307, 1.942],
  },
];

const sports = [
  ["Football", 47, "⚽"],
  ["Tennis", 29, "🎾"],
  ["Basketball", 25, "🏀"],
  ["Ice Hockey", 10, "🏒"],
  ["Volleyball", 17, "🏐"],
  ["Table Tennis", 54, "🏓"],
  ["Cricket", 23, "🏏"],
  ["Esports", 26, "🎮"],
] as const;
const games = [
  ["1xGames", "/assets/games/1xgames.jpg"],
  ["Apple of Fortune", "/assets/games/apple-of-fortune.jpg"],
  ["Crash", "/assets/games/crash.jpg"],
  ["Crystal", "/assets/games/crystal.jpg"],
  ["Burning Hot", "/assets/games/burning-hot.jpg"],
  ["Midgard Zombies", "/assets/games/midgard-zombies.jpg"],
  ["Gems Odyssey", "/assets/games/gems-odyssey.jpg"],
  ["Las Vegas", "/assets/games/las-vegas.jpg"],
  ["Solitaire", "/assets/games/solitaire.jpg"],
  ["Spin & Win", "/assets/games/spin-win.jpg"],
] as const;

const casinoGames = [
  ["Spin & Win", "/assets/games/spin-win.jpg"],
  ["Solitaire", "/assets/games/solitaire.jpg"],
  ["Vampire Curse", "/assets/games/vampire-curse.jpg"],
  ["Mayan Tomb", "/assets/games/mayan-tomb.jpg"],
  ["Apple of Fortune", "/assets/games/apple-of-fortune.jpg"],
  ["Crash", "/assets/games/crash.jpg"],
  ["Crystal", "/assets/games/crystal.jpg"],
  ["Burning Hot", "/assets/games/burning-hot.jpg"],
  ["Midgard Zombies", "/assets/games/midgard-zombies.jpg"],
  ["Gems Odyssey", "/assets/games/gems-odyssey.jpg"],
] as const;

const liveCasinoGames = [
  ["Live Blackjack", "/assets/games/blackjack-21.jpg"],
  ["Las Vegas Live", "/assets/games/las-vegas.jpg"],
  ["Live Dice", "/assets/games/dice.jpg"],
  ["Live 1xGames", "/assets/games/1xgames.jpg"],
  ["Live Crash", "/assets/games/crash.jpg"],
  ["Live Crystal", "/assets/games/crystal.jpg"],
  ["Live Burning Hot", "/assets/games/burning-hot.jpg"],
  ["Live Midgard", "/assets/games/midgard-zombies.jpg"],
] as const;

const tvGameGames = [
  ["WheelBet", "/assets/games/spin-win.jpg"],
  ["Poker", "/assets/games/blackjack-21.jpg"],
  ["Crash Point", "/assets/games/crash-point.jpg"],
  ["Apple of Fortune", "/assets/games/apple-of-fortune.jpg"],
  ["1xGames", "/assets/games/1xgames.jpg"],
  ["Crystal", "/assets/games/crystal.jpg"],
  ["Burning Hot", "/assets/games/burning-hot.jpg"],
  ["Gems Odyssey", "/assets/games/gems-odyssey.jpg"],
] as const;

function Logo() {
  return (
    <img
      src="/assets/brand/logo-dark.svg"
      alt="1xBET"
      className="h-7 w-auto lg:h-6"
      width={128}
      height={28}
    />
  );
}

function Sportsbook() {
  const [activeSport, setActiveSport] = useState("Football");
  const [query, setQuery] = useState("");
  const [picks, setPicks] = useState<Pick[]>([]);
  const [stake, setStake] = useState("10");
  const [mobileMenu, setMobileMenu] = useState(false);
  const shown = events.filter((e) =>
    `${e.home} ${e.away} ${e.league}`.toLowerCase().includes(query.toLowerCase()),
  );
  const totalOdd = picks.reduce((acc, p) => acc * p.odd, 1);
  const returnValue = Number(stake || 0) * totalOdd;

  function selectOdd(event: Event, index: number) {
    const id = `${event.id}-${index}`;
    const label = ["W1", "DRAW", "W2", "1X", "12", "2X"][index];
    const odd = event.odds[index];
    if (!label || odd === undefined) return;
    const pick = { id, event, label, odd };
    setPicks((current) =>
      current.some((item) => item.id === id)
        ? current.filter((item) => item.id !== id)
        : [...current.filter((item) => item.event.id !== event.id), pick],
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <header className="sticky top-0 z-40 bg-brand-deep text-primary-foreground sportsbook-shadow">
        <div className="grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 lg:h-10">
          <Logo />
          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden text-primary-foreground hover:bg-brand lg:inline-flex"
              data-guard
            >
              <Gift /> Bonus
            </Button>
            <Button variant="secondary" size="sm" data-guard>
              Log in
            </Button>
            <Button size="sm" data-guard>
              Registration
            </Button>
          </div>
        </div>
        <nav className="hidden h-9 items-center gap-7 bg-brand px-3 text-xs font-bold uppercase lg:flex">
          <a href="/top-events/">
            <Trophy className="mr-1 inline size-4" /> Top-events
          </a>
          <a href="/sports/">Sports⌄</a>
          <a href="/live/">Live⌄</a>
          <a href="/1xgames/">1xGames⌄</a>
          <a href="/casino/">Casino⌄</a>
          <a href="/live-casino/">Live Casino⌄</a>
          <a href="/esports/">Esports⌄</a>
          <a href="/promo/">Promo⌄</a>
          <a href="/more/">More⌄</a>
        </nav>
      </header>

      <main className="mx-auto grid max-w-[1920px] grid-cols-1 gap-1 p-1 lg:grid-cols-[204px_minmax(0,1fr)_210px]">
        <LeftSidebar activeSport={activeSport} setActiveSport={setActiveSport} />

        <section className="min-w-0">
          <h1 className="sr-only">
            1xBET India — Online Sports Betting, Live Casino &amp; Cricket Betting
          </h1>
          <Promo />
          <GameStrip />
          <Marquee />
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-t-md bg-brand px-2 py-1.5 text-primary-foreground">
            <div className="flex min-w-0 gap-5 overflow-x-auto text-sm font-semibold no-scrollbar">
              <span className="border-b-2 border-primary pb-1">Matches</span>
              <span>Recommended</span>
              <span>Upcoming events</span>
              <span>1st period</span>
              <span>2nd period</span>
            </div>
            <div className="relative hidden sm:block">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by match"
                className="h-7 w-44 border-brand-light bg-brand-deep pr-7 text-primary-foreground placeholder:text-accent"
              />
              <Search className="absolute right-2 top-1.5 size-4" />
            </div>
          </div>
          <SportTabs activeSport={activeSport} setActiveSport={setActiveSport} />
          <div className="lg:hidden">
            <MobileSection events={shown} picks={picks} selectOdd={selectOdd} />
          </div>
          <div className="hidden lg:block">
            {shown.map((event) => (
              <DesktopEvent key={event.id} event={event} picks={picks} selectOdd={selectOdd} />
            ))}
          </div>
          <CasinoSection />
          <LiveCasinoSection />
          <TvGamesSection />

          {/* SEO content section */}
          <section className="bg-card px-4 py-6 text-sm leading-6 text-muted-foreground lg:px-8">
            <h2 className="mb-3 text-lg font-bold text-foreground">
              1xBET India — Your Trusted Online Betting Platform
            </h2>
            <p>
              1xBET India is the leading destination for online sports betting and casino gaming in
              India. We offer a comprehensive range of betting markets covering cricket, football,
              tennis, basketball, esports and more. Our platform features live in-play betting,
              competitive odds, and instant payouts in Indian Rupees (₹).
            </p>
            <p className="mt-3">
              Whether you want to bet on the IPL, Premier League, or international tournaments,
              1xBET India provides a secure and user-friendly experience with 24/7 customer support.
              Our casino section includes hundreds of slots, table games, and live dealer options,
              while our 1xGames offer instant entertainment.
            </p>
            <p className="mt-3">
              <a href="/responsible-gaming/" className="text-brand underline">
                Play responsibly
              </a>
              . You must be 18 or older to use this platform. If you have concerns about gambling,
              please visit our{" "}
              <a href="/responsible-gaming/" className="text-brand underline">
                Responsible Gaming
              </a>{" "}
              page.
            </p>
          </section>
          <AppDownload />
        </section>

        <RightSidebar
          picks={picks}
          setPicks={setPicks}
          stake={stake}
          setStake={setStake}
          totalOdd={totalOdd}
          returnValue={returnValue}
        />
      </main>
      <Footer />
      <MobileNav picks={picks.length} onMenu={() => setMobileMenu(!mobileMenu)} />
      {mobileMenu && (
        <div className="fixed inset-x-3 bottom-16 z-50 rounded-md bg-brand-deep p-3 text-primary-foreground sportsbook-shadow lg:hidden">
          <div className="mb-3 flex items-center justify-between font-bold">
            Menu{" "}
            <Button
              aria-label="Close menu"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenu(false)}
            >
              <X />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Sports</div>
            <div>Live</div>
            <div>Casino</div>
            <div>Promotions</div>
            <div>Results</div>
            <div>Support</div>
          </div>
        </div>
      )}
    </div>
  );
}

function LeftSidebar({
  activeSport,
  setActiveSport,
}: {
  activeSport: string;
  setActiveSport: (s: string) => void;
}) {
  return (
    <aside className="hidden min-w-0 lg:block">
      <div className="bg-brand px-3 py-2 text-center text-xs text-primary-foreground/80">
        « Collapse block
      </div>
      {["Favorite matches", "Recommended", "Top competitions", "Top Games"].map((x) => (
        <div
          key={x}
          className="flex items-center justify-between border-b border-brand-light bg-brand px-2 py-2 text-xs font-semibold text-primary-foreground"
        >
          <span>★ &nbsp;{x}</span>
          <ChevronDown className="size-4" />
        </div>
      ))}
      <div className="bg-market p-2 text-xs">
        <p className="text-brand">🌐 Indonesia. Super League</p>
        <p className="my-1 text-muted-foreground">1st half, 35 minutes / Round 2</p>
        <div className="flex justify-between">
          <b>Garuda Yaksa</b>
          <b>0</b>
        </div>
        <div className="flex justify-between">
          <b>Persik Kediri</b>
          <b>1</b>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-brand text-center text-xs font-bold text-primary-foreground">
        <div className="border-b-2 border-primary p-2">● LIVE</div>
        <div className="p-2">SPORTS</div>
      </div>
      <div className="bg-market px-2 py-2 text-xs font-bold">ALL 885 &nbsp; ▷ 415</div>
      {sports.map(([name, count, icon]) => (
        <Button
          key={name}
          variant="ghost"
          onClick={() => setActiveSport(name)}
          className={`flex h-8 w-full justify-between rounded-none border-b border-border px-2 text-xs ${activeSport === name ? "bg-accent font-bold" : "bg-card"}`}
        >
          <span>
            {icon} &nbsp;{name} ({count})
          </span>
          <ChevronDown />
        </Button>
      ))}
    </aside>
  );
}

const promoSlides = [
  {
    eyebrow: "Welcome bonus",
    title: "100% first deposit bonus",
    sub: "Sign up and get up to ₹10,000 on your first deposit.",
    image: "/assets/games/1xgames.jpg",
  },
  {
    eyebrow: "1xGames hit",
    title: "Crash — cash out before the plane flies away",
    sub: "Play the most popular instant game with huge multipliers.",
    image: "/assets/games/crash.jpg",
  },
  {
    eyebrow: "Slots",
    title: "Crystal — match gems and win big",
    sub: "New exclusive 1xGames slot with vivid graphics.",
    image: "/assets/games/crystal.jpg",
  },
  {
    eyebrow: "Casino",
    title: "Gems Odyssey — chase the jackpot",
    sub: "Dive into an adventure full of gems and rewards.",
    image: "/assets/games/gems-odyssey.jpg",
  },
  {
    eyebrow: "Hot slot",
    title: "Burning Hot — feel the dragon's flame",
    sub: "Fiery reels, hot bonuses and epic payouts.",
    image: "/assets/games/burning-hot.jpg",
  },
  {
    eyebrow: "Cricket",
    title: "IPL betting — bet on every match",
    sub: "Live odds on all IPL and international cricket matches.",
    image: "/assets/partners/esports-banner.webp",
  },
];

function Promo() {
  const [slide, setSlide] = useState(0);
  const active = promoSlides[slide]!;

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((current) => (current + 1) % promoSlides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  function go(delta: number) {
    setSlide((current) => (current + delta + promoSlides.length) % promoSlides.length);
  }

  return (
    <section className="relative h-44 overflow-hidden rounded-md bg-brand-deep text-promo-foreground lg:h-56">
      <img
        src={active.image}
        alt={active.title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/90 via-brand/50 to-transparent" />
      <div className="relative flex h-full flex-col justify-center px-6 py-7 lg:px-12 lg:py-10">
        <p className="text-xs font-bold uppercase text-primary">{active.eyebrow}</p>
        <h2 className="mt-2 max-w-md text-2xl font-extrabold uppercase leading-tight lg:text-4xl">
          {active.title}
        </h2>
        <p className="mt-2 hidden max-w-sm text-sm sm:block">{active.sub}</p>
        <div className="mt-4">
          <Button className="h-8 uppercase" data-guard>
            Take part
          </Button>
        </div>
      </div>
      <button
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-primary-foreground/20 p-1.5 text-primary-foreground hover:bg-primary-foreground/30 lg:block"
      >
        <ChevronLeft />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full bg-primary-foreground/20 p-1.5 text-primary-foreground hover:bg-primary-foreground/30 lg:block"
      >
        <ChevronRight />
      </button>
      <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
        {promoSlides.map((s, i) => (
          <button
            key={s.title}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setSlide(i)}
            className={`h-1.5 rounded-full transition-all ${i === slide ? "w-6 bg-primary" : "w-1.5 bg-primary-foreground/70"}`}
          />
        ))}
      </div>
    </section>
  );
}

function GameStrip() {
  return (
    <div className="no-scrollbar mt-1 flex gap-1 overflow-x-auto bg-brand p-1">
      {games.map(([name, image]) => (
        <div
          key={name}
          className="w-36 shrink-0 overflow-hidden rounded-sm bg-brand-deep text-center text-xs text-primary-foreground"
          data-guard
        >
          <img
            src={image}
            alt={name}
            className="h-20 w-full object-cover"
            loading="lazy"
            width="144"
            height="80"
          />
          <div className="truncate bg-brand-deep px-1 py-1.5 font-semibold">{name}</div>
        </div>
      ))}
    </div>
  );
}

function Marquee() {
  const text = "Libertadores";
  const items = Array.from({ length: 16 }, (_, i) => i);
  return (
    <div className="my-2 overflow-hidden rounded-md bg-gradient-to-r from-primary to-brand-light py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((i) => (
          <span key={i} className="mx-4 text-xl font-bold text-primary-foreground">
            • {text}
          </span>
        ))}
      </div>
    </div>
  );
}

function SportTabs({
  activeSport,
  setActiveSport,
}: {
  activeSport: string;
  setActiveSport: (s: string) => void;
}) {
  return (
    <div className="no-scrollbar flex overflow-x-auto bg-brand-deep text-xs font-semibold text-primary-foreground/80">
      {sports.map(([name, , icon]) => (
        <Button
          key={name}
          variant="ghost"
          onClick={() => setActiveSport(name)}
          className={`h-9 shrink-0 rounded-none px-3 ${activeSport === name ? "bg-market text-brand" : "text-primary-foreground/80 hover:bg-brand hover:text-primary-foreground"}`}
        >
          {icon} {name}
        </Button>
      ))}
    </div>
  );
}

function DesktopEvent({
  event,
  picks,
  selectOdd,
}: {
  event: Event;
  picks: Pick[];
  selectOdd: (e: Event, i: number) => void;
}) {
  return (
    <article className="border-b border-border bg-market">
      <div className="grid grid-cols-[minmax(0,1fr)_repeat(6,64px)_44px] items-center bg-accent px-2 py-2 text-xs">
        <b className="truncate">
          {event.country} &nbsp; {event.league}
        </b>
        {["1", "X", "2", "1X", "12", "2X"].map((x) => (
          <span className="text-center" key={x}>
            {x}
          </span>
        ))}
        <span className="text-center">+6</span>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_repeat(6,64px)_44px] items-center gap-1 p-2">
        <div className="min-w-0 text-sm">
          <div className="flex justify-between pr-3">
            <div>
              <p>
                ☆ &nbsp; <b>{event.home}</b>
              </p>
              <p>
                ★ &nbsp; <b>{event.away}</b>
              </p>
            </div>
            {event.score && <b>{event.score}</b>}
          </div>
          <p className="mt-1 text-[11px] text-brand">
            {event.time} / {event.round}
          </p>
        </div>
        {event.odds.map((odd, i) => (
          <Odd
            key={i}
            active={picks.some((p) => p.id === `${event.id}-${i}`)}
            onClick={() => selectOdd(event, i)}
          >
            {odd}
          </Odd>
        ))}
        <button className="text-xs text-brand underline">+357</button>
      </div>
    </article>
  );
}

function Odd({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <Button
      aria-label={`Select odds ${children}`}
      variant={active ? "default" : "secondary"}
      onClick={onClick}
      className="h-8 min-w-0 px-1 text-xs"
    >
      {children}
    </Button>
  );
}

function MobileSection({
  events,
  picks,
  selectOdd,
}: {
  events: Event[];
  picks: Pick[];
  selectOdd: (e: Event, i: number) => void;
}) {
  const live = events.filter((e) => e.live);
  const upcoming = events.filter((e) => !e.live);
  return (
    <div className="py-5">
      <SectionHeading title="LIVE" count="865" action="MORE LIVE »" />
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-3 pb-4">
        {live.map((e) => (
          <MobileEvent key={e.id} event={e} picks={picks} selectOdd={selectOdd} />
        ))}
      </div>
      <Button variant="secondary" className="mx-3 mb-8 w-[calc(100%-1.5rem)]">
        Recommended Live <ChevronRight />
      </Button>
      <SectionHeading title="SPORTS" count="11602" action="MORE SPORTS »" />
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-3 pb-4">
        {upcoming.map((e) => (
          <MobileEvent key={e.id} event={e} picks={picks} selectOdd={selectOdd} />
        ))}
      </div>
      <Button variant="secondary" className="mx-3 w-[calc(100%-1.5rem)]">
        Recommended Sports <ChevronRight />
      </Button>
    </div>
  );
}

function SectionHeading({
  title,
  count,
  action,
}: {
  title: string;
  count?: string;
  action: string;
}) {
  return (
    <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] px-3 text-lg text-brand">
      <b>
        {title}
        {count ? <span className="ml-1 font-normal text-muted-foreground">({count})</span> : null}
      </b>
      <span>{action}</span>
    </div>
  );
}

function MobileEvent({
  event,
  picks,
  selectOdd,
}: {
  event: Event;
  picks: Pick[];
  selectOdd: (e: Event, i: number) => void;
}) {
  return (
    <article className="w-[78vw] max-w-md shrink-0 overflow-hidden rounded-md bg-card sportsbook-shadow">
      <div className="flex items-center justify-between border-b p-3 text-brand">
        <span>
          {event.country} &nbsp; {event.time}
        </span>
        <b>⋮</b>
      </div>
      <div className="p-4">
        <p className="mb-3 text-brand">{event.league}</p>
        <p className="font-bold">{event.home}</p>
        <p className="font-bold">{event.away}</p>
        <p className="mt-3 text-brand">{event.round}</p>
        <div className="mt-3 grid grid-cols-4 gap-1">
          {event.odds.slice(0, 4).map((odd, i) => (
            <div key={i}>
              <div className="text-center text-xs text-muted-foreground">
                {["W1", "DRAW", "W2", "1X"][i]}
              </div>
              <Odd
                active={picks.some((p) => p.id === `${event.id}-${i}`)}
                onClick={() => selectOdd(event, i)}
              >
                {odd}
              </Odd>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function RightSidebar({
  picks,
  setPicks,
  stake,
  setStake,
  totalOdd,
  returnValue,
}: {
  picks: Pick[];
  setPicks: Dispatch<SetStateAction<Pick[]>>;
  stake: string;
  setStake: (s: string) => void;
  totalOdd: number;
  returnValue: number;
}) {
  return (
    <aside className="hidden lg:block">
      <div className="rounded-t-md bg-brand p-2 text-center text-sm font-bold text-primary-foreground">
        REGISTRATION
      </div>
      <div className="bg-market p-2">
        <div className="mb-2 grid grid-cols-2 gap-1">
          <Button size="sm" data-guard>
            ⚡ One-click
          </Button>
          <Button size="sm" variant="secondary" data-guard>
            By phone
          </Button>
        </div>
        <Input value="India" readOnly className="mb-2 bg-card" />
        <Input value="INR ₹" readOnly className="mb-2 bg-card" />
        <Input placeholder="Promo code" className="mb-2 bg-card" />
        <Button className="w-full" data-guard>
          REGISTER
        </Button>
        <p className="mt-2 text-center text-[9px] text-muted-foreground">
          Create your account and start betting online.
        </p>
      </div>
      <div className="mt-2 bg-brand p-2 text-center font-bold text-primary-foreground">
        Bet slip
      </div>
      <BetSlip
        picks={picks}
        setPicks={setPicks}
        stake={stake}
        setStake={setStake}
        totalOdd={totalOdd}
        returnValue={returnValue}
      />
      <div className="mt-2 bg-brand p-3 text-primary-foreground">
        <Zap className="mb-2 size-8 text-brand-light" />
        <b>BET SLIP GENERATOR</b>
        <p className="my-2 text-xs">
          Enter your parameters and we will generate a betting slip for you.
        </p>
        <Button className="w-full" data-guard>
          GENERATE
        </Button>
      </div>
    </aside>
  );
}

function BetSlip({
  picks,
  setPicks,
  stake,
  setStake,
  totalOdd,
  returnValue,
}: {
  picks: Pick[];
  setPicks: Dispatch<SetStateAction<Pick[]>>;
  stake: string;
  setStake: (s: string) => void;
  totalOdd: number;
  returnValue: number;
}) {
  return (
    <div className="bg-market p-2">
      {picks.length === 0 ? (
        <div className="grid min-h-32 place-items-center text-center text-sm text-muted-foreground">
          Add events to the bet slip
          <br />
          by selecting odds
        </div>
      ) : (
        <>
          {picks.map((p) => (
            <div key={p.id} className="mb-2 rounded bg-card p-2 text-xs sportsbook-shadow">
              <div className="flex justify-between gap-2">
                <b className="truncate">
                  {p.event.home} — {p.event.away}
                </b>
                <Button
                  aria-label="Remove selection"
                  variant="ghost"
                  size="icon"
                  className="size-5"
                  onClick={() => setPicks((x) => x.filter((i) => i.id !== p.id))}
                >
                  <X />
                </Button>
              </div>
              <div className="mt-1 flex justify-between text-brand">
                <span>{p.label}</span>
                <b>{p.odd}</b>
              </div>
            </div>
          ))}
          <label className="text-xs font-bold">
            Stake
            <Input
              type="number"
              min="0"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
              className="mt-1 bg-card"
            />
          </label>
          <div className="mt-2 flex justify-between text-xs">
            <span>Total odds</span>
            <b>{totalOdd.toFixed(3)}</b>
          </div>
          <div className="my-2 flex justify-between text-xs">
            <span>Potential return</span>
            <b>{returnValue.toFixed(2)}</b>
          </div>
          <Button className="w-full">PLACE DEMO BET</Button>
        </>
      )}
    </div>
  );
}

function CasinoSection() {
  return (
    <section className="bg-card py-10">
      <SectionHeading title="CASINO" action="MORE CASINO »" />
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-3">
        {casinoGames.map(([name, image]) => (
          <GameTile key={name} name={name} image={image} />
        ))}
      </div>
    </section>
  );
}

function GameTile({ name, image }: { name: string; image: string }) {
  return (
    <div
      className="w-44 shrink-0 overflow-hidden rounded-md bg-market text-center text-brand sportsbook-shadow"
      data-guard
    >
      <img
        src={image}
        alt={name}
        className="h-28 w-full object-cover"
        loading="lazy"
        width="176"
        height="112"
      />
      <div className="truncate bg-brand-deep px-2 py-1 text-sm font-semibold text-primary-foreground">
        {name}
      </div>
    </div>
  );
}

function LiveCasinoSection() {
  return (
    <section className="bg-card py-10">
      <SectionHeading title="1XLIVE" action="MORE 1XLIVE »" />
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-3">
        {liveCasinoGames.map(([name, image]) => (
          <GameTile key={name} name={name} image={image} />
        ))}
      </div>
    </section>
  );
}

function TvGamesSection() {
  return (
    <section className="bg-card py-10">
      <SectionHeading title="TV GAMES" action="MORE TV GAMES »" />
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-3">
        {tvGameGames.map(([name, image]) => (
          <GameTile key={name} name={name} image={image} />
        ))}
      </div>
    </section>
  );
}

function AppDownload() {
  return (
    <section className="mt-2 flex flex-col items-center gap-4 rounded-md bg-brand p-5 text-center text-primary-foreground lg:flex-row lg:justify-between lg:text-left">
      <div>
        <h2 className="text-xl font-extrabold uppercase">Get the 1xBET app</h2>
        <p className="mt-1 text-sm text-primary-foreground/80">
          Faster bets, live streaming and exclusive app-only bonuses.
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" className="h-10 gap-2 px-4" data-guard>
          <Smartphone /> Google Play
        </Button>
        <Button variant="secondary" className="h-10 gap-2 px-4" data-guard>
          <Apple /> App Store
        </Button>
        <Button className="h-10 gap-2 px-4" data-guard>
          <Download /> APK
        </Button>
      </div>
    </section>
  );
}

type Partner = { name: string; from?: string; to?: string; label?: string; image?: string };

const sportsPartners: Partner[] = [
  { name: "FC Barcelona", image: "/assets/partners/fc-barcelona.png" },
  { name: "Serie A", image: "/assets/partners/serie-a.png" },
  { name: "Paris Saint-Germain", image: "/assets/partners/psg.png" },
  { name: "CAF", image: "/assets/partners/caf.svg" },
  { name: "Volleyball World", from: "from-brand-light", to: "to-brand-deep", label: "Volleyball" },
  { name: "FIBA", from: "from-brand-deep", to: "to-brand", label: "FIBA" },
];

const esportsPartners: { name: string; image: string }[] = [
  { name: "Riot Games", image: "/assets/partners/riot-games.png" },
  { name: "PGL", image: "/assets/partners/pgl.png" },
  { name: "MIBR", image: "/assets/partners/mibr.png" },
  { name: "Astralis", image: "/assets/partners/astralis.png" },
  { name: "The MongolZ", image: "/assets/partners/the-mongolz.png" },
  { name: "GamerLegion", image: "/assets/partners/gamerlegion.png" },
];

function PartnerBadge({ partner }: { partner: Partner }) {
  return (
    <div
      className={`grid h-24 w-24 shrink-0 place-items-center rounded-md bg-gradient-to-br ${partner.from} ${partner.to} px-2 text-center text-sm font-extrabold text-primary-foreground sportsbook-shadow`}
      title={partner.name}
    >
      {partner.label}
    </div>
  );
}

function PartnerImage({ partner, dark }: { partner: Partner; dark?: boolean }) {
  return (
    <div
      className={`grid h-24 w-24 shrink-0 place-items-center rounded-md p-2 sportsbook-shadow ${dark ? "bg-brand-deep" : "bg-primary-foreground"}`}
    >
      {partner.image ? (
        <img
          src={partner.image}
          alt={partner.name}
          className="max-h-16 w-auto object-contain"
          loading="lazy"
        />
      ) : (
        <span
          className={`text-center text-sm font-extrabold ${dark ? "text-primary-foreground" : "text-brand"}`}
        >
          {partner.label}
        </span>
      )}
    </div>
  );
}

function PartnersSection() {
  return (
    <section className="mt-2 space-y-6 bg-brand p-4 lg:hidden">
      <div>
        <h2 className="mb-3 text-center text-lg font-bold text-primary-foreground">
          SPORTS PARTNERS
        </h2>
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {sportsPartners.map((p) => (
            <PartnerImage key={p.name} partner={p} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-center text-lg font-bold text-primary-foreground">
          ESPORTS PARTNERS
        </h2>
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {esportsPartners.map((p) => (
            <PartnerImage key={p.name} dark partner={{ name: p.name, image: p.image }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersSectionDesktop() {
  return (
    <section className="mt-2 hidden bg-brand p-4 lg:block">
      <h2 className="mb-3 text-center text-xl font-bold text-primary-foreground">PARTNERS</h2>
      <div className="no-scrollbar flex gap-2 overflow-x-auto">
        {sportsPartners.map((p) => (
          <PartnerImage key={p.name} partner={p} />
        ))}
        {esportsPartners.map((p) => (
          <PartnerImage key={p.name} dark partner={{ name: p.name, image: p.image }} />
        ))}
      </div>
    </section>
  );
}

function MobileAppBanner() {
  return (
    <div
      className="flex items-center gap-3 rounded-md bg-gradient-to-r from-brand-light to-brand p-4 text-primary-foreground lg:hidden"
      data-guard
    >
      <div className="relative grid size-12 shrink-0 place-items-center rounded-xl bg-primary-foreground/15">
        <Smartphone className="size-7" />
        <Apple className="absolute -left-2 -top-2 size-4 rounded-full bg-primary-foreground p-0.5 text-brand-deep" />
        <Download className="absolute -bottom-2 -right-2 size-4 rounded-full bg-primary-foreground p-0.5 text-brand-deep" />
      </div>
      <div>
        <p className="text-lg font-extrabold italic leading-none">1XBET</p>
        <p className="text-sm">Mobile application</p>
      </div>
    </div>
  );
}

function Footer() {
  const linkGroups = [
    {
      title: "1XBET",
      links: [
        { label: "About us", href: "/about/" },
        { label: "Terms and Conditions", href: "/terms/" },
        { label: "Affiliate Program", href: "/affiliate/" },
        { label: "Become an agent", href: "/become-agent/" },
        { label: "Privacy Policy", href: "/privacy/" },
        { label: "Cookie Policy", href: "/cookies/" },
        { label: "Contacts", href: "/contacts/" },
      ],
    },
    {
      title: "BETTING",
      links: [
        { label: "Sports", href: "/sports/" },
        { label: "MultiLIVE", href: "/multi-live/" },
        { label: "Live", href: "/live/" },
        { label: "Toto", href: "/toto/" },
      ],
    },
    {
      title: "GAMES",
      links: [
        { label: "Casino", href: "/casino/" },
        { label: "1xGames", href: "/1xgames/" },
        { label: "Live Casino", href: "/live-casino/" },
      ],
    },
    {
      title: "STATISTICS",
      links: [
        { label: "Statistics", href: "/statistics/" },
        { label: "Results", href: "/results/" },
      ],
    },
    {
      title: "USEFUL LINKS",
      links: [
        { label: "Payment methods", href: "/payment-methods/" },
        { label: "Mobile version", href: "/mobile/" },
        { label: "Registration", href: "/registration/" },
      ],
    },
  ];
  return (
    <footer className="mt-2 bg-brand-deep p-3 pb-20 text-primary-foreground lg:pb-3">
      <div className="space-y-2 lg:space-y-1">
        {["1xBET Login – Online Bookmaker in India", "Popular events and sports news", "FAQ"].map(
          (x) => (
            <div
              key={x}
              className="flex justify-between rounded-md bg-brand p-4 text-sm font-bold uppercase lg:rounded-sm lg:p-3"
            >
              {x}
              <ChevronDown />
            </div>
          ),
        )}
      </div>

      {/* Mobile-only: 1xLIVE / TV GAMES already rendered above; partners + app banner + socials */}
      <div className="mt-3 space-y-3 lg:hidden">
        <PartnersSection />
        <MobileAppBanner />
        <div className="grid grid-cols-3 gap-2">
          <Button variant="secondary" className="h-11 bg-brand text-primary-foreground">
            <Instagram />
          </Button>
          <Button variant="secondary" className="h-11 bg-brand text-primary-foreground">
            <Twitter />
          </Button>
          <Button variant="secondary" className="h-11 bg-brand text-primary-foreground">
            <Facebook />
          </Button>
        </div>
        <div className="flex items-center gap-3 rounded-md bg-brand p-3 text-primary-foreground">
          <MessageCircle className="size-8" />
          <div>
            <b>24/7 SUPPORT</b>
            <p className="opacity-80">Ask any questions</p>
          </div>
        </div>
        <p className="text-center text-sm text-primary-foreground">Copyright © 2026 «1xBet».</p>
        <p className="text-center text-xs text-primary-foreground/80">
          1xBet uses cookies to ensure the best user experience. By remaining on the website, you
          consent to the use of your cookie files on 1xBet.{" "}
          <a href="/cookies/" className="underline">
            Find out more
          </a>
        </p>
        <div className="flex items-center justify-between gap-2 text-xs text-primary-foreground">
          <span className="rounded-md bg-brand px-3 py-2 font-bold">18+</span>
          <a href="/full-version/" className="underline">
            Go to the full version of the website
          </a>
          <span className="rounded-md bg-brand px-3 py-2 font-bold">EN ⌄</span>
        </div>
      </div>

      {/* Desktop-only footer */}
      <div className="my-3 hidden grid-cols-5 gap-4 rounded-md bg-brand p-3 text-primary-foreground lg:grid">
        {linkGroups.map((group) => (
          <div key={group.title}>
            <b className="text-sm">{group.title}</b>
            <p className="mt-2 space-y-1 text-xs leading-6 opacity-80">
              {group.links.map((l) => (
                <a key={l.label} href={l.href} className="block cursor-pointer hover:opacity-100">
                  {l.label}
                </a>
              ))}
            </p>
          </div>
        ))}
        <div>
          <b className="text-sm">APPS</b>
          <div className="mt-2 space-y-1 text-xs leading-6 opacity-80">
            <a href="/ios/" className="flex cursor-pointer items-center gap-1 hover:opacity-100">
              <Apple className="size-3.5" /> iOS
            </a>
            <a
              href="/android/"
              className="flex cursor-pointer items-center gap-1 hover:opacity-100"
            >
              <Smartphone className="size-3.5" /> Android
            </a>
            <a
              href="/other-apps/"
              className="flex cursor-pointer items-center gap-1 hover:opacity-100"
            >
              <Download className="size-3.5" /> Other apps
            </a>
          </div>
        </div>
      </div>
      <PartnersSectionDesktop />
      <div className="mt-3 hidden items-center justify-between gap-4 rounded-md bg-brand p-3 text-primary-foreground lg:flex">
        <p className="max-w-sm text-xs opacity-80">
          Copyright © 2026 «1xBet». 1xBet uses cookies to ensure the best user experience. By
          remaining on the website, you consent to the use of your cookie files on 1xBet.{" "}
          <a href="/cookies/" className="underline">
            Find out more
          </a>
        </p>
        <div className="flex items-center gap-3">
          <Headphones className="size-8" />
          <div className="text-sm">
            <b>24/7 CUSTOMER SUPPORT SERVICE</b>
            <p className="opacity-80">+441273256987</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="secondary" className="size-8 rounded-full">
            <Twitter className="size-4" />
          </Button>
          <Button size="icon" variant="secondary" className="size-8 rounded-full">
            <Facebook className="size-4" />
          </Button>
          <Button size="icon" variant="secondary" className="size-8 rounded-full">
            <Instagram className="size-4" />
          </Button>
          <span className="rounded-md bg-brand-deep px-2 py-1 text-xs font-bold">18+</span>
        </div>
      </div>
      <button className="mt-2 hidden w-full rounded-md bg-brand p-2 text-center text-xs font-bold uppercase text-primary-foreground lg:block">
        Mobile version
      </button>
    </footer>
  );
}

function MobileNav({ picks, onMenu }: { picks: number; onMenu: () => void }) {
  const nav = [
    { n: "Sports", i: Trophy },
    { n: "Casino", i: Dices },
    { n: "Bet slip", i: BadgeDollarSign },
    { n: "Log in", i: CircleUserRound },
    { n: "Menu", i: Menu },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-5 border-t bg-card lg:hidden">
      {nav.map(({ n, i: Icon }) => (
        <Button
          key={n}
          onClick={n === "Menu" ? onMenu : undefined}
          variant="ghost"
          data-guard={n === "Log in" ? "" : undefined}
          className={`relative h-full flex-col gap-0 rounded-none px-1 text-xs ${n === "Bet slip" ? "font-bold text-brand" : "text-brand"}`}
        >
          <Icon
            className={
              n === "Bet slip"
                ? "size-7 rounded-full bg-brand-light p-1 text-primary-foreground"
                : "size-5"
            }
          />
          {n}
          {n === "Bet slip" && picks > 0 && (
            <span className="absolute right-4 top-1 grid size-5 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
              {picks}
            </span>
          )}
        </Button>
      ))}
    </nav>
  );
}
