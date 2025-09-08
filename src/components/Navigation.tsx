"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg border-b border-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">
              Al Fazl Perfumes
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium">
              Contact
            </Link>
            <Link href="/cart" className="relative text-white hover:text-yellow-400 transition-colors duration-200 font-medium">
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/cart"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium relative"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
                {totalItems > 0 && (
                  <span className="ml-2 bg-yellow-600 text-black text-xs rounded-full px-2 py-1 font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
