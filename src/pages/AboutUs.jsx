import HODframe from '../assets/img/frame-01 1.png';
import Header from '../Components/Header.jsx';
import Footer from './Footer';
function AboutUs() {
  return (
    <>

     <div className="MeetTheHODBigScreen">
    <div>
      <h2 className="meetTheHOD1">Meet The HOD</h2>
      <h5 className="meetTheHODWord1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h5>
    </div>
    <div>
      <img src={HODframe} alt="" className="MechatCrcleImg" />
    </div>
  </div>

  <div className="MeetTheHOD">
          <img src={HODframe} alt="" className="MechatCrcleImg" />
          <h2 className="meetTheHOD">Meet The Chef</h2>
          <h5 className="meetTheHODWord">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h5>
        </div>
    
    </>
    
   
  )
}

export default AboutUs