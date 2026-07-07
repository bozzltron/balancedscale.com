// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" dir="ltr">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />

          {/* Security */}
          <meta name="x-content-type-options" content="nosniff" />
          <meta name="x-frame-options" content="SAMEORIGIN" />
          <meta
            name="referrer"
            content="strict-origin-when-cross-origin"
          />

          {/* Icons & Manifest */}
          <link rel="icon" href="/scale-balanced.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/scale-balanced.svg" />
          <link rel="manifest" href="/manifest.json" />

          {/* Theme */}
          <meta
            name="theme-color"
            content="#121212"
            media="(prefers-color-scheme: dark)"
          />
          <meta
            name="theme-color"
            content="#121212"
            media="(prefers-color-scheme: light)"
          />

          {/* Performance hints */}
          <meta name="format-detection" content="telephone=no" />

          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-G44R3QY849"
          ></script>
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
