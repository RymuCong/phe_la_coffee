import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './home.css';
import useStore from '../../service/store';

const BestsellerProducts = () => {
    const navigate = useNavigate();
    const fetchProducts = useStore((state) => state.fetchProducts);
    const products = useStore((state) => state.products);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <div className="bestseller-container">
                <h2>CÁC DÒNG SẢN PHẨM NỔI BẬT</h2>
            </div>
            <div className="bestseller-products">
                {products.map((product) => (
                    <div className="card bestseller-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="bestseller-card-content">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <button className="bestseller-button" onClick={() => handleProductClick(product.id)}>CHI TIẾT</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestsellerProducts;