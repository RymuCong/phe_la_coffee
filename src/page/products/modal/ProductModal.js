import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductModal.css';
import useStore from '../../../service/store';

export default function ProductModal(props) {
  const { prdDetail, onHide} = props;
  const [quantities, setQuantities] = useState({});
  const addToCart = useStore((state) => state.addToCart);

  const incrementQuantity = (productId) => {
    setQuantities(prevQuantities => {
      const newQuantity = (prevQuantities[productId] || 0) + 1;
      if (newQuantity > 10) {
        toast.error('Max quantity for this product is 10', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return prevQuantities;
      }
      return {
        ...prevQuantities,
        [productId]: newQuantity
      };
    });
  };

  const decrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0)
    }));
  };

  const handleBuyNow = () => {
    const currentCartQuantity = useStore.getState().cart.find(item => item.id === props.prdDetail.id)?.quantity || 0;
    const newQuantity = quantities[props.prdDetail.id] || 0;
    const totalQuantity = currentCartQuantity + newQuantity;

    if (totalQuantity <= 10) {
      for (let i = 0; i < newQuantity; i++) {
        addToCart({ ...props.prdDetail, quantity: 1 });
      }
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [props.prdDetail.id]: 0
      }));
      toast.success('Product added to cart successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Max quantity for this product is 10', {
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

  return (
      <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={onHide}
      >
        <Modal.Body style={{ width: "100%" }}>
          <Button onClick={onHide} className="close-button">
            &times;
          </Button>
          <ToastContainer />
          <div className='containerDetail'>
            <div className='containerDetail__l'>
              <img width={400} src={prdDetail?.image} alt="" />
            </div>
            <div className='containerDetail__r'>
              <p style={{fontSize: 30, fontWeight: 600}}>{prdDetail?.name}</p>
              <p style={{fontSize: 20, color: "brown"}}>Giá: {prdDetail?.price}</p>
              <div className='quantity'>
                <Button className="btnDetail" size="lg" onClick={() => decrementQuantity(prdDetail?.id)}>
                  -
                </Button>{' '}
                <p style={{fontSize: 25, marginTop: 15}}>
                  {quantities[prdDetail?.id] || prdDetail?.quantity || 0}
                </p>
                <Button className="btnDetail" size="lg" onClick={() => incrementQuantity(prdDetail?.id)}>
                  +
                </Button>{' '}
              </div>
              <Button style={{backgroundColor: '#b85c38', borderColor: '#b85c38'}} variant="primary" size="lg"
                      onClick={handleBuyNow}>
                Mua Ngay
              </Button>{' '}
            </div>
          </div>
        </Modal.Body>
      </Modal>
  );
}