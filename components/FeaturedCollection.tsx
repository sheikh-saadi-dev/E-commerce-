import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const collections = {
  "৬০০ টাকা কালেকশন": [
    { id: 1, name: 'সফট কটন থ্রিপিস', price: 600, imageUrl: 'https://picsum.photos/seed/thripiece1/400/500' },
    { id: 2, name: 'প্রিন্টেড জর্জেট', price: 600, imageUrl: 'https://picsum.photos/seed/thripiece2/400/500' },
    { id: 3, name: 'বাটিক ডিজাইন', price: 600, imageUrl: 'https://picsum.photos/seed/thripiece3/400/500' },
    { id: 4, name: 'লিনেন থ্রিপিস', price: 600, imageUrl: 'https://picsum.photos/seed/thripiece4/400/500' },
    { id: 5, name: 'ডিজিটাল প্রিন্ট', price: 600, imageUrl: 'https://picsum.photos/seed/thripiece5/400/500' },
  ],
  "৮০০ টাকা কালেকশন": [
    { id: 6, name: 'এমব্রয়ডারি কাজ', price: 800, imageUrl: 'https://picsum.photos/seed/thripiece6/400/500' },
    { id: 7, name: 'সিল্ক থ্রিপিস', price: 800, imageUrl: 'https://picsum.photos/seed/thripiece7/400/500' },
    { id: 8, name: 'হ্যান্ড প্রিন্ট', price: 800, imageUrl: 'https://picsum.photos/seed/thripiece8/400/500' },
    { id: 9, name: 'কাতান ডিজাইন', price: 800, imageUrl: 'https://picsum.photos/seed/thripiece9/400/500' },
  ],
  "১০০০ টাকা কালেকশন": [
    { id: 10, name: 'গর্জিয়াস পার্টি ড্রেস', price: 1000, imageUrl: 'https://picsum.photos/seed/thripiece10/400/500' },
    { id: 11, name: 'সিকুইন্স কাজ', price: 1000, imageUrl: 'https://picsum.photos/seed/thripiece11/400/500' },
    { id: 12, name: 'নেট ওড়না সহ', price: 1000, imageUrl: 'https://picsum.photos/seed/thripiece12/400/500' },
  ],
  "পাইকারি কালেকশন": [
     { id: 13, name: 'পাইকারি সেট (১০ পিস)', price: 5000, imageUrl: 'https://picsum.photos/seed/thripiece13/400/500' },
     { id: 14, name: 'পাইকারি সেট (২০ পিস)', price: 9500, imageUrl: 'https://picsum.photos/seed/thripiece14/400/500' },
  ]
};


const ProductCard: React.FC<{ product: Product; onAddToCart: (product: Product) => void; }> = ({ product, onAddToCart }) => (
  <div className="flex-shrink-0 w-64 md:w-72 bg-white rounded-lg shadow-lg overflow-hidden snap-start group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="relative h-80">
      <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-brand-dark mb-1">{product.name}</h3>
      <p className="text-brand-text font-bold text-xl mb-3">৳{product.price.toLocaleString('bn-BD')}</p>
      <button 
        onClick={() => onAddToCart(product)}
        className="bg-brand-dark text-white font-bold py-2 px-6 rounded-full w-full hover:bg-brand-gold transition-colors duration-300 transform group-hover:scale-105"
      >
        কার্টে যুক্ত করুন
      </button>
    </div>
  </div>
);

const ProductRow: React.FC<{ title: string; products: Product[]; onAddToCart: (product: Product) => void; }> = ({ title, products, onAddToCart }) => (
    <div className="mb-16">
        <h3 className="text-3xl font-semibold text-center mb-8 text-brand-dark">{title}</h3>
        <div className="flex space-x-6 overflow-x-auto pb-4 horizontal-scrollbar snap-x snap-mandatory">
            {products.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    </div>
);


const FeaturedCollection: React.FC<{ onAddToCart: (product: Product) => void; }> = ({ onAddToCart }) => {
  return (
    <section id="collection" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 text-brand-dark">আমাদের কালেকশন</h2>
        {Object.entries(collections).map(([title, products]) => (
          <ProductRow key={title} title={title} products={products} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;