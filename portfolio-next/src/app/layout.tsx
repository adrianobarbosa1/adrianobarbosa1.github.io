import NavbarPortfolio from "@/components/NavbarPortfolio";
import { StateProvider } from "@/contexts/ContextProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adriano Barbosa",
  description: "Portfólio feito em Nextjs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <StateProvider>
          <NavbarPortfolio />
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
