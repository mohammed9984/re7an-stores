import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Re7an Store",
  description: "Quality products at great prices.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="py-8 text-center text-sm text-stone-500">© Re7an Store</footer>
      </body>
    </html>
  );
}
