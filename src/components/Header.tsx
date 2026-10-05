"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cart";

export default function Header() {
  const count = useCart((s) => Object.values(s.items).reduce((a, b) => a + b, 0));
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">Re7an Store</Link>
        <Link href="/cart" className="relative flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm text-white">
          <ShoppingCart size={16} /> Cart
          {count > 0 && <span className="rounded-full bg-amber-400 px-2 text-xs font-semibold text-stone-900">{count}</span>}
        </Link>
      </div>
    </header>
  );
}
