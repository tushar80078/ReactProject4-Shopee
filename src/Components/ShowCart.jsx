import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar';
import Modal from "react-bootstrap/Modal";
import { addMore,removeFromCart } from '../slices/newSlicer';
const ShowCart = () => {
    const cartData=useSelector(state=>state.newSlicer.cartItems);
    const [count,setCount]=useState(0);
    const dispatch=useDispatch();
    const increaseQunatity=(item)=>{
      dispatch(addMore(item));
    }

    const decreaseQunatity=(item)=>{
      dispatch(removeFromCart(item));
    }

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [det,setDetails]=useState({});
  const details = (item) => {
    setDetails(item);
    console.log(item);
    handleShow();
    

  };

  const totalPrice=(item)=>{
    return item.quantity*item.price
  }
    
  return (
    <div className='m-1'>
        <div className='mt-1'><NavBar/></div>
      

        <div className='' style={{paddingTop:"5rem"}}>
        <table className="table">
  <thead>
    <tr>
     
      <th scope="col">Item Name</th>
      <th scope="col">Details</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total Price</th>
      <th scope="col">Add/Remove</th>
    </tr>
  </thead>
  <tbody>
    
  
         {
            cartData.map((ele,i)=>{
                return <tr>
                
                <td>{ele.title}</td>
                <td><button onClick={()=>details(ele)} className='btn btn-dark btn-sm'>Details</button></td>
                <td>{ele.price}</td>
                <td>{ele.quantity}</td>
                <td>{totalPrice(ele)}</td>
                <td><button className='btn btn-info btn-sm' onClick={()=>increaseQunatity(ele)} >Add</button>
                    <button className='btn btn-danger  btn-sm m-1' onClick={()=>decreaseQunatity(ele)}>Remove</button></td>
              </tr>
              
            })
        }
        </tbody>
</table>
        </div>
        
        <div>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Item Details</Modal.Title>
              <button className="closeButton" onClick={handleClose}>
                {" "}
                <sup>x</sup>
              </button>
            </Modal.Header>
            <Modal.Body>
              <div class="cardContainer" style={{ width: "18rem" }}>
                <img src={det.image} class="card-img-top" alt="..." />
                
              </div>
              <div class="card-body" >
                  <h5 class="card-title" >{det.title}</h5>
                  <h6 className="card-title">Price : {det.price}</h6>
                  <p class="card-text">
                   {det.description}
                    </p>
                 
                </div>
            </Modal.Body>
          </Modal>
        </>
      </div>
       
    </div>
  )
}

export default ShowCart