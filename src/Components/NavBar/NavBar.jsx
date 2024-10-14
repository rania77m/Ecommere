import React from 'react';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
import logo from '../../Assets/Frame 168.png';
import style from './NavBar.module.css';
import { IoPersonAddSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";

export default function NavBar() {
  return (
    <div>
      
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'} > 
    <img className={`${style.logo}`} src={logo} alt="" /></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to={'shop'}>Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to={'cart'}>Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to={'contact'}>Contact</Link>
        </li>
             </ul>

             <ul className='navbar-nav ms-auto mb-2'>

<div className={`${style.navItem}`}  >
  <i className={`${style.Item}`}><IoPersonAddSharp/></i>
  <i className={`${style.Item}`}><FiSearch/></i>
  <i className={`${style.Item}`}><FaRegHeart/></i>

  <i >  <Link  className={`${style.Item}`}  to={'cart'}><BsCart3/> </Link>
  </i>

</div>
          
        
        
             </ul>
    </div>
  </div>
</nav>

  </div>
);



  
}
