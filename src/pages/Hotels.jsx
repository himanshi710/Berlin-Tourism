import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBed,
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaCoffee,
  FaSpa,
  FaCheck,
  FaConciergeBell,
  FaGlassMartiniAlt,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";

import "./Hotels.css";

function Hotels() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const hotels = [
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
      name: "The Mitte House",
      category: "BOUTIQUE",
      type: "BOUTIQUE",
      location: "Berlin Mitte",
      rating: "4.9",
      price: "€189",
      description:
        "A design-led city stay surrounded by galleries, cafés, architecture and the everyday energy of Berlin Mitte.",
      features: [
        "Design rooms",
        "Breakfast",
        "High-speed Wi-Fi",
        "Central location",
      ],
      featured: true,
    },

    {
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1800&q=90",
      name: "Spree House",
      category: "WATERFRONT",
      type: "WATERFRONT",
      location: "Spree Riverside",
      rating: "4.8",
      price: "€229",
      description:
        "A calm riverside retreat balancing contemporary interiors, relaxed mornings and easy access to central Berlin.",
      features: [
        "River views",
        "Breakfast",
        "Private terrace",
        "City access",
      ],
    },

    {
      image:
        "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1800&q=90",
      name: "Kreuzberg Rooms",
      category: "LOCAL EDIT",
      type: "LOCAL",
      location: "Kreuzberg",
      rating: "4.7",
      price: "€149",
      description:
        "A creative neighbourhood base for travellers who prefer independent cafés, street art, markets and local life.",
      features: [
        "Neighbourhood setting",
        "Café lounge",
        "Bike-friendly",
        "Fast Wi-Fi",
      ],
    },

    {
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=90",
      name: "The Berlin Grand",
      category: "LUXURY",
      type: "LUXURY",
      location: "Charlottenburg",
      rating: "5.0",
      price: "€349",
      description:
        "A polished luxury stay with spacious rooms, refined interiors, wellness experiences and elevated dining.",
      features: [
        "Luxury rooms",
        "Spa",
        "Fine dining",
        "Concierge",
      ],
    },

    {
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1800&q=90",
      name: "Urban Haus",
      category: "DESIGN",
      type: "DESIGN",
      location: "Friedrichshain",
      rating: "4.8",
      price: "€169",
      description:
        "Bold interiors and an energetic neighbourhood setting for travellers drawn to Berlin's creative side.",
      features: [
        "Modern design",
        "Breakfast",
        "Lounge",
        "Central transport",
      ],
    },

    {
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=90",
      name: "Garden Berlin",
      category: "SLOW STAY",
      type: "SLOW",
      location: "Prenzlauer Berg",
      rating: "4.7",
      price: "€179",
      description:
        "A slower Berlin base with greenery, thoughtful spaces and a residential atmosphere away from busy streets.",
      features: [
        "Private garden",
        "Breakfast",
        "Quiet rooms",
        "Local area",
      ],
    },

    {
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=90",
      name: "Berlin Family Loft",
      category: "FAMILY",
      type: "FAMILY",
      location: "Tiergarten",
      rating: "4.8",
      price: "€199",
      description:
        "Comfortable larger rooms and an easy location for families combining sightseeing with relaxed downtime.",
      features: [
        "Family rooms",
        "Kitchenette",
        "Flexible spaces",
        "Nearby park",
      ],
    },

    {
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=90",
      name: "Noir Berlin Suites",
      category: "SIGNATURE",
      type: "LUXURY",
      location: "Mitte",
      rating: "4.9",
      price: "€289",
      description:
        "Dark atmospheric interiors and generous suites for a more cinematic interpretation of Berlin luxury.",
      features: [
        "Large suites",
        "Private lounge",
        "Concierge",
        "Premium breakfast",
      ],
    },
  ];

  const filters = [
    "ALL",
    "BOUTIQUE",
    "WATERFRONT",
    "LOCAL",
    "LUXURY",
    "DESIGN",
    "SLOW",
    "FAMILY",
  ];

  const filteredHotels =
    activeFilter === "ALL"
      ? hotels
      : hotels.filter(
          (hotel) =>
            hotel.type === activeFilter ||
            hotel.category === activeFilter
        );

  const hotelStyles = [
    {
      icon: <FaBed />,
      number: "01",
      title: "Boutique",
      text:
        "Smaller design-focused stays with personality, atmosphere and a strong neighbourhood connection.",
    },
    {
      icon: <FaSpa />,
      number: "02",
      title: "Luxury",
      text:
        "Refined rooms, elevated service, wellness and extra comfort when the hotel becomes part of the journey.",
    },
    {
      icon: <FaMapMarkerAlt />,
      number: "03",
      title: "Local",
      text:
        "Stay closer to Berlin's creative neighbourhoods, cafés, markets, galleries and everyday city life.",
    },
    {
      icon: <FaWifi />,
      number: "04",
      title: "Smart Stay",
      text:
        "Stylish practical accommodation for short city breaks, business trips and flexible Berlin escapes.",
    },
  ];

  const neighbourhoods = [
    {
      number: "01",
      area: "MITTE",
      title: "Central Berlin",
      description:
        "History, museums, architecture, galleries and major city landmarks.",
    },
    {
      number: "02",
      area: "KREUZBERG",
      title: "Creative Berlin",
      description:
        "Street culture, cafés, markets, restaurants and after-dark energy.",
    },
    {
      number: "03",
      area: "FRIEDRICHSHAIN",
      title: "Energetic Berlin",
      description:
        "Creative spaces, nightlife, music and distinctive East Berlin character.",
    },
    {
      number: "04",
      area: "CHARLOTTENBURG",
      title: "Refined Berlin",
      description:
        "Elegant streets, shopping, culture and classic city sophistication.",
    },
  ];

  const amenities = [
    {
      icon: <FaCoffee />,
      title: "BREAKFAST",
      text:
        "Start the day with thoughtful local breakfast options and excellent coffee.",
    },
    {
      icon: <FaWifi />,
      title: "CONNECTED",
      text:
        "Reliable high-speed Wi-Fi for work, planning, streaming and sharing.",
    },
    {
      icon: <FaSpa />,
      title: "WELLNESS",
      text:
        "Slow down with selected spa, wellness and relaxation experiences.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "LOCATION",
      text:
        "Stay close to the Berlin neighbourhoods and experiences you want to explore.",
    },
  ];

  return (
    <main className="berlin-hotels-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hotels-hero">

        <div className="hotels-hero-bg"></div>

        <div className="hotels-hero-overlay"></div>

        <div className="hotels-hero-grid"></div>

        <div className="container hotels-hero-container">

          <div className="hotels-hero-content">

            <span className="hotels-hero-eyebrow">
              <span></span>
              STAY BERLIN · LUXURY EDIT
            </span>

            <h1>
              Sleep
              <br />
              <span>different.</span>
            </h1>

            <p>
              Curated Berlin stays where architecture,
              atmosphere and exceptional comfort come
              together. Discover a private base that
              becomes part of your Berlin story.
            </p>

            <div className="hotels-hero-actions">

              <a
                href="#hotel-collection"
                className="hotels-hero-btn"
              >
                <span>Explore Stays</span>
                <FaArrowRight />
              </a>

              <Link
                to="/contact"
                className="hotels-hero-link"
              >
                Find My Stay
              </Link>

            </div>

          </div>


          <div className="hotels-hero-side">

            <span>
              CURATED
            </span>

            <strong>
              08
            </strong>

            <small>
              STAYS
              <br />
              SPACES
              <br />
              STORIES
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="hotels-intro section-padding">

        <div className="container">

          <div className="row align-items-end g-5">

            <div className="col-lg-7">

              <SectionTitle
                eyebrow="WHERE YOU STAY MATTERS"
                title="A hotel is"
                highlight="part of Berlin."
                description="Choose a stay based not only on the room, but on the neighbourhood, atmosphere and kind of city experience you want waiting outside your door."
              />

            </div>


            <div className="col-lg-5">

              <div className="hotels-intro-note">

                <div className="hotels-intro-number">
                  08
                </div>

                <div>

                  <strong>
                    CURATED STAY STYLES
                  </strong>

                  <p>
                    Boutique, luxury, local,
                    waterfront, family and
                    design-led stays.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOTEL STYLES
      ===================================================== */}

      <section className="hotel-style-strip">

        <div className="container">

          <div className="hotel-style-grid">

            {hotelStyles.map((style) => (

              <div
                className="hotel-style-item"
                key={style.number}
              >

                <div className="hotel-style-top">

                  <span>
                    {style.number}
                  </span>

                  <div className="hotel-style-icon">
                    {style.icon}
                  </div>

                </div>

                <h3>
                  {style.title}
                </h3>

                <p>
                  {style.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOTEL COLLECTION
      ===================================================== */}

      <section
        className="hotel-collection-section"
        id="hotel-collection"
      >

        <div className="container">

          <div className="hotel-collection-heading">

            <div>

              <span>
                THE BERLIN STAY EDIT
              </span>

              <h2>
                Find your
                <br />
                <strong>base.</strong>
              </h2>

            </div>

            <p>
              Different neighbourhoods create
              completely different Berlin experiences.
              Choose the atmosphere that fits your trip.
            </p>

          </div>


          {/* FILTERS */}

          <div className="hotel-filters">

            {filters.map((filter) => (

              <button
                type="button"
                key={filter}
                className={
                  activeFilter === filter
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>

            ))}

          </div>


          {/* =================================================
              FEATURED HOTEL
          ================================================= */}

          {activeFilter === "ALL" && (

            <article className="featured-hotel-card">

              <div className="featured-hotel-image">

                <img
                  src={hotels[0].image}
                  alt={hotels[0].name}
                />

                <div className="featured-hotel-overlay"></div>

                <span className="featured-hotel-tag">
                  SIGNATURE STAY
                </span>

                <span className="featured-hotel-number">
                  01
                </span>

              </div>


              <div className="featured-hotel-content">

                <span className="featured-hotel-eyebrow">
                  BERLIN MITTE · BOUTIQUE EDIT
                </span>

                <h3>
                  The
                  <br />
                  <span>Mitte House.</span>
                </h3>


                <div className="featured-hotel-rating">

                  <div>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <span>
                    4.9 · SIGNATURE STAY
                  </span>

                </div>


                <p>
                  A design-forward base for travellers
                  who want Berlin's galleries, cafés,
                  architecture and city energy close
                  at hand.
                </p>


                <div className="featured-hotel-features">

                  {hotels[0].features.map((feature) => (

                    <span key={feature}>

                      <FaCheck />

                      {feature}

                    </span>

                  ))}

                </div>


                <div className="featured-hotel-bottom">

                  <div className="featured-hotel-price">

                    <small>
                      FROM
                    </small>

                    <strong>
                      €189
                    </strong>

                    <span>
                      / NIGHT
                    </span>

                  </div>


                  <Link
                    to="/contact"
                    className="featured-hotel-btn"
                  >

                    <span>
                      Ask About This Stay
                    </span>

                    <FaArrowRight />

                  </Link>

                </div>

              </div>

            </article>

          )}


          {/* =================================================
              HOTEL GRID
          ================================================= */}

          <div className="row g-4 hotel-grid">

            {filteredHotels
              .filter(
                (hotel) =>
                  activeFilter !== "ALL" ||
                  hotel !== hotels[0]
              )
              .map((hotel, index) => (

                <div
                  className="col-lg-4 col-md-6"
                  key={hotel.name}
                >

                  <article className="hotel-card">

                    <div className="hotel-card-image">

                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        loading="lazy"
                      />

                      <div className="hotel-card-overlay"></div>

                      <span className="hotel-card-category">
                        {hotel.category}
                      </span>

                      <span className="hotel-card-number">
                        {(activeFilter === "ALL"
                          ? index + 2
                          : index + 1
                        )
                          .toString()
                          .padStart(2, "0")}
                      </span>

                    </div>


                    <div className="hotel-card-content">

                      <span className="hotel-card-location">

                        <FaMapMarkerAlt />

                        {hotel.location}

                      </span>


                      <h3>
                        {hotel.name}
                      </h3>


                      <div className="hotel-card-rating">

                        <div>

                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />

                        </div>

                        <span>
                          {hotel.rating}
                        </span>

                      </div>


                      <p>
                        {hotel.description}
                      </p>


                      <div className="hotel-card-features">

                        {hotel.features
                          .slice(0, 3)
                          .map((feature) => (

                            <span key={feature}>

                              <FaCheck />

                              {feature}

                            </span>

                          ))}

                      </div>


                      <div className="hotel-card-bottom">

                        <div className="hotel-card-price">

                          <small>
                            FROM
                          </small>

                          <strong>
                            {hotel.price}
                          </strong>

                          <span>
                            / NIGHT
                          </span>

                        </div>


                        <Link
                          to="/contact"
                          className="hotel-card-link"
                        >

                          <span>
                            View Stay
                          </span>

                          <FaArrowRight />

                        </Link>

                      </div>

                    </div>

                  </article>

                </div>

              ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          NEIGHBOURHOODS
      ===================================================== */}

      <section className="hotel-neighbourhood-section">

        <div className="container">

          <div className="hotel-neighbourhood-heading">

            <span>
              CHOOSE YOUR BERLIN
            </span>

            <h2>
              Where do you
              <br />
              want to <strong>wake up?</strong>
            </h2>

          </div>


          <div className="hotel-neighbourhood-grid">

            {neighbourhoods.map((item) => (

              <Link
                to="/contact"
                className="hotel-neighbourhood-card"
                key={item.number}
              >

                <span>
                  {item.number}
                </span>

                <div>

                  <small>
                    {item.area}
                  </small>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                <FaArrowRight />

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          AMENITIES
      ===================================================== */}

      <section className="hotel-amenities-section">

        <div className="container">

          <div className="hotel-amenities-card">

            <div className="hotel-amenities-left">

              <span>
                THE DETAILS
              </span>

              <h2>
                Sleep well.
                <br />
                Wake up
                <br />
                <strong>ready.</strong>
              </h2>

            </div>


            <div className="hotel-amenities-right">

              {amenities.map((amenity) => (

                <div
                  className="hotel-amenity"
                  key={amenity.title}
                >

                  {amenity.icon}

                  <div>

                    <strong>
                      {amenity.title}
                    </strong>

                    <p>
                      {amenity.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE BANNER
      ===================================================== */}

      <section
        style={{
          padding: "0 0 120px",
          background: "#ebe7dc",
        }}
      >

        <div className="container">

          <div
            style={{
              minHeight: "280px",
              position: "relative",
              overflow: "hidden",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              padding: "50px",
              background:
                "linear-gradient(90deg, rgba(17,19,21,.95), rgba(17,19,21,.55)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=90') center/cover",
            }}
          >

            <div
              style={{
                maxWidth: "620px",
                position: "relative",
                zIndex: 2,
              }}
            >

              <span
                style={{
                  display: "block",
                  marginBottom: "14px",
                  color: "#c9f45b",
                  fontSize: "8px",
                  fontWeight: 900,
                  letterSpacing: "3px",
                }}
              >
                MORE THAN A ROOM
              </span>

              <h2
                style={{
                  margin: 0,
                  color: "#fff",
                  fontSize: "clamp(38px, 5vw, 65px)",
                  lineHeight: ".9",
                  fontWeight: 900,
                  letterSpacing: "-3px",
                  textTransform: "uppercase",
                }}
              >
                Make your stay
                <br />
                <span style={{ color: "#ff4f8b" }}>
                  part of the story.
                </span>
              </h2>

              <p
                style={{
                  maxWidth: "500px",
                  margin: "20px 0 0",
                  color: "rgba(255,255,255,.68)",
                  fontSize: "12px",
                  lineHeight: 1.8,
                }}
              >
                Pair your hotel with private tours,
                local experiences, dining and
                personalised Berlin moments.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TESTIMONIAL
      ===================================================== */}

      <section className="hotels-testimonial">

        <div className="container">

          <div className="hotels-testimonial-inner">

            <div className="hotels-stars">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>


            <blockquote>
              “We picked the neighbourhood first,
              then the hotel. That completely
              changed how we experienced Berlin.”
            </blockquote>


            <div className="hotels-testimonial-author">

              <strong>
                EMMA &amp; DANIEL
              </strong>

              <span>
                AMSTERDAM · 4-DAY BERLIN ESCAPE
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="hotels-final-cta">

        <div className="hotels-final-bg"></div>

        <div className="hotels-final-overlay"></div>

        <div className="container">

          <div className="hotels-final-content">

            <span>
              YOUR BERLIN BASE
            </span>

            <h2>
              Find a room
              <br />
              that feels
              <br />
              <strong>like you.</strong>
            </h2>

            <p>
              Tell us your dates, preferred area
              and travel style. We'll help shape
              the right stay around your Berlin trip.
            </p>


            <Link
              to="/contact"
              className="hotels-final-btn"
            >

              <span>
                Find My Berlin Stay
              </span>

              <FaArrowRight />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Hotels;