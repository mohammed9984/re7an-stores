import Link from "next/link";
import { products, money } from "@/lib/products";
import AddToCart from "@/components/AddToCart";

export default function Home() {
  return (
    <>
      <section className="mb-10 rounded-2xl bg-stone-900 p-10 text-white">
        <h1 className="text-3xl font-bold sm:text-4xl">Welcome to Re7an Store</h1>
        <p className="mt-2 text-stone-300">Quality products, simple shopping.</p>
      </section>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="rounded-xl border border-stone-200 bg-white p-4">
            <Link href={`/product/${p.id}`}>
              <div className="flex h-32 items-center justify-center rounded-lg bg-stone-100 text-5xl">{p.emoji}</div>
              <h2 className="mt-3 font-semibold">{p.name}</h2>
            </Link>
            <p className="mb-3 text-stone-600">{money(p.price)}</p>
            <AddToCart id={p.id} />
          </div>
        ))}
      </div>
    </>
  );
}
