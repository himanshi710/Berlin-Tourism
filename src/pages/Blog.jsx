import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaMapMarkerAlt,
  FaBookOpen,
  FaCity,
  FaPalette,
  FaUtensils,
  FaMoon,
  FaCamera,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";

import "./Blog.css";

function Blog() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const articles = [
    {
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1800&q=90",
      category: "CITY GUIDE",
      type: "CITY",
      title: "Berlin Beyond the Postcard",
      excerpt:
        "A different way to experience the capital — through neighbourhoods, architecture, local rhythm and the details between the famous sights.",
      location: "BERLIN",
      readTime: "6 MIN READ",
      date: "CITY EDIT",
      featured: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1600&q=90",
      category: "ART & DESIGN",
      type: "ART",
      title: "Where Berlin Walls Tell Stories",
      excerpt:
        "From monumental murals to tiny pieces hidden around neighbourhood corners, discover the creative language written across the city.",
      location: "KREUZBERG",
      readTime: "5 MIN READ",
      date: "ART EDIT",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=90",
      category: "SLOW BERLIN",
      type: "SLOW",
      title: "A Slower Side of Berlin",
      excerpt:
        "Green spaces, riverside walks, quiet cafés and neighbourhood streets for travellers who prefer to take the city one moment at a time.",
      location: "PRENZLAUER BERG",
      readTime: "7 MIN READ",
      date: "SLOW EDIT",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=90",
      category: "NIGHTLIFE",
      type: "NIGHT",
      title: "Berlin After Dark",
      excerpt:
        "When the lights come on, Berlin changes pace. Explore the visual energy, music and atmosphere of the city after sunset.",
      location: "FRIEDRICHSHAIN",
      readTime: "6 MIN READ",
      date: "NIGHT EDIT",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",
      category: "NEIGHBOURHOODS",
      type: "LOCAL",
      title: "The Kiez Guide",
      excerpt:
        "Berlin's neighbourhoods each have their own character. Here's how to explore beyond the obvious city-centre route.",
      location: "BERLIN",
      readTime: "8 MIN READ",
      date: "LOCAL EDIT",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=90",
      category: "CULTURE",
      type: "CULTURE",
      title: "A Weekend for Culture Lovers",
      excerpt:
        "Museums, galleries, architecture and creative spaces — a cultural route for seeing another side of the German capital.",
      location: "MITTE",
      readTime: "7 MIN READ",
      date: "CULTURE EDIT",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=90",
      category: "CITY LIFE",
      type: "CITY",
      title: "Berlin in Motion",
      excerpt:
        "How to move through Berlin while keeping the journey part of the experience — from streets and squares to river routes.",
      location: "BERLIN",
      readTime: "5 MIN READ",
      date: "CITY EDIT",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=90",
      category: "WATER & NATURE",
      type: "SLOW",
      title: "Following the Spree",
      excerpt:
        "Take a quieter route through Berlin with riverside views, open spaces and moments away from the busiest streets.",
      location: "SPREE",
      readTime: "6 MIN READ",
      date: "SLOW EDIT",
    },
  ];

  const filters = [
    "ALL",
    "CITY",
    "LOCAL",
    "ART",
    "CULTURE",
    "NIGHT",
    "SLOW",
  ];

  const filteredArticles =
    activeFilter === "ALL"
      ? articles
      : articles.filter((article) => article.type === activeFilter);

  const editorialTopics = [
    {
      number: "01",
      icon: <FaCity />,
      title: "City Guides",
      text:
        "Routes, neighbourhoods and ideas for discovering Berlin beyond the obvious.",
    },
    {
      number: "02",
      icon: <FaPalette />,
      title: "Art & Culture",
      text:
        "Creative spaces, galleries, architecture and the visual language of the city.",
    },
    {
      number: "03",
      icon: <FaUtensils />,
      title: "Food & Local",
      text:
        "Markets, cafés and neighbourhood flavours worth building a day around.",
    },
    {
      number: "04",
      icon: <FaMoon />,
      title: "After Dark",
      text:
        "Night-time stories, music, atmosphere and Berlin after sunset.",
    },
  ];

  return (
    <main className="berlin-blog-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="blog-hero">

        <div className="blog-hero-bg"></div>
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-grid"></div>

        <div className="container blog-hero-container">

          <div className="blog-hero-content">

            <span className="blog-hero-eyebrow">
              <span></span>
              THE BERLIN EDIT
            </span>

            <h1 className="text-light">
              Stories
              <br />
              <span>from Berlin.</span>
            </h1>

            <p>
              Insider ideas, neighbourhood stories,
              design, food, culture and the moments
              that make the city worth exploring.
            </p>

            <div className="blog-hero-actions">

              <a
                href="#blog-collection"
                className="blog-hero-btn"
              >
                <span>Read The Edit</span>
                <FaArrowRight />
              </a>

              <Link
                to="/contact"
                className="blog-hero-link"
              >
                Plan Your Berlin
              </Link>

            </div>

          </div>

          <div className="blog-hero-side">

            <span>
              EDITORIAL
            </span>

            <strong>
              08
            </strong>

            <small>
              STORIES
              <br />
              IDEAS
              <br />
              PLACES
              <br />
              MOMENTS
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="blog-intro section-padding">

        <div className="container">

          <div className="row align-items-end g-5">

            <div className="col-lg-7">

              <SectionTitle
                eyebrow="NOIR NEON EDITORIAL"
                title="Know the city"
                highlight="before you go."
                description="Berlin is more than its landmarks. Its character lives in neighbourhoods, creative spaces, food markets, riverside walks and the everyday details between them."
              />

            </div>

            <div className="col-lg-5">

              <div className="blog-intro-note">

                <div className="blog-intro-icon">
                  <FaBookOpen />
                </div>

                <div>

                  <strong>
                    THE BERLIN EDIT
                  </strong>

                  <p>
                    Independent-style travel stories
                    designed to inspire your next route.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EDITORIAL TOPICS
      ===================================================== */}

      <section className="blog-topic-strip">

        <div className="container">

          <div className="blog-topic-grid">

            {editorialTopics.map((topic) => (

              <div
                className="blog-topic-item"
                key={topic.number}
              >

                <div className="blog-topic-top">

                  <span>
                    {topic.number}
                  </span>

                  <div className="blog-topic-icon">
                    {topic.icon}
                  </div>

                </div>

                <h3>
                  {topic.title}
                </h3>

                <p>
                  {topic.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED STORY
      ===================================================== */}

      <section className="blog-featured-section">

        <div className="container">

          <div className="blog-section-heading">

            <div>

              <span>
                FEATURED STORY
              </span>

              <h2 className="text-light">
                The city,
                <br />
                <strong>unfiltered.</strong>
              </h2>

            </div>

            <p>
              Start with a wider view of Berlin,
              then choose the neighbourhood, mood
              or experience that feels like yours.
            </p>

          </div>


          <article className="blog-featured-card">

            <div className="blog-featured-image">

              <img
                src={articles[0].image}
                alt={articles[0].title}
              />

              <div className="blog-featured-overlay"></div>

              <span>
                {articles[0].category}
              </span>

            </div>

            <div className="blog-featured-content">

              <div className="blog-article-meta">

                <span>
                  <FaMapMarkerAlt />
                  {articles[0].location}
                </span>

                <span>
                  <FaClock />
                  {articles[0].readTime}
                </span>

              </div>

              <h3 className="text-light">
                {articles[0].title}
              </h3>

              <p>
                {articles[0].excerpt}
              </p>

              <Link
                to="/contact"
                className="blog-read-btn"
              >
                <span>
                  Read Story
                </span>

                <FaArrowRight />

              </Link>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          ARTICLE COLLECTION
      ===================================================== */}

      <section
        className="blog-collection"
        id="blog-collection"
      >

        <div className="container">

          <div className="blog-collection-heading">

            <div>

              <span>
                LATEST BERLIN STORIES
              </span>

              <h2>
                Explore
                <br />
                <strong>the edit.</strong>
              </h2>

            </div>

            <p>
              Browse stories by mood and discover
              another side of Berlin.
            </p>

          </div>


          {/* FILTERS */}

          <div className="blog-filters">

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


          {/* ARTICLES */}

          <div className="blog-grid">

            {filteredArticles.map((article) => (

              <article
                className="blog-card"
                key={article.title}
              >

                <div className="blog-card-image">

                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                  />

                  <div className="blog-card-overlay"></div>

                  <span className="blog-card-category">
                    {article.category}
                  </span>

                  <span className="blog-card-date">
                    {article.date}
                  </span>

                </div>


                <div className="blog-card-content">

                  <div className="blog-card-meta">

                    <span>
                      <FaMapMarkerAlt />
                      {article.location}
                    </span>

                    <span>
                      <FaClock />
                      {article.readTime}
                    </span>

                  </div>

                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.excerpt}
                  </p>

                  <Link
                    to="/contact"
                    className="blog-card-link"
                  >
                    <span>
                      Read More
                    </span>

                    <FaArrowRight />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCAL BERLIN
      ===================================================== */}

      <section className="blog-local-section">

        <div className="container">

          <div className="blog-local-card">

            <div className="blog-local-content">

              <span>
                GOING LOCAL
              </span>

              <h2>
                Don't just
                <br />
                visit <strong>Berlin.</strong>
                <br />
                Read it.
              </h2>

              <p>
                Berlin's neighbourhoods each reveal
                a different side of the city. Build a
                day around local streets, cafés,
                creative spaces and quieter corners.
              </p>

              <Link
                to="/destinations"
                className="blog-local-btn"
              >
                <span>
                  Explore Neighbourhoods
                </span>

                <FaArrowRight />

              </Link>

            </div>

            <div className="blog-local-image">

             <img
  src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90"
  alt="Berlin city lights at night"
  loading="lazy"
/>

              <div className="blog-local-overlay"></div>

              <span>
                KIEZ
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAVEL NOTE
      ===================================================== */}

      <section className="blog-note-section">

        <div className="container">

          <div className="blog-note-grid">

            <div className="blog-note-label">

              <FaCamera />

              <span>
                TRAVELLER'S NOTE
              </span>

            </div>

            <div>

              <blockquote>
                “Leave room in your Berlin
                itinerary for the street you
                didn't plan to find.”
              </blockquote>

              <span className="blog-note-author">
                NOIR NEON BERLIN · FIELD NOTES
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MINI GUIDES
      ===================================================== */}

      <section className="blog-mini-section">

        <div className="container">

          <div className="blog-mini-heading">

            <span>
              SAVE FOR LATER
            </span>

            <h2>
              Quick
              <br />
              <strong>Berlin guides.</strong>
            </h2>

          </div>


          <div className="blog-mini-grid">

            <Link
              to="/contact"
              className="blog-mini-card"
            >

              <span>
                01
              </span>

              <div>

                <small>
                  FIRST TIME
                </small>

                <h3>
                  Berlin in 48 Hours
                </h3>

                <p>
                  A compact route for your first
                  city break.
                </p>

              </div>

              <FaArrowRight />

            </Link>


            <Link
              to="/contact"
              className="blog-mini-card"
            >

              <span>
                02
              </span>

              <div>

                <small>
                  LOCAL
                </small>

                <h3>
                  A Day in Kreuzberg
                </h3>

                <p>
                  Street art, food, design and
                  neighbourhood energy.
                </p>

              </div>

              <FaArrowRight />

            </Link>


            <Link
              to="/contact"
              className="blog-mini-card"
            >

              <span>
                03
              </span>

              <div>

                <small>
                  SLOW
                </small>

                <h3>
                  Berlin on Foot
                </h3>

                <p>
                  Discover the city without
                  rushing the experience.
                </p>

              </div>

              <FaArrowRight />

            </Link>


            <Link
              to="/contact"
              className="blog-mini-card"
            >

              <span>
                04
              </span>

              <div>

                <small>
                  NIGHT
                </small>

                <h3>
                  Berlin After Sunset
                </h3>

                <p>
                  A visual route through the
                  city's nighttime energy.
                </p>

              </div>

              <FaArrowRight />

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="blog-final-cta">

        <div className="blog-final-bg"></div>
        <div className="blog-final-overlay"></div>

        <div className="container">

          <div className="blog-final-content">

            <span>
              YOUR BERLIN STORY
            </span>

            <h2 className="text-light">
              Read it.
              <br />
              <strong>Then live it.</strong>
            </h2>

            <p>
              Tell us what kind of Berlin you want
              to experience, and we'll turn the
              inspiration into a personalised route.
            </p>

            <Link
              to="/contact"
              className="blog-final-btn"
            >
              <span>
                Plan My Berlin
              </span>

              <FaArrowRight />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Blog;