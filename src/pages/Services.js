import React from 'react';
import './services.css'

const Services = () => {
  return (
   <>
 <div className="container-fluid service-c ">
    <div className="row service-row justify-content-center align-items-center">
    <div className="col-md-10">
<h1 className='service text-center'>Services</h1>
    </div>
     
    </div>
    <div className="row ServiceRow">
      <div className="col-md-12 ServColm">
        <h1  style={{color:" rgb(154, 78, 12)"}} className='text-center'>Our Services</h1>
        <div className="row justify-content-around">
          <div className="col-md-3 servc">
          <h2  style={{color:" rgb(154, 78, 12)"}} className='text-center'><i className="fa-solid fa-house-user"></i></h2>
            <h3 className='text-center'>Home delivery <br /> within 10km </h3>
          </div>
          <div className="col-md-3 servc">
          <h2  style={{color:" rgb(154, 78, 12)"}} className='text-center'><i className="fa-solid fa-truck"></i></h2>
            <h3 className='text-center'>line sale</h3>
          </div>
          <div className="col-md-3 servc">
          <h2  style={{color:" rgb(154, 78, 12)"}} className='text-center'><i className="fa-solid fa-egg"></i></h2>
            <h3 className='text-center'> large size egg</h3>
        
          </div>
        </div>
      </div>
    </div>
  </div>









  
   </>
  )
}

export default Services