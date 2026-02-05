import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCartStore } from '@/context/useCartStore';

export default function Navbar() {
    const cart = useCartStore((state) => state.cart); //Select only the cart array from the store
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0); //Calculate the total number of items in the cart

    return (
    <nav className="bg-white border-b border-soap-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-soap-green-800 font-serif text-xl">
          <Leaf className="text-soap-green-600" />
          <span className="font-bold">Nanas Soaps </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link to="/products" className="text-gray-600 hover:text-soap-green-700 font-medium transition-colors">
            Shop Soaps
          </Link>
          
          {/* Cart Icon with Badge */}
          <Link to="/cart" className="relative p-2 text-gray-600 hover:text-soap-green-700 transition-colors">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-soap-green-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-in fade-in zoom-in duration-300">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}