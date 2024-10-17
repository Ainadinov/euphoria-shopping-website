import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import styleFooter from  "./footer.module.css"

function Footer(){
    return(
        <div className={styleFooter.footer}>
            <div className={styleFooter.footer__items}>
               <div className={styleFooter.footer__columns}>
                    <h5>Need Help</h5>
                    <div>
                        <a href="#">Contact Us</a>
                        <a href="#">Track Order</a>
                        <a href="#">Returns & Refunds</a>
                        <a href="#">FAQ's</a>
                        <a href="#">Career</a>
                    </div>
               </div>
               <div className={styleFooter.footer__columns}>
                    <h5>Company</h5>
                    <div>
                        <a href="#">About Us</a>
                        <a href="#">euphoria Blog</a>
                        <a href="#">euphoriastan</a>
                        <a href="#">Collaboration</a>
                        <a href="#">Media</a>
                    </div>
               </div>
               <div className={styleFooter.footer__columns}>
                    <h5>More Info</h5>
                    <div>
                        <a href="#">Term and Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Shipping Policy</a>
                        <a href="#">Sitemap</a>
                    </div>
               </div>
               <div className={styleFooter.footer__columns}>
                    <h5>Location</h5>
                    <div>
                        <a href="#">support@euphoria.in</a>
                        <a href="#">Eklingpura Chouraha, Ahmedabad Main Road</a>
                        <a href="#">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</a>
                    </div>
               </div>
            </div>
            <div className={styleFooter.social}>
                <div className={styleFooter.social__app}>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <IoLogoInstagram/>
                    <FaLinkedinIn/>
                </div>
                <div className={styleFooter.social__download}>
                    <h5>Download The App </h5>
                    <div>
                        <img src="/img/Footer/google.png" alt="#" />
                        <img src="/img/Footer/apple.png" alt="#" />
                    </div>
                </div>
            </div>
            <div className={styleFooter.copyright}>
                Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;