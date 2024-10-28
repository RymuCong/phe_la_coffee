import { useState, useEffect } from "react";
import './home.css';
import {handleGetDataHomePage} from "../../service/store";

const BestsellerProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await handleGetDataHomePage();
        const bestsellerProducts = response.find(name => name.name === "top-products").data;
        console.log(bestsellerProducts);
        setProducts(bestsellerProducts);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div className="bestseller-container">
                <h1>CÁC DÒNG SẢN PHẨM NỔI BẬT</h1>
            </div>
            <div className="bestseller-products">
                {products.map((product) => (
                    <div className="card bestseller-card" key={product.name}>
                        <img src={product.image} alt={product.name} />
                        <div className="bestseller-card-content">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <button className="bestseller-button">CHI TIẾT</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestsellerProducts;