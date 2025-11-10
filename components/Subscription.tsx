import React from 'react';

const Subscription: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="text-4xl font-semibold mb-4 text-brand-dark">আমাদের সাথে যুক্ত হন</h2>
        <p className="mb-8">আমাদের নিউজলেটারে সাইন আপ করে আপনার প্রথম অর্ডারে ১০% ছাড় পান এবং নতুন পণ্যের আপডেট ও বিশেষ অফার সম্পর্কে সবার আগে জানুন।</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="আপনার ইমেইল দিন" 
            className="w-full sm:w-80 px-4 py-3 rounded-full border-2 border-brand-pink focus:outline-none focus:border-brand-gold"
            aria-label="Email Address"
          />
          <button 
            type="submit"
            className="bg-brand-dark text-white font-bold py-3 px-8 rounded-full hover:bg-brand-gold transition duration-300"
          >
            সাবস্ক্রাইব
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
