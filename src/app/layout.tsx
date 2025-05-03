import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { SVGFilters } from "@/components/SVGFilters";
import { Footer } from "@/components/Footer";
import { createClient } from "@/prismicio";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  variable: "--font-bowlby-sc",
  display: "swap",
  weight: "400",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: "500",
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Shan Skateboard Site",
//   description: "Create your own skateboards",
// };

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title,
    description: settings.data.meta_description,
    openGraph: {
      images: settings.data.fallback_og_image.url ?? undefined,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-dm-mono font-medium text-zinc-800`}
      >
        <main>
          <Header />
          {children}
          <Footer />
        </main>
        <SVGFilters />
      </body>
    </html>
  );
}
