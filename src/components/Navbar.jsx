import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch,
  FaArrowRight,
  FaCube,
  FaStar,
  FaCar,
  FaHotel,
  FaImages,
  FaBookOpen,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* =========================================================
     CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  ========================================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =========================================================
     CLOSE MENU
  ========================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  /* =========================================================
     NAV LINK CLASS
  ========================================================= */

  const navClass = ({ isActive }) =>
    `berlin-nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="berlin-header">

      <nav className="berlin-navbar">

        <div className="container-fluid berlin-nav-container">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="berlin-logo"
            onClick={closeMenu}
          >

            <span className="berlin-logo-mark">
              <span>B</span>
            </span>

            <span className="berlin-logo-content">

              <strong className="berlin-logo-title">
                NOIR NEON
              </strong>

              <span className="berlin-logo-city">
                B E R L I N
              </span>

            </span>

          </Link>


          {/* =================================================
              MAIN NAVIGATION
          ================================================= */}

          <div
            className={`berlin-nav-menu ${
              menuOpen ? "menu-open" : ""
            }`}
          >

            {/* =================================================
                MOBILE HEADER
            ================================================= */}

            <div className="mobile-nav-header">

              <div className="mobile-nav-title">

                <span>
                  EXPLORE
                </span>

                <strong>
                  NOIR NEON
                </strong>

                <small>
                  BERLIN
                </small>

              </div>

              <button
                type="button"
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>

            </div>


            {/* =================================================
                HOME
            ================================================= */}

            <NavLink
              to="/"
              end
              className={navClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>


            {/* =================================================
                ABOUT
            ================================================= */}

            <NavLink
              to="/about"
              className={navClass}
              onClick={closeMenu}
            >
              About
            </NavLink>


            {/* =================================================
                DESTINATIONS
                NO DROPDOWN
            ================================================= */}

            <NavLink
              to="/destinations"
              className={navClass}
              onClick={closeMenu}
            >
              Destinations
            </NavLink>


            {/* =================================================
                TOURS
                NO DROPDOWN
            ================================================= */}

            <NavLink
              to="/tours"
              className={navClass}
              onClick={closeMenu}
            >
              Tours
            </NavLink>


            {/* =================================================
                CONTACT
            ================================================= */}

            <NavLink
              to="/contact"
              className={navClass}
              onClick={closeMenu}
            >
              Contact
            </NavLink>


            {/* =================================================
                MORE
                LAST NAVIGATION ITEM
            ================================================= */}

            <div
              className="berlin-dropdown"
              ref={dropdownRef}
            >

              <button
                type="button"
                className={`berlin-nav-link berlin-dropdown-btn ${
                  moreOpen ? "dropdown-active" : ""
                }`}
                onClick={(event) => {
                  event.stopPropagation();
                  setMoreOpen((prev) => !prev);
                }}
                aria-expanded={moreOpen}
              >

                <span>
                  More
                </span>

                <FaChevronDown
                  className={
                    moreOpen
                      ? "chevron-rotate"
                      : ""
                  }
                />

              </button>


              {/* =================================================
                  MORE DROPDOWN
              ================================================= */}

              <div
                className={`berlin-dropdown-menu ${
                  moreOpen
                    ? "dropdown-show"
                    : ""
                }`}
              >

                {/* PACKAGES */}

                <Link
                  to="/packages"
                  onClick={closeMenu}
                >

                  <span className="dropdown-icon">
                    <FaCube />
                  </span>

                  <span className="dropdown-text">

                    <strong>
                      Packages
                    </strong>

                    <small>
                      Curated Berlin journeys
                    </small>

                  </span>

                  <FaArrowRight className="dropdown-arrow" />

                </Link>


                {/* EXPERIENCES */}

                <Link
                  to="/experiences"
                  onClick={closeMenu}
                >

                  <span className="dropdown-icon">
                    <FaStar />
                  </span>

                  <span className="dropdown-text">

                    <strong>
                      Experiences
                    </strong>

                    <small>
                      Things worth remembering
                    </small>

                  </span>

                  <FaArrowRight className="dropdown-arrow" />

                </Link>


                {/* VEHICLES */}

                <Link
                  to="/vehicles"
                  onClick={closeMenu}
                >

                  <span className="dropdown-icon">
                    <FaCar />
                  </span>

                  <span className="dropdown-text">

                    <strong>
                      Vehicles
                    </strong>

                    <small>
                      Move through Berlin
                    </small>

                  </span>

                  <FaArrowRight className="dropdown-arrow" />

                </Link>


                {/* HOTELS */}

                <Link
                  to="/hotels"
                  onClick={closeMenu}
                >

                  <span className="dropdown-icon">
                    <FaHotel />
                  </span>

                  <span className="dropdown-text">

                    <strong>
                      Hotels
                    </strong>

                    <small>
                      Stay somewhere memorable
                    </small>

                  </span>

                  <FaArrowRight className="dropdown-arrow" />

                </Link>


                {/* GALLERY */}

                <Link
                  to="/gallery"
                  onClick={closeMenu}
                >

                  <span className="dropdown-icon">
                    <FaImages />
                  </span>

                  <span className="dropdown-text">

                    <strong>
                      Gallery
                    </strong>

                    <small>
                      Berlin through our lens
                    </small>

                  </span>

                  <FaArrowRight className="dropdown-arrow" />

                </Link>


                {/* BLOG */}

                <Link
                  to="/blog"
                  onClick={closeMenu}
                >

                  <span className="dropdown-icon">
                    <FaBookOpen />
                  </span>

                  <span className="dropdown-text">

                    <strong>
                      Berlin Journal
                    </strong>

                    <small>
                      Stories from the city
                    </small>

                  </span>

                  <FaArrowRight className="dropdown-arrow" />

                </Link>

              </div>

            </div>


            {/* =================================================
                MOBILE PLAN BUTTON
            ================================================= */}

            <Link
              to="/contact"
              className="mobile-plan-btn"
              onClick={closeMenu}
            >

              <span>
                Plan Your Berlin
              </span>

              <FaArrowRight />

            </Link>

          </div>


          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div className="berlin-nav-actions">

            {/* SEARCH */}

            <button
              type="button"
              className="berlin-search-btn"
              aria-label="Search"
            >
              <FaSearch />
            </button>


            {/* PLAN YOUR BERLIN */}

            <Link
              to="/contact"
              className="berlin-plan-btn"
            >

              <span>
                Plan Your Berlin
              </span>

              <FaArrowRight />

            </Link>


            {/* MOBILE MENU */}

            <button
              type="button"
              className={`berlin-menu-btn ${
                menuOpen
                  ? "menu-btn-active"
                  : ""
              }`}
              onClick={() => {
                setMenuOpen((prev) => !prev);
                setMoreOpen(false);
              }}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >

              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}

            </button>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;