import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../thunk/api_thunk";
import { addToCart } from "../slices/newSlicer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

Link;
const ShowData = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState();
  const notify = () =>
    toast.success("Item Added To The Cart !!", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notify2 = () =>
    toast.warn("Item Already Added.", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [det,setDetails]=useState({});

  const selector = useSelector((state) => state.newSlicer.data);
  const cartItemData = useSelector((state) => state.newSlicer.cartItems);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleClick = (id) => {
    dispatch(addToCart(id));
    checkCartItems(id);
  };

  const checkCartItems = (item) => {
    const findData = cartItemData.find((ite) => ite.id == item.id);
    if (findData) {
      notify2();
    } else {
      notify();
    }
  };

  const details = (item) => {
    setDetails(item);
    console.log(item);
    handleShow();
    

  };

  return (
    <div className="m-1 ">
      <NavBar />
      <ToastContainer />
      {selector.map((ele, i) => {
        return (
          <div
            key={i}
            className="card cardItems "
            style={{ width: "18rem", marginTop: "5rem" }}
          >
            <div>
              <img
                style={{ height: "20rem" }}
                className="card-img-top p-3"
                src={ele.image}
                alt="Card image cap"
              />
            </div>

            <div className="card-body">
              <h5 className="card-title ">{ele.title}</h5>
              <p className="card-text"> Price {ele.price}</p>
              <a
                onClick={() => handleClick(ele)}
                style={{ color: "white" }}
                className="btn btn-dark btn-sm"
              >
                Add To Cart
              </a>
              <button
                className="btn btn-info btn-sm mr-1"
                style={{ float: "right" }}
                onClick={() => details(ele)}
              >
                Details
              </button>
            </div>
          </div>
        );
      })}

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
  );
};

export default ShowData;
