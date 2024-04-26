import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import locaFont from "next/font/local";
import "./globals.css";
import { cn } from "./lib/utils";
import GrainEffect from "./components/visualEffects/grain-effects";
import { Cursor } from "./components/cursor/cursor";

const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswardFont = Oswald({ subsets: ["latin"], variable: "--font-osward" });
const PixelFont = locaFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-oswald",
});
//metadata
export const metadata: Metadata = {
  title: "Mario Di Stefano",
  description: "official Portfolio of Mario DiStefano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          MainFont.className,
          OswardFont.variable,
          PixelFont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
