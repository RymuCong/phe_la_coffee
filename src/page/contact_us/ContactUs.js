import './ContactUs.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {toast, ToastContainer} from "react-toastify";

const ContactUs = () => {
    return (
        <div>
            <Header/>
            <ToastContainer />
            <div className="contact-us">
                <Info/>
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    );
};

const Info = () => (
    <div className="info">
        <div className="form-info">
            <h2>Phê La &#8211; Nốt Hương Đặc Sản</h2>
            <div className="item">
                <div className="icon">
                    <img src="https://phela.vn/wp-content/themes/florist/assets/img/75.png"
                         alt=""/>
                </div>
                <div className="text">
                    <p><strong>Địa chỉ:</strong></p>
                    <p>Trụ sở chính: 289 Đinh Bộ Lĩnh, Phường 26, Quận Bình Thạnh, Thành phố Hồ Chí Minh</p>
                    <p>Chi nhánh Đà Lạt: 7 Nguyễn Chí Thanh, phường 1, Thành phố Đà Lạt, tỉnh Lâm Đồng</p><p>Chi
                    nhánh Hà Nội: Lô 04-9A Khu công nghiệp Vĩnh Hoàng, phường Hoàng Văn Thụ, quận Hoàng Mai, Hà
                    Nội</p>
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <img src="https://phela.vn/wp-content/themes/florist/assets/img/76.png"
                         alt=""/>
                </div>
                <div className="text">
                    <p><strong>Hotline:</strong></p>
                    <p>1900 3013</p>
                </div>
            </div>
            <div className="item">
                <div className="icon">
                    <img src="https://phela.vn/wp-content/themes/florist/assets/img/77.png"
                         alt=""/>
                </div>
                <div className="text">
                    <p><strong>Email:</strong></p>
                    <p>info@phela.vn</p>
                </div>
            </div>
        </div>
    </div>
)


const ContactForm = () => {
    const initialValues = {
        fullName: '',
        email: '',
        content: ''
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Vui lòng nhập họ và tên'),
        email: Yup.string()
            .email('Email không hợp lệ')
            .required('Vui lòng nhập email'),
        content: Yup.string().required('Vui lòng nhập nội dung')
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
        toast.info('Shop Phê La cảm ơn vì nội dung phản hồi của bạn!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };


    return (
        <div className="contact-form-container">
            <h2>Liên hệ</h2>
            <p className="form-description">
                Vui lòng điền đầy đủ thông tin theo yêu cầu để chúng tôi có thể hỗ trợ quý khách tốt nhất.
            </p>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className="form-group">
                            <Field
                                type="text"
                                name="fullName"
                                placeholder="Họ và tên*"
                                className="form-input"
                            />
                            <ErrorMessage name="fullName" component="div" className="error-message"/>
                        </div>

                        <div className="form-group">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email*"
                                className="form-input"
                            />
                            <ErrorMessage name="email" component="div" className="error-message"/>
                        </div>

                        <div className="form-group">
                            <Field
                                as="textarea"
                                name="content"
                                placeholder="Nội dung"
                                className="form-textarea"
                            />
                            <ErrorMessage name="content" component="div" className="error-message" />
                        </div>

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            Gửi
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactUs;