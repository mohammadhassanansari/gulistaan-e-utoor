"use client";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const price = product.price ?? product.price3ml ?? product.price6ml ?? "—";

  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -10 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative group w-full max-w-xs px-8 pb-10 pt-8 mx-auto overflow-hidden
        rounded-3xl shadow-2xl flex flex-col items-center bg-white/70 backdrop-blur-lg border border-imperial-gold
        hover:border-noble-crimson transition-all duration-500"
    >
      {/* --- ANIMATED, ABSTRACT COLORFUL BACKGROUND EFFECT --- */}
      <span className="pointer-events-none absolute -top-14 -left-20 w-60 h-60 bg-gradient-to-tr
        from-opulent-amethyst/50 via-imperial-gold/80 to-peach-skin/30 blur-2xl opacity-40 group-hover:scale-110
        rotate-12 animate-spin-slow" />

      {/* Color shine overlay */}
      <span className="pointer-events-none absolute bottom-0 right-0 w-40 h-32 
        bg-gradient-to-bl from-emerald-jewel/70 to-arctic-blue/40 via-peach-skin/0 opacity-60 blur-3xl
        group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />

      {/* Product Image with shine and pop */}
      <div className="relative z-10 w-36 h-36 mb-3 flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-32 h-32 rounded-[1.25rem] shadow-xl border-4 border-imperial-gold object-cover
            transition-transform duration-400 group-hover:scale-110 group-hover:rotate-[3deg]"
          style={{ background: "#faf8f6" }}
        />
        {/* Glass surface shine overlay */}
        <span className="absolute top-0 left-2 w-20 h-6 bg-white/30 rounded-full blur-sm opacity-60 pointer-events-none
          rotate-12" />
      </div>

      {/* Brand and Attar Name */}
      <h2 className="font-heading text-xl md:text-2xl text-deep-sapphire mt-2 font-extrabold uppercase tracking-wide text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        {product.brand}
      </h2>
      <p className="text-opulent-amethyst font-bold text-lg md:text-xl text-center mb-2 drop-shadow-[0_1px_2px_rgba(130,79,245,0.1)]">
        {product.name}
      </p>

      {/* Price Badge, glowing and floating */}
      <motion.div
        initial={{ scale: 1, boxShadow: "0 4px 20px 0 rgba(36,180,126,0.1)" }}
        whileHover={{
          scale: 1.10,
          boxShadow: "0 6px 40px 0 rgba(255,215,0,0.18)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 23 }}
        className="my-5"
      >
        <span className="inline-block px-10 py-2 rounded-xl text-lg font-extrabold shadow-sm
          bg-gradient-to-r from-imperial-gold via-peach-skin to-opulent-amethyst text-deep-sapphire border border-emerald-jewel
          tracking-wider ring-2 ring-imperial-gold/40 drop-shadow">
          ₹{price}
        </span>
      </motion.div>

      {/* Action Button */}
      <a
        href={`https://wa.me/7263992496?text=${encodeURIComponent(
          `Hi, I want the ${product.brand} ${product.name} attar, for ₹${price}`
        )}`}
        target="_blank"
        rel="noopener"
        className="mt-3 w-full block text-center
          bg-gradient-to-tr from-emerald-jewel via-arctic-blue to-imperial-gold
          hover:from-noble-crimson hover:to-opulent-amethyst
          text-white font-bold py-3 px-6 rounded-2xl shadow-lg ring-1 ring-imperial-gold/30
          transition-all duration-200 tracking-wider text-lg hover:scale-105"
      >
        Buy on WhatsApp
      </a>
    </motion.div>
  );
}
