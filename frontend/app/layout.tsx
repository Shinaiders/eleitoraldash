import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DadosVotoContext } from "@/context/votar";
import { Typebot } from "@/components/typebot/typebot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Votação Popular",
  description: "Sistema para medir a votação de 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <DadosVotoContext>
          {children}
          <Typebot />
        </DadosVotoContext>
      </body>
    </html>
  );
}
