import React, {useContext, useEffect, useState} from 'react';
import logo from '../../assets/images/phela.png';
import "./Header.css";
import { NavLink, useNavigate } from 'react-router-dom';
import Cart from "../Cart/Cart";
import {CartContext} from "../../context/CartContext";

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const navigate = useNavigate();
    const { cart, setCart, totalQuantity } = useContext(CartContext);

    const goHome = () => {
        navigate("/");
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className='header'>
            <img onClick={goHome} className='header__logo' width={80} height={40} src={logo} alt={'Header Logo'} />
            <div className="header__nav">
                <p><NavLink to={"/"}>TRANG CHỦ</NavLink></p>
                <p><NavLink to={"/product"}>SẢN PHẨM</NavLink></p>
                <p><NavLink to={"/about-us"}>GIỚI THIỆU</NavLink></p>
                <p><NavLink to={"/contact-us"}>LIÊN HỆ</NavLink></p>
            </div>
            <div
                className="header__user"
                onMouseEnter={() => setShowCart(true)}
                onMouseLeave={() => setShowCart(false)}
            >
                <p className='header--icon'>
                    <img width={70} height={50}
                        src="https://cdn.icon-icons.com/icons2/1182/PNG/96/1490129392-rounded28_82189.png"
                         alt=""/>
                </p>
                <p className='header--count'>{totalQuantity}</p>
                {showCart && (
                    <div className="header__cart-dropdown">
                        <Cart cart={cart} removeFromCart={removeFromCart} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;