import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaClock,
  FaUsers,
  FaPlaneArrival,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaStar,
  FaCar,
  FaGem,
  FaBolt,
} from "react-icons/fa";

import "./Vehicles.css";

function Vehicles() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2000&q=90",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000&q=90",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2000&q=90",
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=2000&q=90",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const vehicles = [
    {
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1800&q=90",
      category: "EXECUTIVE",
      name: "Mercedes E-Class",
      type: "EXECUTIVE SEDAN",
      passengers: "3 Guests",
      luggage: "2 Bags",
      description:
        "Quiet, refined and effortless. Designed for airport arrivals, business travel and private Berlin touring.",
      features: [
        "Professional chauffeur",
        "Airport pickup",
        "Complimentary waiting",
        "Private city touring",
      ],
      price: "€89",
      unit: "TRANSFER",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=90",
      category: "PREMIUM",
      name: "BMW 5 Series",
      type: "PREMIUM SEDAN",
      passengers: "3 Guests",
      luggage: "2 Bags",
      description:
        "A modern premium sedan for elegant transfers and comfortable journeys across Berlin.",
      features: [
        "Private transfer",
        "Business travel",
        "Hotel pickup",
        "City transfers",
      ],
      price: "€99",
      unit: "TRANSFER",
    },
    {
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1800&q=90",
      category: "LUXURY",
      name: "Mercedes S-Class",
      type: "LUXURY SEDAN",
      passengers: "3 Guests",
      luggage: "3 Bags",
      description:
        "A first-class Berlin journey for guests who want more space, privacy and elevated comfort.",
      features: [
        "Luxury chauffeur",
        "Priority airport pickup",
        "Premium interior",
        "Flexible city travel",
      ],
      price: "€149",
      unit: "TRANSFER",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1800&q=90",
      category: "GROUP",
      name: "Mercedes V-Class",
      type: "LUXURY VAN",
      passengers: "6 Guests",
      luggage: "6 Bags",
      description:
        "Spacious and comfortable group mobility for families, friends, corporate guests and private tours.",
      features: [
        "Up to 6 guests",
        "Large luggage space",
        "Airport transfers",
        "Private group touring",
      ],
      price: "€129",
      unit: "TRANSFER",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1800&q=90",
      category: "SUV",
      name: "Range Rover",
      type: "LUXURY SUV",
      passengers: "4 Guests",
      luggage: "4 Bags",
      description:
        "A commanding luxury SUV for guests who want extra space and a more distinctive way to explore Berlin.",
      features: [
        "Luxury SUV comfort",
        "Private chauffeur",
        "Extended city trips",
        "Flexible itinerary",
      ],
      price: "€159",
      unit: "TRANSFER",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1800&q=90",
      category: "BUSINESS",
      name: "Audi A6",
      type: "BUSINESS SEDAN",
      passengers: "3 Guests",
      luggage: "2 Bags",
      description:
        "A discreet business-class option for meetings, events, hotel transfers and city journeys.",
      features: [
        "Business travel",
        "Professional service",
        "Hotel transfers",
        "Event transportation",
      ],
      price: "€85",
      unit: "TRANSFER",
    },
  ];

  const tabs = [
    "ALL",
    "SEDAN",
    "LUXURY",
    "SUV",
    "GROUP",
  ];

  const filteredVehicles =
    activeTab === "ALL"
      ? vehicles
      : vehicles.filter((vehicle) => {
          if (activeTab === "SEDAN")
            return vehicle.type.includes("SEDAN");

          if (activeTab === "LUXURY")
            return (
              vehicle.category === "LUXURY" ||
              vehicle.category === "PREMIUM"
            );

          if (activeTab === "SUV")
            return vehicle.type.includes("SUV");

          if (activeTab === "GROUP")
            return vehicle.category === "GROUP";

          return true;
        });

  const services = [
    {
      icon: <FaPlaneArrival />,
      number: "01",
      title: "Airport Transfers",
      text: "Arrive at BER and move directly to your hotel, apartment or private destination.",
    },
    {
      icon: <FaMapMarkerAlt />,
      number: "02",
      title: "Private Touring",
      text: "Turn your vehicle into your base for a flexible Berlin day designed around your pace.",
    },
    {
      icon: <FaClock />,
      number: "03",
      title: "Hourly Chauffeur",
      text: "Keep your driver available while you move between meetings, restaurants and experiences.",
    },
    {
      icon: <FaUsers />,
      number: "04",
      title: "Group Mobility",
      text: "Comfortable transport for families, friends, corporate groups and private events.",
    },
  ];

  return (
    <main className="berlin-vehicles-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="vehicles-hero">

        <div className="vehicles-hero-slides">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`vehicles-hero-slide ${
                index === heroIndex ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </div>

        <div className="vehicles-hero-overlay" />
        <div className="vehicles-hero-grid" />

        <div className="container vehicles-hero-container">

          <div className="vehicles-hero-content">

            <div className="vehicles-eyebrow">
              <span />
              NOIR NEON MOBILITY
            </div>

            <h1>
              Move
              <br />
              <em>your way.</em>
            </h1>

            <p>
              Premium vehicles, private chauffeurs and
              effortless Berlin mobility designed around
              your journey.
            </p>

            <div className="vehicles-hero-actions">

              <a
                href="#vehicle-fleet"
                className="luxury-btn primary-btn"
              >
                Explore Fleet
                <FaArrowRight />
              </a>

              <Link
                to="/contact"
                className="luxury-btn outline-btn"
              >
                Request A Transfer
              </Link>

            </div>

            <div className="hero-mini-stats">

              <div>
                <strong>06</strong>
                <span>CURATED CARS</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>PRIVATE SERVICE</span>
              </div>

              <div>
                <strong>BER</strong>
                <span>AIRPORT READY</span>
              </div>

            </div>

          </div>

          <div className="vehicles-hero-side">

            <span>BERLIN</span>

            <strong>
              {(heroIndex + 1)
                .toString()
                .padStart(2, "0")}
            </strong>

            <small>
              AIRPORT
              <br />
              CITY
              <br />
              BEYOND
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="vehicles-marquee">

        <div className="marquee-track">

          {[1, 2].map((item) => (
            <div className="marquee-content" key={item}>

              <span>PRIVATE CHAUFFEUR</span>
              <i>◆</i>

              <span>BERLIN TRANSFERS</span>
              <i>◆</i>

              <span>LUXURY VEHICLES</span>
              <i>◆</i>

              <span>BER AIRPORT</span>
              <i>◆</i>

              <span>NOIR NEON</span>
              <i>◆</i>

              <span>PRIVATE TOURING</span>
              <i>◆</i>

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          INTRO / FEATURE
      ===================================================== */}

      <section className="vehicle-luxury-intro">

        <div className="container">

          <div className="luxury-intro-grid">

            <div className="luxury-intro-copy">

              <span className="section-eyebrow">
                THE NOIR NEON STANDARD
              </span>

              <h2>
                A better way
                <br />
                to move through
                <strong> Berlin.</strong>
              </h2>

              <p>
                Your vehicle is more than transportation.
                It becomes part of the Berlin experience —
                quiet when you need it, elegant when you want it,
                and completely tailored to your plans.
              </p>

              <Link
                to="/contact"
                className="luxury-text-link"
              >
                Build My Journey
                <FaArrowRight />
              </Link>

            </div>

            <div className="luxury-intro-cards">

              <div className="intro-feature-card">
                <FaGem />
                <span>01</span>
                <h3>Refined Comfort</h3>
                <p>
                  Premium interiors, generous space
                  and a calm environment.
                </p>
              </div>

              <div className="intro-feature-card">
                <FaShieldAlt />
                <span>02</span>
                <h3>Private Service</h3>
                <p>
                  Professional chauffeurs and
                  discreet door-to-door travel.
                </p>
              </div>

              <div className="intro-feature-card">
                <FaBolt />
                <span>03</span>
                <h3>Effortless Travel</h3>
                <p>
                  One smooth journey from airport
                  arrival to your final destination.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="vehicle-service-section">

        <div className="container">

          <div className="vehicle-section-head">

            <div>
              <span className="section-eyebrow">
                HOW WE MOVE
              </span>

              <h2>
                One city.
                <br />
                <strong>Every journey.</strong>
              </h2>
            </div>

            <p>
              From airport arrivals to private Berlin
              days, choose the service that fits your plans.
            </p>

          </div>

          <div className="vehicle-service-grid">

            {services.map((service) => (
              <div
                className="vehicle-service-item"
                key={service.number}
              >

                <div className="service-number">
                  {service.number}
                </div>

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <span className="service-line" />

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FLEET
      ===================================================== */}

      <section
        className="vehicle-fleet-section"
        id="vehicle-fleet"
      >

        <div className="container">

          <div className="vehicle-fleet-heading">

            <div>

              <span className="section-eyebrow">
                THE NOIR NEON FLEET
              </span>

              <h2>
                Choose your
                <br />
                <strong>comfort level.</strong>
              </h2>

            </div>

            <p>
              Executive sedans, luxury SUVs and spacious
              group vehicles selected for premium Berlin travel.
            </p>

          </div>


          {/* TABS */}

          <div className="vehicle-tabs">

            {tabs.map((tab) => (
              <button
                key={tab}
                className={
                  activeTab === tab
                    ? "active"
                    : ""
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}

          </div>


          {/* CARDS */}

          <div className="vehicle-grid">

            {filteredVehicles.map((vehicle, index) => (

              <article
                className="luxury-vehicle-card"
                key={vehicle.name}
              >

                <div className="luxury-card-image">

                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    loading={
                      index < 2
                        ? "eager"
                        : "lazy"
                    }
                  />

                  <div className="luxury-card-gradient" />

                  <span className="vehicle-category">
                    {vehicle.category}
                  </span>

                  <span className="vehicle-index">
                    {(index + 1)
                      .toString()
                      .padStart(2, "0")}
                  </span>

                  <div className="vehicle-image-name">
                    <small>{vehicle.type}</small>
                    <h3>{vehicle.name}</h3>
                  </div>

                </div>


                <div className="luxury-card-body">

                  <p className="vehicle-description">
                    {vehicle.description}
                  </p>

                  <div className="vehicle-specs">

                    <span>
                      <FaUsers />
                      {vehicle.passengers}
                    </span>

                    <span>
                      <FaCheck />
                      {vehicle.luggage}
                    </span>

                  </div>

                  <div className="vehicle-features">

                    {vehicle.features.map((feature) => (
                      <span key={feature}>
                        <FaCheck />
                        {feature}
                      </span>
                    ))}

                  </div>

                  <div className="luxury-card-bottom">

                    <div className="vehicle-price">

                      <small>FROM</small>

                      <strong>
                        {vehicle.price}
                      </strong>

                      <span>
                        / {vehicle.unit}
                      </span>

                    </div>

                    <Link
                      to="/contact"
                      className="round-arrow-btn"
                      aria-label={`Request ${vehicle.name}`}
                    >
                      <FaArrowRight />
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CHAUFFEUR IMAGE SECTION
      ===================================================== */}

      <section className="chauffeur-luxury-section">

        <div className="chauffeur-luxury-image" />

        <div className="chauffeur-luxury-overlay" />

        <div className="container">

          <div className="chauffeur-luxury-content">

            <span className="section-eyebrow">
              PRIVATE BERLIN
            </span>

            <h2>
              Berlin,
              <br />
              <strong>without</strong>
              <br />
              the friction.
            </h2>

            <p>
              Meet your chauffeur, settle into your
              vehicle and let the city unfold around you.
            </p>

            <div className="chauffeur-points">

              <span>
                <FaShieldAlt />
                Professional service
              </span>

              <span>
                <FaClock />
                Flexible timing
              </span>

              <span>
                <FaMapMarkerAlt />
                Door-to-door travel
              </span>

            </div>

            <Link
              to="/contact"
              className="luxury-btn primary-btn"
            >
              Plan My Transfer
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="vehicle-process-section">

        <div className="container">

          <div className="vehicle-section-head">

            <div>

              <span className="section-eyebrow">
                SIMPLE BY DESIGN
              </span>

              <h2 className="text-dark">
                From booking
                <br />
                to <strong>Berlin.</strong>
              </h2>

            </div>

          </div>


          <div className="vehicle-process-grid">

            <div className="process-card">
              <span>01</span>
              <div>
                <h3>Tell us your plan.</h3>
                <p>
                  Share your arrival, destination,
                  group size and preferred vehicle.
                </p>
              </div>
            </div>

            <div className="process-card">
              <span>02</span>
              <div>
                <h3>We match the ride.</h3>
                <p>
                  We'll help select the vehicle
                  and service style for your journey.
                </p>
              </div>
            </div>

            <div className="process-card">
              <span>03</span>
              <div>
                <h3>Meet & move.</h3>
                <p>
                  Meet your chauffeur and start
                  your Berlin journey without hassle.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TESTIMONIAL
      ===================================================== */}

      <section className="vehicle-testimonial">

        <div className="container">

          <div className="testimonial-box">

            <div className="testimonial-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <blockquote>
              “From the airport to dinner and back again,
              everything felt effortless. The car became
              part of the experience.”
            </blockquote>

            <div className="testimonial-author">
              <strong>ALEX & JULIA</strong>
              <span>
                LONDON · PRIVATE BERLIN ESCAPE
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="vehicles-final-cta">

        <div className="vehicles-final-bg" />

        <div className="vehicles-final-overlay" />

        <div className="container">

          <div className="vehicles-final-content">

            <span className="section-eyebrow">
              YOUR BERLIN STARTS HERE
            </span>

            <h2>
              Need a ride?
              <br />
              <strong>Let's move.</strong>
            </h2>

            <p>
              Airport pickup, private touring,
              business travel or group transport.
              Tell us what you need and we'll
              arrange the rest.
            </p>

            <Link
              to="/contact"
              className="luxury-btn primary-btn"
            >
              Request A Vehicle
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Vehicles;