import { create } from 'zustand';
import axios from 'axios';

const cleanPrice = (price) => {
    return parseFloat(price.replace(/\./g, '').replace('₫', ''));
};

const useStore = create((set, get) => ({
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    fetchProducts: async () => {
        const response = await axios.get('https://6767bedb560fbd14f18e4955.mockapi.io/drink_detail');
        set({ products: response.data });
    },
    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === product.id);
        const price = cleanPrice(product.price || '0');
        const updatedCart = existingProduct
            ? state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
            : [...state.cart, { ...product, quantity: 1, price }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),
    removeFromCart: (id) => set((state) => {
        const updatedCart = state.cart.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),
    getProductById: (id) => (state) => state.products.find(product => product.id === parseInt(id)),
    totalQuantity: () => get().cart.reduce((total, item) => total + item.quantity, 0),
    totalPrice: () => get().cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    updateQuantity: (id, quantity) => set((state) => {
        const updatedCart = state.cart.map(item => item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),
}));

export default useStore;