import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — 1xBET India" },
      {
        name: "description",
        content:
          "Learn about 1xBET India — a leading online sports betting and casino platform serving Indian players with competitive odds and fast payouts.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/about" }],
  }),
  component: () => (
    <SEOPage
      title="About 1xBET India"
      description="Learn about our sports betting platform"
      content={`
1xBET India is a premier online sports betting and casino platform serving players across India. We offer a comprehensive range of betting markets, casino games, and live dealer experiences.

Our mission is to provide Indian players with a secure, reliable, and entertaining online gaming experience. We are committed to responsible gaming and customer satisfaction.

Key features of 1xBET India:
- Wide range of sports betting markets
- Live in-play betting and streaming
- Extensive casino game collection
- Fast and secure payment methods
- 24/7 customer support
- Responsible gaming tools

Join thousands of Indian players who trust 1xBET India for their online betting needs.
      `}
    />
  ),
});
