import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaCompass,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./Destinations.css";

function Destinations() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = [
    { label: "ALL", value: "ALL" },
    { label: "CENTRE", value: "CENTRE" },
    { label: "EAST", value: "EAST" },
    { label: "WEST", value: "WEST" },
  ];

  const destinations = [
    {
      id: 1,
      name: "Mitte",
      subtitle: "Historic Berlin",
      region: "CENTRE",
      category: "HISTORY",
      distance: "approx. 4 km",
      duration: "15–25 min",
      price: "₹45",
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=85",
      tags: ["Sedan", "SUV"],
      description:
        "Berlin's historic core with museums, grand boulevards and iconic landmarks.",
    },

    {
      id: 2,
      name: "Friedrichshain",
      subtitle: "Creative East",
      region: "EAST",
      category: "NIGHTLIFE",
      distance: "approx. 6 km",
      duration: "20–30 min",
      price: "₹39",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=85",
      tags: ["Economy", "Sedan", "SUV"],
      description:
        "Creative energy, riverside walks, independent spaces and Berlin after dark.",
    },

    {
      id: 3,
      name: "Kreuzberg",
      subtitle: "Raw Berlin",
      region: "CENTRE",
      category: "LOCAL",
      distance: "approx. 5 km",
      duration: "18–28 min",
      price: "₹42",
     image: "https://images.unsplash.com/photo-1561568801-47957f54238b?auto=format&fit=crop&w=1200&q=85",
      tags: ["Economy", "Sedan"],
      description:
        "Street art, food culture, hidden courtyards and one of Berlin's boldest neighbourhoods.",
    },

    {
      id: 4,
      name: "Charlottenburg",
      subtitle: "Elegant West",
      region: "WEST",
      category: "LUXURY",
      distance: "approx. 7 km",
      duration: "20–35 min",
      price: "₹49",
   image:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyWEXPMlL1hntgtp6gc28CSQNWP0qf2OD4nkec4yljvSAUjjAiLdBpbEc&s=10",
tags: ["Sedan", "Premium", "SUV"],
      description:
        "Classic architecture, refined shopping and a quieter side of the capital.",
    },

    {
      id: 5,
      name: "Prenzlauer Berg",
      subtitle: "Slow Berlin",
      region: "CENTRE",
      category: "LIFESTYLE",
      distance: "approx. 5 km",
      duration: "20–30 min",
      price: "₹40",
      image:
        "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1200&q=85",
      tags: ["Economy", "Sedan"],
      description:
        "Leafy streets, cafés, design stores and a relaxed neighbourhood rhythm.",
    },

    {
      id: 6,
      name: "Neukölln",
      subtitle: "Urban Pulse",
      region: "EAST",
      category: "CREATIVE",
      distance: "approx. 8 km",
      duration: "25–35 min",
      price: "₹44",
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=85",
      tags: ["Economy", "Sedan", "SUV"],
      description:
        "A multicultural district filled with independent cafés, art and late-night energy.",
    },

    {
      id: 7,
      name: "Treptow",
      subtitle: "Riverside Escape",
      region: "EAST",
      category: "ESCAPE",
      distance: "approx. 9 km",
      duration: "25–40 min",
      price: "₹47",
      image:
        "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=85",
      tags: ["Sedan", "SUV"],
      description:
        "Green spaces, riverside views and a slower Berlin away from the centre.",
    },

    {
      id: 8,
      name: "Steglitz",
      subtitle: "Residential Berlin",
      region: "WEST",
      category: "LOCAL",
      distance: "approx. 10 km",
      duration: "25–40 min",
      price: "₹51",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85",
      tags: ["Sedan", "Premium"],
      description:
        "A local residential side of Berlin with parks, shopping and everyday city life.",
    },

    {
      id: 9,
      name: "Spandau",
      subtitle: "Old Berlin",
      region: "WEST",
      category: "HISTORY",
      distance: "approx. 15 km",
      duration: "30–45 min",
      price: "₹59",
      image:
        "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1200&q=85",
      tags: ["SUV", "Premium"],
      description:
        "Historic streets, riverside atmosphere and a distinctly different Berlin identity.",
    },

    {
      id: 10,
      name: "Lichtenberg",
      subtitle: "Urban Edge",
      region: "EAST",
      category: "LOCAL",
      distance: "approx. 10 km",
      duration: "25–40 min",
      price: "₹48",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=85",
      tags: ["Economy", "Sedan"],
      description:
        "A changing urban district where residential Berlin meets creative spaces.",
    },

    {
      id: 11,
      name: "Marzahn",
      subtitle: "Beyond Centre",
      region: "EAST",
      category: "ESCAPE",
      distance: "approx. 15 km",
      duration: "30–45 min",
      price: "₹55",
     image:
  "https://images.unsplash.com/photo-1561568801-47957f54238b?auto=format&fit=crop&w=1200&q=85",
tags: ["SUV", "Premium"],
      description:
        "A less obvious Berlin route with wide spaces and a different urban perspective.",
    },

    {
      id: 12,
      name: "Tempelhof",
      subtitle: "Open Berlin",
      region: "CENTRE",
      category: "ICONIC",
      distance: "approx. 6 km",
      duration: "20–30 min",
      price: "₹43",
     image:
  "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=85",
tags: ["Economy", "Sedan", "SUV"],
      description:
        "The legendary former airfield turned open urban space and Berlin landmark.",
    },
  ];

  const filteredDestinations = useMemo(() => {
    if (activeFilter === "ALL") {
      return destinations;
    }

    return destinations.filter(
      (destination) => destination.region === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="berlin-destinations-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="destinations-hero">

        <div className="destinations-hero-image">
          <img
            src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=2000&q=90"
            alt="Berlin"
          />
        </div>

        <div className="destinations-hero-overlay"></div>

        <div className="destinations-hero-grid"></div>

        <div className="container destinations-hero-container">

          <div className="destinations-hero-content">

            <div className="destinations-eyebrow">
              <span></span>
              EXPLORE BERLIN
            </div>

            <h1 className="text-light">
              12 faces.
              <br />
              <em>One Berlin.</em>
            </h1>

            <p>
              Berlin isn't one destination. It's a collection of
              neighbourhoods, moods, stories and unexpected corners.
              Choose the side of the city you want to experience.
            </p>

            <div className="destinations-hero-actions">

              <Link
                to="/contact"
                className="destinations-primary-btn"
              >
                Plan Your Berlin
                <FaArrowRight />
              </Link>

              <a
                href="#districts"
                className="destinations-scroll-btn"
              >
                Explore Districts
                <span>↓</span>
              </a>

            </div>

          </div>


          <div className="destinations-hero-side">

            <div className="hero-side-number">
              <strong>12</strong>
              <span>DISTRICTS</span>
            </div>

            <div className="hero-side-location">
              <FaMapMarkerAlt />
              BERLIN, GERMANY
            </div>

          </div>

        </div>


        <div className="hero-bottom-bar">

          <span>NOIR NEON BERLIN</span>

          <div>
            <span>52°31′N</span>
            <span>13°24′E</span>
            <span>RAW. CREATIVE. UNFILTERED.</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="destinations-intro section-padding">

        <div className="container">

          <div className="destinations-intro-grid">

            <div className="intro-heading">

              <span className="section-eyebrow">
                THE CITY IN LAYERS
              </span>

              <h2>
                Every neighbourhood
                <span>has a rhythm.</span>
              </h2>

            </div>


            <div className="intro-content">

              <p>
                From historic Mitte to the creative pulse of Kreuzberg,
                Berlin changes character every few streets. We curate
                the places that make each district feel unmistakably
                different.
              </p>

              <div className="intro-location">
                <FaCompass />
                CURATED BERLIN DISTRICTS
              </div>

            </div>

          </div>


          <div className="intro-stat-row">

            <div>
              <strong>12</strong>
              <span>Featured districts</span>
            </div>

            <div>
              <strong>40+</strong>
              <span>Local experiences</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Berlin assistance</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FILTER
      ===================================================== */}

      <section
        className="destination-filter-section"
        id="districts"
      >

        <div className="container">

          <div className="destination-filter-bar">

            <div className="filter-heading">

              <div className="filter-icon">
                <FaCompass />
              </div>

              <div>
                <span>CHOOSE YOUR SIDE</span>
                <strong>Find your Berlin.</strong>
              </div>

            </div>


            <div className="destination-filters">

              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={
                    activeFilter === filter.value
                      ? "active"
                      : ""
                  }
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DESTINATION CARDS
      ===================================================== */}

      <section className="destinations-grid-section">

        <div className="container">

          <div className="destination-results-header">

            <div>
              <span>
                {activeFilter === "ALL"
                  ? "ALL BERLIN DISTRICTS"
                  : `${activeFilter} BERLIN`}
              </span>

              <h2>
                Choose your
                <em>Berlin.</em>
              </h2>
            </div>

            <div className="results-count">
              <strong>
                {String(filteredDestinations.length).padStart(2, "0")}
              </strong>

              <span>
                DISTRICTS
                <br />
                AVAILABLE
              </span>
            </div>

          </div>


          <div className="destination-masonry-grid">

            {filteredDestinations.map((destination, index) => (

              <article
                className={`destination-luxury-card ${
                  index % 5 === 0 ? "destination-large" : ""
                }`}
                key={destination.id}
              >

                <Link
                  to={`/destinations/${destination.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="destination-card-link"
                >

                  {/* IMAGE */}

                  <div className="destination-card-image">

                    <img
                      src={destination.image}
                      alt={destination.name}
                      loading="lazy"
                    />

                    <div className="destination-card-overlay"></div>


                    <div className="destination-card-number">
                      {String(destination.id).padStart(2, "0")}
                    </div>


                    <div className="destination-card-tag ">
                      {destination.category}
                    </div>


                    <div className="destination-card-image-title ">
                      <small>{destination.subtitle}</small>

                      <h3 className="text-light">
                        {destination.name}
                        <span>→</span>
                      </h3>
                    </div>

                  </div>


                  {/* DETAILS */}

                  <div className="destination-card-content">

                    <div className="destination-card-meta">

                      <span>
                        <FaMapMarkerAlt />
                        {destination.distance}
                      </span>

                      <span>
                        <FaClock />
                        {destination.duration}
                      </span>

                    </div>


                    <div className="destination-card-details">

                      <p>
                        {destination.description}
                      </p>


                      <div className="destination-card-tags">

                        {destination.tags.map((tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        ))}

                      </div>

                    </div>


                    <div className="destination-card-footer">

                      <div className="destination-fare">

                        <span>FROM</span>

                        <strong>
                          {destination.price}
                        </strong>

                      </div>


                      <div className="destination-view-btn">

                        View Details

                        <span>
                          <FaArrowRight />
                        </span>

                      </div>

                    </div>

                  </div>

                </Link>

              </article>

            ))}

          </div>


          {/* NO RESULTS */}

          {filteredDestinations.length === 0 && (

            <div className="destination-empty-state">

              <h3>No districts found.</h3>

              <p>
                Try another Berlin region.
              </p>

              <button
                type="button"
                onClick={() => setActiveFilter("ALL")}
              >
                View All Districts
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          BERLIN PERSONALITY
      ===================================================== */}

      <section className="berlin-personality">

        <div className="container">

          <div className="personality-header">

            <span className="section-eyebrow">
              FIND YOUR MOOD
            </span>

            <h2>
              Berlin has a
              <em>personality.</em>
            </h2>

          </div>


          <div className="personality-grid">

            <div className="personality-card personality-dark">

              <div className="personality-icon">
                ✦
              </div>

              <span>01 / HISTORY</span>

              <h3>
                Berlin
                <br />
                in layers.
              </h3>

              <p>
                Museums, monuments, architecture and stories
                that shaped the city.
              </p>

            </div>


            <div className="personality-card personality-violet">

              <div className="personality-icon">
                ◐
              </div>

              <span>02 / NIGHT</span>

              <h3>
                Berlin
                <br />
                after dark.
              </h3>

              <p>
                Neon streets, underground culture and nights
                that don't follow a schedule.
              </p>

            </div>


            <div className="personality-card personality-mint">

              <div className="personality-icon">
                ◇
              </div>

              <span>03 / ESCAPE</span>

              <h3>
                Berlin
                <br />
                outside.
              </h3>

              <p>
                Parks, riverside paths and open spaces beyond
                the classic city route.
              </p>

            </div>


            <div className="personality-card personality-light">

              <div className="personality-icon">
                ○
              </div>

              <span>04 / LOCAL</span>

              <h3>
                Berlin
                <br />
                like a local.
              </h3>

              <p>
                Independent cafés, neighbourhood shops and
                places worth discovering slowly.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED DISTRICT
      ===================================================== */}

    


      {/* =====================================================
          LOCAL MESSAGE
      ===================================================== */}

      <section className="destinations-local section-padding">

        <div className="container">

          <div className="destinations-local-box">

            <div className="local-content">

              <span>
                BEYOND THE OBVIOUS
              </span>

              <h2>
                The best Berlin stories
                <em>start off the map.</em>
              </h2>

              <p>
                We go beyond the famous sights. Discover
                neighbourhood corners, independent spaces and
                local moments that turn a city visit into your
                own Berlin story.
              </p>

              <Link
                to="/experiences"
                className="local-explore-btn"
              >
                Explore Experiences
                <FaArrowRight />
              </Link>

            </div>


            <div className="local-art">

              <div className="local-circle local-circle-one"></div>
              <div className="local-circle local-circle-two"></div>
              <div className="local-circle local-circle-three"></div>

              <div className="local-art-center">

                <strong>BERLIN</strong>

                <span>∞</span>

                <small>
                  NEVER JUST ONE THING
                </small>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="destinations-cta">

        <div className="destinations-cta-image">

          <img
            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=2000&q=85"
            alt="Berlin city"
          />

        </div>

        <div className="destinations-cta-overlay"></div>


        <div className="container">

          <div className="destinations-cta-content">

            <span>
              YOUR BERLIN STARTS HERE
            </span>

            <h2 className="text-light">
              Which Berlin
              <em>will you discover?</em>
            </h2>

            <p>
              Tell us what kind of Berlin you want to experience
              and we'll help shape the route around you.
            </p>

            <Link
              to="/contact"
              className="destinations-cta-btn"
            >
              Plan Your Berlin
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Destinations;