import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedCollection, { Product } from './components/FeaturedCollection';
import AboutSection from './components/AboutSection';
import LimitedOffer from './components/LimitedOffer';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Subscription from './components/Subscription';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import CheckoutForm from './components/CheckoutForm';

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => [...prevItems, product]);
    setIsCartOpen(true);
  };
  
  const removeFromCart = (productId: number) => {
    const indexToRemove = cartItems.findIndex(item => item.id === productId);
    if (indexToRemove > -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(indexToRemove, 1);
      setCartItems(newCartItems);
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
    alert('আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে!');
  };

  return (
    <div className="bg-brand-cream text-brand-text font-hind-siliguri">
      <div className="sticky top-0 z-50 w-full bg-brand-pink/80 backdrop-blur-sm text-center py-2 text-sm text-brand-dark font-semibold">
        ৳১৫০০ টাকার বেশি অর্ডারে ফ্রি শিপিং
      </div>
      <Header cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <HeroSection />
        <FeaturedCollection onAddToCart={addToCart} />
        <AboutSection />
        <LimitedOffer />
        <Testimonials />
        <InstagramFeed />
        <Subscription />
      </main>
      <Footer />
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onCheckout={handleCheckout}
        onRemoveFromCart={removeFromCart}
      />
      <CheckoutForm 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderSuccess={handleOrderSuccess}
      />
    </div>
  );
}

export default App;
