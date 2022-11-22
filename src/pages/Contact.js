import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css'

const Contact = () => {
  return (
 <>
 <div className="container-fluid ">
    <div className="row contact-row justify-content-center align-items-center">
    <div className="col-md-10">
<h1 className='contact text-center'>Contact Us</h1>
    </div>
     
    </div>
    <div  className="row contactSub justify-content-center">
      <div className="col-md-10 gettouch">
     <h1 className='text-center getheading'>get in touch</h1>
     <div  className="row justify-content-evenly">
      <div className="col-md-3 touchSub">
        <h3 className='text-center'>Phone</h3>
        <h2   style={{color:" rgb(154, 78, 12)"}} className='text-center'><i className="fa-solid fa-phone"></i></h2>
       <h2 className='text-center'> <a className='numbersmail' href="tel:9945305778"> 9945305778</a> </h2>
        
      </div>
      <div className="col-md-3 touchSub">
        <h3  className='text-center'>Address</h3>
        <h2  style={{color:" rgb(154, 78, 12)"}} className='text-center'><i className="fa-solid  fa-location-dot"></i></h2>
        <h4 className='text-center'>Trinity complex,
        Ujire,Belthangady,
        Dakshina Kannada</h4>
      </div>
      <div className="col-md-3 touchSub">
     
        <h3 className='text-center'>Email</h3>
        <h2   style={{color:" rgb(154, 78, 12)"}}className='text-center'><i className="fa-solid fa-envelope"></i></h2>
        <h4 className='text-center'>  <a className='numbersmail' href="mailto: qualityeggs@gmail.com">qualityeggs@gmail. <br/> com</a> </h4>
      </div>
     </div>
      </div>
    </div>
  </div>
 </>
  )
}

export default Contact