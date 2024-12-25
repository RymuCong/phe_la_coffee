import { create } from 'zustand';
import axios from 'axios';

const cleanPrice = (price) => {
    return parseFloat(price.replace(/\./g, '').replace('₫', ''));
};

const useStore = create((set, get) => ({
    products: [],
    cart: [],
    fetchProducts: async () => {
        const response = await axios.get('https://6767bedb560fbd14f18e4955.mockapi.io/drink_detail');
        set({ products: response.data });
    },
    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === product.id);
        const price = cleanPrice(product.price || '0'); // Clean the price string
        if (existingProduct) {
            return {
                cart: state.cart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        } else {
            return {
                cart: [...state.cart, { ...product, quantity: 1, price }]
            };
        }
    }),
    removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
    })),
    getProductById: (id) => (state) => state.products.find(product => product.id === parseInt(id)),
    totalQuantity: () => get().cart.reduce((total, item) => total + item.quantity, 0),
    totalPrice: () => get().cart.reduce((total, item) => total + (item.price * item.quantity), 0),
}));

export default useStore;