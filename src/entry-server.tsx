// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" dir="ltr">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          
          {/* Security */}
          <meta http-equiv="X-Content-Type-Options" content="nosniff" />
          <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          
          {/* Icons & Manifest */}
          <link rel="icon" href="/scale-balanced.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/scale-balanced.svg" />
          <link rel="manifest" href="/manifest.json" />
          
          {/* Preconnect to external resources */}
          <link rel="preconnect" href="https://bandcamp.com" crossorigin="anonymous" />
          <link rel="dns-prefetch" href="https://bandcamp.com" />
          
          {/* Theme & PWA */}
          <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
          <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: light)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="Balanced Scale" />
          <meta name="mobile-web-app-capable" content="yes" />
          
          {/* Performance hints */}
          <meta name="format-detection" content="telephone=no" />
          
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-G44R3QY849"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G44R3QY849');
            `}
          </script>
          
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));

