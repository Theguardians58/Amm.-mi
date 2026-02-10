import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ammi's Kachhi | Pyaar se comfort",
  description:
    "Ammi's Kachhi is a women-safe, privacy-first lingerie showcase for Indian women 30+, focused on comfort, dignity, and confidence.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
