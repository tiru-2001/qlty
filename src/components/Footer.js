import React from 'react';
import './footer.css';


const Footer = () => {
  return (
   <>
   <footer>
<div className="container-fluid">
<div className="row footer_row">
 <div className="col-md-12">
  <h1 className='text-center'>follow us on</h1>
  <div className="row justify-content-evenly">
    
  <div className="col-md-3 fontsicons_container text-center"> <a href="www.google.com">google</a></div>
  <div className="col-md-3 fontsicons_container text-center"><a href="https://www.linkedin.com/in/tirumalesha-e-20589221a/"><i className="fa-brands fa-linkedin fontsicons"></i></a></div>
  

  </div>
 </div>
</div>
  
</div>
</footer>
{/* <div className="col-md-3 fontsicons_container"></div>
<a href="https://github.com/tiru-2001">twinle</a> */}
   </>
  )
}

export default Footer