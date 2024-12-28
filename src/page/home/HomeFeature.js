import React from 'react';
import './HomeFeature.css';

const HomeFeature = () => {
    return (
        <div className="home-feature">
            <h2 className="home-feature__title">PHÊ LA VÀ NHỮNG ĐIỀU KHÁC BIỆT</h2>
            <div className="home-feature__content">
                <div className="home-feature__text">
                    <h3>CÂU CHUYỆN THƯƠNG HIỆU</h3>
                    <p>
                        Nốt Hương Đặc Sản - Phê La luôn trân quý, nâng niu những giá trị
                        Nguyên Bản ở mỗi vùng đất mà chúng tôi đi qua, nơi tâm hồn được đồng
                        điệu với thiên nhiên, với nỗi vất vả nhọc nhằn của người nông dân; cảm
                        nhận được hết thảy những tầng hương ẩn sâu trong từng nguyên liệu. Một
                        chặng đường dài đang chờ phía trước, Phê La đã sẵn sàng viết tiếp câu
                        chuyện Nốt Hương Đặc Sản - Nguyên Bản - Thủ Công đầy cảm hứng và càng
                        tự hào hơn khi được mang sứ mệnh: ``Đánh thức những nốt hương đặc
                        biệt".
                    </p>
                </div>
                <img
                    className="home-feature__image"
                    src="https://phela.vn/wp-content/uploads/2024/06/444482930_848685467281848_1903781029210564640_n.jpg"
                    alt="Phê La - Câu chuyện thương hiệu và nguyên liệu đặc sản"
                />
                <div className="home-feature__text">
                    <h3>NGUYÊN LIỆU ĐẶC SẢN</h3>
                    <p>
                        Trà Ô Long đặc sản tại Phê La còn được ươm trồng với phương pháp chăm
                        bón hữu cơ, hoàn toàn với trứng gà, đậu nành và thu hái thủ công để có
                        được những búp trà tươi và non nhất, tạo nên điểm khác biệt mạnh mẽ so
                        với các thương hiệu khác. Có thể nói, dòng trà đặc sản của Phê La luôn
                        giữ được hương vị thơm ngon nguyên bản nhất và được nhiều người biết
                        đến như một nguồn nguyên liệu tinh hoa của Đà Lạt.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeFeature;