import { Link } from "@tanstack/react-router";

const SITE_URL = "https://www.1xbetindia.live";

export function SEOPage({
  title,
  description,
  content,
  children,
}: {
  title: string;
  description: string;
  content: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-6 lg:py-8">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span>{title}</span>
      </nav>

      <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{title}</h1>
      <p className="mt-2 text-base text-muted-foreground lg:text-lg">{description}</p>

      <div className="mt-6 whitespace-pre-line text-sm leading-7 text-foreground">{content}</div>

      {children}

      <div className="mt-8 rounded-md border bg-muted/50 p-4">
        <h2 className="mb-2 font-semibold">Quick links</h2>
        <nav className="flex flex-wrap gap-2 text-sm">
          <Link to="/sports" className="text-brand underline hover:no-underline">
            Sports
          </Link>
          <Link to="/live" className="text-brand underline hover:no-underline">
            Live Betting
          </Link>
          <Link to="/casino" className="text-brand underline hover:no-underline">
            Casino
          </Link>
          <Link to="/esports" className="text-brand underline hover:no-underline">
            Esports
          </Link>
          <Link to="/responsible-gaming" className="text-brand underline hover:no-underline">
            Responsible Gaming
          </Link>
        </nav>
      </div>

      <div className="mt-8 border-t pt-6">
        <Link to="/" className="text-brand underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}

export function SEOPageBreadcrumb({ items }: { items: { name: string; url: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
          })),
        }),
      }}
    />
  );
}
