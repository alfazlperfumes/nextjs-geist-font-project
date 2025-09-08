"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CartPage() {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any fragrances to your cart yet. 
            Discover our exquisite collection of Arabian perfumes.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-semibold">
            <Link href="/shop">
              Start Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 font-playfair">
            Shopping <span className="text-yellow-400">Cart</span>
          </h1>
          <p className="text-xl text-gray-300">
            Review your selected fragrances before checkout
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Cart Items ({state.items.length})
                </h2>
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Clear Cart
                </Button>
              </div>

              <div className="space-y-4">
                {state.items.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://placehold.co/200x200?text=${encodeURIComponent(item.name)}`;
                            }}
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div className="mb-4 sm:mb-0">
                              <Link
                                href={`/product/${item.id}`}
                                className="text-lg font-semibold text-gray-900 hover:text-yellow-700 transition-colors"
                              >
                                {item.name}
                              </Link>
                              <p className="text-gray-600 text-sm mt-1">
                                Category: {item.category}
                              </p>
                              <p className="text-lg font-bold text-yellow-700 mt-2">
                                ${item.price}
                              </p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="px-3 py-1 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                  -
                                </button>
                                <span className="px-3 py-1 border-x border-gray-300 min-w-[50px] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-3 py-1 text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                  +
                                </button>
                              </div>

                              <Button
                                onClick={() => removeFromCart(item.id)}
                                variant="outline"
                                size="sm"
                                className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                              >
                                Remove
                              </Button>
                            </div>
                          </div>

                          {/* Item Total */}
                          <div className="mt-4 text-right">
                            <span className="text-lg font-semibold text-gray-900">
                              Subtotal: ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-semibold">${state.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping:</span>
                      <span className="font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax:</span>
                      <span className="font-semibold">${(state.total * 0.08).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-yellow-700">${(state.total * 1.08).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-semibold"
                    >
                      Proceed to Checkout
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black"
                    >
                      <Link href="/shop">
                        Continue Shopping
                      </Link>
                    </Button>
                  </div>

                  {/* Security Badge */}
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span>Secure Checkout</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
            Complete Your <span className="text-yellow-700">Collection</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Discover more exquisite fragrances that complement your selection
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-semibold">
            <Link href="/shop">
              Explore More Products
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
