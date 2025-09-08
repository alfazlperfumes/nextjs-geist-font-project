import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://placehold.co/1920x800?text=Traditional+Arabian+Perfume+Workshop+Master+Craftsman+Creating+Luxury+Fragrances')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            Our <span className="text-yellow-400">Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            A legacy of excellence in Arabian perfumery, passed down through generations 
            and perfected with passion, tradition, and innovation.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">
                The Al Fazl <span className="text-yellow-700">Legacy</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1952 by Master Perfumer Ahmed Al Fazl, our company began as a small 
                workshop in the heart of the Arabian Peninsula. With a deep understanding of 
                traditional perfumery techniques and an unwavering commitment to quality, 
                Ahmed created fragrances that captured the essence of Arabian culture.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, three generations later, Al Fazl Perfumes continues to honor this 
                legacy while embracing modern innovations. Our master perfumers blend 
                time-honored techniques with contemporary artistry to create fragrances 
                that are both timeless and relevant.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Every bottle tells a story of passion, craftsmanship, and the pursuit 
                of olfactory perfection. We source the finest ingredients from around 
                the world, ensuring that each fragrance meets our exacting standards.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-semibold">
                <Link href="/shop">
                  Explore Our Collection
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x500?text=Vintage+Arabian+Perfume+Workshop+Traditional+Craftsmanship+Heritage"
                alt="Traditional Arabian perfume workshop showcasing heritage craftsmanship"
                className="rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x500?text=Heritage+Workshop';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Our <span className="text-yellow-700">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in creating exceptional fragrances and serving our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We pursue perfection in every aspect of our craft, from ingredient selection 
                  to the final product, ensuring uncompromising quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tradition</h3>
                <p className="text-gray-600">
                  Rooted in centuries-old Arabian perfumery traditions, we honor the 
                  wisdom of our ancestors while embracing innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Passion</h3>
                <p className="text-gray-600">
                  Every fragrance is created with love and dedication, reflecting our 
                  deep passion for the art of perfumery.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Authenticity</h3>
                <p className="text-gray-600">
                  We stay true to our Arabian heritage, creating authentic fragrances 
                  that tell genuine stories of culture and tradition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
                <p className="text-gray-600">
                  From sourcing premium ingredients to meticulous crafting processes, 
                  quality is never compromised in our pursuit of perfection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200 hover:border-yellow-400 transition-colors">
              <CardContent className="p-8">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600">
                  We believe in building lasting relationships with our customers, 
                  partners, and the communities we serve worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Craftsmanship Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-playfair">
              Our <span className="text-yellow-400">Craftsmanship</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The meticulous process behind every Al Fazl fragrance, from concept to creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Inspiration</h3>
              <p className="text-gray-300">
                Every fragrance begins with inspiration drawn from Arabian culture, 
                nature, and timeless stories.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Sourcing</h3>
              <p className="text-gray-300">
                We carefully select the finest ingredients from trusted suppliers 
                around the world, ensuring authenticity and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Blending</h3>
              <p className="text-gray-300">
                Our master perfumers artfully blend ingredients using traditional 
                techniques passed down through generations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-4">Perfection</h3>
              <p className="text-gray-300">
                Each fragrance undergoes rigorous testing and refinement until 
                it meets our exacting standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Meet Our <span className="text-yellow-700">Masters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented artisans behind our exceptional fragrances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center overflow-hidden">
              <div className="relative">
                <img
                  src="https://placehold.co/400x300?text=Master+Perfumer+Khalid+Al+Fazl+Traditional+Arabian+Attire"
                  alt="Master Perfumer Khalid Al Fazl"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/400x300?text=Master+Perfumer';
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Khalid Al Fazl</h3>
                <p className="text-yellow-700 font-semibold mb-3">Master Perfumer & CEO</p>
                <p className="text-gray-600 text-sm">
                  Third-generation perfumer carrying forward the family legacy with 
                  over 25 years of experience in creating exceptional fragrances.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <div className="relative">
                <img
                  src="https://placehold.co/400x300?text=Senior+Perfumer+Amira+Hassan+Laboratory+Setting"
                  alt="Senior Perfumer Amira Hassan"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/400x300?text=Senior+Perfumer';
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Amira Hassan</h3>
                <p className="text-yellow-700 font-semibold mb-3">Senior Perfumer</p>
                <p className="text-gray-600 text-sm">
                  Renowned for her expertise in floral compositions and modern 
                  interpretations of classic Arabian scents.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center overflow-hidden">
              <div className="relative">
                <img
                  src="https://placehold.co/400x300?text=Quality+Director+Omar+Rashid+Ingredient+Testing"
                  alt="Quality Director Omar Rashid"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/400x300?text=Quality+Director';
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Omar Rashid</h3>
                <p className="text-yellow-700 font-semibold mb-3">Quality Director</p>
                <p className="text-gray-600 text-sm">
                  Ensures every ingredient meets our highest standards through 
                  meticulous testing and quality control processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-playfair">
            Experience Our Legacy
          </h2>
          <p className="text-xl mb-8">
            Discover the artistry and passion that goes into every Al Fazl fragrance. 
            Join our family of fragrance enthusiasts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-yellow-400 font-semibold px-8 py-3">
              <Link href="/shop">
                Explore Collection
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-yellow-400 font-semibold px-8 py-3">
              <Link href="/contact">
                Visit Our Store
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
