import React from "react";
import style from "./Checkout.module.css";
import Frame161 from "../../Assets/Frame161.png";
import { Link} from 'react-router-dom';
import Houselogo from "../../Assets/Houselogo.png";
import Rectangle1 from "../../Assets/Rectangle1.png";

export default function Checkout() {
  return (
    <>
       <div>
       
       <div className={`${style.container}`}>  
       <img className={`${style.Rectangle1}`} src={Rectangle1}  alt="Background" class="image"/>  
   <div className= {`${style.overlay}`}> 
   <img className={`${style.Houselogo}`} src={Houselogo} />

   <h1>Checkout </h1>

   <Link className={`${style.link }`} to="/">Home &gt; Checkout</Link>  
   </div>  
</div>  
</div>
      <div className={`${style.bill}`}>

        <div>
          <form>
            <h2>Billing details</h2>
            <div  className={`${style.input3}`}>
            <div className={`${style.input2}`}>
            <h5> FirstName </h5>
            <input               type="text"               name="firstName"
              placeholder="First Name"
              required             />
              </div>
              <div className={`${style.input2}`}>
              <h5>            LastName </h5>
            <input type="text" name="lastName" required /></div>
            </div>
            <div className={`${style.input1}`}>

<h5>             Company Name(Optional)</h5> 
            <input type="text" name="companyName" />
            </div>

            <div className={`${style.input1}`}>

            <h5>  country/Region </h5>            

            <select name="country">
              <option value="Sri Lanka">Sri Lanka</option>{" "}               <option value="Sri Lanka">Egypt</option>{" "}               <option value="Sri Lanka">Iraq</option>{" "}              <option value="Sri Lanka">Syria</option>
              <option value="Sri Lanka">Palstine</option>
            </select>            </div>

            <div className={`${style.input1}`}>

            <h5>    Street address</h5> <br />
            <input
              type="text"
              name="streetAddress"
              placeholder="Street address"
              required
            />
            </div>
                         <div className={`${style.input1}`}>
                         <h5>  Town / City </h5> <br />
            <input
              type="text"
              name="townCity"
              placeholder="Town / City"
              required
            />
                        </div>

                          <div className={`${style.input1}`}>

          <h5>   province </h5> 
            <select name="province">
              <option value="Western Province">Western Province</option>{" "}               <option value="Western Province">Western Province1</option>{" "}              <option value="Western Province">Western Province2</option>
            </select>
            </div>

            <div className={`${style.input1}`}>

            <h5>  ZIP code </h5>
            <input type="text" name="zipCode" placeholder="ZIP code" required />
            <div className={`${style.input1}`}>
            </div>
            <h5>  Phone </h5>  
            <input type="text" name="phone" placeholder="Phone" required />
            </div>

            <div className={`${style.input1}`}>
            <h5>   "Email address </h5> 
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />  </div>
            <div  className={`${style.input1}`}>
            <textarea
              name="additionalInfo"
              placeholder="Additional Information"
            /></div>
          </form>
        </div>
        <div className="order-summary">
          <h2>Product</h2>
          <p>Asgard sofa x 1</p>
          <p>Subtotal: Rs. 250,000.00</p>
          <p>Total: Rs. 250,000.00</p>

          <h5>Payment Method</h5>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Direct Bank Transfer"
            />
            Direct Bank Transfer
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="Cash On Delivery" />
            Cash On Delivery
          </label>

          <p>
            Your personal data will be used to support your experience
            throughout this website...
          </p>
          <button type="submit">Place order</button>
        </div>
      </div>
      <div>
        <img className={`${style.Frame161}`} src={Frame161} />
      </div>

    </>
  );
}
