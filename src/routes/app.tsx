import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "1xBET App — Download for Android & iOS | 1xBET India" },
      {
        name: "description",
        content:
          "Download the 1xBET India app for Android (APK) and iOS. Bet on sports, play casino games and manage your account on the go.",
      },
      { property: "og:title", content: "1xBET App — Download for Android & iOS" },
      {
        property: "og:description",
        content: "Download the 1xBET India app for Android and iOS devices.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.1xbetindia.live/app" },
    ],
    links: [{ rel: "canonical", href: "https://www.1xbetindia.live/app" }],
  }),
  component: () => (
    <>
      <SEOPageBreadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "App", url: "/app" },
        ]}
      />
      <SEOPage
        title="1xBET Mobile App"
        description="Download the 1xBET India app for Android and iOS"
        content={`
Bet anytime, anywhere with the official 1xBET India mobile app. The app gives you full access to the sportsbook, live betting, casino games and account management in a fast, lightweight package.

Available platforms:
- Android: download the APK directly from our website
- iOS: available for iPhone and iPad
- Mobile web: no download required — works in any browser

App features:
- Live in-play betting with real-time odds updates
- Instant deposits and withdrawals via UPI and e-wallets
- Push notifications for match results and promotions
- Full casino and 1xGames library
- Secure biometric login

System requirements: Android 5.0+ or iOS 12+. The APK is approximately 40 MB.
        `}
      />
    </>
  ),
});
