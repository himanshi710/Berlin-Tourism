import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";

import "./TopBar.css";

function TopBar() {
  return (
    <div className="berlin-topbar">
      <div className="container berlin-topbar-inner">

        {/* LEFT */}
        <div className="berlin-topbar-left">

          <span className="topbar-item">
            <FiMapPin />
            Berlin, Germany
          </span>

          <span className="topbar-divider"></span>

          <span className="topbar-item">
            <FiPhone />
            +49 30 1234 5678
          </span>

        </div>


        {/* RIGHT */}
        <div className="berlin-topbar-right">

          <span className="topbar-status">
            <span className="status-dot"></span>
            Available 24/7
          </span>

          <span className="topbar-divider"></span>

          <a href="#contact" className="topbar-link">
            <FaEnvelope />
            Contact
          </a>

          <a href="#" className="topbar-social">
            <FaInstagram />
          </a>

          <a href="#" className="topbar-social">
            <FaFacebookF />
          </a>

          <span className="topbar-language">
            EN <span>⌄</span>
          </span>

        </div>

      </div>
    </div>
  );
}

export default TopBar;