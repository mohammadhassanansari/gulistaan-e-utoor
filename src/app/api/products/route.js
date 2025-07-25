import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Get all products
export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(products);
}

// Add product
export async function POST(req) {
  const data = await req.json();
  const { brand, name, price3ml, price6ml, imageUrl } = data;
  const product = await prisma.product.create({
    data: { brand, name, price3ml: Number(price3ml), price6ml: Number(price6ml), imageUrl }
  });
  // ✅ Revalidate all product pages after add
  revalidatePath("/products");
  revalidatePath("/"); // If home page also needs update
  return NextResponse.json(product, { status: 201 });
}

// Edit product
export async function PUT(req) {
  const data = await req.json();
  const { id, brand, name, price3ml, price6ml, imageUrl } = data;
  const updated = await prisma.product.update({
    where: { id },
    data: { brand, name, price3ml: Number(price3ml), price6ml: Number(price6ml), imageUrl }
  });
  // ✅ Revalidate product pages after edit
  revalidatePath("/products");
  revalidatePath("/");
  return NextResponse.json(updated, { status: 200 });
}

// Delete product
export async function DELETE(req) {
  const { id } = await req.json();
  await prisma.product.delete({ where: { id } });
  // ✅ Revalidate product pages after delete
  revalidatePath("/products");
  revalidatePath("/");
  return new NextResponse(null, { status: 204 });
}
