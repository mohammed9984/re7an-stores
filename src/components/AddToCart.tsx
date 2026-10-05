"use client";
import { useState } from "react";
import { useCart } from "@/store/cart";

export default function AddToCart({ id, full }: { id: string; full?: boolean }) {
  const add = useCart((s) => s.add);
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => { add(id); setDone(true); setTimeout(() => setDone(false), 1200); }}
      className={`rounded-lg bg-amber-400 px-4 py-2 font-semibold text-stone-900 transition hover:bg-amber-300 ${full ? "w-full py-3" : ""}`}
    >
      {done ? "Added ✓" : "Add to cart"}
    </button>
  );
}
