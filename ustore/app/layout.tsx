import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { HeroNavbar } from "@/components/navbar/HeroNavbar";
import { HeroFooter } from "@/components/footer/HeroFooter";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
    title: "UStore E-commerce",
    description: "Compre seus Produtos no UStore E-commerce!",
    openGraph: {
        title: "UStore E-commerce",
        description: "Compre seus Produtos no UStore E-commerce!",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
}
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AuthProvider>
          <CartProvider>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col min-h-screen">
              <HeroNavbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                {children}
              </main>
              <HeroFooter />
            </div>
          </Providers>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
