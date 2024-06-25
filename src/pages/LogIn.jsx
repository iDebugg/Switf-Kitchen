import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';



const LogIn = () => {
  const navigate = useNavigate();
  return (
    
      <div className="logInImgContainer">
        
        <h5 className="WelcomeMsg" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
          Hi there, Welcome To <h2 className='brandName'>SWIFT KITCHEN </h2> We're excited to have you join us
          
        </h5>

        <h5 className="WelcomeMessage" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
          Hi there, Welcome To <span className='brandName'>SWIFT KITCHEN </span> <br /> We're excited to have you join us
          
        </h5>
        
        <button onClick={()=>navigate("/HomePage")} className="logINBtn">Check Us Out</button>
      </div>
  
  );
};

export default LogIn;
