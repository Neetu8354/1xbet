import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/ios")({
  head: () => ({
    meta: [
      { title: "iOS App — 1xBET India" },
      {
        name: "description",
        content:
          "Download the 1xBET India iOS app for iPhone and iPad. Bet on sports and play casino games on your Apple device.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/ios" }],
  }),
  component: () => (
    <SEOPage
      title="iOS App"
      description="Download the 1xBET India app for iOS"
      content={`
Download the 1xBET India app for iOS devices.

iOS app features:
- Optimised for iPhone and iPad
- Live betting and streaming
- Casino games on mobile
- Secure Touch ID login
- Push notifications

Download from the App Store.
      `}
    />
  ),
});
