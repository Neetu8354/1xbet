import { writeFileSync } from "node:fs";

const icons = {
  trophy: `<path d="M560 70h80v18h22v14c0 24-12 42-30 48-8 14-20 24-32 28v10h20v14h-80v-14h20v-10c-12-4-24-14-32-28-18-6-30-24-30-48V88h22z" fill="ACCENT"/>`,
  crosshair: `<g fill="none" stroke="ACCENT" stroke-width="8"><circle cx="600" cy="130" r="52"/><line x1="600" y1="58" x2="600" y2="88"/><line x1="600" y1="172" x2="600" y2="202"/><line x1="528" y1="130" x2="558" y2="130"/><line x1="642" y1="130" x2="672" y2="130"/></g><circle cx="600" cy="130" r="10" fill="ACCENT"/>`,
  chevron: `<path d="M600 190 L540 70 h28 l32 74 32-74 h28z" fill="ACCENT"/><path d="M600 120 L575 70 h18 l7 16 7-16 h18z" fill="ACCENT" opacity="0.6"/>`,
  rune: `<path d="M600 60 L660 150 L600 205 L540 150z" fill="ACCENT"/><circle cx="600" cy="150" r="18" fill="#071d42"/>`,
  crystal: `<path d="M600 55 L655 120 L600 205 L545 120z" fill="ACCENT"/><path d="M545 120 L600 132 L655 120" fill="none" stroke="#071d42" stroke-width="4"/><path d="M600 132 L600 205" stroke="#071d42" stroke-width="4"/>`,
  live: `<g fill="ACCENT"><rect x="540" y="120" width="14" height="70" rx="6"/><rect x="570" y="90" width="14" height="100" rx="6"/><rect x="600" y="60" width="14" height="130" rx="6"/><rect x="630" y="90" width="14" height="100" rx="6"/><rect x="660" y="120" width="14" height="70" rx="6"/></g>`,
};

