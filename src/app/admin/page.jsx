"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

export default function AdminPage() {
  const initialForm = { brand: '', name: '', price: '', imageUrl: '', id: '' };
  const [form, setForm] = useState(initialForm);
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const payload = { ...form };
    if (!payload.price) return toast.error("Price is required!");
    const res = await fetch("/api/products", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(editingId ? "Product Updated!" : "Product Added!");
      if (editingId) {
        setProducts(products.map(p => p.id === data.id ? data : p));
      } else {
        setProducts([data, ...products]);
      }
      setForm(initialForm);
      setEditingId(null);
      setOpen(false);
    } else {
      toast.error("Error!");
    }
  }

  function handleEdit(product) {
    setForm(product);
    setEditingId(product.id);
    setOpen(true);
  }

  async function handleDelete(id) {
    const res = await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    if (res.ok) {
      setProducts(products.filter(p => p.id !== id));
      toast.success("Product Deleted!");
    } else {
      toast.error("Delete Failed!");
    }
  }

  function handleCancel() {
    setForm(initialForm);
    setEditingId(null);
    setOpen(false);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-gradient-to-br from-imperial-gold via-arctic-blue to-opulent-amethyst flex flex-col items-center py-10 px-2">
        <h2 className="text-4xl font-heading text-emerald-jewel font-extrabold drop-shadow mb-8">
          Admin Panel — Manage Attars
        </h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-imperial-gold hover:bg-emerald-jewel text-deep-sapphire font-bold rounded-xl shadow px-6 py-2 my-4">
              {editingId ? "Edit Attar" : "Add Attar"}
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-peach-skin border-2 border-opulent-amethyst shadow-2xl rounded-2xl max-w-md w-full">
            <DialogTitle className="mb-2">Attar Details</DialogTitle>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              <Input
                name="brand"
                value={form.brand}
                onChange={handleInput}
                placeholder="Brand"
                className="bg-white border-2 border-imperial-gold rounded text-lg font-bold"
                required
              />
              <Input
                name="name"
                value={form.name}
                onChange={handleInput}
                placeholder="Name"
                className="bg-white border-2 border-emerald-jewel rounded text-lg"
                required
              />
              {/* Only one price field now */}
              <Input
                name="price"
                type="number"
                value={form.price}
                onChange={handleInput}
                placeholder="Price"
                className="bg-white border-2 border-imperial-gold rounded text-lg"
                required
              />
              <Input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleInput}
                placeholder="Image URL"
                className="bg-white border-2 border-opulent-amethyst rounded text-lg"
                required
              />
              <div className="flex gap-3 mt-2">
                <Button type="submit" className="bg-emerald-jewel hover:bg-deep-sapphire text-white flex-1 rounded-xl font-bold">
                  {editingId ? "Update" : "Add"}
                </Button>
                {editingId && (
                  <Button type="button" className="flex-1 bg-arctic-blue hover:bg-noble-crimson text-deep-sapphire hover:text-white rounded-xl font-bold" onClick={handleCancel}>
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </DialogContent>
        </Dialog>
        <section className="w-full max-w-3xl grid gap-7 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {products.map(product => (
            <Card key={product.id} className="bg-silk-white border-l-4 border-imperial-gold shadow-xl rounded-2xl p-5 hover:scale-[1.013] transition-all">
              <div>
                <div className="font-heading text-2xl font-bold text-deep-sapphire mb-1 truncate">{product.brand}</div>
                <div className="text-opulent-amethyst font-semibold text-lg mb-1 truncate">{product.name}</div>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="my-2 w-full h-24 object-cover rounded-lg shadow"
                />
                {/* Only show one price now */}
                <div className="flex gap-3 mt-1 text-md items-center">
                  <span className="bg-imperial-gold text-emerald-jewel px-4 py-1 rounded-full shadow font-bold">
                    Price: ₹{product.price}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" className="flex-1 bg-emerald-jewel hover:bg-opulent-amethyst text-white font-semibold rounded-xl shadow" onClick={() => handleEdit(product)}>
                  Edit
                </Button>
                <Button size="sm" className="flex-1 bg-noble-crimson hover:bg-deep-sapphire text-white font-semibold rounded-xl shadow" onClick={() => handleDelete(product.id)}>
                  Remove
                </Button>
              </div>
            </Card>
          ))}
        </section>
      </main>
    </>
  );
}
