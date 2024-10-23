import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__logo">
                    <img src="https://phela.vn/wp-content/uploads/2021/07/group-20210119101820.png" alt="Phê La Logo" />
                </div>
                <div className="footer__address">
                    <h5>Về chúng tôi</h5>
                    <ul>
                        <li><a href="#">Cửa hàng</a></li>
                        <li><a href="#">Về Phê La</a></li>
                        <li><a href="#">Hệ thống cửa hàng</a></li>
                    </ul>
                </div>
                <div className="col-md-3 footer__info">
                    <h5>Địa chỉ công ty</h5>
                    <p>Trụ sở chính: 289 Đinh Bộ Lĩnh, phường 26, quận Bình Thạnh, TP Hồ Chí Minh</p>
                    <p>Chi nhánh Đà Lạt: 7 Nguyễn Chí Thanh, phường 1, thành phố Đà Lạt, tỉnh Lâm Đồng</p>
                    <p>Chi nhánh Hà Nội: Lô 04-9A Khu công nghiệp Vĩnh Hoàng, phường Hoàng Văn Thụ, quận Hoàng Mai, Hà Nội</p>
                </div>
                <div className="col-md-3 footer__subscribe">
                    <h5>NHẬN THÔNG TIN TỪ PHÊ LA</h5>
                    <div className="footer__social-icons">
                        <a href="#"><img src="https://phela.vn/wp-content/uploads/2024/09/1.webp" alt="Social Icon 1" /></a>
                        <a href="#"><img src="https://phela.vn/wp-content/uploads/2024/09/2.webp" alt="Social Icon 2" /></a>
                        <a href="#"><img src="https://phela.vn/wp-content/uploads/2024/09/3.webp" alt="Social Icon 3" /></a>
                        <a href="#"><img src="https://phela.vn/wp-content/uploads/2024/09/4.webp" alt="Social Icon 4" /></a>
                    </div>
                    <div>Xin vui lòng để lại địa chỉ email, chúng tôi sẽ cập nhật những tin tức mới nhất của Phê La</div>
                    <form className="wpcf7-form" noValidate>
                        <input type="text" placeholder="Email của bạn"/>
                        <button type="submit">Gửi</button>
                    </form>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2020 Bản quyền này thuộc về Công Ty Cổ Phần Phê La</p>
            </div>
        </>
    );
};

export default Footer;