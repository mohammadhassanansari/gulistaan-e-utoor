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
  const { brand, name, price, imageUrl } = data; // Only single price field now
  const product = await prisma.product.create({
    data: { brand, name, price: Number(price), imageUrl }
  });
  revalidatePath("/products");
  revalidatePath("/"); // Also update home if needed
  return NextResponse.json(product, { status: 201 });
}

// Edit product
export async function PUT(req) {
  const data = await req.json();
  const { id, brand, name, price, imageUrl } = data; // Only single price field now
  const updated = await prisma.product.update({
    where: { id },
    data: { brand, name, price: Number(price), imageUrl }
  });
  revalidatePath("/products");
  revalidatePath("/");
  return NextResponse.json(updated, { status: 200 });
}

// Delete product
export async function DELETE(req) {
  const { id } = await req.json();
  await prisma.product.delete({ where: { id } });
  revalidatePath("/products");
  revalidatePath("/");
  return new NextResponse(null, { status: 204 });
}
