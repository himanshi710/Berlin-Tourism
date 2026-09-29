import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaCompass,
  FaHeart,
  FaMapMarkedAlt,
  FaMoon,
  FaPalette,
  FaShieldAlt,
  FaStar,
  FaTrain,
} from "react-icons/fa";

import "./About.css";

function About() {
  const whyItems = [
    {
      icon: <FaCompass />,
      number: "01",
      title: "Local Perspective",
      text: "Berlin is best experienced beyond the obvious. We connect you with neighbourhoods, streets, cafés, galleries and places that reveal the city's real character.",
    },
    {
      icon: <FaPalette />,
      number: "02",
      title: "Culture First",
      text: "From contemporary art and brutalist architecture to underground music and creative spaces, Berlin's culture shapes every experience we create.",
    },
    {
      icon: <FaStar />,
      number: "03",
      title: "Curated Experiences",
      text: "No generic sightseeing lists. Every experience is carefully selected around atmosphere, story, design and the way you want to experience Berlin.",
    },
    {
      icon: <FaMapMarkedAlt />,
      number: "04",
      title: "Smart Planning",
      text: "We bring together stays, experiences, transport and city discovery into one seamless Berlin plan without making your journey feel over-scheduled.",
    },
    {
      icon: <FaTrain />,
      number: "05",
      title: "Easy Movement",
      text: "Move through Berlin comfortably with carefully planned routes, private transfers, local transport guidance and chauffeur options when required.",
    },
    {
      icon: <FaHeart />,
      number: "06",
      title: "Personal Touch",
      text: "Your Berlin should feel personal. We adapt recommendations, timing and experiences around your interests, pace and travel style.",
    },
  ];

  const commitments = [
    {
      icon: <FaShieldAlt />,
      title: "The details matter.",
      text: "From your first enquiry to the final moment of your journey, we focus on the small details that make a city experience feel effortless.",
    },
    {
      icon: <FaCompass />,
      title: "The city stays authentic.",
      text: "We don't try to turn Berlin into something it isn't. Its contrasts, creativity, history and raw energy are part of what makes it special.",
    },
    {
      icon: <FaMoon />,
      title: "Your pace comes first.",
      text: "Slow morning, full-day discovery or Berlin after dark — your itinerary should follow your rhythm, not a fixed template.",
    },
  ];

  return (
    <main className="berlin-about-page">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section className="about-hero">
        <div className="about-hero-grid">

          <div className="about-hero-content">

            <span className="about-eyebrow">
              NOIR NEON BERLIN
            </span>

            <h1>
              A Berlin experience,
              <span> beyond the obvious.</span>
            </h1>

            <p className="about-hero-text">
              Berlin is not a city you simply visit. You move through it,
              discover it, question it and eventually find your own version
              of it.
            </p>

            <div className="about-hero-actions">

              <Link to="/contact" className="about-primary-btn">
                Plan Your Berlin
                <FaArrowRight />
              </Link>

              <Link to="/experiences" className="about-secondary-btn">
                Explore Experiences
              </Link>

            </div>

            <div className="about-hero-note">
              <span className="note-line"></span>
              <span>
                CURATED IN BERLIN
              </span>
            </div>

          </div>


          <div className="about-hero-visual">

            <div className="about-hero-image-wrap">

              <img
                src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1400&q=85"
                alt="Berlin city architecture"
              />

              <div className="hero-image-overlay"></div>

            </div>

            <div className="hero-floating-card">
              <span className="floating-small">
                SEE BERLIN
              </span>

              <strong>
                Differently.
              </strong>

              <span className="floating-arrow">
                ↗
              </span>
            </div>

            <div className="hero-coordinate">
              52.5200° N
              <br />
              13.4050° E
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          POSITION
      ===================================================== */}

      <section className="about-position section-padding">

        <div className="container">

          <div className="position-grid">

            <div className="position-label">
              <span className="about-eyebrow">
                OUR POSITION
              </span>

              <div className="position-index">
                01 / 06
              </div>
            </div>


            <div className="position-content">

              <h2>
                We don't just show Berlin.
                <span> We help you feel it.</span>
              </h2>

              <p>
                Noir Neon Berlin is a modern city travel concept created
                around the many sides of Berlin — its architecture,
                neighbourhoods, creative culture, nightlife, food and
                unmistakable energy.
              </p>

              <p>
                We combine thoughtful planning with local perspective to
                create experiences that feel personal rather than packaged.
                Whether it is your first Berlin visit or your tenth, there
                is always another layer to discover.
              </p>

              <div className="position-stats">

                <div className="position-stat">
                  <strong>12+</strong>
                  <span>City Experiences</span>
                </div>

                <div className="position-stat">
                  <strong>40+</strong>
                  <span>Berlin Places</span>
                </div>

                <div className="position-stat">
                  <strong>24/7</strong>
                  <span>Travel Support</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="about-story section-padding">

        <div className="container">

          <div className="story-grid">

            <div className="story-visual">

              <div className="story-main-image">
                <img
                  src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1200&q=85"
                  alt="Berlin street"
                />
              </div>

              <div className="story-small-image">
                <img
                  src="https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=85"
                  alt="Berlin architecture"
                />
              </div>

              <div className="story-stamp">
                BERLIN
                <span>EST. 2026</span>
              </div>

            </div>


            <div className="story-content">

              <span className="about-eyebrow">
                THE IDEA
              </span>

              <h2>
                Berlin has
                <span> many faces.</span>
              </h2>

              <p>
                One moment it is quiet and architectural. The next,
                completely electric. A hidden courtyard can sit metres
                away from a famous landmark, while a former industrial
                building becomes tomorrow's creative hotspot.
              </p>

              <p>
                That contrast is exactly what we love about Berlin.
              </p>

              <p>
                Noir Neon was created to bring those different sides
                together — the iconic and the unexpected, the refined and
                the raw, the daytime city and the Berlin after dark.
              </p>

              <Link
                to="/destinations"
                className="text-link"
              >
                Discover Berlin
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY NOIR NEON
      ===================================================== */}

      <section className="about-why section-padding">

        <div className="container">

          <div className="section-heading-row">

            <div>
              <span className="about-eyebrow">
                WHY NOIR NEON
              </span>

              <h2>
                Designed around
                <span> the way you travel.</span>
              </h2>
            </div>

            <p>
              Less checklist. More connection.
              Every element is designed to make your Berlin journey
              smoother, richer and more memorable.
            </p>

          </div>


          <div className="why-grid">

            {whyItems.map((item) => (
              <article
                className="why-card"
                key={item.number}
              >

                <div className="why-card-top">

                  <span className="why-number">
                    {item.number}
                  </span>

                  <div className="why-icon">
                    {item.icon}
                  </div>

                </div>

                <div className="why-card-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

                <div className="why-card-footer">
                  <FaArrowRight />
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW WE OPERATE
      ===================================================== */}

      <section className="about-operate section-padding">

        <div className="container">

          <div className="operate-header">

            <div>
              <span className="about-eyebrow light">
                HOW WE OPERATE
              </span>

              <h2>
                Simple planning.
                <span> Strong experiences.</span>
              </h2>
            </div>

            <p>
              We keep the process clear, flexible and human — so you can
              spend less time organising and more time experiencing Berlin.
            </p>

          </div>


          <div className="operate-grid">

            {commitments.map((item, index) => (
              <article
                className="operate-card"
                key={item.title}
              >

                <div className="operate-number">
                  0{index + 1}
                </div>

                <div className="operate-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <div className="operate-check">
                  <FaCheck />
                  <span>NOIR NEON STANDARD</span>
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          QUOTE
      ===================================================== */}

      <section className="about-quote">

        <div className="container">

          <div className="quote-inner">

            <span className="quote-mark">
              “
            </span>

            <h2>
              Berlin isn't one thing.
              <span> That's the point.</span>
            </h2>

            <div className="quote-line"></div>

            <span className="quote-label">
              FIND YOUR BERLIN
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final-cta">

        <div className="container">

          <div className="final-cta-card">

            <div className="final-cta-content">

              <span className="about-eyebrow">
                YOUR NEXT CHAPTER
              </span>

              <h2>
                Your Berlin
                <span> starts here.</span>
              </h2>

              <p>
                Tell us how you want to experience Berlin and we'll help
                shape the city around you.
              </p>

              <div className="final-cta-actions">

                <Link
                  to="/contact"
                  className="about-primary-btn"
                >
                  Plan Your Berlin
                  <FaArrowRight />
                </Link>

                <Link
                  to="/contact"
                  className="about-secondary-btn"
                >
                  Talk to Us
                </Link>

              </div>

            </div>


            <div className="final-cta-art">

              <div className="cta-circle cta-circle-one"></div>
              <div className="cta-circle cta-circle-two"></div>
              <div className="cta-circle cta-circle-three"></div>

              <span className="cta-coordinate">
                BERLIN
                <br />
                52°31′N
              </span>

              <span className="cta-arrow">
                ↗
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;