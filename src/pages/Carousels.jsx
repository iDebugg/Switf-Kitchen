import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/img/Jollof-Rice-Final-Image-683x1024.jpg';
import image2 from '../assets/img/Pounded-Yam-and-egusi-soup.jpg';
import image3 from '../assets/img/eforiro-eko-1.jpeg';
import image4 from '../assets/img/stirfrySpaghetti.jpg'
import image5 from '../assets/img/plate-mashed-beans-diced-fried-600nw-578272357.webp'
import '../styles/Carousel.css'

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, // Show one slide at a time
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (3 seconds)
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="carousel-wrapper">
        <Slider {...settings}>

          <div className="slide">
            <img src={image1} alt="Slide 1" />
            <div className="text">
              <h3 className='fooddName'>Party Jollof </h3>
              <p className='fooddNameSub'>Party jollof is a one pot, tomato and pepper infused rice with a layer of crispy rice at the bottom.</p>
            </div>
          </div>
          <div className="slide">
            <img src={image2} alt="Slide 2" />
            <div className="text">
              <h3 className='fooddName'>Iyan & Egusi</h3>
              <p className='fooddNameSub'>Egusi made with a higher quantity of green vegetables and assorted meats accompanied with any swallow</p>
            </div>
          </div>
          <div className="slide">
            <img src={image3} alt="Slide 3" />
            <div className="text">
              <h3 className='fooddName'>Semo & Eforiro</h3>
              <p className='fooddNameSub'>Eforiro is a great dish to really spice up those greens and enjoy eating them with desirable fluffy swallow. </p>
            </div>
          </div>
          <div className="slide">
            <img src={image4} alt="Slide 3" />
            <div className="text">
              <h3 className='fooddName'>Stir Fry Spaghetti</h3>
              <p className='fooddNameSub'>Eforiro is a great dish to really spice up those greens and enjoy eating them with desirable fluffy swallow. </p>
            </div>
          </div>
          <div className="slide">
            <img src={image5} alt="Slide 3" />
            <div className="text">
              <h3 className='fooddName'>Ewa Agoyin & Bread</h3>
              <p className='fooddNameSub'>Ewa Agoyin a high proteinous beans mashed with love to give the sweet taste and an after taste satisfaction </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  };
    
export default Carousel;
