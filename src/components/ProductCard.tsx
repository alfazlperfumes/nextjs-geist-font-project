"use client";

import React from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock) {
      addToCart(product);
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-gray-50 border-2 border-gray-200 hover:border-yellow-400 overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/400x400?text=${encodeURIComponent(product.name)}`;
            }}
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
          <div className="absolute top-4 right-4 bg-yellow-600 text-black px-2 py-1 rounded-full text-sm font-bold">
            {product.category}
          </div>
        </div>
      </Link>
      
      <CardContent className="p-6">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-yellow-700">
              ${product.price}
            </span>
          </div>
        </Link>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full font-semibold transition-all duration-200 ${
            product.inStock
              ? 'bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black'
              : 'bg-gray-400 cursor-not-allowed text-gray-600'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
