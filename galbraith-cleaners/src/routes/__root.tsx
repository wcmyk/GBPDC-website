import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

const TITLE = "Galbraith Professional Cleaners | Deer Park, Cincinnati";
const DESCRIPTION =
  "Family run dry cleaning, shirt laundry and alterations at 4041 East Galbraith Road in Deer Park, Cincinnati. Careful stain and restoration work. Call (513) 793-8300.";
const OG_IMAGE = "/assets/brand/og.jpg";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#071710" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { href: "/assets/brand/icon-192.png", rel: "icon", sizes: "192x192", type: "image/png" },
      { rel: "apple-touch-icon", href: "/assets/brand/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
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
