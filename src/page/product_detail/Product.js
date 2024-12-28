import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../service/store';
import './Product.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BestsellerProducts from "../home/BestsellerProducts";
import Preloader from "../../components/Preloader/Preloader";

export const Product = () => {
    const { id } = useParams();
    const fetchProducts = useStore((state) => state.fetchProducts);
    const getProductById = useStore((state) => state.getProductById);
    const addToCart = useStore((state) => state.addToCart);
    const product = useStore(getProductById(id));

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (!product) {
        return <Preloader/>;
    }

    return (
        <div className="productPage">
            <Header/>
            <div className="productDetail">
                <div className="breadcrumb">
                    <span>Sản phẩm &gt; {product.name}</span>
                </div>
                <div className="productLayout">
                    <div className="media">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="content">
                        <h5>{product.name}</h5>
                        <p className="price">{product.price}</p>
                        <button onClick={() => addToCart(product)}>Mua ngay</button>
                    </div>
                </div>
                <div className="productDescription">
                    <h6>CHI TIẾT SẢN PHẨM</h6>
                    <hr/>
                    <p>{product.description}</p>
                </div>
            </div>
            <BestsellerProducts/>
            <Footer/>
        </div>
    );
};