import { useState, useEffect } from "react";
import formatPriceToVND from "../../utils/formatPrice";
import './home.css';

const BestsellerProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch("https://671761aeb910c6a6e027d0ee.mockapi.io/drinks");
        const data = await response.json();
        setProducts(data.slice(0, 6)); // Limit to 6 products
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <div className="bestseller-container">
                <h1>Sản Phẩm Nổi Bật</h1>
            </div>
            <div className="bestseller-products">
                {products.map((product) => (
                    <div className="card bestseller-card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div className="bestseller-card-content">
                            <h3>{product.title}</h3>
                            <p>{formatPriceToVND(product.price * 23000)}</p>
                            <button className="bestseller-button">CHI TIẾT</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestsellerProducts;