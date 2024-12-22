import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    products: [],
    cart: [],
    fetchProducts: async () => {
        const response = await axios.get('https://6767bedb560fbd14f18e4955.mockapi.io/drink_detail');
        set({ products: response.data });
    },
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    getProductById: (id) => (state) => state.products.find(product => product.id === parseInt(id)),
}));

export default useStore;