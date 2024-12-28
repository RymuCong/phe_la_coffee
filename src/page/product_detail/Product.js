import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../service/store';
import './Product.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BestsellerProducts from "../home/BestsellerProducts";
import Preloader from "../../components/Preloader/Preloader";
import { toast, ToastContainer } from "react-toastify";

export const Product = () => {
    const { id } = useParams();
    const fetchProducts = useStore((state) => state.fetchProducts);
    const getProductById = useStore((state) => state.getProductById);
    const addToCart = useStore((state) => state.addToCart);
    const product = useStore(getProductById(id));
    const cart = useStore((state) => state.cart);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleAddToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct && existingProduct.quantity >= 10) {
            toast.error(`Số lượng tối đa cho ${product.name} là 10`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.success('Thêm sản phẩm thành công!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            addToCart(product);
        }
    };

    if (!product) {
        return <Preloader />;
    }

    return (
        <div className="productPage">
            <Header />
            <ToastContainer />
            <div className="productDetail">
                <div className="breadcrumb">
                    <span>Sản phẩm &gt; {product.name}</span>
                </div>
                <div className="productLayout">
                    <div className="media">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="content">
                        <h5>{product.name}</h5>
                        <p className="price">{product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Mua ngay</button>
                    </div>
                </div>
                <div className="productDescription">
                    <h6>CHI TIẾT SẢN PHẨM</h6>
                    <hr />
                    <p>{product.description}</p>
                </div>
            </div>
            <BestsellerProducts />
            <Footer />
        </div>
    );
};