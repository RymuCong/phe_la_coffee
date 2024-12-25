import React from 'react';
import './Cart.css';
import useStore from '../../service/store';

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Cart = () => {
    const cart = useStore((state) => state.cart);
    const totalPrice = useStore((state) => state.totalPrice());

    return (
        <div className="cart-dropdown">
            {cart.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item__image" />
                            <div className="cart-item__details">
                                <p className="item-name">{item.name}</p>
                                <p className="item-quantity">Số lượng: {item.quantity}</p>
                            </div>
                            <button className="cart-item__remove" onClick={() => useStore.getState().removeFromCart(item.id)}>
                                &#10005;
                            </button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <p>Tổng giá: {formatPrice(totalPrice)} VND</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;