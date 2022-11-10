//Basic imports 
import React from "react";
import "./Modal.css";

//Packages imports
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const modal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span>Order {props.order['order_id']}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ color: 'black', padding: '10px' }}>
          <h2> Order Details </h2>
          <ul className="orderDetailsList">
            <li>
              <span><b>Order Date :</b></span> {' '}
              <span> {props.order['created']} </span>
            </li>
            <li>
              <span><b>Order Items :</b><br /></span>
              {props.order.order_items.map(orderItems => (
                <span >
                  <img
                    src={orderItems.product_img_url}
                    className='product-image'
                    alt='...'
                  />
                  <span style={{ lineHeight: '30px' }}><b>({orderItems.quantity})</b> {' '} {orderItems.name} {' '} <b>{orderItems.price} {' '} {props.order['currency']}</b>  <br /></span>
                </span>
              ))}
            </li>
            <li>
              <span><b>Order Total :</b></span> {' '}
              <span> {props.order.total_order_amount} {' '} {props.order['currency']} </span>
            </li>
            <li>
              <span><b>Events For Session ID : </b></span> {' '}
              <span> {props.order.session_id} </span>
            </li>
            <li>
              {props.order.event_types.map(eventTypes => (
                <span>{eventTypes.createdDate} {' '} {eventTypes.createdTime} {' '} {' '} {eventTypes.event_type}<br /></span>
              ))}
            </li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default modal;