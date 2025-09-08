import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://placehold.co/1920x1080?text=Luxury+Arabian+Perfume+Collection+Elegant+Bottles+Golden+Accents')`
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">
              Al Fazl Perfumes
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 font-light">
            Where Tradition Meets Luxury
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Discover the essence of Arabian heritage through our exquisite collection of premium fragrances, 
            crafted with the finest ingredients and centuries-old traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-semibold px-8 py-3 text-lg">
              <Link href="/shop">
                Explore Collection
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-3 text-lg">
              <Link href="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Featured <span className="text-yellow-700">Fragrances</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved scents, each telling a unique story of elegance and sophistication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-semibold px-8 py-3">
              <Link href="/shop">
                View All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-playfair">
                The Art of <span className="text-yellow-400">Perfumery</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                For generations, Al Fazl Perfumes has been crafting exceptional fragrances that capture 
                the essence of Arabian luxury. Our master perfumers blend traditional techniques with 
                modern innovation to create scents that are both timeless and contemporary.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Each bottle represents our commitment to quality, using only the finest ingredients 
                sourced from around the world. From precious oud to delicate rose petals, every 
                element is carefully selected to ensure an unforgettable olfactory experience.
              </p>
              <Button asChild variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold">
                <Link href="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x400?text=Master+Perfumer+Crafting+Luxury+Arabian+Fragrances+Traditional+Workshop"
                alt="Master perfumer crafting luxury Arabian fragrances"
                className="rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400?text=Perfume+Crafting+Workshop';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-playfair">
            Experience Luxury Today
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who have discovered their signature scent with Al Fazl Perfumes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-yellow-400 font-semibold px-8 py-3">
              <Link href="/shop">
                Shop Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-yellow-400 font-semibold px-8 py-3">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
