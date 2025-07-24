"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

export default function ProductCard({ product }) {
  const [size, setSize] = useState("3ml");
  const price = size === "3ml" ? product.price3ml : product.price6ml;

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -8 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      <Card className="bg-silk-white border-2 border-imperial-gold shadow-2xl rounded-2xl p-6 flex flex-col items-center max-w-xs mx-auto">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-28 h-28 rounded-full shadow-xl border-4 border-imperial-gold object-cover"
        />
        <div className="font-heading text-lg text-deep-sapphire tracking-wide mt-4 font-bold uppercase">{product.brand}</div>
        <div className="text-opulent-amethyst font-extrabold text-xl mb-1">{product.name}</div>
        <div className="flex items-center mt-2 w-full gap-2">
          <Label htmlFor={`size-${product.id}`} className="text-emerald-jewel font-bold">
            Size:
          </Label>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger
              id={`size-${product.id}`}
              className="w-[88px] text-center border-imperial-gold rounded-lg bg-peach-skin text-noble-crimson font-bold"
            />
            <SelectContent className="z-30 rounded-2xl bg-silk-white border-imperial-gold text-deep-sapphire font-bold">
              <SelectItem value="3ml">3ml - ₹{product.price3ml}</SelectItem>
              <SelectItem value="6ml">6ml - ₹{product.price6ml}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-3 text-lg text-graphite-black font-semibold">
          <span className="bg-imperial-gold/95 text-deep-sapphire px-4 py-1.5 rounded-2xl shadow">
            ₹{price}
          </span>
        </div>
        <Button
          asChild
          className="mt-5 w-full font-heading font-bold rounded-xl bg-emerald-jewel text-silk-white hover:bg-imperial-gold hover:text-deep-sapphire text-lg py-2 shadow-xl transition"
        >
          <a
            href={`https://wa.me/7263992496?text=${encodeURIComponent(`Hi, I want the ${product.brand} ${product.name} attar, size: ${size}, for ₹${price}`)}`}
            target="_blank"
            rel="noopener"
          >
            Buy on WhatsApp
          </a>
        </Button>
      </Card>
    </motion.div>
  );
}
