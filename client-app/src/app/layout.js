
import { Tenor_Sans } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Tenor_Sans({ subsets: ["latin"], weight:"400" });

export const metadata = {
  title: "Travellier",
  description: "Generated with love by Asim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    ></Link> */}
   
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
