import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cute Valentine 💘",
  description: "A playful and romantic Valentine website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
