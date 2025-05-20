import React from "react";
import AppNavbar from "./header";
import Footer from "./footer";
import { Container } from "react-bootstrap";
import { TbClock24, TbBuildingAirport } from "react-icons/tb";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { GiCash, GiPathDistance } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";

function Home() {
  return (
    <div>
      <AppNavbar />
      <div className="banner">
        <Container className="pt-4">
          <h1>Rental Cars</h1>
          <h3>Ride with Confidence, Choose Our Transportation.</h3>
          <div className="banner-content">
            <div className="d-flex">
              <TbClock24 />
              <p><strong>24/7 Availability:</strong> Day or night, we're ready to pick you up.</p>
            </div>
            <div className="d-flex">
              <BsFillTaxiFrontFill />
              <p><strong>Professional Drivers:</strong> Courteous, experienced, and knowledgeable about local routes.</p>
            </div>
            <div className="d-flex">
              <GiCash />
              <p><strong>Affordable Rates:</strong> Competitive pricing with no hidden fees.</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="popular-routes layout">
        <h2>Driven by Safety, Powered by Trust</h2>
        <p className="item">We created our taxi company to help you find the most dependable and highest quality taxi services, anytime and anywhere. All our drivers are professional and fully licensed.</p>
        <a className="btn" href="/services">See Our Popular Routes and Pricing</a>
        <Container className="block d-flex">
          <div className="content">
            <img src="../assets/address-pickup.jpg" alt="Image for Address Pickup" />
            <div className="d-flex">
              <MdLocationOn /><h4>Address Pickup</h4>
            </div>
            <p>We always pick up our clients on time, 24/7 availability.</p>
          </div>
          <div className="content">
          <img src="../assets/airport-transfer.jpg" alt="Image for Airport Transfer" />
            <div className="d-flex">
              <TbBuildingAirport />
              <h4>Airport Transfer</h4>
            </div>
            <p>Our cab service is available 24 hours a day to get you to and from the airport with experienced drivers.</p>
          </div>
          <div className="content">
          <img src="../assets/49c123e84c0b364ae659be4b5e61c93a.jpg" alt="Image for long distance service" />
            <div className="d-flex">
              <GiPathDistance />
              <h4>Long Distance</h4>
            </div>
            <p>No matter how far you need to go, we offer long distance service for client choice and quality.</p>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Home;