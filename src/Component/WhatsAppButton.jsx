import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "917070914519";
  const message = encodeURIComponent("Hi, I’m interested in booking a cab!");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="tooltip-text">Chat with us</span>
      <i className="fab fa-whatsapp whatsapp-icon"></i>
    </a>
  );
};

export default WhatsAppButton;
