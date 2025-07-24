"use client";

import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Make sure to install react-icons

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-deep-sapphire text-silk-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand & desktop nav */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="font-heading text-3xl tracking-wider text-imperial-gold font-extrabold hover:text-noble-crimson transition"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Gulistaan-e-Utoor
              </Link>
              <div className="hidden md:flex items-center gap-6 font-semibold text-lg">
                <Link href="/products" className="hover:text-imperial-gold transition">
                  Products
                </Link>
                <a href="#contact" className="hover:text-imperial-gold transition">
                  Contact
                </a>
              </div>
            </div>
            {/* Desktop: Auth/Account */}
            <div className="hidden md:flex items-center gap-3">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-imperial-gold text-deep-sapphire rounded-md px-5 py-2 font-semibold hover:bg-noble-crimson hover:text-silk-white transition">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-opulent-amethyst text-silk-white rounded-md px-5 py-2 font-semibold hover:bg-deep-sapphire transition ml-2">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="text-imperial-gold hover:text-noble-crimson focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-imperial-gold"
              >
                {mobileMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-deep-sapphire px-6 pb-4 border-t border-imperial-gold z-50">
            <div className="flex flex-col gap-4 font-semibold text-lg pt-4">
              <Link href="/products" className="hover:text-imperial-gold transition" onClick={() => setMobileMenuOpen(false)}>
                Products
              </Link>
              <a href="#contact" className="bg-blue-700 hover:text-imperial-gold transition" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-blue-700 bg-imperial-gold text-deep-sapphire rounded-md px-5 py-2 font-semibold hover:bg-noble-crimson hover:text-silk-white transition">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-opulent-amethyst text-silk-white rounded-md px-5 py-2 font-semibold hover:bg-deep-sapphire transition mt-2">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
