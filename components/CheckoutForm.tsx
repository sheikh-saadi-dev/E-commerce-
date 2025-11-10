import React, { useState } from 'react';
import { Product } from './FeaturedCollection';
import { CloseIcon } from './icons';

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onOrderSuccess: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ isOpen, onClose, cartItems, onOrderSuccess }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      setError('অনুগ্রহ করে সকল তথ্য পূরণ করুন।');
      return;
    }
    setError('');
    setIsSubmitting(true);
    
    const orderData = {
        ...formData,
        items: JSON.stringify(cartItems.map(item => ({ name: item.name, price: item.price }))),
        total: totalPrice
    };

    try {
        // This is where you would fetch your backend API
        // const response = await fetch('/api/save_order.php', {
        //     method: 'POST',
        //     body: new URLSearchParams(orderData)
        // });
        // const result = await response.json();

        // if (!result.success) {
        //     throw new Error(result.message || 'অর্ডার করতে সমস্যা হয়েছে।');
        // }
      
        // Simulating a successful API call for demonstration
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Order Submitted:', orderData);

        onOrderSuccess();

    } catch (err: any) {
        setError(err.message);
    } finally {
        setIsSubmitting(false);
    }
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-brand-cream w-full max-w-lg rounded-lg shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-brand-pink">
          <h2 className="text-2xl font-semibold text-brand-dark">অর্ডার ফর্ম</h2>
          <button onClick={onClose} className="text-brand-dark hover:text-brand-gold">
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-1">আপনার নাম</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-brand-pink rounded-md focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-1">ফোন নম্বর</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border border-brand-pink rounded-md focus:outline-none focus:ring-brand-gold focus:border-brand-gold" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-brand-text mb-1">সম্পূর্ণ ঠিকানা</label>
              <textarea name="address" id="address" value={formData.address} onChange={handleChange} required rows={3} className="w-full px-3 py-2 border border-brand-pink rounded-md focus:outline-none focus:ring-brand-gold focus:border-brand-gold"></textarea>
            </div>
            
            <div className="border-t border-brand-pink pt-4">
                <h3 className="font-semibold mb-2">অর্ডার সারাংশ</h3>
                <p>পণ্যের সংখ্যা: {cartItems.length.toLocaleString('bn-BD')} টি</p>
                <p className="font-bold">সর্বমোট মূল্য: ৳{totalPrice.toLocaleString('bn-BD')}</p>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-dark text-white font-bold py-3 rounded-full hover:bg-brand-gold transition-colors duration-300 text-lg disabled:bg-gray-400"
            >
                {isSubmitting ? 'প্রসেসিং...' : 'অর্ডার নিশ্চিত করুন'}
            </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
