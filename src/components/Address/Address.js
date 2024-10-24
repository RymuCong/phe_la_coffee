import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Address.css';

const Address = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    const addresses = [
        {className : "address1", label: "SỐ 7 NGUYỄN CHÍ THANH, THÀNH PHỐ ĐÀ LẠT, TỈNH LÂM ĐỒNG", phone: "Số điện thoại: 1900 3013"},
        {className : "address2", label: "SỐ 35 – 41 NGUYỄN VĂN LINH, HẢI CHÂU, ĐÀ NẴNG", phone: "Số điện thoại: 1900 3013"},
        {className : "address3", label: "SỐ 34 NGUYỄN VĂN LỘC, MỘ LAO, HÀ ĐÔNG, HÀ NỘI", phone: "Số điện thoại: 1900 3013"},
        {className : "address4", label: "SỐ 453 NGUYỄN VĂN CỪ, QUẬN LONG BIÊN, HÀ NỘ", phone: "Số điện thoại: 1900 3013"},
        {className : "address5", label: "SỐ 35 LÊ VĂN THIÊM, THANH XUÂN, HÀ NỘI", phone: "Số điện thoại: 1900 3013"},
        {className : "address6", label: "SỐ 2 NÚI TRÚC, KIM MÃ, BA ĐÌNH, HÀ NỘI", phone: "Số điện thoại: 1900 3013"},
        {className : "address7", label: "SỐ N04 – B1 THÀNH THÁI, DỊCH VỌNG, CẦU GIẤY, HÀ NỘI", phone: "Số điện thoại: 1900 3013"},
        {className : "address8", label: "SỐ 24, NGÕ 128C ĐẠI LA, ĐỒNG TÂM, HAI BÀ TRƯNG, HÀ NỘI", phone: "Số điện thoại: 1900 3013"},
        {className : "address9", label: "SỐ 14 ĐẶNG TIẾN ĐÔNG, TRUNG LIỆT, ĐỐNG ĐA, HÀ NỘI", phone: "Số điện thoại: 1900 3013"},
        {className : "address10", label: "SỐ 24 HÀNG CÓT, HÀNG MÃ, HOÀN KIẾM, HÀ NỘI", phone: "Số điện thoại: 1900 3013"},
        {className : "address11", label: "SỐ 65 PHẠM NGỌC THẠCH, ĐỐNG ĐA, HÀ NỘI", phone: "Số điện thoại: 1900 3013"},
        {className : "address12", label: "SỐ 289 ĐINH BỘ LĨNH, PHƯỜNG 26, QUẬN BÌNH THẠNH, TP HCM", phone: "Số điện thoại: 1900 3013"},
        {className : "address13", label: "SỐ 493 HỒNG BÀNG, PHƯỜNG 14, QUẬN 5, TP HCM", phone: "Số điện thoại: 1900 3013"},
        {className : "address14", label: "SỐ 446 NGUYỄN THỊ THẬP, PHƯỜNG TÂN QUY, QUẬN 7, TP HCM", phone: "Số điện thoại: 1900 3013"},
        {className : "address15", label: "SỐ 212 PHAN XÍCH LONG, PHƯỜNG 2, QUẬN PHÚ NHUẬN, TP HCM", phone: "Số điện thoại: 1900 3013"},
        {className : "address16", label: "SỐ 6 CÔNG TRƯỜNG QUỐC TẾ, PHƯỜNG 6, QUẬN 3, TP HCM", phone: "Số điện thoại: 1900 3013"},
        {className : "address17", label: "SỐ 115 TRƯƠNG ĐỊNH, QUẬN 3, TP HCM", phone: "Số điện thoại: 1900 3013"},
        {className : "address18", label: "SỐ 193/1 ĐIỆN BIÊN PHỦ, PHƯỜNG 15, QUẬN BÌNH THẠNH, TP HCM", phone: "Số điện thoại: 1900 3013"},
        {className : "address19", label: "SỐ 6, TRƯƠNG ĐỊNH, PHƯỜNG BẾN THÀNH, QUẬN 1, TP HCM", phone: "Số điện thoại: 1900 3013"},
        {className : "address20", label: "SỐ 125 HỒ TÙNG MẬU, BẾN NGHÉ, QUẬN 1, TP HCM", phone: "Số điện thoại: 1900 3013"},
        {className : "address21", label: "SỐ 10 PHAN CHÂU TRINH, PHƯỜNG CẨM CHÂU, THÀNH PHỐ HỘI AN, QUẢNG NAM", phone: "Số điện thoại: 1900 3013"},
        {className : "address22", label: "SỐ 45B LÝ THƯỜNG KIỆT, HOÀN KIẾM, HÀ NỘI", phone: "Số điện thoại: 1900 3013"},
    ];

    return (
        <div className="addressContainer">
            <h2>HỆ THỐNG CỬA HÀNG</h2>
            <Slider {...settings}>
                {addresses.map((address, index) => (
                    <div key={index} className={`address ${address.className}`}>
                        <h3>{address.label}</h3>
                        <p>{address.phone}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Address;