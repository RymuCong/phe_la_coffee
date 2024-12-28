import React, { useEffect, useState } from 'react';
import './Cart.css';
import useStore from '../../service/store';
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/FormatPrice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const cart = useStore((state) => state.cart);
    const totalPrice = useStore((state) => state.totalPrice());
    const navigate = useNavigate();
    const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(false);

    useEffect(() => {
        let hasInvalidQuantity = false;
        cart.forEach(item => {
            if (item.quantity > 10) {
                toast.error(`Max quantity for ${item.name} is 10`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                hasInvalidQuantity = true;
            }
        });
        setIsCheckoutDisabled(hasInvalidQuantity);
    }, [cart]);

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity > 0 && newQuantity <= 10) {
            useStore.getState().updateQuantity(id, newQuantity);
        }
    };

    const handleCheckout = () => {
        if (!isCheckoutDisabled) {
            navigate('/checkout');
        }
    };

    return (
        <div className="cart-dropdown">
            <ToastContainer />
            {cart.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item__image"/>
                            <div className="cart-item__details">
                                <p className="item-name">{item.name}</p>
                                <div className="item-quantity">
                                    <Button
                                        variant="outline-warning"
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        style={{ marginRight: '10px'}}
                                    >
                                        -
                                    </Button>
                                    <span>{item.quantity}</span>
                                    <Button
                                        variant="outline-warning"
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        style={{ marginLeft: '10px'}}
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>
                            <Button variant="danger" className="cart-item__remove"
                                    onClick={() => useStore.getState().removeFromCart(item.id)}>
                                &#10005;
                            </Button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <p>Tổng giá: {formatPrice(totalPrice)} VNĐ</p>
                    </div>
                    <Button
                        className="checkout-button"
                        onClick={handleCheckout}
                        disabled={isCheckoutDisabled}
                    >
                        Checkout
                    </Button>
                </>
            )}
        </div>
    );
};

export default Cart;