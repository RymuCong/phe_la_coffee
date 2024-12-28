import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/phela.png';
import "./Header.css";
import { NavLink, useNavigate } from 'react-router-dom';
import Cart from "../Cart/Cart";
import useStore from '../../service/store';

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const navigate = useNavigate();
    const totalQuantity = useStore((state) => state.totalQuantity());

    const goHome = () => {
        navigate("/");
    };

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className='header'>
            <img onClick={goHome} className='header__logo' width={80} height={40} src={logo} alt={'Header Logo'} />
            <button className="menu-button" onClick={toggleNav}>&#9776;</button>
            <div className={`header__nav ${showNav ? 'show' : ''}`}>
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
                    <img width={70} height={50} src="https://cdn.icon-icons.com/icons2/1182/PNG/96/1490129392-rounded28_82189.png" alt=""/>
                    {totalQuantity > 0 && <span className='header--count'>{totalQuantity}</span>}
                </p>
                {showCart && (
                    <div className="header__cart-dropdown">
                        <Cart />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;