import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPalette,
  FaUtensils,
  FaWalking,
  FaCamera,
  FaMusic,
  FaWater,
  FaStar,
  FaLandmark,
  FaCity,
  FaMoon,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";

import "./Experiences.css";

function Experiences() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const experiences = [
    {
      image:
        "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1800&q=90",
      number: "01",
      category: "ART & CULTURE",
      type: "CULTURE",
      title: "Berlin",
      highlight: "After Dark.",
      description:
        "Move through galleries, creative spaces and atmospheric streets as Berlin changes character after sunset.",
      meta: "PRIVATE · 4 HOURS",
      icon: <FaPalette />,
      featured: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1600&q=90",
      number: "02",
      category: "STREET ART",
      type: "CREATIVE",
      title: "Urban",
      highlight: "Canvas.",
      description:
        "Discover Berlin through murals, graffiti, independent art spaces and the stories behind the city's visual culture.",
      meta: "LOCAL · 3 HOURS",
      icon: <FaCamera />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=90",
      number: "03",
      category: "FOOD & CULTURE",
      type: "FOOD",
      title: "Taste",
      highlight: "Berlin.",
      description:
        "A flavour-led journey through markets, neighbourhood cafés and contemporary Berlin food culture.",
      meta: "FOODIE · 4 HOURS",
      icon: <FaUtensils />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=90",
      number: "04",
      category: "NEIGHBOURHOODS",
      type: "LOCAL",
      title: "The",
      highlight: "Neighbourhood Edit.",
      description:
        "Leave the landmark checklist behind and explore Berlin through its neighbourhoods, independent shops and cafés.",
      meta: "LOCAL · 5 HOURS",
      icon: <FaWalking />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=90",
      number: "05",
      category: "NIGHTLIFE",
      type: "NIGHT",
      title: "Berlin",
      highlight: "Sound.",
      description:
        "Experience the city's music identity through intimate venues, electronic culture and carefully selected nights out.",
      meta: "NIGHT · 5 HOURS",
      icon: <FaMusic />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=90",
      number: "06",
      category: "RIVERSIDE",
      type: "RIVERSIDE",
      title: "Spree",
      highlight: "Perspective.",
      description:
        "See Berlin from the water with a slower route through riverside architecture, bridges and city views.",
      meta: "PRIVATE · 3 HOURS",
      icon: <FaWater />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1600&q=90",
      number: "07",
      category: "CITY STORIES",
      type: "CITY",
      title: "Berlin",
      highlight: "In Context.",
      description:
        "Walk through Berlin's most important landmarks while discovering the stories, people and moments behind them.",
      meta: "PRIVATE · 4 HOURS",
      icon: <FaCity />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=90",
      number: "08",
      category: "HERITAGE",
      type: "HERITAGE",
      title: "The",
      highlight: "Berlin Story.",
      description:
        "Explore the layers of Berlin through historic streets, monuments and places that shaped modern Germany.",
      meta: "GUIDED · 4 HOURS",
      icon: <FaLandmark />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=90",
      number: "09",
      category: "NIGHT EDIT",
      type: "NIGHT",
      title: "Berlin",
      highlight: "After Midnight.",
      description:
        "A cinematic evening through glowing streets, late dinners, music and Berlin's unmistakable nocturnal energy.",
      meta: "NIGHT · 5 HOURS",
      icon: <FaMoon />,
    },
  ];

  const filters = [
    {
      label: "ALL EXPERIENCES",
      value: "ALL",
      icon: <FaStar />,
    },
    {
      label: "CITY STORIES",
      value: "CITY",
      icon: <FaCity />,
    },
    {
      label: "HERITAGE",
      value: "HERITAGE",
      icon: <FaLandmark />,
    },
    {
      label: "RIVERSIDE",
      value: "RIVERSIDE",
      icon: <FaWater />,
    },
    {
      label: "NEIGHBOURHOODS",
      value: "LOCAL",
      icon: <FaWalking />,
    },
    {
      label: "FOOD & CULTURE",
      value: "FOOD",
      icon: <FaUtensils />,
    },
    {
      label: "NIGHTLIFE",
      value: "NIGHT",
      icon: <FaMoon />,
    },
    {
      label: "CREATIVE",
      value: "CREATIVE",
      icon: <FaPalette />,
    },
  ];

  const experienceTypes = [
    {
      number: "01",
      title: "Culture",
      text:
        "Museums, galleries, architecture and the stories that shaped Berlin.",
    },
    {
      number: "02",
      title: "Creative",
      text:
        "Street art, independent spaces, design and Berlin's visual language.",
    },
    {
      number: "03",
      title: "Food",
      text:
        "Markets, cafés, neighbourhood restaurants and contemporary flavours.",
    },
    {
      number: "04",
      title: "Night",
      text:
        "Music, atmosphere, rooftops and Berlin after dark.",
    },
  ];

  const filteredExperiences =
    activeFilter === "ALL"
      ? experiences
      : experiences.filter(
          (experience) => experience.type === activeFilter
        );

  const featuredExperience =
    activeFilter === "ALL"
      ? experiences[0]
      : filteredExperiences[0];

  const gridExperiences =
    activeFilter === "ALL"
      ? experiences.slice(1)
      : filteredExperiences.slice(1);

  return (
    <main className="berlin-experiences-page">

      {/* ================= HERO ================= */}

      <section className="experiences-hero">

        <div className="experiences-hero-bg"></div>
        <div className="experiences-hero-overlay"></div>
        <div className="experiences-hero-grid"></div>

        <div className="container experiences-hero-container">

          <div className="experiences-hero-content">

            <span className="experiences-hero-eyebrow">
              <span></span>
              BERLIN EXPERIENCES
            </span>

            <h1>
              Feel
              <br />
              <span>Berlin.</span>
            </h1>

            <p>
              Go beyond the postcard. Discover Berlin
              through art, food, neighbourhoods, music,
              architecture and nights that stay with you.
            </p>

            <div className="experiences-hero-actions">

              <a
                href="#experience-collection"
                className="experiences-hero-btn"
              >
                <span>Explore Experiences</span>
                <FaArrowRight />
              </a>

              <Link
                to="/contact"
                className="experiences-hero-link"
              >
                Build My Experience
              </Link>

            </div>

          </div>

          <div className="experiences-hero-side">
            <span>EXPERIENCE</span>

            <strong>09</strong>

            <small>
              ART
              <br />
              FOOD
              <br />
              MUSIC
              <br />
              LIFE
            </small>
          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="experiences-intro section-padding">

        <div className="container">

          <div className="row align-items-end g-5">

            <div className="col-lg-7">

              <SectionTitle
                eyebrow="NOT JUST A CITY BREAK"
                title="Experience"
                highlight="the real Berlin."
                description="Berlin rewards curiosity. One street can feel historic, another experimental, and the next completely local. Our experiences are designed around that contrast."
              />

            </div>

            <div className="col-lg-5">

              <div className="experiences-intro-note">

                <div className="experiences-intro-number">
                  09
                </div>

                <div>
                  <strong>EXPERIENCE EDITS</strong>

                  <p>
                    Culture, creative life,
                    food, music, neighbourhoods
                    and water.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TYPE STRIP ================= */}

      <section className="experience-type-strip">

        <div className="container">

          <div className="experience-type-grid">

            {experienceTypes.map((type) => (
              <div
                className="experience-type-item"
                key={type.number}
              >

                <div className="experience-type-number">
                  {type.number}
                </div>

                <h3>{type.title}</h3>

                <p>{type.text}</p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= COLLECTION ================= */}

      <section
        className="experience-collection"
        id="experience-collection"
      >

        <div className="container">

          <div className="experience-collection-heading">

            <div>
              <span>THE BERLIN EXPERIENCE EDIT</span>

              <h2>
                Choose your
                <br />
                <strong>energy.</strong>
              </h2>
            </div>

            <p>
              From slow neighbourhood walks to
              high-energy nights, choose a side of
              Berlin that matches your mood.
            </p>

          </div>


          {/* ================= FILTER TABS ================= */}

          <div className="experience-tabs-wrapper">

            <div className="experience-tabs">

              {filters.map((filter) => (

                <button
                  type="button"
                  key={filter.value}
                  className={
                    activeFilter === filter.value
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveFilter(filter.value)
                  }
                >

                  <span className="experience-tab-icon">
                    {filter.icon}
                  </span>

                  <span>
                    {filter.label}
                  </span>

                </button>

              ))}

            </div>

          </div>


          {/* ================= RESULT COUNT ================= */}

          <div className="experience-results-bar">

            <span>
              {filteredExperiences.length
                .toString()
                .padStart(2, "0")}{" "}
              EXPERIENCES
            </span>

            <span>
              {activeFilter === "ALL"
                ? "ALL BERLIN"
                : activeFilter}
            </span>

          </div>


          {/* ================= FEATURED ================= */}

          {featuredExperience && (

            <article className="featured-experience">

              <div className="featured-experience-image">

                <img
                  src={featuredExperience.image}
                  alt={`${featuredExperience.title} ${featuredExperience.highlight}`}
                />

                <div className="featured-experience-overlay"></div>

                <span className="featured-experience-tag">
                  SIGNATURE EXPERIENCE
                </span>

                <span className="featured-experience-number">
                  {featuredExperience.number}
                </span>

              </div>


              <div className="featured-experience-content">

                <span className="featured-experience-category">
                  {featuredExperience.category}
                </span>

                <h3>
                  {featuredExperience.title}
                  <br />
                  <span>
                    {featuredExperience.highlight}
                  </span>
                </h3>

                <div className="featured-experience-rating">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                  <span>SIGNATURE EDIT</span>

                </div>

                <p>
                  {featuredExperience.description}
                </p>

                <div className="featured-experience-meta">

                  <span>
                    {featuredExperience.icon}
                    {featuredExperience.meta}
                  </span>

                  <span>
                    PRIVATE EXPERIENCE
                  </span>

                </div>

                <Link
                  to="/contact"
                  className="featured-experience-btn"
                >
                  <span>
                    Create This Experience
                  </span>

                  <FaArrowRight />

                </Link>

              </div>

            </article>

          )}


          {/* ================= GRID ================= */}

          {gridExperiences.length > 0 && (

            <div className="row g-4 experience-grid">

              {gridExperiences.map((experience) => (

                <div
                  className="col-lg-4 col-md-6"
                  key={experience.number}
                >

                  <article className="experience-card">

                    <div className="experience-card-image">

                      <img
                        src={experience.image}
                        alt={`${experience.title} ${experience.highlight}`}
                        loading="lazy"
                      />

                      <div className="experience-card-overlay"></div>

                      <span className="experience-card-category">
                        {experience.category}
                      </span>

                      <span className="experience-card-number">
                        {experience.number}
                      </span>

                    </div>


                    <div className="experience-card-content">

                      <div className="experience-card-top">

                        <span>
                          {experience.icon}
                          {experience.meta}
                        </span>

                        <span className="experience-card-dot">
                          ●
                        </span>

                      </div>

                      <h3>
                        {experience.title}
                        <br />
                        <span>
                          {experience.highlight}
                        </span>
                      </h3>

                      <p>
                        {experience.description}
                      </p>

                      <Link
                        to="/contact"
                        className="experience-card-link"
                      >
                        <span>Discover</span>

                        <FaArrowRight />

                      </Link>

                    </div>

                  </article>

                </div>

              ))}

            </div>

          )}

          {filteredExperiences.length === 0 && (

            <div className="experience-empty">
              <strong>No experiences found.</strong>
              <span>Choose another Berlin mood.</span>
            </div>

          )}

        </div>

      </section>


      {/* ================= MOOD ================= */}

      <section className="experience-mood-section">

        <div className="container">

          <div className="experience-mood-heading">

            <span>WHAT'S YOUR BERLIN?</span>

            <h2>
              Pick a mood.
              <br />
              <strong>We'll build the day.</strong>
            </h2>

          </div>


          <div className="experience-mood-grid">

            <Link
              to="/contact"
              className="experience-mood-card"
            >
              <span>01</span>

              <div>
                <small>CURIOUS</small>
                <h3>Art &amp; Culture</h3>

                <p>
                  Museums, galleries, architecture
                  and stories from Berlin's past.
                </p>
              </div>

              <FaArrowRight />
            </Link>


            <Link
              to="/contact"
              className="experience-mood-card"
            >
              <span>02</span>

              <div>
                <small>CREATIVE</small>
                <h3>Street &amp; Design</h3>

                <p>
                  Murals, independent spaces,
                  fashion and visual culture.
                </p>
              </div>

              <FaArrowRight />
            </Link>


            <Link
              to="/contact"
              className="experience-mood-card"
            >
              <span>03</span>

              <div>
                <small>SOCIAL</small>
                <h3>Food &amp; Markets</h3>

                <p>
                  Local flavours, market halls,
                  cafés and neighbourhood bites.
                </p>
              </div>

              <FaArrowRight />
            </Link>


            <Link
              to="/contact"
              className="experience-mood-card"
            >
              <span>04</span>

              <div>
                <small>AFTER DARK</small>
                <h3>Music &amp; Nightlife</h3>

                <p>
                  Berlin after sunset with music,
                  atmosphere and late-night energy.
                </p>
              </div>

              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CUSTOM CTA ================= */}

      <section className="custom-experience-section">

        <div className="custom-experience-bg"></div>
        <div className="custom-experience-overlay"></div>

        <div className="container">

          <div className="custom-experience-content">

            <span>MADE AROUND YOU</span>

            <h2>
              Don't fit
              <br />
              the itinerary.
              <br />
              <strong>Break it.</strong>
            </h2>

            <p>
              Tell us what you love, how much time
              you have and what kind of Berlin you
              want to discover. We'll shape a private
              experience around your rhythm.
            </p>

            <Link
              to="/contact"
              className="custom-experience-btn"
            >
              <span>Build My Berlin</span>
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= QUOTE ================= */}

      <section className="experiences-quote">

        <div className="container">

          <div className="experiences-quote-inner">

            <div className="experiences-quote-icon">
              <FaPalette />
            </div>

            <blockquote>
              “Berlin isn't a city you simply
              see. It's a city you experience.”
            </blockquote>

            <span>
              NOIR NEON BERLIN · EXPERIENCE EDIT
            </span>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="experiences-final-cta">

        <div className="container">

          <div className="experiences-final-inner">

            <div>

              <span>YOUR BERLIN, YOUR WAY</span>

              <h2>
                Ready to
                <br />
                <strong>feel it?</strong>
              </h2>

            </div>

            <div className="experiences-final-right">

              <p>
                Choose one of our signature edits
                or let us create something completely
                personal for your Berlin journey.
              </p>

              <Link
                to="/contact"
                className="experiences-final-btn"
              >
                <span>Plan My Experience</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Experiences;