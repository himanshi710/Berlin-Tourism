import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaCompass,
  FaPlay,
} from "react-icons/fa";

import "./Home.css";

function Home() {
  /* =====================================================
     HERO SLIDER
  ===================================================== */

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=2200&q=90",
      eyebrow: "THE BERLIN EDIT",
      title: "Berlin,",
      highlight: "Unfiltered.",
      text:
        "A city of raw architecture, creative energy, underground culture and stories waiting around every corner.",
      cardTitle: "Mitte After Hours",
      cardText:
        "Historic Berlin meets contemporary nightlife, hidden courtyards and late-night city lights.",
      category: "NIGHT EDIT",
      location: "MITTE",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=2200&q=90",
      eyebrow: "DISCOVER BERLIN",
      title: "City of",
      highlight: "Contrasts.",
      text:
        "Walk from grand boulevards to rebellious neighbourhoods where art, design and culture constantly collide.",
      cardTitle: "Kreuzberg Stories",
      cardText:
        "Street art, independent cafés, creative studios and the alternative heartbeat of Berlin.",
      category: "LOCAL EDIT",
      location: "KREUZBERG",
    },
  ];

  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const currentHero = heroSlides[activeHero];


  /* =====================================================
     TABS
  ===================================================== */

  const tabs = [
    {
      id: "icons",
      label: "CITY ICONS",
    },
    {
      id: "creative",
      label: "CREATIVE BERLIN",
    },
    {
      id: "night",
      label: "NIGHT EDIT",
    },
    {
      id: "local",
      label: "LOCAL STORIES",
    },
  ];

  const tabCards = {
    icons: [
      {
        image:
          "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=90",
        number: "01",
        category: "LANDMARK",
        title: "Berlin From The Inside",
        text:
          "Brandenburg Gate, Museum Island and the grand historic heart of the capital.",
        meta: "4 HOURS",
      },
      {
        image:
          "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=90",
        number: "02",
        category: "ARCHITECTURE",
        title: "The Berlin Lines",
        text:
          "Discover the city's bold architectural language from classic to contemporary.",
        meta: "5 HOURS",
      },
      {
        image:
          "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1200&q=90",
        number: "03",
        category: "CULTURE",
        title: "Museum Island Edit",
        text:
          "A curated cultural route through Berlin's most remarkable museum quarter.",
        meta: "3 HOURS",
      },
    ],

    creative: [
      {
        image:
          "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=90",
        number: "01",
        category: "STREET ART",
        title: "Walls With Stories",
        text:
          "Follow murals, hidden courtyards and independent art spaces through Kreuzberg.",
        meta: "4 HOURS",
      },
      {
        image:
          "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=90",
        number: "02",
        category: "DESIGN",
        title: "Berlin Design Walk",
        text:
          "Contemporary design, brutalist details and creative studios across the city.",
        meta: "3 HOURS",
      },
      {
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=90",
        number: "03",
        category: "CREATIVE",
        title: "The New Berlin",
        text:
          "Meet the neighbourhoods shaping Berlin's creative future.",
        meta: "6 HOURS",
      },
    ],

    night: [
      {
        image:
          "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=90",
        number: "01",
        category: "AFTER DARK",
        title: "Berlin After Dark",
        text:
          "Neon streets, hidden bars and the city after the sun disappears.",
        meta: "4 HOURS",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=90",
        number: "02",
        category: "MUSIC",
        title: "Midnight Berlin",
        text:
          "Discover the sounds, venues and neighbourhoods that define Berlin nightlife.",
        meta: "5 HOURS",
      },
      {
        image:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=90",
        number: "03",
        category: "NIGHTLIFE",
        title: "Neon & Concrete",
        text:
          "A cinematic journey through Berlin's most atmospheric night districts.",
        meta: "3 HOURS",
      },
    ],

    local: [
      {
        image:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=90",
        number: "01",
        category: "COFFEE",
        title: "Berlin Coffee Edit",
        text:
          "Slow mornings, independent cafés and the neighbourhoods locals love.",
        meta: "3 HOURS",
      },
      {
        image:
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=90",
        number: "02",
        category: "FOOD",
        title: "Eat Like A Local",
        text:
          "A relaxed food route through markets, bakeries and hidden Berlin favourites.",
        meta: "4 HOURS",
      },
      {
        image:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90",
        number: "03",
        category: "SLOW BERLIN",
        title: "The Quiet Side",
        text:
          "Green spaces, riverside walks and slower corners away from the crowds.",
        meta: "5 HOURS",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("icons");

  const cards = tabCards[activeTab];


  /* =====================================================
     MAP LOCATIONS
  ===================================================== */

  const districts = [
    {
      name: "MITTE",
      x: "54%",
      y: "34%",
      text: "Historic heart",
    },
    {
      name: "KREUZBERG",
      x: "48%",
      y: "58%",
      text: "Creative soul",
    },
    {
      name: "CHARLOTTENBURG",
      x: "27%",
      y: "47%",
      text: "Elegant west",
    },
    {
      name: "FRIEDRICHSHAIN",
      x: "68%",
      y: "48%",
      text: "Night energy",
    },
    {
      name: "PRENZLAUER BERG",
      x: "59%",
      y: "20%",
      text: "Local Berlin",
    },
  ];

  return (
    <main className="noir-home">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="noir-hero">

        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero-slide ${
              index === activeHero ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}

        <div className="hero-dark-overlay"></div>

        <div className="hero-grid-pattern"></div>

        <div className="container-fluid noir-hero-inner">

          <div className="hero-copy">

            <div className="hero-kicker">
              <span></span>
              {currentHero.eyebrow}
            </div>

            <h1>
              {currentHero.title}
              <br />
              <em>{currentHero.highlight}</em>
            </h1>

            <p>{currentHero.text}</p>

            <div className="hero-buttons">

              <Link
                to="/destinations"
                className="hero-main-btn"
              >
                Explore Berlin
                <FaArrowRight />
              </Link>

              <Link
                to="/tours"
                className="hero-outline-btn"
              >
                <span>
                  <FaPlay />
                </span>
                View Tours
              </Link>

            </div>

            <div className="hero-progress">

              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={
                    index === activeHero
                      ? "active"
                      : ""
                  }
                  onClick={() => setActiveHero(index)}
                  aria-label={`Hero slide ${index + 1}`}
                >
                  <span></span>
                </button>
              ))}

            </div>

          </div>


          {/* HERO CARD */}

          <div className="hero-luxury-card">

            <div className="hero-card-image">
              <img
                src={currentHero.image}
                alt={currentHero.cardTitle}
              />

              <div className="hero-card-image-overlay"></div>

              <span className="hero-card-category">
                {currentHero.category}
              </span>

              <span className="hero-card-location">
                <FaMapMarkerAlt />
                {currentHero.location}
              </span>
            </div>

            <div className="hero-card-content">

              <div className="hero-card-top">
                <span>FEATURED EXPERIENCE</span>

                <div className="hero-card-rating">
                  <FaStar />
                  4.9
                </div>
              </div>

              <h3>{currentHero.cardTitle}</h3>

              <p>{currentHero.cardText}</p>

              <div className="hero-card-bottom">

                <div>
                  <FaClock />
                  <span>PRIVATE · 4 HOURS</span>
                </div>

                <Link to="/experiences">
                  <FaArrowRight />
                </Link>

              </div>

            </div>

          </div>

        </div>

        <div className="hero-bottom-label">
          52°31'N · 13°24'E
        </div>

      </section>


      {/* =================================================
          MARQUEE
      ================================================= */}

      <section className="berlin-marquee">

        <div className="marquee-track">

          <span>MITTE</span>
          <i>✦</i>

          <span>KREUZBERG</span>
          <i>✦</i>

          <span>CHARLOTTENBURG</span>
          <i>✦</i>

          <span>FRIEDRICHSHAIN</span>
          <i>✦</i>

          <span>PRENZLAUER BERG</span>
          <i>✦</i>

          <span>SPANDAU</span>
          <i>✦</i>

          <span>MITTE</span>
          <i>✦</i>

          <span>KREUZBERG</span>
          <i>✦</i>

          <span>CHARLOTTENBURG</span>
          <i>✦</i>

        </div>

      </section>


      {/* =================================================
          INTRO
      ================================================= */}

      <section className="noir-intro">

        <div className="container">

          <div className="intro-layout">

            <div className="intro-number">
              <span>01</span>
              <div></div>
              BERLIN
            </div>

            <div className="intro-main">

              <span className="section-kicker">
                THE CITY EDIT
              </span>

              <h2>
                Not a destination.
                <br />
                <em>A whole atmosphere.</em>
              </h2>

              <p>
                Berlin is history and tomorrow living
                on the same street. Explore the city
                through its neighbourhoods, people,
                architecture, food and after-dark energy.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          UNIQUE TABS
      ================================================= */}

      <section className="noir-discover">

        <div className="container">

          <div className="discover-heading">

            <div>
              <span className="section-kicker">
                CURATED BERLIN
              </span>

              <h2>
                Choose your
                <em> Berlin.</em>
              </h2>
            </div>

            <p>
              Four ways to experience a city that
              never tells the same story twice.
            </p>

          </div>


          {/* TABS */}

          <div className="luxury-tabs">

            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={
                  activeTab === tab.id
                    ? "active"
                    : ""
                }
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>

                <small>
                  {activeTab === tab.id ? "01" : "→"}
                </small>
              </button>
            ))}

          </div>


          {/* CARDS */}

          <div className="luxury-card-grid">

            {cards.map((card, index) => (
              <article
                className="luxury-experience-card"
                key={`${activeTab}-${card.title}`}
              >

                <div className="luxury-card-image">

                  <img
                    src={card.image}
                    alt={card.title}
                  />

                  <div className="luxury-card-overlay"></div>

                  <span className="luxury-card-number">
                    {card.number}
                  </span>

                  <span className="luxury-card-category">
                    {card.category}
                  </span>

                </div>

                <div className="luxury-card-body">

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>

                  <div className="luxury-card-footer">

                    <span>
                      <FaClock />
                      {card.meta}
                    </span>

                    <Link to="/experiences">
                      <FaArrowRight />
                    </Link>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          FULL IMAGE EDITORIAL SECTION
      ================================================= */}

      <section className="berlin-editorial">

        <div className="editorial-image"></div>

        <div className="editorial-overlay"></div>

        <div className="container">

          <div className="editorial-content">

            <span className="section-kicker">
              BERLIN AFTER DARK
            </span>

            <h2>
              When the
              <br />
              city becomes
              <br />
              <em>electric.</em>
            </h2>

            <p>
              As daylight disappears, Berlin reveals
              another personality. Neon reflections,
              late-night conversations, music and
              streets that refuse to sleep.
            </p>

            <Link
              to="/tours"
              className="editorial-button"
            >
              Discover Night Berlin
              <FaArrowRight />
            </Link>

          </div>

          <div className="editorial-side">

            <span>BERLIN</span>

            <strong>00:47</strong>

            <small>
              THE CITY IS STILL AWAKE
            </small>

          </div>

        </div>

      </section>


      {/* =================================================
          MAP SECTION
      ================================================= */}

      <section className="berlin-map-section">

        <div className="container">

          <div className="map-heading">

            <div>

              <span className="section-kicker">
                FIND YOUR BERLIN
              </span>

              <h2>
                Every district
                <br />
                <em>has a different pulse.</em>
              </h2>

            </div>

            <p>
              From historic Mitte to creative Kreuzberg,
              discover the neighbourhood that fits your
              Berlin mood.
            </p>

          </div>


          <div className="map-layout">

            <div className="berlin-map">

              <div className="map-lines"></div>

              <div className="map-river"></div>

              <div className="map-label berlin-label">
                BERLIN
              </div>

              {districts.map((district) => (
                <div
                  key={district.name}
                  className="map-pin"
                  style={{
                    left: district.x,
                    top: district.y,
                  }}
                >

                  <span className="pin-dot"></span>

                  <div className="pin-card">

                    <strong>
                      {district.name}
                    </strong>

                    <small>
                      {district.text}
                    </small>

                  </div>

                </div>
              ))}

              <div className="map-compass">
                <FaCompass />
                <span>N</span>
              </div>

            </div>


            <div className="map-side">

              <div className="map-side-number">
                12
              </div>

              <span>DISTRICTS</span>

              <h3>
                One city.
                <br />
                <em>Twelve personalities.</em>
              </h3>

              <p>
                Berlin changes character every few
                streets. Choose your district and
                start exploring beyond the obvious.
              </p>

              <Link
                to="/destinations"
                className="map-button"
              >
                Explore Districts
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="noir-final-cta">

        <div className="cta-background"></div>
        <div className="cta-overlay"></div>

        <div className="container">

          <div className="final-cta-content">

            <span className="section-kicker">
              YOUR BERLIN STARTS HERE
            </span>

            <h2>
              See it.
              <br />
              Feel it.
              <br />
              <em>Live it.</em>
            </h2>

            <p>
              Build a Berlin experience around your
              own rhythm, interests and curiosity.
            </p>

            <Link
              to="/contact"
              className="final-cta-button"
            >
              Plan Your Berlin
              <FaArrowRight />
            </Link>

          </div>

        </div>

        <div className="cta-corner">
          NOIR NEON
          <span>BERLIN · 2026</span>
        </div>

      </section>

    </main>
  );
}

export default Home;