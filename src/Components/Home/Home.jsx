import React, { useState, useEffect } from "react";  
import style from "./Home.module.css";  
import backG1 from "../../Assets/backG1.png";  
import Mask1 from "../../Assets/Mask1.png";  
import Mask3 from "../../Assets/Mask3.png";  
import livingroom from "../../Assets/livingroom.png";  
import Featured4 from "../../Assets/Featured4.png";  
import Featured6 from "../../Assets/Featured6.png";  
import Featured7 from "../../Assets/Featured7.png";  
import Share from "../../Assets/Share.png";  
import OurProducts from "../OurProducts/OurProducts"
import { Link} from 'react-router-dom';

export default function Home() {  
  const [currentSlide, setCurrentSlide] = useState(0);  
  const slides = [  
    Featured7,  
    Featured6,  
    Featured4,  
  ];  

  const totalSlides = slides.length;  

  const showSlide = (index) => {  
    setCurrentSlide((prevIndex) => (index + totalSlides) % totalSlides);  
  };  

  const changeSlide = (direction) => {  
    showSlide(currentSlide + direction);  
  };  
  
  return (  
    <>  
      <div>  
        <div className={`${style.container1 }`}>  
          <img className={`${style.backG1}`} src={backG1} alt="Background 1" />  
          <div class={`${style.overlay}`} >  
            <p>New Arrival</p>  
            <h1>Discover Our <br /> New Collection</h1>  
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>  
            <Link to={"shop"}> <button className= {`${style.buynow}`}>BUY NOW</button>  </Link> 
        </div>   
        </div>  

        <div className={`${style.textContent}`}> 
          <br /> 
          <h1>Browse The Range</h1>  
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>  
        </div>  

        <div className={`${style.threephoto}`}>  
          <div>  
            <img className={`${style.Mask1}`} src={Mask1} alt="Dining" />  
            <h3>Dining</h3>  
          </div>  
          <div>  
            <img className={`${style.livingroom}`} src={livingroom} alt="Living" />  
            <h3>Living</h3>  
          </div>  
          <div>  
            <img className={`${style.Mask3}`} src={Mask3} alt="Bedroom" />  
            <h3>Bedroom</h3>  
          </div>  
        </div>  


<br />

        <div className={`${style.second}`}>  
          <h1 className="title1">Our Products</h1>  
          < OurProducts/>

        
        </div>   
        
        <div className={`${style.container}`}>  
          <div className="left">  
            <h1>50+ Beautiful Rooms Inspiration</h1>  
            <p>Our designer already made a lot of beautiful prototypes of rooms that inspire you.</p>  
            <button className="button">Explore More</button>  
          </div>  

          <div className={`${style.slider}`}> 
            <div className="slides" style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(${-currentSlide * 100}%)` }}>  
              {slides.map((slide, index) => (  
                <div className="slide" key={index} style={{ minWidth: '100%' }}>  
                  <img className={`${style.Featured7}`} src={slide} alt={`Slide ${index + 1}`} />  
                </div>  
              ))}  
            </div>  
            <button className="nav-button prev" onClick={() => changeSlide(-1)}>&#10094;</button>  
            <button className="nav-button next" onClick={() => changeSlide(1)}>&#10095;</button>  
          </div>  
        </div>  

        <div>  
          <div>  
            <img className={`${style.Share}`} src={Share} alt="Share" />  
          </div>  
        </div>  
      </div>  
    </>  
  );  
}