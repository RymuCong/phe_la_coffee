import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useStore from '../../service/store';
import './Checkout.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import {FaMinus, FaPlus, FaTrash} from 'react-icons/fa';
import {formatPrice} from "../../utils/FormatPrice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const cart = useStore((state) => state.cart);
    const updateQuantity = useStore((state) => state.updateQuantity);
    const removeFromCart = useStore((state) => state.removeFromCart);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        address: '',
        phone: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Vui lòng nhập họ và tên'),
        address: Yup.string().required('Vui lòng nhập địa chỉ'),
        phone: Yup.string().required('Vui lòng nhập số điện thoại')
    });

    const handleQuantityChange = (id, quantity) => {
        if (quantity <= 10) {
            updateQuantity(id, quantity);
        } else {
            toast.error('Max quantity for a product is 10', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    };

    const handleSubmit = (values, { setSubmitting }) => {
        const hasInvalidQuantity = cart.some(item => item.quantity > 10);
        if (hasInvalidQuantity) {
            toast.error('Max quantity for a product is 10', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setSubmitting(false);
            return;
        }
        alert('Checkout successful!');
        navigate('/');
        setSubmitting(false);
    };

    return (
        <div>
            <Header/>
            <div className="checkout">
                <ToastContainer />
                <section className="h-100">
                    <MDBContainer className="py-5 h-100">
                        <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol md="10">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                                        Shopping Cart
                                    </MDBTypography>
                                </div>
                                <MDBCard className="rounded-3 mb-4">
                                    <MDBRow className="justify-content-between align-items-center">
                                        <MDBCol md="2" lg="2" xl="2">
                                            <p className="lead fw-normal mb-2"></p>
                                        </MDBCol>
                                        <MDBCol md="3" lg="3" xl="3">
                                            <h5 className="lead fw-normal mb-2">Tên sản phẩm</h5>
                                        </MDBCol>
                                        <MDBCol md="3" lg="3" xl="2">
                                            <h5 className="lead fw-normal mb-2">Số lượng</h5>
                                        </MDBCol>
                                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                            <h5 className="lead fw-normal mb-2">Giá</h5>
                                        </MDBCol>
                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                            <h5 className="lead fw-normal mb-2"></h5>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCard>
                                {cart.map(item => (
                                    <MDBCard className="rounded-3 mb-4" key={item.id}>
                                        <MDBCardBody className="p-4">
                                            <MDBRow className="justify-content-between align-items-center">
                                                <MDBCol md="2" lg="2" xl="2">
                                                    <MDBCardImage className="rounded-3" fluid src={item.image}
                                                                  alt={item.name}/>
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="3">
                                                    <p className="lead fw-normal mb-2">{item.name}</p>
                                                </MDBCol>
                                                <MDBCol md="3" lg="3" xl="2"
                                                        className="d-flex align-items-center justify-content-around">
                                                    <MDBBtn color="link" className="px-2"
                                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                                                        <FaMinus />
                                                    </MDBBtn>

                                                    <MDBInput min={0} value={item.quantity} type="number" size="sm"
                                                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}/>

                                                    <MDBBtn color="link" className="px-2"
                                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                                        <FaPlus/>
                                                    </MDBBtn>
                                                </MDBCol>
                                                <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        {formatPrice(item.price)} VNĐ
                                                    </MDBTypography>
                                                </MDBCol>
                                                <MDBCol md="1" lg="1" xl="1" className="text-end">
                                                    <a href="#!" className="text-danger" onClick={() => handleRemoveItem(item.id)}>
                                                        <FaTrash/>
                                                    </a>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                ))}
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBTypography tag="h5" className="mb-0">
                                            Total: {formatPrice(totalPrice)} VNĐ
                                        </MDBTypography>
                                        <MDBBtn className="ms-3" color="warning" block size="lg">
                                            Checkout
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
                <div className="contact-form-container">
                    <h3>Shipping Details</h3>
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
                                        name="name"
                                        placeholder="Họ và tên*"
                                        className="form-input"
                                    />
                                    <ErrorMessage name="name" component="div" className="error-message"/>
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        name="address"
                                        placeholder="Địa chỉ*"
                                        className="form-input"
                                    />
                                    <ErrorMessage name="address" component="div" className="error-message"/>
                                </div>
                                <div className="form-group">
                                    <Field
                                        type="text"
                                        name="phone"
                                        placeholder="Số điện thoại*"
                                        className="form-input"
                                    />
                                    <ErrorMessage name="phone" component="div" className="error-message"/>
                                </div>
                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isSubmitting}
                                >
                                    Đặt hàng
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Checkout;