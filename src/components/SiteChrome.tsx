import {
  Apple,
  BadgeDollarSign,
  ChevronDown,
  CircleUserRound,
  Dices,
  Download,
  Facebook,
  Gift,
  Headphones,
  Instagram,
  Menu,
  MessageCircle,
  Smartphone,
  Trophy,
  Twitter,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Logo() {
  return (
    <a href="/" aria-label="1xBET home" className="inline-block">
      <img
        src="/assets/brand/logo-dark.svg"
        alt="1xBET"
        className="h-7 w-auto lg:h-6"
        width={128}
        height={28}
      />
    </a>
  );
}

export function SiteHeader() {
  return (
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
        <a href="/top-events">
          <Trophy className="mr-1 inline size-4" /> Top-events
        </a>
        <a href="/sports">Sports⌄</a>
        <a href="/live">Live⌄</a>
        <a href="/1xgames">1xGames⌄</a>
        <a href="/casino">Casino⌄</a>
        <a href="/live-casino">Live Casino⌄</a>
        <a href="/esports">Esports⌄</a>
        <a href="/promotions">Promo⌄</a>
        <a href="/more">More⌄</a>
      </nav>
    </header>
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
          decoding="async"
          width={64}
          height={64}
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

export function SiteFooter() {
  const linkGroups = [
    {
      title: "1XBET",
      links: [
        { label: "About us", href: "/about" },
        { label: "Terms and Conditions", href: "/terms" },
        { label: "Affiliate Program", href: "/affiliate" },
        { label: "Become an agent", href: "/become-agent" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Contacts", href: "/contact" },
      ],
    },
    {
      title: "BETTING",
      links: [
        { label: "Sports", href: "/sports" },
        { label: "Cricket", href: "/cricket" },
        { label: "IPL Betting", href: "/ipl-betting" },
        { label: "Live Cricket Betting", href: "/cricket-live" },
        { label: "Cricket Odds", href: "/cricket-odds" },
        { label: "Cricket Schedule", href: "/cricket-schedule" },
        { label: "Cricket Results", href: "/cricket-results" },
        { label: "Football Betting", href: "/football" },
        { label: "Football Live Betting", href: "/live" },
        { label: "Football Odds", href: "/football/odds" },
        { label: "Football Schedule", href: "/football/schedule" },
        { label: "Football Results", href: "/results" },
        { label: "Esports Betting", href: "/esports" },
        { label: "CS2 Betting", href: "/cs2-betting" },
        { label: "Dota 2 Betting", href: "/dota2-betting" },
        { label: "Valorant Betting", href: "/valorant-betting" },
        { label: "LoL Betting", href: "/lol-betting" },
        { label: "Esports Schedule", href: "/esports-schedule" },
        { label: "Esports Results", href: "/esports-results" },
        { label: "Tennis Betting", href: "/tennis" },
        { label: "Grand Slam Betting", href: "/tennis/grand-slams" },
        { label: "Basketball Betting", href: "/basketball" },
        { label: "NBA Betting", href: "/basketball/nba" },
        { label: "EuroLeague Betting", href: "/basketball/euroleague" },
        { label: "Ice Hockey Betting", href: "/ice-hockey" },
        { label: "NHL Betting", href: "/ice-hockey/nhl" },
        { label: "Volleyball Betting", href: "/volleyball" },
        { label: "VNL Betting", href: "/volleyball/vnl" },
        { label: "MultiLIVE", href: "/multi-live" },
        { label: "Live", href: "/live" },
        { label: "Toto", href: "/toto" },
      ],
    },
    {
      title: "GAMES",
      links: [
        { label: "Games", href: "/games" },
        { label: "Casino", href: "/casino" },
        { label: "1xGames", href: "/1xgames" },
        { label: "Live Casino", href: "/live-casino" },
      ],
    },
    {
      title: "STATISTICS",
      links: [
        { label: "Statistics", href: "/statistics" },
        { label: "Results", href: "/results" },
      ],
    },
    {
      title: "USEFUL LINKS",
      links: [
        { label: "Payment methods", href: "/payments" },
        { label: "Promotions", href: "/promotions" },
        { label: "Mobile app", href: "/app" },
        { label: "Registration", href: "/registration" },
        { label: "FAQ", href: "/faq" },
        { label: "Help Centre", href: "/help" },
        { label: "Responsible Gaming", href: "/responsible-gaming" },
      ],
    },
  ];
  return (
    <footer className="mt-2 bg-brand-deep p-3 pb-20 text-primary-foreground lg:pb-3">
      <div className="space-y-2 lg:space-y-1">
        {[
          { label: "About 1xBET", href: "/about" },
          { label: "Popular events and sports news", href: "/top-events" },
          { label: "FAQ", href: "/faq" },
        ].map((x) => (
          <a
            key={x.label}
            href={x.href}
            className="flex justify-between rounded-md bg-brand p-4 text-sm font-bold uppercase lg:rounded-sm lg:p-3"
          >
            {x.label}
            <ChevronDown />
          </a>
        ))}
      </div>

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
          <a href="/cookies" className="underline">
            Find out more
          </a>
        </p>
        <div className="flex items-center justify-between gap-2 text-xs text-primary-foreground">
          <span className="rounded-md bg-brand px-3 py-2 font-bold">18+</span>
          <a href="/full-version" className="underline">
            Go to the full version of the website
          </a>
          <span className="rounded-md bg-brand px-3 py-2 font-bold">EN ⌄</span>
        </div>
      </div>

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
            <a href="/ios" className="flex cursor-pointer items-center gap-1 hover:opacity-100">
              <Apple className="size-3.5" /> iOS
            </a>
            <a href="/android" className="flex cursor-pointer items-center gap-1 hover:opacity-100">
              <Smartphone className="size-3.5" /> Android
            </a>
            <a
              href="/other-apps"
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
          <a href="/cookies" className="underline">
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

export function SiteMobileNav({ picks = 0 }: { picks?: number }) {
  const [open, setOpen] = useState(false);
  const nav = [
    { n: "Sports", i: Trophy, href: "/sports" },
    { n: "Casino", i: Dices, href: "/casino" },
    { n: "Bet slip", i: BadgeDollarSign, guard: true },
    { n: "Log in", i: CircleUserRound, guard: true },
    { n: "Menu", i: Menu, menu: true },
  ];
  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-5 border-t bg-card lg:hidden">
        {nav.map(({ n, i: Icon, href, guard, menu }) =>
          href ? (
            <a
              key={n}
              href={href}
              className="relative flex h-full flex-col items-center justify-center gap-0 px-1 text-xs text-brand"
            >
              <Icon className="size-5" />
              {n}
            </a>
          ) : (
            <Button
              key={n}
              onClick={menu ? () => setOpen(!open) : undefined}
              variant="ghost"
              data-guard={guard ? "" : undefined}
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
          ),
        )}
      </nav>
      {open && (
        <div className="fixed inset-x-3 bottom-16 z-50 rounded-md bg-brand-deep p-3 text-primary-foreground sportsbook-shadow lg:hidden">
          <div className="mb-3 flex items-center justify-between font-bold">
            Menu
            <Button
              aria-label="Close menu"
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
            >
              <X />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a href="/sports">Sports</a>
            <a href="/live">Live</a>
            <a href="/casino">Casino</a>
            <a href="/promotions">Promotions</a>
            <a href="/results">Results</a>
            <a href="/help">Support</a>
          </div>
        </div>
      )}
    </>
  );
}
