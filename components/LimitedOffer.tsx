import React, { useState, useEffect } from 'react';

const LimitedOffer: React.FC = () => {
  const calculateTimeLeft = () => {
    // Set a future date for the countdown
    const difference = +new Date('2024-12-31T23:59:59') - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        দিন: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ঘন্টা: Math.floor((difference / (1000 * 60 * 60)) % 24),
        মিনিট: Math.floor((difference / 1000 / 60) % 60),
        সেকেন্ড: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] === undefined) {
      return null;
    }

    return (
      <div key={interval} className="text-center">
        <span className="text-4xl lg:text-5xl font-bold">
            {timeLeft[interval].toLocaleString('bn-BD')}
        </span>
        <span className="block text-sm uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-brand-pink">বিশেষ ছাড়!</h2>
        <p className="text-5xl md:text-6xl font-semibold mb-8 text-white">সকল পোশাকে ৩০% ছাড়</p>
        <div className="flex justify-center space-x-4 md:space-x-8 mb-10 text-white">
          {timerComponents.length ? timerComponents : <span>সময় শেষ!</span>}
        </div>
        <a href="#collection" className="bg-brand-gold text-white font-bold py-3 px-10 rounded-full hover:bg-opacity-80 transition duration-300 transform hover:scale-105 text-lg">
          অফারটি লুফে নিন
        </a>
      </div>
    </section>
  );
};

export default LimitedOffer;
