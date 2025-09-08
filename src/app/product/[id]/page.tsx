"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-semibold">
            <Link href="/shop">
              Back to Shop
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => 
    p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Breadcrumb */}
      <nav className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-yellow-600 transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x600?text=${encodeURIComponent(product.name)}`;
                  }}
                />
              </div>
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <span className="text-white font-bold text-2xl">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-4">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 mb-4">
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
                  {product.name}
                </h1>
                <div className="flex items-center mb-6">
                  <span className="text-4xl font-bold text-yellow-700">
                    ${product.price}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                    Premium quality ingredients
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                    Long-lasting fragrance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                    Elegant packaging
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                    Authentic Arabian blend
                  </li>
                </ul>
              </div>

              {/* Quantity and Add to Cart */}
              {product.inStock && (
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <label htmlFor="quantity" className="text-lg font-semibold text-gray-900">
                      Quantity:
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleAddToCart}
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-semibold py-3 text-lg"
                    >
                      Add to Cart - ${(product.price * quantity).toFixed(2)}
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black font-semibold py-3"
                    >
                      <Link href="/cart">
                        View Cart
                      </Link>
                    </Button>
                  </div>
                </div>
              )}

              {!product.inStock && (
                <div className="mb-8">
                  <Button
                    disabled
                    size="lg"
                    className="w-full bg-gray-400 cursor-not-allowed text-gray-600 py-3 text-lg"
                  >
                    Out of Stock
                  </Button>
                </div>
              )}

              {/* Additional Info */}
              <div className="border-t border-gray-200 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">Category:</span> {product.category}
                  </div>
                  <div>
                    <span className="font-semibold">Availability:</span> {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                  <div>
                    <span className="font-semibold">SKU:</span> ALF-{product.id.padStart(3, '0')}
                  </div>
                  <div>
                    <span className="font-semibold">Brand:</span> Al Fazl Perfumes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-playfair">
              Related <span className="text-yellow-700">Products</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
