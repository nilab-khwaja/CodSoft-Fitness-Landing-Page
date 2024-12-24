import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-about">
                        <h3>Fitness Hub</h3>
                        <p>Your go-to platform for achieving fitness goals with expert guidance and personalized programs.</p>
                    </div>
                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Fitness Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
