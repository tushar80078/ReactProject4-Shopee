import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import newSlicer from '../slices/newSlicer'
import { Link } from 'react-router-dom'
Link
//import './NavBar.css'

const NavBar = () => {
    const items=useSelector(state=>state.newSlicer.totalCartItems);
    //console.log(items);
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="">
          <Link to={"/show"} style={{textDecoration:"none"}}><p className='h3 font-weight-bold text-light todays-offer' style={{cursor:"pointer"}}>Shopping Store <FontAwesomeIcon icon={faShoppingBag}  /></p>
       </Link>
           </div>
        <div className="mr-3">
          <Link to={"/cart"} style={{textDecoration:"none"}} >  <p className='h2 font-weight-bold text-light' style={{cursor:"pointer"}}>Cart <FontAwesomeIcon style={{fontSize:"27px"}} icon={faShoppingCart} /> <sup className='h5' style={{color:"white",fontWeight:"bold"}}>{items>0?items:""}</sup></p>
        </Link>
        </div>
       
      </nav>
    </div>
  )
}

export default NavBar
