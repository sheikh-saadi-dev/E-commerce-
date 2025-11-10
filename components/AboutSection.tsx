import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-pink/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/designer_bn/600/700" alt="Brand story" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-6 text-brand-dark">আমাদের কারুশিল্পের গল্প</h2>
            <p className="mb-4 leading-relaxed text-brand-text">
             'দেশী স্টাইল' শুধুমাত্র একটি ব্র্যান্ড নয়, এটি আমাদের ঐতিহ্যের প্রতিচ্ছবি। আমরা বাংলাদেশী নারীদের জন্য এমন পোশাক তৈরি করতে চেয়েছি যা তাঁদের সৌন্দর্য, আত্মবিশ্বাস এবং ব্যক্তিত্বকে ফুটিয়ে তুলবে।
            </p>
            <p className="leading-relaxed text-brand-text">
              আমাদের প্রতিটি ডিজাইন দেশীয় ঐতিহ্য এবং আধুনিকতার এক দারুণ সংমিশ্রণ। আমরা উন্নত মানের কাপড় ব্যবহার করে থাকি যা আপনাকে দেবে আরাম ও স্বাচ্ছন্দ্য। আমাদের সাথে যোগ দিন এবং দেশী স্টাইলের মাধ্যমে নিজের নতুন পরিচয় গড়ে তুলুন।
            </p>
            <a href="#" className="mt-6 inline-block text-brand-gold font-bold hover:underline">
              আরও জানুন &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
