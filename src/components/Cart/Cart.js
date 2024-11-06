import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div className="cart-dropdown">
            {cart.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item__image" />
                        <div className="cart-item__details">
                            <p className="item-name">{item.name}</p>
                            <p className="item-quantity">Số lượng: {item.quantity}</p>
                        </div>
                        <button className="cart-item__remove" onClick={() => removeFromCart(item.id)}>
                            &#10005;
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;