import React from 'react'
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedin  } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer id="footer">
            <div class="container">
                <h3>SafeHaven</h3>
                <p>Thank you for your interest in joining us in the fight against child abuse and neglect.</p>
                <div class="social-links">
                    <a href="#" class="twitter">
                        {/* <i class="bx bxl-twitter"></i> */}
                        <FaXTwitter />
                    </a>
                    <a href="#" class="facebook">
                        {/* <i class="bx bxl-facebook"></i> */}
                        <FaInstagram />
                    </a>
                    <a href="#" class="instagram">
                        {/* <i class="bx bxl-instagram"></i> */}
                        <FaFacebookF />
                    </a>
                    {/* <a href="#" class="google-plus">
                        <i class="bx bxl-skype"></i>
                    </a> */}
                    <a href="#" class="linkedin">
                        {/* <i class="bx bxl-linkedin"></i> */}
                        <FaLinkedin />
                    </a>
                </div>
                <div class="copyright">
                    &copy; Copyright <strong><span>SafeHaven</span></strong>. All Rights Reserved
                </div>
                {/* <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/selecao-bootstrap-template/ -->
        <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
      </div> */}
            </div>
        </footer>
    )
}

export default Footer