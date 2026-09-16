import { createFileRoute } from "@tanstack/react-router";
import { SEOPage, SEOPageBreadcrumb } from "../components/SEOPage";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "1xBET App — Download for Android & iOS | 1xBET India" },
      {
        name: "description",
        content:
          "Download the 1xBET India app for Android (APK) and iOS. Bet on sports, play casino games, deposit via UPI and get push notifications on the go.",
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
          { name: "Mobile App", url: "/app" },
        ]}
      />
      <SEOPage
        title="1xBET Mobile App"
        description="Download the 1xBET India app for Android and iOS"
        sections={[
          {
            heading: "Bet anywhere with the 1xBET app",
            body: (
              <p>
                The official 1xBET India app puts the full sportsbook,{" "}
                <a href="/live" className="text-brand underline">
                  live betting
                </a>
                ,{" "}
                <a href="/casino" className="text-brand underline">
                  casino
                </a>{" "}
                and{" "}
                <a href="/games" className="text-brand underline">
                  games
                </a>{" "}
                library in your pocket. It is faster than the mobile site, uses less data and keeps
                you logged in securely.
              </p>
            ),
          },
          {
            heading: "Download for Android (APK)",
            body: (
              <p>
                Download the Android APK directly from our{" "}
                <a href="/android" className="text-brand underline">
                  Android page
                </a>
                . The file is about 40 MB and requires Android 5.0 or later. Enable "install from
                unknown sources" once, install, log in and you are ready to bet.
              </p>
            ),
          },
          {
            heading: "Download for iOS",
            body: (
              <p>
                iPhone and iPad users can get the app via our{" "}
                <a href="/ios" className="text-brand underline">
                  iOS page
                </a>
                . It requires iOS 12 or later and supports Face ID login. No device? The{" "}
                <a href="/mobile" className="text-brand underline">
                  mobile website
                </a>{" "}
                offers the same features in any browser — see also{" "}
                <a href="/other-apps" className="text-brand underline">
                  other apps
                </a>
                .
              </p>
            ),
          },
          {
            heading: "App features",
            body: (
              <p>
                Live in-play betting with instant odds updates, push notifications for goals,
                wickets and results, one-tap deposits via{" "}
                <a href="/payments" className="text-brand underline">
                  UPI and e-wallets
                </a>
                , biometric login, bet history, cash out and 24/7 in-app support — everything from
                the desktop site, optimised for your phone.
              </p>
            ),
          },
        ]}
      />
    </>
  ),
});
