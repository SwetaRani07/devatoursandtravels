import React from "react";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img className="mb-2" height={100} src="../assets/main-logo-light.png" />
            <p>
              Reliable cab services. Book your next ride with us and
              enjoy safe and comfortable travel.
            </p>
          </div>

          <div className="col-md-2 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">Home</a>
              </li>
              <li>
                <a href="/services" className="footer-link">Services</a>
              </li>
              <li>
                <a href="/contact" className="footer-link">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3 contact">
            <h5>Contact</h5>
            <p><strong>Email:</strong> <a href="mailto:devatoursandtravels2969@gmail.com">devatoursandtravels2969@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+917070914519">+91 70709 14519</a></p>
            <p><strong>Location:</strong> Jamshedpur, Jharkhand</p>
          </div>

          <div className="col-md-3 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="footer-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="text-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} Deva Tours and Travels. All rights reserved.
        </p>
      </div>
      <WhatsAppButton />
    </footer>
  );
};

export default Footer;
