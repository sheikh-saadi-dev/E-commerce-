import React from 'react';
import { CartIcon } from './icons';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="absolute top-0 left-0 w-full z-30 pt-16 md:pt-12">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl text-white font-bold tracking-wider">দেশী স্টাইল</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#collection" className="text-white hover:text-brand-pink transition duration-300">কালেকশন</a>
          <a href="#about" className="text-white hover:text-brand-pink transition duration-300">আমাদের গল্প</a>
          <a href="#contact" className="text-white hover:text-brand-pink transition duration-300">যোগাযোগ</a>
        </nav>
        <button onClick={onCartClick} className="relative text-white hover:text-brand-pink transition-colors" aria-label="Open Cart">
          <CartIcon className="w-7 h-7" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
