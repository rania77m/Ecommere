import React from "react";
import style from "./Contact.module.css";
import Rectangle1 from "../../Assets/Rectangle1.png";
import Frame161 from "../../Assets/Frame161.png";
import { Link } from "react-router-dom";
import Houselogo from "../../Assets/Houselogo.png";
import { FaMapMarkerAlt } from 'react-icons/fa';  
import { FaPhone } from 'react-icons/fa';  
import { FaRegClock } from 'react-icons/fa';  


export default function Contact() {
  return (
    <>
      <div>
        <div className={`${style.container}`}>
          <img
            className={`${style.Rectangle1}`}
            src={Rectangle1}
            alt="Background"
            class="image"
          />
          <div className={`${style.overlay}`}>
            <img className={`${style.Houselogo}`} src={Houselogo} />

            <h1>Contact </h1>

            <Link className={`${style.link }`} to="/">Home &gt; Contact</Link>  
            </div>
        </div>

      <div class="container">
        <div className={`${style.contact}`}>
          <div className={`${style.contacttitle}`}>
            <h2>Get In Touch With Us</h2>
            <p>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us <br /> An Email. Our Staff Always Be There To Help
              You Out. Do Not Hesitate!
            </p>
          </div>
          <div className={`${style.contact1}`}>
            <div className={`${style.contact2}`}>
              <p>
                <span class="icon">  < FaMapMarkerAlt color="green"/></span>
                <strong>  Address:</strong> <br />236 5th SE Avenue, New <br />York NY10000,
                United States
              </p>
              <br />
              <p>
                <span class="icon"><FaPhone color="blue"/></span>
                <strong>  Phone: </strong>{" "}
              </p>
              <p>
                <strong>  Mobile:</strong> +(84) 546-6789
              </p>{" "}
              <p>
                <strong> Hotline:</strong> +(84) 546-6789
              </p>
              <br />
              <p>
                <span class="icon">        <FaRegClock color="orange" />  
                </span>{" "}
                <p>
                  <strong>Working Time:</strong> <br /> Monday-Friday: 9:00 - <br />22:00
                </p>{" "}
                <p> Saturday-Sunday: 9:00 - <br />21:00</p>{" "}
              </p>
            </div>
            <div className={`${style.contact2}`}>               <h2>Contact Us</h2>
              <form>
                <label for="name">Your name</label>                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Abc"
                  required
                />

                <label for="email">Email address</label>                 <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Abc@def.com"
                  required
                />

                <label for="subject">Subject</label>                                   <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is an optional"
                />

                <label for="message">Message</label>                 <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Hi! I’d like to ask about"
                  required
                ></textarea>

                <button type="submit" class="submit-btn">                   Submit                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div>
        <img className={`${style.Frame161}`} src={Frame161} />
      </div>
    </>
  );
}
