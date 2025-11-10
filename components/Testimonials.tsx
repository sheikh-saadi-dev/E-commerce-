import React from 'react';
import { StarIcon } from './icons';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  imageUrl: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { id: 1, name: 'সাদিয়া চৌধুরী', quote: 'পোশাকের মান খুবই ভালো! নতুন ড্রেসটি পরে আমি অনেক প্রশংসা পেয়েছি। আমি অবশ্যই এখান থেকে আবার কিনব।', imageUrl: 'https://picsum.photos/seed/person1/100/100', rating: 5 },
  { id: 2, name: 'ফারজানা আক্তার', quote: 'দেশী স্টাইল এখন আমার প্রিয় ব্র্যান্ড। তাদের ডিজাইনগুলো খুবই আকর্ষণীয় এবং আধুনিক। এদের কাস্টমার সার্ভিসও চমৎকার!', imageUrl: 'https://picsum.photos/seed/person2/100/100', rating: 5 },
  { id: 3, name: 'নুসরাত জাহান', quote: 'আমি একটি বিশেষ অনুষ্ঠানের জন্য তাদের একটি থ্রিপিস কিনেছিলাম। পোশাকটি দেখতে যতটা সুন্দর, পরতেও ততটা আরামদায়ক।', imageUrl: 'https://picsum.photos/seed/person3/100/100', rating: 5 },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <img src={testimonial.imageUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
    <h3 className="font-semibold text-xl mb-2">{testimonial.name}</h3>
    <div className="flex justify-center mb-4">
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-brand-gold" />
      ))}
    </div>
    <p className="text-brand-text italic">"{testimonial.quote}"</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-pink/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-12 text-brand-dark">ক্রেতাদের মতামত</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
