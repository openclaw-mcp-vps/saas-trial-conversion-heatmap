import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeatMap.saas – Visual Trial Conversion Heatmaps",
  description: "Track which features trial users engage with. Visual heatmaps to predict conversion likelihood for SaaS founders and product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="89791dd5-caad-40f2-9583-174def5d4062"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
