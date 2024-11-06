import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ProductModal.css';
import { CartContext } from '../../../context/CartContext';

export default function ProductModal(props) {
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useContext(CartContext);

  const incrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0)
    }));
  };

  let prdDetail;
  if (Object.keys(props).length > 0) {
    prdDetail = props.prdDetail;
  }

  const handleBuyNow = () => {
    const quantity = quantities[props.prdDetail.id] || 0;
    addToCart({ ...props.prdDetail, quantity });
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [props.prdDetail.id]: 0
    }));
  };

  return (
      <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
        <Modal.Body style={{ width: "100%" }}>
          <div className='containerDetail'>
            <div className='containerDetail__l'>
              <img width={400} src={prdDetail?.image} alt="" />
            </div>
            <div className='containerDetail__r'>
              <p style={{ fontSize: 30, fontWeight: 600 }}>{prdDetail?.name}</p>
              <p style={{ fontSize: 20, color: "brown" }}>Giá: {prdDetail?.price}</p>
              <div className='quantity'>
                <Button className="btnDetail" size="lg" onClick={() => decrementQuantity(prdDetail?.id)}>
                  -
                </Button>{' '}
                <p style={{ fontSize: 25, marginTop: 15 }}>{quantities[prdDetail?.id] || 0}</p>
                <Button className="btnDetail" size="lg" onClick={() => incrementQuantity(prdDetail?.id)}>
                  +
                </Button>{' '}
              </div>
              <Button style={{backgroundColor: '#b85c38', borderColor: '#b85c38' }} variant="primary" size="lg" onClick={handleBuyNow}>
                Mua Ngay
              </Button>{' '}
            </div>
          </div>
        </Modal.Body>
      </Modal>
  );
}