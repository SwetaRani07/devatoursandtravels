import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillCalculator } from "react-icons/ai";
import PriceCalculatorModal from './PriceCalculatorModal';


const AppNavbar = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <header >
            <Container className="d-flex align-center">
                <div style={{fontWeight: 500}}>Jamshedpur’s Trusted Cab Service <br className="m-block"/>– On Time, Every Time!</div>
                <div className="d-flex border-section">
                    <div className="round-border"><a href="tel:+917070914519"><PiPhoneCallDuotone /> 24X7 | +91-7070914519</a></div>
                    <div className="round-border">
                        <a href="mailto:devatours24x7@gmail.com"><HiOutlineMail /> devatours24x7@gmail.com </a>
                    </div>
                </div>
                </Container>
            </header>
            
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    <img src="../assets/main-logo-light.png" width="150" alt="Deva Tours and Travels Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/services")}>Services</Nav.Link>
                        <Nav.Link onClick={() => navigate("/contact-us")}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="fare-calculator d-flex">
                    <button className="btn glow-btn pulse" onClick={() => setShowModal(true)}>
                        <AiFillCalculator/> Calculate Fare
                    </button>
                </div>
            </Container> 
        </Navbar>
        <PriceCalculatorModal show={showModal} onClose={() => setShowModal(false)} />
        </div>
    );
};

export default AppNavbar;