import { createFileRoute } from "@tanstack/react-router";
import { SEOPage } from "../components/SEOPage";

export const Route = createFileRoute("/android")({
  head: () => ({
    meta: [
      { title: "Android App — 1xBET India" },
      {
        name: "description",
        content:
          "Download the 1xBET India Android app. Bet on sports and play casino games on your Android device.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/android/" }],
  }),
  component: () => (
    <SEOPage
      title="Android App"
      description="Download the 1xBET India app for Android"
      content={`
Download the 1xBET India app for Android devices.

Android app features:
- Optimised for all Android phones and tablets
- Live betting and streaming
- Casino games on mobile
- Fast and secure login
- Push notifications

Download from Google Play Store.
      `}
    />
  ),
});
