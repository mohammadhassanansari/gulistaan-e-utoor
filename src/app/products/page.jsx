export const dynamic = "force-dynamic";

import prisma from "../../lib/prisma";
import Header from "@/components/Header";
import ProductCard from "../../components/ProductCard";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <Header />
 <main className="min-h-screen pb-10 bg-gradient-to-br from-deep-sapphire via-opulent-amethyst to-imperial-gold">
  <section className="container mx-auto py-12">
   <h2
  className="text-5xl md:text-6xl lg:text-8xl font-heading font-extrabold uppercase tracking-wider
    text-opulent-amethyst drop-shadow-lg mb-10 text-center"
>
  All Attars
</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
</main>
    </>
  );
}
