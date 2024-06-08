import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';



const LogIn = () => {
  const navigate = useNavigate();
  return (
    <div className="LoginPg">
      <div className="logInImgContainer">
        
        <h5 className="WelcomeMsg" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
          Hi there, Welcome To <span className='brandName'>SWIFT KITCHEN </span> We're excited to have you join us
          
        </h5>
        
        <button onClick={()=>navigate("/HomePage")} className="logINBtn">Check Us Out</button>
      </div>
    
    </div>
  );
};

export default LogIn;
