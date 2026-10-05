import { notFound } from "next/navigation";
import { products, getProduct, money } from "@/lib/products";
import AddToCart from "@/components/AddToCart";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="flex h-72 items-center justify-center rounded-2xl bg-stone-100 text-8xl">{p.emoji}</div>
      <div>
        <h1 className="text-3xl font-bold">{p.name}</h1>
        <p className="mt-2 text-2xl text-stone-700">{money(p.price)}</p>
        <p className="my-4 text-stone-600">{p.description}</p>
        <AddToCart id={p.id} full />
      </div>
    </div>
  );
}
