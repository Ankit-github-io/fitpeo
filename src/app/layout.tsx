import type { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/react";
import clsx from "clsx";
import "./globals.css";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import VerticalNav from "@/components/VerticalNav";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          `${fontSans.variable}`,
          "min-h-screen bg-default-50 font-sans antialiased"
        )}
      >
        <Providers
          themeProps={{ children, attribute: "class", defaultTheme: "dark" }}
        >
          <div className="sm:flex sm:flex-col md:flex-row">
            <VerticalNav />
            <div className="relative sm:flex sm:flex-col sm:h-screen sm:basis-full">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-4 px-4 flex-grow bg-foreground-400 ">
                {children}
              </main>
              <footer className="w-full flex items-center justify-center py-3 bg-default-50">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="/"
                  title="homepage"
                >
                  <span className="text-default-600">Powered by</span>
                  <p className="text-primary">Ankit</p>
                </Link>
              </footer>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
