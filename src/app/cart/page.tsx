"use client";
import Link from "next/link";
import { useCart } from "@/store/cart";
import { getProduct, money } from "@/lib/products";

export default function CartPage() {
  const { items, add, remove, clear } = useCart();
  const rows = Object.entries(items).flatMap(([id, qty]) => {
    const p = getProduct(id);
    return p ? [{ p, qty }] : [];
  });
  const total = rows.reduce((s, r) => s + r.p.price * r.qty, 0);

  if (rows.length === 0)
    return (
      <div className="py-16 text-center">
        <p className="mb-4 text-stone-600">Your cart is empty.</p>
        <Link href="/" className="rounded-lg bg-stone-900 px-4 py-2 text-white">Continue shopping</Link>
      </div>
    );

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Your cart</h1>
      <div className="divide-y rounded-xl border border-stone-200 bg-white">
        {rows.map(({ p, qty }) => (
          <div key={p.id} className="flex items-center justify-between gap-3 p-4">
            <div className="flex items-center gap-3"><span className="text-3xl">{p.emoji}</span><div><p className="font-semibold">{p.name}</p><p className="text-sm text-stone-500">{money(p.price)}</p></div></div>
            <div className="flex items-center gap-2">
              <button onClick={() => remove(p.id)} className="h-8 w-8 rounded border">−</button>
              <span className="w-6 text-center">{qty}</span>
              <button onClick={() => add(p.id)} className="h-8 w-8 rounded border">+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button onClick={clear} className="text-sm text-stone-500 underline">Clear cart</button>
        <p className="text-xl font-bold">Total: {money(total)}</p>
      </div>
    </div>
  );
}
