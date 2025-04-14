import React from "react";
import AppNavbar from "./header";
import Footer from "./footer";
import { Container } from "react-bootstrap";
import CabCard from './cab-types';
import RoutePriceCard from './RoutePriceCard';

const cabTypes = [
  {
    image: '/assets/Dzire.jpeg',
    name: 'Swift Dzire',
    capacity: 4,
    rent: '₹1000',
    ratePerKm: '₹10/km'
  },
  {
    image: '/assets/Ertiga.jpeg',
    name: 'Ertiga',
    capacity: 6,
    rent: '₹1200',
    ratePerKm: '₹12/km'
  },
  {
    image: '/assets/InnovaCrysta.jpeg',
    name: 'Innova Crysta',
    capacity: 7,
    rent: '₹1600',
    ratePerKm: '₹16/km'
  },
];

function Services() {
  const routes = [
        { from: 'Jamshedpur', to: 'Ranchi', price: '₹1,599' },
        { from: 'Ranchi', to: 'Jamshedpur', price: '₹1,599' },
        { from: 'Jamshedpur', to: 'Kolkata', price: '₹5,000' },
        { from: 'Kolkata', to: 'Jamshedpur', price: '₹5,000' }
  ];
  return (
    <div className="services">
      <AppNavbar />
      <div className="popular-routes block layout">
        <h2>Popular Routes</h2>
        <p className="item mb-4">Travel hassle-free with our reliable cab services across major cities. Whether it's a business trip or a weekend getaway, we’ve got you covered!</p>
        <Container>
        <div className="route-prices-grid">
            <RoutePriceCard
            title="Tata → Ranchi (One Way)"
            prices={[
                { cab: 'Dzire', price: 1599 },
                { cab: 'Ertiga', price: 1799 },
                { cab: 'Innova Crysta', price: 2399 },
            ]}
            />
            <RoutePriceCard
            title="Tata → Kolkata (One Way)"
            prices={[
                { cab: 'Dzire', price: 5000 },
                { cab: 'Ertiga', price: 6500 },
                { cab: 'Innova Crysta', price: 8000 },
            ]}
            />
        </div>
        </Container>
      </div>
      <div className="cab-types layout">
        <h2>Outstation Cab Types & Pricing 🚗</h2>
        <h3 className="item mb-2">Choose Your Ride!</h3>
        <p className="item mb-4">We offer a wide range of cab options to suit every budget and need.</p>
        <Container className="cab-types-container">
            <div className="cab-types-grid">
                {cabTypes.map((cab, idx) => (
                <CabCard key={idx} {...cab} />
                ))}
            </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Services;