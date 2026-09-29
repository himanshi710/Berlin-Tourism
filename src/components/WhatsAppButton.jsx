import { FaWhatsapp } from "react-icons/fa";

import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "493012345678";

  const message = encodeURIComponent(
    "Hello, I would like to plan my Berlin trip."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="berlin-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-pulse"></span>

      <span className="whatsapp-icon">
        <FaWhatsapp />
      </span>

      <span className="whatsapp-text">
        <small>PLAN YOUR TRIP</small>
        <strong>WhatsApp Us</strong>
      </span>
    </a>
  );
}

export default WhatsAppButton;