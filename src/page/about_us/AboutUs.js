import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <Banner/>
            <div className="about-us-page">
                <AboutUsElement/>
                <VisionMission/>
                <CoreValues/>
                <Achievements/>
                <Timeline/>
            </div>
        </div>
    );
};

const Banner = () => (
    <div className="banner_page">
        <img src="https://phela.vn/wp-content/uploads/2021/07/banner-web-.jpg" alt="Banner" className="banner_image"/>
        <div className="banner_text">
            <h1>VỀ PHÊ LA</h1>
        </div>
    </div>
);

const AboutUsElement = () => (
    <div className="about-us-element">
        <div className="text">
            <h6>“Nốt Hương Đặc Sản”</h6>
            <p style={{fontWeight: "lighter"}}>
                Phê La luôn trân quý, nâng niu những giá trị Nguyên Bản ở mỗi vùng đất mà chúng tôi đi qua, nơi tâm hồn
                được đồng điệu với thiên nhiên, với nỗi vất vả nhọc nhằn của người nông dân; cảm nhận được hết thảy
                những tầng hương ẩn sâu trong từng nguyên liệu.
            </p>
            <p style={{fontWeight: "500"}}>
                Một chặng đường dài đang chờ phía trước, Phê La đã sẵn sàng viết tiếp câu chuyện Nốt Hương Đặc Sản –
                Nguyên Bản – Thủ Công đầy cảm hứng và càng tự hào hơn khi được mang sứ mệnh: “Đánh thức những nốt hương
                đặc sản của nông sản Việt Nam”.
            </p>
        </div>
        <div className="img">
            <img src="https://phela.vn/wp-content/uploads/2021/07/HH_3783-600x400.jpg" alt="Cups"/>
        </div>
    </div>
);

const Vision = () => (
    <div className="vision-container">
        <div className="vision-icon">
            <img src="https://phela.vn/wp-content/uploads/2021/09/eyes.png" alt="Tầm nhìn" />
        </div>
        <h3>Tầm nhìn</h3>
        <p>Mang nguồn nông sản cao cấp của Việt Nam tiếp cận gần hơn với mọi người và vươn ra thế giới.</p>
    </div>
);

const Mission = () => (
    <div className="mission-container">
        <div className="mission-icon">
            <img src="https://phela.vn/wp-content/uploads/2021/09/Dm.png" alt="Sứ mệnh" />
        </div>
        <h3>Sứ mệnh</h3>
        <p>Đồng hành cùng người nông dân trong quá trình sản xuất và phát triển bền vững nguồn nguyên liệu đặc sản.</p>
    </div>
);

const VisionMission = () => (
    <div className="vision-mission-section">
        <Vision />
        <Mission />
    </div>
);
const CoreValues = () => (
    <section className="vc_section">
        <div className="vc_row wpb_row vc_row-fluid vc_custom_1629881969454 vc_row-has-fill">
            <div className="vc_column_container">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element">
                            <div className="wpb_wrapper">
                                <h2 style={{textAlign: 'center'}}>Giá trị cốt lõi</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CoreValueItems/>
        </div>
    </section>
);

const CoreValueItems = () => (
    <div className="vc_column_container">
        <div className="vc_column-inner">
            <div className="wpb_wrapper">
                <div className="post-about-us">
                    <div className="container">
                        <div className="row">
                            <CoreValueItem
                                imgSrc="https://phela.vn/wp-content/uploads/2023/04/306747764_452254516847273_1841154552179463204_n.jpg"
                                title="Thủ công"
                                description="Tại Phê La, sự tâm huyết, tỉ mỉ và tinh tế..."
                            />
                            <CoreValueItem
                                imgSrc="https://phela.vn/wp-content/uploads/2023/04/326386567_2808509185946106_3255994807608296453_n.jpg"
                                title="Quan tâm"
                                description="Tối ưu trải nghiệm của từng khách hàng..."
                            />
                            <CoreValueItem
                                imgSrc="https://phela.vn/wp-content/uploads/2023/04/shot-canh-toan_1.188.3-2.jpg"
                                title="Cảm hứng"
                                description="Mỗi sản phẩm, chiến dịch của Phê La..."
                            />
                            <CoreValueItem
                                imgSrc="https://phela.vn/wp-content/uploads/2023/04/336169980_215934231017041_7772223356356948632_n.jpg"
                                title="Trách nhiệm"
                                description="Phê La mong muốn tạo ra dấu ấn mạnh mẽ..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const CoreValueItem = ({imgSrc, title, description}) => (
    <div className="post-about">
        <div className="img">
            <a href="" title="">
                <img decoding="async" src={imgSrc} alt=""/>
            </a>
        </div>
        <div className="content">
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    </div>
);

