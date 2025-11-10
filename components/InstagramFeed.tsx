import React from 'react';
import { InstagramIcon } from './icons';

const images = [
  'https://picsum.photos/seed/insta1/400/400',
  'https://picsum.photos/seed/insta2/400/400',
  'https://picsum.photos/seed/insta3/400/400',
  'https://picsum.photos/seed/insta4/400/400',
  'https://picsum.photos/seed/insta5/400/400',
  'https://picsum.photos/seed/insta6/400/400',
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-brand-dark">আমাদের ইনস্টাগ্রাম যাত্রা</h2>
        <a href="#" className="flex items-center justify-center text-brand-gold hover:text-brand-dark transition duration-300 mb-10 text-lg">
          <InstagramIcon className="w-6 h-6 mr-2" />
          <span>#দেশীস্টাইল</span>
        </a>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-md">
              <img src={src} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover" />
              <a href="#" className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                <InstagramIcon className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
