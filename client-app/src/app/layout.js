import { Tenor_Sans } from "next/font/google";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Tenor_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Travellier",
  description: "Generated with love by Asim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
