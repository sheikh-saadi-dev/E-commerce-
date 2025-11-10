import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-4">দেশী স্টাইল</h3>
            <p className="text-sm text-gray-300">আধুনিক নারীদের জন্য ঐতিহ্যবাহী পোশাক।</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">গুরুত্বপূর্ণ লিংক</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#collection" className="hover:text-brand-pink">কালেকশন</a></li>
              <li><a href="#about" className="hover:text-brand-pink">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-brand-pink">প্রশ্নোত্তর</a></li>
              <li><a href="#contact" className="hover:text-brand-pink">যোগাযোগ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">আমাদের অনুসরণ করুন</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-brand-pink transition duration-300"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-brand-pink transition duration-300"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-brand-pink transition duration-300"><TwitterIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear().toLocaleString('bn-BD')} দেশী স্টাইল। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
