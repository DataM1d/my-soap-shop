import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/Product';

// Defining the shape of an item in the cart
interface CartItem extends Product {
  quantity: number;
}

// Defining the store's state and actions
interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      
      addToCart: (product) => set((state) => {
        const existingIndex = state.cart.findIndex((item) => item.id === product.id); // Check if product already exists in cart

        
        if (existingIndex !== -1) {
          // If it exists, increment quantity
          const newCart = [...state.cart];
          newCart[existingIndex] = {
            ...newCart[existingIndex],
            quantity: newCart[existingIndex].quantity + 1
          };
          return { cart: newCart };
        }
        
        return { cart: [...state.cart, { ...product, quantity: 1 }] };// If it's new, add it with quantity 1

      }),

      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id)
      })),

      clearCart: () => set({ cart: [] }),
    }),
    { 
      name: 'soap-shop-storage' 
    }
  )
);