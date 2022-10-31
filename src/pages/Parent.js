import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './parent.css'

const Parent = () => {
  return (
    <>
   <div className="containerss">
   <Navbar/>
   </div>
 
    <Outlet/>
    <Footer/>
  
    </>

  )
}

export default Parent