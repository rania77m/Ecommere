import React, { useContext } from "react";  
import { Link } from 'react-router-dom';  
import Rectangle1 from "../../Assets/Rectangle1.png";  
import style from "./ShopCart.module.css"
import Frame161 from "../../Assets/Frame161.png";  
import Houselogo from "../../Assets/Houselogo.png";  
import { CartContext } from "../../Context/CartContext";  
import { BallTriangle } from "react-loader-spinner";  
import toast from 'react-hot-toast';  

export default function ShopCart() {  
  const { cartItems, removeFromCart } = useContext(CartContext);  
  const [loading, setLoading] = React.useState(false); 

  const handleRemove = (itemId) => {  
    removeFromCart(itemId);  
    toast.success('Item removed from cart');  
  };  

  return (  
    <>  
      <div className={`${style.container}`}>  
        <img className={`${style.Rectangle1}`} src={Rectangle1} alt="Background" />  
        <div className={`${style.overlay}`}>   
          <img className={`${style.Houselogo}`} src={Houselogo} alt="House Logo" />  
          <h1>Shopping Cart</h1>  
          <Link className={`${style.link }`} to="/">Home &gt; Shop Cart</Link>  
        </div>  
      </div>  
      <div className={`${style.shopping}`}>  
        <h2>Shopping Cart</h2>  
        {loading ? (  
          <BallTriangle  
            height={50}  
            width={50}  
            radius={5}  
            color="#4fa94d"  
            ariaLabel="ball-triangle-loading"  
            visible={true}  
          />  
        ) : (  
<>
          <div className={style.cartContainer}>  
            {cartItems.length === 0 ? (  
              <p>Your cart is empty.</p>  
            ) : (  
              <ul>  
                {cartItems.map((item) => (  
                  <li key={item.id} className={style.cartItem}>  
                    {Array.isArray(item.images) && item.images.length > 0 ? (
                      <img src={item.images[0]} alt={item.title} style={{ width: '50px', height: 'auto' }} />
                    ) : (
                      <img src={item.image} alt={item.title} style={{ width: '50px', height: 'auto' }} />
                    )}
                    <div>  
                      <h4>{item.title}</h4>  
                      <p>{item.price} EGP</p>  
                      <p>Quantity: {item.quantity}</p>
                    </div>  
                    <button onClick={() => handleRemove(item.id)}>Remove</button>  
                  </li>  
                ))}  
              </ul>  
            )}  
          </div>  
          </>
        )}  
<button  className={`${style.cart}`}><Link to={'cart'}>Cart</Link> </button>
<button  className={`${style.checkout}`} ><Link to={'checkout'}>Checkout</Link> </button>
<button>Comparison</button>

      </div> 
      
      <div>

</div> 
      <img className={`${style.Frame161}`} src={Frame161} alt="Frame" />  
    </>  
  );  
}
