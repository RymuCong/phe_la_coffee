import React, {useEffect, useState} from 'react';
import './AboutUs.css';
import Header from "../../components/Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {handleGetDataHomePage} from "../../service/store";

const AboutUs = () => {

    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await handleGetDataHomePage();
                const timelineData = response.find(name => name.name === "timeline").data;
                setTimelineData(timelineData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <Header/>
            <Banner/>
            <div className="about-us-page">
                <AboutUsElement/>
                <VisionMission/>
                <CoreValues/>
                <Achievements/>
                <Timeline timelineData={timelineData}/>
            </div>
        </div>
    );
};

const Banner = () => (
    <div className="banner_page">
        <img src="https://phela.vn/wp-content/uploads/2021/07/banner-web-.jpg" alt="Banner" className="banner_image"/>
        <div className="banner_text">
            <h2>VỀ PHÊ LA</h2>
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

const VisionMission = () => (
    <div className="vision-mission-section">
        <div className="vision-container">
            <div className="vision-icon">
                <img src="https://phela.vn/wp-content/uploads/2021/09/eyes.png" alt="Tầm nhìn"/>
            </div>
            <h4>Tầm nhìn</h4>
            <p>Mang nguồn nông sản cao cấp của Việt Nam tiếp cận gần hơn với mọi người và vươn ra thế giới.</p>
        </div>
        <div className="mission-container">
            <div className="mission-icon">
                <img src="https://phela.vn/wp-content/uploads/2021/09/Dm.png" alt="Sứ mệnh"/>
            </div>
            <h4>Sứ mệnh</h4>
            <p>Đồng hành cùng người nông dân trong quá trình sản xuất và phát triển bền vững nguồn nguyên liệu đặc
                sản.</p>
        </div>
    </div>
);

const CoreValues = () => (
    <div className="core-values">
        <div className="line"></div>
        <div className="section">
            <div className="text">
                <h4>Thủ Công</h4>
                <p>
                    Tại Phê La, sự tâm huyết, tỉ mỉ và tinh tế được thể hiện qua từng
                    sản phẩm. Những lá trà Ô long được thu hoạch và sơ chế thủ công,
                    kết hợp cùng việc nghiên cứu và sáng tạo, Phê La đã làm nên những
                    sản phẩm mang hương vị nguyên bản và chân thật nhất.
                </p>
            </div>
            <div className="image">
                <img
                    src="https://phela.vn/wp-content/uploads/2023/04/326386567_2808509185946106_3255994807608296453_n.jpg"
                    alt="Thủ Công"
                />
                <div className="dot"></div>
            </div>
        </div>
        <div className="section reverse">
            <div className="image">
                <img
                    src="https://phela.vn/wp-content/uploads/2023/04/336169980_215934231017041_7772223356356948632_n.jpg"
                    alt="Cảm Hứng"
                />
                <div className="dot"></div>
            </div>
            <div className="text">
                <h4>Cảm Hứng</h4>
                <p>
                    Mỗi sản phẩm, chiến dịch của Phê La đều được xây dựng dựa theo
                    những nguồn cảm hứng rất đỗi bình dị trong cuộc sống. Với Phê La,
                    đó là nơi bắt nguồn của những điều mới mẻ và kết nối những tâm hồn
                    đồng điệu nhưng vẫn mang cá tính riêng biệt.
                </p>
            </div>
        </div>
        <div className="section">
            <div className="text">
                <h4>Quan Tâm</h4>
                <p>
                    Tối ưu trải nghiệm của từng khách hàng là tiêu chí hàng đầu của
                    Phê La. Đó cũng là lý do mọi dịch vụ, sản phẩm của Phê La luôn
                    xoay quanh yếu tố con người. Phê La tin rằng, khách hàng - hay
                    rộng hơn là cộng đồng sẽ luôn sát cánh cùng thương hiệu và lan tỏa
                    những giá trị tốt đẹp đến xã hội.
                </p>
            </div>
            <div className="image">
                <img
                    src="https://phela.vn/wp-content/uploads/2023/04/shot-canh-toan_1.188.3-2.jpg"
                    alt="Quan Tâm"
                />
                <div className="dot"></div>
            </div>
        </div>
        <div className="section reverse">
            <div className="image">
                <img
                    src="https://phela.vn/wp-content/uploads/2023/04/306747764_452254516847273_1841154552179463204_n.jpg"
                    alt="Trách Nhiệm"
                />
                <div className="dot"></div>
            </div>
            <div className="text">
                <h4>Trách Nhiệm</h4>
                <p>
                    Phê La mong muốn tạo ra dấu ấn mạnh mẽ cho Ô Long đặc sản khi sát
                    cánh cùng người nông dân và đề cao sự phát triển bền vững của
                    nguồn nguyên liệu. Bởi chúng tôi tin rằng đây sẽ là bước đệm vững
                    chắc giúp Phê La giới thiệu rộng rãi đặc sản của người Việt tới
                    cộng đồng và vươn ra thế giới.
                </p>
            </div>
        </div>
    </div>
);

const Achievements = () => (
    <section className="achievements">
        <h4>Thành tựu nổi bật và đáng tự hào</h4>
        <div className="section-about-us">
            <div className="container">
                <div className="row">
                    <div className="about-us">
                        <AchievementItem
                            imgSrc="https://phela.vn/wp-content/uploads/2021/09/eyes.png"
                            title="210.000+"
                            description="sản phẩm được bán ra trên thị trường trong vòng 5 tháng kinh doanh trong tình hình dịch bệnh căng thẳng"
                        />
                        <AchievementItem
                            imgSrc="https://phela.vn/wp-content/uploads/2021/09/ezgif-7-dec41cab7982.png"
                            title="5836"
                            description="lần được nhắc đến trên Facebook và Instagram trong vòng 4 tháng (từ 15/03/2021 đến 15/07/2021) (theo Sprout Social)"
                        />
                        <AchievementItem
                            imgSrc="https://phela.vn/wp-content/uploads/2021/09/Dm.png"
                            title="98%"
                            description="khách hàng hài lòng về chất lượng sản phẩm và dịch vụ của Phê La (theo đánh giá trên Baemin và Shopee Fresh)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const AchievementItem = ({imgSrc, title, description}) => (
    <div className="achievement-item">
        <div className="img">
            <img decoding="async" src={imgSrc} alt=""/>
        </div>
        <div className="content">
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
);

const Timeline = ({ timelineData}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="timeline_phela">
            <h4 style={{textAlign: 'center'}}>Những dấu ấn trong hành trình của chúng tôi</h4>
            <Slider {...settings}>
                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        image={item.image}
                        date={item.date}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </Slider>
        </div>
    );
};

const TimelineItem = ({ image, date, title, description }) => (
    <div className="timeline-item">
        <div className="img">
            <img src={image} alt="" className="timeline_img"/>
            <p className="timeline-date">{date}</p>
        </div>
        <div className="text_content">
            <h6 className="timeline_title">{title}</h6>
            <p className="timeline_description">{description}</p>
        </div>
    </div>
);
export default AboutUs;