const Achievements = () => (
    <section className="vc_section">
        <div className="vc_row wpb_row vc_row-fluid">
            <div className="vc_column_container">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element">
                            <div className="wpb_wrapper">
                                <h2 style={{textAlign: 'center'}}>Thành tựu nổi bật và đáng tự hào</h2>
                            </div>
                        </div>
                        <AchievementsList/>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const AchievementsList = () => (
    <div className="section-about-us">
        <div className="container">
            <div className="row">
                <div className="about-us">
                    <AchievementItem
                        imgSrc="https://phela.vn/wp-content/uploads/2021/09/eyes.png"
                        title="210.000+"
                        description="sản phẩm được bán ra trên thị trường..."
                    />
                    <AchievementItem
                        imgSrc="https://phela.vn/wp-content/uploads/2021/09/ezgif-7-dec41cab7982.png"
                        title="5836"
                        description="lần được nhắc đến trên Facebook và Instagram..."
                    />
                    <AchievementItem
                        imgSrc="https://phela.vn/wp-content/uploads/2021/09/Dm.png"
                        title="98%"
                        description="khách hàng hài lòng về chất lượng sản phẩm..."
                    />
                </div>
            </div>
        </div>
    </div>
);

const AchievementItem = ({imgSrc, title, description}) => (
    <div className="item">
        <div className="img">
            <img decoding="async" src={imgSrc} alt=""/>
        </div>
        <div className="content">
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    </div>
);

const Timeline = () => (
    <section className="vc_section">
        <div className="vc_row wpb_row vc_row-fluid">
            <div className="vc_column_container">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element">
                            <div className="wpb_wrapper">
                                <h2 style={{textAlign: 'center'}}>Những dấu ấn trong hành trình của chúng tôi</h2>
                            </div>
                        </div>
                        <TimelineList/>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TimelineList = () => (
    <div className="timeline_phela">
        <div className="container">
            <div className="row">
                <div className="timeline_slider">
                    <TimelineItem
                        imgSrc="https://phela.vn/wp-content/uploads/2021/07/DSC09528-750x500.jpg"
                        date="8/2020"
                        title="Phê La và những bước đi đầu tiên"
                        description="Thương hiệu Phê La được đăng ký bảo hộ..."
                    />
                    <TimelineItem
                        imgSrc="https://phela.vn/wp-content/uploads/2021/09/DSC06584-scaled-1.jpg"
                        date="8/3/2021"
                        title="Ra mắt thị trường"
                        description="Phê La chính thức xuất hiện trên thị trường..."
                    />
                    <TimelineItem
                        imgSrc="https://phela.vn/wp-content/uploads/2021/07/DSC06167-750x500.jpg"
                        date="16/3/2021"
                        title="Phủ sóng các kênh bán hàng online"
                        description="Lần lượt xuất hiện trên các ứng dụng giao hàng..."
                    />
                    <TimelineItem
                        imgSrc="https://phela.vn/wp-content/uploads/2021/11/Untitled-1.jpg"
                        date="22/05/2021"
                        title="Mở rộng và phát triển"
                        description="Phê La mở chi nhánh thứ hai tại Lý Thường Kiệt..."
                    />
                    <TimelineItem
                        imgSrc="https://phela.vn/wp-content/uploads/2021/11/Phe-La-DL-1.jpg"
                        date="8/11/2021"
                        title="Phê La chính thức mở chi nhánh thứ ba"
                        description="Phê La chính thức mở chi nhánh thứ ba tại Đại La..."
                    />
                </div>
            </div>
        </div>
    </div>
);

const TimelineItem = ({imgSrc, date, title, description}) => (
    <div className="timeline_item">
        <div className="img">
            <a href="" title="">
                <img decoding="async" src={imgSrc} alt=""/>
            </a>
            <p>{date}</p>
        </div>
        <div className="content">
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    </div>
);

export default AboutUs;