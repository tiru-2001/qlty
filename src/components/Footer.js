import React from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
   <>
   <footer>
<div className="container-fluid co">
<div className="row footer_row justify-content-center align-items-center">
 <div className="col-md-9 footcol  ">
  
<div className="nav">
  <ul>
    <li>   
          <NavLink style={({isActive})=>{
        return {color:isActive?"grey":"white",textDecoration:isActive?"none":"none"}
      }}   to={"/"}>Home</NavLink>
    </li>
        <li >
          <NavLink style={({isActive})=>{
        return {color:isActive?"grey":"white",textDecoration:isActive?"none":"none"}
      }}  to={"/about"}>About</NavLink>
        </li>
  
        <li >
          <NavLink style={({isActive})=>{
        return {color:isActive?"grey":"white",textDecoration:isActive?"none":"none"}
      }}  to={"/contact"}>Contact</NavLink>
        </li>

        <li >
          <NavLink style={({isActive})=>{
        return {color:isActive?"grey":"white",textDecoration:isActive?"none":"none"}
      }}  to={"/services"}>Services</NavLink>
        </li>



  </ul>
</div>
 </div>
</div>
  <div className="row">
    <div className="col-md-12">
      <div className="signa">
        <h4 className="text-end">designed by:<span className='signature'> TiRuStEcHsOlUtIoNs</span></h4>
      </div>
    </div>
  </div>
</div>
</footer>

   </>
  )
}

export default Footer