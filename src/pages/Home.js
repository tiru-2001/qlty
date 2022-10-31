import React from 'react'
import './home.css'


const Home = () => {
  return (
  <>
 
    <div  className="container-fluid home-container">
 
      <div  className="row home-row justify-content-center align-items-center">
    
        <div className="col-md-12 home-col text-center">
        <h1 className="main-heading">Welcome to Quality eggs</h1><br />
        <h3 className=" subheading">Best whole sale price available</h3><br />
        <h1 className="main-heading">Home delivery</h1>
       


        </div>
      </div>

      <div className="row sse justify-content-center align-items-center">
        <div className="col-md-6 text-center fam-img">
        <img  className='imgs' src={process.env.PUBLIC_URL+"images/egg1.jpg"} />
        </div>
        <div className="col-md-3  paras text-center">
        <h2 className='welco'>Welcome to quality eggs website</h2>
        <div className="para">
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, rem optio! Amet enim repellendus culpa eius libero ipsa quos in perferendis ex asperiores porro, pariatur beatae explicabo error, voluptatum odio?</h4>
        </div>
         
         </div>
        
      </div>

      <div className="row facirow text-center">
        <div className="col-md-12 facCol">
        <h1 className='facilitate'>Facilities</h1>
        <div className="facilities_container">
          <div className="fcchild">
            <h2>wholesale price</h2>
            <div className="icons"><i className="fa-solid fa-wifi"></i></div>
          </div>
          <div className="fcchild">
              <h2>home delivery within 10kms</h2>
             <div className="icons"> <i className="fa-solid fa-shield"></i></div>
          </div>
          <div className="fcchild">
             <h2>quality eggs</h2>
            <div className="icons"><i className="fa-solid fa-person"></i></div>
          </div>
        </div>

        </div>
      </div>
    </div>
  </>
  )
}

export default Home