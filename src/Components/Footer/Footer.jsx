import React from 'react';
import style from './Footer.module.css';



const Footer = () => {
    return (
        <>
            <footer>
<hr />
                <div className={`${style.container1}`}>
                    <div>
                        <h3>Funiro.</h3>
                        <p>400 University Drive Suite 200 Coral
                             Gables,
                            <br /> FL 33134 USA</p>
                    </div>
                    <div className={`${style.nav1}`}>
                    <p>links</p>
                        <ul class={`${style.links}`}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={`${style.nav2}`}>
                    <p>help</p>
                        <ul className={`${style.help}`}>
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Privacy Policies</a></li>
                        </ul>
                        </div>
                        <div class="newsletter">
                        <p>Newsletter</p>
                        <input type="email" placeholder="Enter Your Email Address" />
                        </div>
                        <div>

                        <button>SUBSCRIBE</button>
                    </div>
                   
                </div>
                <div className={`${style.bottom}`}>
                        <p>2023 Funiro. All rights reserved.</p>
                    </div>
            </footer>
        </>
    );
};

export default Footer;
