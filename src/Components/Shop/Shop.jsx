// import React, { useState, useEffect, useContext } from 'react';  
import style from './Shop.module.css';  
import Rectangle1 from "../../Assets/Rectangle1.png";  
import Frame161 from "../../Assets/Frame161.png";  
import { Link } from 'react-router-dom';  
import Houselogo from "../../Assets/Houselogo.png";  
// import axios from 'axios';  
// import toast from "react-hot-toast";  
// import { CartContext } from "../../Context/CartContext";  
import OurProducts from "../OurProducts/OurProducts"
import Group63 from "../../Assets/Group63.png"

const Shop = () => {  
return(
  <>
<div className={style.container}>  
         <img className={style.Rectangle1} src={Rectangle1} alt="Background" />  
        <div className={style.overlay}>  
           <img className={style.Houselogo} src={Houselogo} alt="House Logo" />  
          <h1>Shop</h1>  
          <Link className={`${style.link }`} to="/">Home &gt; Shop</Link>  
        </div>  
    </div>  


<div>
<img className={style.Group63} src={Group63} alt="Group63" />  

</div>
< OurProducts/>
<div className={`${style.buttons }`}>
<button className={`${style.button }`}> 1</button>
<button className={`${style.button }`}>2</button>
<button className={`${style.button }`}>3</button>
<button className={`${style.button }`}>next</button>
</div>
<div>  
        <img className={style.Frame161} src={Frame161} alt="Frame" />  
      </div>  
      </>
)

 };  

export default Shop;
