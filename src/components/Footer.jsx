import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="berlin-footer">

      {/* =====================================================
          FOOTER TOP
      ===================================================== */}

      <div className="container-fluid berlin-footer-container">

        {/* =================================================
            BRAND COLUMN
        ================================================= */}

        <div className="berlin-footer-brand">

          <Link to="/" className="berlin-footer-logo">

            <span className="footer-logo-mark">
              B
            </span>

            <span className="footer-logo-text">
              <strong>BERLIN</strong>
              <small>EUROPEAN CITY EXPERIENCE</small>
            </span>

          </Link>

          <p className="berlin-footer-description">
            Discover Berlin beyond the obvious.
            From historic streets and creative districts
            to underground culture, design, food and
            unforgettable city experiences.
          </p>

          <div className="berlin-footer-socials">

            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Pinterest"
            >
              <FaPinterestP />
            </a>

          </div>

        </div>

        {/* =================================================
            EXPLORE
        ================================================= */}

        <div className="berlin-footer-column">

          <span className="footer-column-label">
            EXPLORE
          </span>

          <h3>
            Berlin
          </h3>

          <div className="footer-links">

            <Link to="/about">
              About Berlin
            </Link>

            <Link to="/destinations">
              Destinations
            </Link>

            <Link to="/tours">
              Berlin Tours
            </Link>

            <Link to="/experiences">
              Experiences
            </Link>

            <Link to="/gallery">
              City Gallery
            </Link>

          </div>

        </div>

        {/* =================================================
            DISCOVER
        ================================================= */}

        <div className="berlin-footer-column">

          <span className="footer-column-label">
            DISCOVER
          </span>

          <h3>
            The City
          </h3>

          <div className="footer-links">

            <Link to="/packages">
              Travel Packages
            </Link>

            <Link to="/hotels">
              Hotels
            </Link>

            <Link to="/vehicles">
              Private Vehicles
            </Link>

            <Link to="/blog">
              Berlin Journal
            </Link>

            <Link to="/contact">
              Plan Your Berlin
            </Link>

          </div>

        </div>

        {/* =================================================
            CONTACT
        ================================================= */}

        <div className="berlin-footer-column berlin-footer-contact">

          <span className="footer-column-label">
            GET IN TOUCH
          </span>

          <h3>
            Say Hallo
          </h3>

          <div className="footer-contact-list">

            <a href="mailto:hello@noirberlin.com">

              <span className="footer-contact-icon">
                <FaEnvelope />
              </span>

              <span>
                hello@noirberlin.com
              </span>

            </a>

            <a href="tel:+493012345678">

              <span className="footer-contact-icon">
                <FaPhoneAlt />
              </span>

              <span>
                +49 30 123 456 78
              </span>

            </a>

            <div className="footer-contact-location">

              <span className="footer-contact-icon">
                <FaMapMarkerAlt />
              </span>

              <span>
                Berlin, Germany
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          NEWSLETTER / CTA STRIP
      ===================================================== */}

      <div className="berlin-footer-cta">

        <div className="container-fluid">

          <div className="footer-cta-content">

            <div>
              <span className="footer-cta-small">
                YOUR BERLIN STARTS HERE
              </span>

              <h2>
                Make Berlin
                <span> unforgettable.</span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="footer-cta-button"
            >
              Plan Your Berlin
              <FaArrowUp />
            </Link>

          </div>

        </div>

      </div>

      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="berlin-footer-bottom">

        <div className="container-fluid footer-bottom-container">

          <p>
            © {new Date().getFullYear()} Berlin European City
            Experience. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <Link to="/contact">
              Privacy
            </Link>

            <Link to="/contact">
              Terms
            </Link>

            <span>
              BERLIN · GERMANY
            </span>

          </div>

          <button
            type="button"
            className="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;