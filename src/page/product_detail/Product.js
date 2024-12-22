import React, { useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import useStore from '../../service/store';
import './Product.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BestsellerProducts from "../home/BestsellerProducts";

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
        return <div>Loading...</div>;
    }

    return (
        <div className="productPage">
            <Header/>
            <div className="productDetail">
                <div className="breadcrumb">
                    <span>Phela &gt; Sản phẩm &gt; {product.name}</span>
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