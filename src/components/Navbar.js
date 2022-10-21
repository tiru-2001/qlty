import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
           <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
  <NavLink   className="nav-link active logo" aria-current="page" to={"/"}>Quality Eggs</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink style={({isActive})=>{
        return {color:isActive?"red":"orange",textDecoration:isActive?"none":"none"}
      }}  className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>{
        return {color:isActive?"red":"orange",textDecoration:isActive?"none":"none"}
      }}  className="nav-link" to={"/about"}>About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink style={({isActive})=>{
        return {color:isActive?"red":"orange",textDecoration:isActive?"none":"none"}
      }}  className="nav-link" to={"/contact"}>Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>{
        return {color:isActive?"red":"orange",textDecoration:isActive?"none":"none"}
      }}  className="nav-link" to={"/services"}>Services</NavLink>
        </li>
 
 

        
    
      </ul>
   
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar