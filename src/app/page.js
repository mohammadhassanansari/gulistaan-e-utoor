"use client";

import { motion } from "framer-motion";
import Header from '@/components/Header';
import ProductCard from '../components/ProductCard';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  // Demo products; add more as needed, or later fetch from DB
  const mockProducts = [
    {
      id: "1",
      brand: "ajmal",
      name: "ARISTOCRAT COASTAL Perfume 75ML for Men",
      price3ml: 800,
      price6ml: 1500,
      imageUrl: "https://in.ajmal.com/cdn/shop/files/ARISTOCRAT_COASTAL_75ML_1.jpg?v=1728563072",
    },
    {
      id: "2",
      brand: "Ajmal",
      name: "Wisal Dhahab Perfume 50ml & Wisal Dhabab Perfume Deodorant 200ml Gift For Men",
      price3ml: 950,
      price6ml: 1800,
      imageUrl: "https://in.ajmal.com/cdn/shop/files/WISALDHAHAB_EDP_DEO_2d771b6a-9162-4d32-805a-0292a6e491f2.jpg?v=1750680164",
    },
    {
      id: "3",
      brand: "Ajmal",
      name: "JANNATUL FIRDAUS Non-Alcoholic Attar 10ML for Unisex",
      price3ml: 750,
      price6ml: 1300,
      imageUrl: "https://in.ajmal.com/cdn/shop/files/JANNATULFIRDAUS_CONCENTRATRED_10ML_1.png?v=1746422459",
    },
    {
      id: "4",
      brand: "Ajmal",
      name: "MAJMUA Non-Alcoholic Attar 10ML for Unisex",
      price3ml: 750,
      price6ml: 1300,
      imageUrl: "https://in.ajmal.com/cdn/shop/files/MAJMUA_CONCENTRATED_10ML_1.jpg?v=1719382430",
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-silk-white min-h-screen pb-10 flex flex-col">
        {/* Animated Welcome/Hero */}
        <section className="flex flex-col items-center justify-center min-h-[68vh] w-full bg-gradient-to-br from-deep-sapphire to-opulent-amethyst px-2 md:px-0">
          <motion.h1
            className="font-heading text-4xl md:text-5xl text-imperial-gold mb-5 mt-12 drop-shadow text-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <span className="text-noble-crimson">Gulistaan-e-Utoor</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-xl text-silk-white text-center mb-8 font-medium drop-shadow"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Experience Royal Attars & Handpicked Perfumes.<br />
            Luxury. Tradition. Memories, bottled just for you. <br/>
            Owner : Azhar Shaikh
          </motion.p>
          <motion.a
            href="#collection"
            className="bg-imperial-gold text-deep-sapphire font-bold px-8 py-3 rounded-full text-lg shadow-xl hover:bg-noble-crimson hover:text-silk-white transition"
            whileHover={{ scale: 1.07 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            View Collection
          </motion.a>
        </section>

        {/* Product Cards Grid */}
        <section id="collection" className="container mx-auto py-12 px-2">
          <h3 className="text-2xl md:text-3xl font-heading text-deep-sapphire text-center mb-8">
            Our Premium Attars
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {mockProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-opulent-amethyst py-10 rounded-xl shadow-inner max-w-2xl mx-auto mt-12 px-6 sm:px-10">
          <h2 className="font-heading text-2xl md:text-3xl text-deep-sapphire mb-3 text-center">
            Contact Us
          </h2>
          <div className="text-center text-lg text-graphite-black">
            <p>
              Email: <a href="mailto:info@gulistaan.com" className="text-imperial-gold underline">gulistaaneutoor0786@gmail.com</a>
            </p>
            <p>
              WhatsApp: <span className="text-imperial-gold font-semibold">+917263992496</span>
            </p>
            <p>
              Address: BHIWANDI, Mumbai, India
            </p>
          </div>
        </section>

        {/* COPYRIGHT FOOTER */}
       
      </main>
       <footer className="mt-auto bg-deep-sapphire text-silk-white text-center py-4 text-sm font-semibold select-none">
          &copy; {new Date().getFullYear()} Gulistaan-e-Utoor. All rights reserved.
        </footer>
    </>
  );
}
