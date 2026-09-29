import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaExpand,
  FaCity,
  FaPalette,
  FaMoon,
  FaWater,
  FaStar,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";

import "./Gallery.css";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL");

 const galleryItems = [
  {
   image:
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1800&q=90",
    title: "Berlin Lines",
    category: "ARCHITECTURE",
    type: "ARCHITECTURE",
    number: "01",
    size: "large",
    location: "MITTE",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1600&q=90",
    title: "Electric Nights",
    category: "NIGHT",
    type: "NIGHT",
    number: "02",
    size: "normal",
    location: "FRIEDRICHSHAIN",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1600&q=90",
    title: "Walls Speak",
    category: "URBAN ART",
    type: "ART",
    number: "03",
    size: "tall",
    location: "KREUZBERG",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=1600&q=90",
    title: "Slow Berlin",
    category: "SLOW",
    type: "SLOW",
    number: "04",
    size: "normal",
    location: "PRENZLAUER BERG",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1600&q=90",
    title: "Concrete Stories",
    category: "ARCHITECTURE",
    type: "ARCHITECTURE",
    number: "05",
    size: "normal",
    location: "TIERGARTEN",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=90",
    title: "City Pulse",
    category: "EVENTS",
    type: "EVENTS",
    number: "06",
    size: "large",
    location: "TEMPELHOF",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1600&q=90",
    title: "After Hours",
    category: "NIGHT",
    type: "NIGHT",
    number: "07",
    size: "tall",
    location: "KREUZBERG",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=90",
    title: "Blue Spree",
    category: "WATER",
    type: "WATER",
    number: "08",
    size: "normal",
    location: "SPREE RIVER",
  },
  {
    image:
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=90",
    title: "Creative Berlin",
    category: "ART",
    type: "ART",
    number: "09",
    size: "normal",
    location: "MITTE",
  },
  {
   image:
  "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1800&q=90",
    title: "Green Escape",
    category: "SLOW",
    type: "SLOW",
    number: "10",
    size: "large",
    location: "GRUNEWALD",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=90",
    title: "Berlin Detail",
    category: "ARCHITECTURE",
    type: "ARCHITECTURE",
    number: "11",
    size: "normal",
    location: "CHARLOTTENBURG",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=90",
    title: "City Energy",
    category: "EVENTS",
    type: "EVENTS",
    number: "12",
    size: "tall",
    location: "BERLIN",
  },
];

  const filters = [
    "ALL",
    "ARCHITECTURE",
    "ART",
    "NIGHT",
    "EVENTS",
    "WATER",
    "SLOW",
  ];

  const filteredItems =
    activeFilter === "ALL"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.type === activeFilter ||
            item.category === activeFilter
        );

  const galleryStats = [
    {
      number: "01",
      icon: <FaCity />,
      title: "Architecture",
      text:
        "Monuments, modernism, concrete textures and Berlin's changing skyline.",
    },
    {
      number: "02",
      icon: <FaPalette />,
      title: "Urban Art",
      text:
        "Murals, colour, graffiti and creative spaces across the city.",
    },
    {
      number: "03",
      icon: <FaMoon />,
      title: "Night",
      text:
        "Berlin after dark — lights, movement, music and atmosphere.",
    },
    {
      number: "04",
      icon: <FaWater />,
      title: "Open Air",
      text:
        "The Spree, parks, courtyards and slower sides of the capital.",
    },
  ];

  return (
    <main className="berlin-gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg"></div>
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-grid"></div>

        <div className="container gallery-hero-container">
          <div className="gallery-hero-content">

            <span className="gallery-hero-eyebrow">
              <span></span>
              BERLIN IN FRAMES
            </span>

            <h1>
              See
              <br />
              <span>Berlin.</span>
            </h1>

            <p>
              A visual archive of architecture,
              street art, quiet corners, electric
              nights and the everyday details that
              make Berlin unmistakable.
            </p>

            <div className="gallery-hero-actions">
              <a
                href="#gallery-collection"
                className="gallery-hero-btn"
              >
                <span>Explore Gallery</span>
                <FaArrowRight />
              </a>

              <Link
                to="/contact"
                className="gallery-hero-link"
              >
                Plan a Photo Walk
                <FaArrowRight />
              </Link>
            </div>

          </div>

          <div className="gallery-hero-side">
            <span>VISUAL ARCHIVE</span>

            <strong>12</strong>

            <small>
              CITY
              <br />
              ART
              <br />
              LIGHT
              <br />
              LIFE
            </small>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="gallery-intro section-padding">
        <div className="container">

          <div className="row align-items-end g-5">

            <div className="col-lg-7">
              <SectionTitle
                eyebrow="THE CITY THROUGH A LENS"
                title="Every corner"
                highlight="has a story."
                description="Berlin's visual character changes from street to street. From historic architecture to contemporary murals, the city works like an open-air gallery."
              />
            </div>

            <div className="col-lg-5">
              <div className="gallery-intro-note">

                <div className="gallery-intro-number">
                  12
                </div>

                <div>
                  <strong>VISUAL MOODS</strong>

                  <p>
                    Architecture, art, night,
                    water, events and slow Berlin.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* CATEGORY STRIP */}
      <section className="gallery-category-strip">
        <div className="container">

          <div className="gallery-category-grid">

            {galleryStats.map((item) => (
              <div
                className="gallery-category-item"
                key={item.number}
              >
                <div className="gallery-category-top">

                  <span>{item.number}</span>

                  <div className="gallery-category-icon">
                    {item.icon}
                  </div>

                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* COLLECTION */}
      <section
        className="gallery-collection"
        id="gallery-collection"
      >
        <div className="container">

          <div className="gallery-collection-heading">

            <div>
              <span>NOIR NEON VISUAL ARCHIVE</span>

              <h2>
                Berlin,
                <br />
                <strong>unfiltered.</strong>
              </h2>
            </div>

            <p>
              Explore the city by visual mood.
              Select a category and discover a
              different side of Berlin.
            </p>

          </div>


          {/* FILTERS */}
          <div className="gallery-filters">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={
                  activeFilter === filter ? "active" : ""
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>


          {/* MASONRY */}
          <div className="gallery-masonry">

            {filteredItems.map((item) => (
              <article
                className={`gallery-item gallery-item-${item.size}`}
                key={item.number}
              >
                <div className="gallery-item-image">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  {/* LUXURY IMAGE GRADIENT */}
                  <div className="gallery-item-gradient"></div>

                  <div className="gallery-item-overlay"></div>

                  <span className="gallery-item-category">
                    {item.category}
                  </span>

                  <span className="gallery-item-number">
                    {item.number}
                  </span>

                  <button
                    type="button"
                    className="gallery-expand"
                    aria-label={`View ${item.title}`}
                  >
                    <FaExpand />
                  </button>

                  {/* TITLE ALWAYS VISIBLE */}
                  <div className="gallery-item-info">

                    <span className="gallery-item-location">
                      {item.location}
                    </span>

                    <h3>{item.title}</h3>

                    <div className="gallery-view-link">
                      <span>Explore Frame</span>
                      <FaArrowRight />
                    </div>

                  </div>

                </div>
              </article>
            ))}

          </div>

        </div>
      </section>


      {/* PHOTO WALK */}
      <section className="gallery-photo-section">
        <div className="container">

          <div className="gallery-photo-card">

            <div className="gallery-photo-image">

              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=90"
                alt="Berlin photography experience"
              />

              <div className="gallery-photo-overlay"></div>

              <span>PHOTO WALK</span>

            </div>

            <div className="gallery-photo-content">

              <span>CAPTURE YOUR BERLIN</span>

              <h2 className="text-light">
                See it.
                <br />
                Shoot it.
                <br />
                <strong>Keep it.</strong>
              </h2>

              <p>
                Explore Berlin with a private local
                route designed around architecture,
                street art, neighbourhoods and the
                light you want to capture.
              </p>

              <Link
                to="/contact"
                className="gallery-photo-btn"
              >
                <span>Plan My Photo Walk</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* PHOTO SPOTS */}
      <section className="gallery-spots-section">
        <div className="container">

          <div className="gallery-spots-heading">
            <span>FRAME YOUR DAY</span>

            <h2>
              Four ways to
              <br />
              <strong>see Berlin.</strong>
            </h2>
          </div>


          <div className="gallery-spots-grid">

            <Link to="/contact" className="gallery-spot-card">
              <span>01</span>

              <div>
                <small>MORNING</small>
                <h3>Soft Berlin</h3>
                <p>
                  Quiet streets, warm light,
                  cafés and architecture.
                </p>
              </div>

              <FaArrowRight />
            </Link>


            <Link to="/contact" className="gallery-spot-card">
              <span>02</span>

              <div>
                <small>AFTERNOON</small>
                <h3>Urban Berlin</h3>
                <p>
                  Galleries, murals, courtyards
                  and neighbourhood colour.
                </p>
              </div>

              <FaArrowRight />
            </Link>


            <Link to="/contact" className="gallery-spot-card">
              <span>03</span>

              <div>
                <small>GOLDEN HOUR</small>
                <h3>Berlin Glow</h3>
                <p>
                  Rooftops, river views and
                  changing city light.
                </p>
              </div>

              <FaArrowRight />
            </Link>


            <Link to="/contact" className="gallery-spot-card">
              <span>04</span>

              <div>
                <small>AFTER DARK</small>
                <h3>Neon Berlin</h3>
                <p>
                  Music, movement, lights
                  and the city after sunset.
                </p>
              </div>

              <FaArrowRight />
            </Link>

          </div>
        </div>
      </section>


      {/* QUOTE */}
      <section className="gallery-quote">
        <div className="container">

          <div className="gallery-quote-inner">

            <div className="gallery-quote-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <blockquote>
              “The best Berlin memories aren't
              always the landmarks. Sometimes
              they're the frame between them.”
            </blockquote>

            <span>
              NOIR NEON BERLIN · VISUAL EDIT
            </span>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="gallery-final-cta">

        <div className="gallery-final-bg"></div>
        <div className="gallery-final-overlay"></div>

        <div className="container">

          <div className="gallery-final-content">

            <span>YOUR BERLIN FRAME</span>

            <h2 className="text-light">
              Ready to
              <br />
              <strong>capture it?</strong>
            </h2>

            <p>
              Tell us what you want to photograph,
              and we'll shape a Berlin route around
              your visual style.
            </p>

            <Link
              to="/contact"
              className="gallery-final-btn"
            >
              <span>Create My Photo Route</span>
              <FaArrowRight />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Gallery;