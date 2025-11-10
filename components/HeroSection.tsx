import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://picsum.photos/seed/deshistyle/1920/1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="text-center text-white z-10 p-4">
        <h2 className="text-5xl md:text-7xl font-semibold mb-4 animate-fade-in-down">আপনার স্টাইল, আপনার ঐতিহ্য</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">দেশী কারুকার্যের ছোঁয়ায় তৈরী আধুনিক পোশাকের সম্ভার।</p>
        <a href="#collection" className="bg-white text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-brand-pink transition duration-300 transform hover:scale-105 text-lg">
          কালেকশন দেখুন
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
