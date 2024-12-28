import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './home.css';
import useStore from '../../service/store';
import Preloader from "../../components/Preloader/Preloader";

const BestsellerProducts = () => {
    const navigate = useNavigate();
    const fetchProducts = useStore((state) => state.fetchProducts);
    const products = useStore((state) => state.products);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleProductClick = (id) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate(`/product/${id}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
    };

    return (
        <div>
            {loading && <Preloader />}
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