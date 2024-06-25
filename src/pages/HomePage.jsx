import Header from '../Components/Header.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import Faq from '../pages/Faq.jsx'
import Footer from '../pages/Footer.jsx'
import Carousel from './Carousels.jsx';
import FixedOverflow from '../Components/FixedOverflow.jsx';


const HomePage = () => {
  return (
    <>
     
       
     <Header />

        <div className="HomeDesign">

         

          <h2 className='IntroductionWord'>Swift Kitchen offers you lots of varieties just to satisfy your cravings at any time; </h2>
          <Carousel />
         
        
      {/* <a href="https://wa.me/2347033019219" >ololjkhb</a> */}
     
    </div>
        

        
        <AboutUs />

       

      

     
    
        <Faq />

        
        <FixedOverflow />

        <Footer />
       
      
    </>
  );
};

export default HomePage;
