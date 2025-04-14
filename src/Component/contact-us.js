import React from "react";
import AppNavbar from "./header";
import Footer from "./footer";
import { Container } from "react-bootstrap";

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;
      
        const text = `Hello! I am ${name}. Email: ${email}, Phone: ${phone}. Message: ${message}`;
        const encodedText = encodeURIComponent(text);
      
        const whatsappURL = `https://wa.me/918892686720?text=${encodedText}`;
        window.open(whatsappURL, "_blank");
      };
      
  return (
    <>
    <AppNavbar />
    <div className="contact-page py-5">
        <Container>
      <h1 className="contact-title text-center mb-4">Contact Us</h1>

      <div className="row">
        <div className="col-md-6 contact-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" name="name" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" className="form-control" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" name="phone" className="form-control" placeholder="+91 9876543210" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-control" rows="4" placeholder="I need a cab on <Date> and from <Source> to <Destination>..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>

        <div className="col-md-6 contact-info">
          <h5>Reach Us At</h5>
          <p><strong>📞 Phone:</strong> <a href="tel:+917070914519">+91 70709 14519</a></p>
          <p><strong>📧 Email:</strong> <a href="devatours@gmail.com">devatours@gmail.com</a></p>
          <p><strong>📍 Address:</strong> Jamshedpur Baridih Vidyapati Nagar Sindhu Road, Near Patel Club</p>

          <div className="map-container mt-4">
          <iframe
            title="Deva Tours and Travels Location"
            src="https://www.google.com/maps?q=22.797901153564453,86.23770141601562&z=17&hl=en&output=embed"
            width="100%"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
      </Container>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;