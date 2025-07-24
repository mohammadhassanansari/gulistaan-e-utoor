import prisma from "@/lib/prisma";

// Get all products
export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return Response.json(products);
}

// Add product
export async function POST(req) {
  const data = await req.json();
  const { brand, name, price3ml, price6ml, imageUrl } = data;
  const product = await prisma.product.create({
    data: { brand, name, price3ml: Number(price3ml), price6ml: Number(price6ml), imageUrl }
  });
  return Response.json(product, { status: 201 });
}

// Edit product
export async function PUT(req) {
  const data = await req.json();
  const { id, brand, name, price3ml, price6ml, imageUrl } = data;
  const updated = await prisma.product.update({
    where: { id },
    data: { brand, name, price3ml: Number(price3ml), price6ml: Number(price6ml), imageUrl }
  });
  return Response.json(updated, { status: 200 });
}

// Delete product
export async function DELETE(req) {
  const { id } = await req.json();
  await prisma.product.delete({ where: { id } });
  return new Response(null, { status: 204 });
}
