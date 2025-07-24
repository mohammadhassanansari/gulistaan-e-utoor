import prisma from "../../lib/prisma";
import Header from "@/components/Header";
import ProductCard from "../../components/ProductCard";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <Header />
      <main className="bg-silk-white min-h-screen pb-10">
        <section className="container mx-auto py-12">
          <h2 className="text-4xl font-heading text-deep-sapphire text-center mb-8">All Attars</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
