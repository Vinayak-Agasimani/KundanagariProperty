import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kundanagari Properties | Buy Sell Rent in Belgaum",
  description: "Kundanagari Properties helps you buy, sell, rent, and invest in residential and commercial properties in Belgaum with trusted local expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
