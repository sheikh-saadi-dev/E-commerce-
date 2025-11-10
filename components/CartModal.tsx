import React from 'react';
import { Product } from './FeaturedCollection';
import { CloseIcon } from './icons';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onCheckout: () => void;
  onRemoveFromCart: (productId: number) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onCheckout, onRemoveFromCart }) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-end" onClick={onClose}>
      <div className="bg-brand-cream w-full max-w-md h-full shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-brand-pink">
          <h2 className="text-2xl font-semibold text-brand-dark">আপনার কার্ট</h2>
          <button onClick={onClose} className="text-brand-dark hover:text-brand-gold">
            <CloseIcon className="w-7 h-7" />
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-lg text-brand-text">আপনার কার্ট খালি।</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-center gap-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-24 object-cover rounded-md" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-brand-gold font-bold">৳{item.price.toLocaleString('bn-BD')}</p>
                </div>
                <button onClick={() => onRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-brand-pink mt-auto">
            <div className="flex justify-between items-center text-xl font-bold mb-4">
              <span className="text-brand-dark">সর্বমোট মূল্য:</span>
              <span className="text-brand-gold">৳{totalPrice.toLocaleString('bn-BD')}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-brand-dark text-white font-bold py-3 rounded-full hover:bg-brand-gold transition-colors duration-300 text-lg"
            >
              অর্ডার করুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
