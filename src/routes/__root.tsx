import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "1xBET India — Online Sports Betting, Live Casino & Cricket Betting" },
      {
        name: "description",
        content:
          "1xBET India — your premier destination for online sports betting, live casino games, cricket betting, esports and more. Place bets on live matches, enjoy 1xGames, and get exclusive bonuses.",
      },
      { name: "author", content: "1xBET" },
      { name: "google-site-verification", content: "ubhMdETu1c-wjXvHxR9f1ur3Or0GaaoXqa5tJSVDQ_I" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/" },
      { property: "og:site_name", content: "1xBET India" },
      { property: "og:image", content: "https://www.1xbetindia.live/assets/seo/og-sports.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@1xbetindia" },
      { name: "twitter:title", content: "1xBET India — Online Sports Betting" },
      {
        name: "twitter:description",
        content:
          "1xBET India — your premier destination for online sports betting, live casino games, cricket betting, esports and more.",
      },
      { name: "twitter:image", content: "https://www.1xbetindia.live/assets/seo/og-sports.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/assets/brand/logo-dark.svg", type: "image/svg+xml" },
      {
        rel: "preload",
        href: "/fonts/roboto-condensed-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.1xbetindia.live/#organization",
          name: "1xBET India",
          alternateName: "1xBET",
          url: "https://www.1xbetindia.live",
          logo: {
            "@type": "ImageObject",
            url: "https://www.1xbetindia.live/assets/brand/logo-dark.svg",
          },
          brand: { "@type": "Brand", name: "1xBET" },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-97023-08448",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://www.1xbetindia.live/#website",
          name: "1xBET India",
          publisher: { "@id": "https://www.1xbetindia.live/#organization" },
          url: "https://www.1xbetindia.live",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.1xbetindia.live/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.1xbetindia.live/",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function WhatsAppModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-lg bg-card p-6 text-center shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-foreground">Login Required</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Please login with a real ID to continue.
        </p>
        <a
          href="https://wa.link/ultra"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
        >
          Get ID on WhatsApp
        </a>
        <button
          onClick={onClose}
          className="mt-3 block w-full text-xs text-muted-foreground underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [modalOpen, setModalOpen] = useState(false);

  function handleClickCapture(e: React.MouseEvent) {
    const guard = (e.target as HTMLElement).closest("[data-guard]");
    if (guard) {
      e.preventDefault();
      e.stopPropagation();
      setModalOpen(true);
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div onClickCapture={handleClickCapture}>
        <Outlet />
      </div>
      <WhatsAppModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </QueryClientProvider>
  );
}