const images = [
  {
    file: "esports-betting-india",
    title: "Esports Betting India",
    sub: "CS2 · Dota 2 · LoL · Valorant — Live Odds in INR",
    accent: "#a855f7",
    icon: "trophy",
  },
  {
    file: "cs2-betting-india",
    title: "CS2 Betting India",
    sub: "Counter-Strike 2 Majors, IEM & BLAST — Live Odds",
    accent: "#f59e0b",
    icon: "crosshair",
  },
  {
    file: "valorant-betting-india",
    title: "Valorant Betting India",
    sub: "VCT & Champions — Match, Map & Round Markets",
    accent: "#ff4655",
    icon: "chevron",
  },
  {
    file: "dota2-betting-india",
    title: "Dota 2 Betting India",
    sub: "The International & DPC — Live Tournament Odds",
    accent: "#ef4444",
    icon: "rune",
  },
  {
    file: "lol-betting-india",
    title: "LoL Betting India",
    sub: "Worlds, LCK, LPL & LEC — Match & Map Markets",
    accent: "#c8aa6e",
    icon: "crystal",
  },
  {
    file: "live-esports-betting",
    title: "Live Esports Betting",
    sub: "In-Play Odds on Every Map, Round & Kill",
    accent: "#22d3ee",
    icon: "live",
  },
  {
    file: "og-esports",
    title: "Esports Betting India",
    sub: "CS2 · Dota 2 · LoL · Valorant — Live Odds in INR",
    accent: "#a855f7",
    icon: "trophy",
    w: 1200,
    h: 630,
  },
  {
    file: "cricket-betting-india",
    title: "Cricket Betting India",
    sub: "IPL · T20 · ODI · Test — Live Cricket Odds in INR",
    accent: "#22c55e",
    icon: "trophy",
  },
  {
    file: "ipl-betting-india",
    title: "IPL Betting India",
    sub: "Indian Premier League — Match, Player & Outright Markets",
    accent: "#7c3aed",
    icon: "trophy",
  },
  {
    file: "live-cricket-betting",
    title: "Live Cricket Betting",
    sub: "Ball-by-Ball In-Play Odds on Every Over",
    accent: "#f97316",
    icon: "live",
  },
  {
    file: "og-cricket",
    title: "Cricket Betting India",
    sub: "IPL · T20 · ODI · Test — Live Cricket Odds in INR",
    accent: "#22c55e",
    icon: "trophy",
    w: 1200,
    h: 630,
  },
  {
    file: "tennis-betting-india",
    title: "Tennis Betting India",
    sub: "ATP · WTA · Grand Slams — Live Tennis Odds in INR",
    accent: "#84cc16",
    icon: "trophy",
  },
  {
    file: "live-tennis-betting",
    title: "Live Tennis Betting",
    sub: "Point-by-Point In-Play Odds on Every Match",
    accent: "#06b6d4",
    icon: "live",
  },
  {
    file: "og-tennis",
    title: "Tennis Betting India",
    sub: "ATP · WTA · Grand Slams — Live Tennis Odds in INR",
    accent: "#84cc16",
    icon: "trophy",
    w: 1200,
    h: 630,
  },
  {
    file: "basketball-betting-india",
    title: "Basketball Betting India",
    sub: "NBA · EuroLeague · International — Live Odds in INR",
    accent: "#f97316",
    icon: "trophy",
  },
  {
    file: "live-basketball-betting",
    title: "Live Basketball Betting",
    sub: "Quarter-by-Quarter In-Play Odds on Every Game",
    accent: "#38bdf8",
    icon: "live",
  },
  {
    file: "og-basketball",
    title: "Basketball Betting India",
    sub: "NBA · EuroLeague · International — Live Odds in INR",
    accent: "#f97316",
    icon: "trophy",
    w: 1200,
    h: 630,
  },
  {
    file: "ice-hockey-betting-india",
    title: "Ice Hockey Betting India",
    sub: "NHL · KHL · IIHF Worlds — Puck Line & Totals in INR",
    accent: "#7dd3fc",
    icon: "trophy",
  },
  {
    file: "live-ice-hockey-betting",
    title: "Live Ice Hockey Betting",
    sub: "Period-by-Period In-Play Odds on Every Game",
    accent: "#38bdf8",
    icon: "live",
  },
  {
    file: "og-ice-hockey",
    title: "Ice Hockey Betting India",
    sub: "NHL · KHL · IIHF Worlds — Puck Line & Totals in INR",
    accent: "#7dd3fc",
    icon: "trophy",
    w: 1200,
    h: 630,
  },
];

const esc = (s) => s.replace(/&/g, "&amp;");

const svg = ({
  title,
  sub,
  accent,
  icon,
  w = 1200,
  h = 500,
}) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1030"/>
      <stop offset="1" stop-color="#14224f"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.35"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <g stroke="${accent}" stroke-opacity="0.25" fill="none" stroke-width="2">
    <path d="M0 ${h - 80} L${w} ${h - 80}"/>
    <path d="M0 ${h - 70} L${w} ${h - 70}" stroke-dasharray="6 10"/>
    <circle cx="600" cy="140" r="120"/>
    <circle cx="600" cy="140" r="160" stroke-dasharray="4 12"/>
  </g>
  <rect x="440" y="30" width="320" height="240" fill="url(#glow)"/>
  ${icons[icon].replace(/ACCENT/g, accent)}
  <rect x="60" y="60" width="190" height="44" rx="8" fill="${accent}"/>
  <text x="155" y="90" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#ffffff">1xBET</text>
  <text x="60" y="330" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700" fill="#ffffff">${esc(title)}</text>
  <text x="60" y="385" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#a9c4ff">${esc(sub)}</text>
  <rect x="60" y="415" width="200" height="50" rx="8" fill="#28a745"/>
  <text x="160" y="448" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#ffffff">BET NOW</text>
</svg>`;

for (const img of images) {
  writeFileSync(`public/assets/seo/${img.file}.svg`, svg(img));
  console.log(`wrote ${img.file}.svg`);
}
