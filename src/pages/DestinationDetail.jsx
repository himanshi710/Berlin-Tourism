import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaCompass,
  FaCamera,
  FaCoffee,
} from "react-icons/fa";

import "./DestinationDetail.css";

function DestinationDetail() {
  const { slug } = useParams();

  const destinations = {
    mitte: {
      title: "Mitte",
      subtitle: "THE HEART OF BERLIN",
      location: "CENTRAL BERLIN",
      number: "01",
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=2200&q=90",
      intro:
        "Where Berlin's history, culture and modern city life meet. Mitte is the place to begin when you want to understand the layers of Berlin.",
      description:
        "From monumental landmarks and museum collections to hidden courtyards, independent galleries and riverside walks, Mitte constantly moves between Berlin's past and its present.",
      highlights: [
        "Brandenburg Gate",
        "Museum Island",
        "Berlin Cathedral",
        "Hackesche Höfe",
        "Gendarmenmarkt",
        "Alexanderplatz",
      ],
      experiences: [
        "Historic Berlin Walk",
        "Museum Island Edit",
        "Hidden Courtyards",
      ],
      accent: "violet",
    },

    kreuzberg: {
      title: "Kreuzberg",
      subtitle: "THE CREATIVE SIDE",
      location: "SOUTH-CENTRAL BERLIN",
      number: "02",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2200&q=90",
      intro:
        "A neighbourhood shaped by creativity, multicultural life, street culture and an unmistakable independent spirit.",
      description:
        "Kreuzberg blends cafés, canals, markets, parks, food and creative spaces into one of Berlin's most distinctive urban environments.",
      highlights: [
        "Oberbaum Bridge",
        "Landwehr Canal",
        "Viktoriapark",
        "Bergmannstraße",
        "Görlitzer Park",
        "Markthalle Neun",
      ],
      experiences: [
        "Street Art Walk",
        "Kreuzberg Food Edit",
        "Canal & Café Tour",
      ],
      accent: "rose",
    },

    charlottenburg: {
      title: "Charlottenburg",
      subtitle: "THE ELEGANT WEST",
      location: "WEST BERLIN",
      number: "03",
    image:
  "https://images.unsplash.com/photo-1566404791232-af9fe8a7e4e9?auto=format&fit=crop&w=1600&q=85",
      intro:
        "A more polished expression of Berlin, where grand avenues, culture, shopping and classic City West character come together.",
      description:
        "Charlottenburg offers a different rhythm of Berlin with elegant streets, cultural institutions, sophisticated shopping and historic architecture.",
      highlights: [
        "Charlottenburg Palace",
        "Kurfürstendamm",
        "Kaiser Wilhelm Memorial Church",
        "Savignyplatz",
        "Museum Berggruen",
        "City West",
      ],
      experiences: [
        "Royal Berlin Tour",
        "City West Shopping",
        "Elegant Berlin Evening",
      ],
      accent: "mint",
    },

    friedrichshain: {
      title: "Friedrichshain",
      subtitle: "THE URBAN BEAT",
      location: "EAST BERLIN",
      number: "04",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2200&q=90",
      intro:
        "Raw edges, creative energy, nightlife and riverside city life define Friedrichshain.",
      description:
        "Explore former industrial spaces, independent cafés, street culture and the lively atmosphere around the Spree.",
      highlights: [
        "East Side Gallery",
        "Oberbaum Bridge",
        "Boxhagener Platz",
        "RAW-Gelände",
        "Volkspark Friedrichshain",
        "Spree River",
      ],
      experiences: [
        "Berlin Street Culture",
        "East Side Stories",
        "After Dark Friedrichshain",
      ],
      accent: "violet",
    },

    "prenzlauer-berg": {
      title: "Prenzlauer Berg",
      subtitle: "THE LOCAL EDIT",
      location: "NORTH-EAST BERLIN",
      number: "05",
      image:
        "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=2200&q=90",
      intro:
        "Leafy streets, beautiful old buildings, cafés and a slower neighbourhood rhythm.",
      description:
        "Prenzlauer Berg is made for long walks, relaxed mornings, independent shops and discovering Berlin away from the major landmarks.",
      highlights: [
        "Kollwitzplatz",
        "Mauerpark",
        "Kulturbrauerei",
        "Helmholtzplatz",
        "Oderberger Straße",
        "Kastanienallee",
      ],
      experiences: [
        "Berlin Coffee Edit",
        "Local Neighbourhood Walk",
        "Sunday Market Tour",
      ],
      accent: "mint",
    },

    neukolln: {
      title: "Neukölln",
      subtitle: "THE CITY IN MOTION",
      location: "SOUTH BERLIN",
      number: "06",
      image:
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=2200&q=90",
      intro:
        "A lively district where cultures, food, art and everyday Berlin constantly overlap.",
      description:
        "From canals and independent cafés to markets and creative spaces, Neukölln reveals another side of Berlin's urban identity.",
      highlights: [
        "Landwehrkanal",
        "Maybachufer",
        "Tempelhofer Feld",
        "Schillerkiez",
        "Körnerpark",
        "Hermannplatz",
      ],
      experiences: [
        "Neukölln Food Trail",
        "Canal Walk",
        "Creative Berlin Tour",
      ],
      accent: "rose",
    },
  };

  const fallback = destinations.mitte;

  const destination =
    destinations[slug] || fallback;

  const relatedDestinations = Object.entries(
    destinations
  )
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <main
      className={`berlin-destination-detail detail-${destination.accent}`}
    >

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="destination-detail-hero">

        <div
          className="destination-detail-hero-bg"
          style={{
            backgroundImage: `url(${destination.image})`,
          }}
        ></div>

        <div className="destination-detail-hero-overlay"></div>

        <div className="destination-detail-grid"></div>

        <div className="container destination-detail-hero-container">

          <div className="destination-detail-back">

            <Link to="/destinations">
              <FaArrowLeft />
              <span>ALL DESTINATIONS</span>
            </Link>

          </div>

          <div className="destination-detail-hero-content">

            <span className="destination-detail-eyebrow">
              <span></span>
              {destination.subtitle}
            </span>

            <h1>
              {destination.title}
            </h1>

            <div className="destination-detail-location">
              <FaMapMarkerAlt />
              <span>{destination.location}</span>
            </div>

          </div>

          <div className="destination-detail-number">
            {destination.number}
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="destination-detail-intro">

        <div className="container">

          <div className="destination-intro-grid">

            <div className="destination-intro-label">

              <span>01</span>

              <small>
                DISCOVER
              </small>

            </div>

            <div className="destination-intro-main">

              <h2>
                {destination.intro}
              </h2>

              <p>
                {destination.description}
              </p>

              <div className="destination-intro-meta">

                <div>
                  <FaClock />
                  <span>FULL DAY</span>
                </div>

                <div>
                  <FaCompass />
                  <span>LOCAL EDIT</span>
                </div>

                <div>
                  <FaCamera />
                  <span>PHOTO READY</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE / STORY
      ===================================================== */}

      <section className="destination-detail-story">

        <div className="container-fluid">

          <div className="destination-story-grid">

            <div className="destination-story-image">

              <img
                src={destination.image}
                alt={destination.title}
              />

              <div className="destination-story-image-tag">
                BERLIN / {destination.title.toUpperCase()}
              </div>

            </div>

            <div className="destination-story-content">

              <span className="story-eyebrow">
                THE LOCAL CHARACTER
              </span>

              <h2>
                See the city
                <br />
                <span>between the lines.</span>
              </h2>

              <p>
                Berlin is best experienced beyond
                the obvious landmarks. Give yourself
                time to walk, pause, look around and
                discover how each neighbourhood
                creates its own version of the city.
              </p>

              <p>
                {destination.title} offers a different
                perspective — one shaped by its streets,
                architecture, people, culture and
                everyday rituals.
              </p>

              <Link
                to="/experiences"
                className="destination-story-btn"
              >
                <span>Explore Experiences</span>
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="destination-highlights">

        <div className="container">

          <div className="destination-highlights-heading">

            <div>
              <span>
                02 / DON'T MISS
              </span>

              <h2>
                Places worth
                <br />
                <strong>stopping for.</strong>
              </h2>
            </div>

            <p>
              Build your day around a few
              meaningful stops instead of
              trying to see everything at once.
            </p>

          </div>


          <div className="destination-highlights-grid">

            {destination.highlights.map(
              (highlight, index) => (
                <div
                  className="destination-highlight-item"
                  key={highlight}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {highlight}
                  </h3>

                  <FaArrowRight />

                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE STRIP
      ===================================================== */}

      <section className="destination-experience-strip">

        <div className="container">

          <div className="destination-experience-heading">

            <span>
              CURATED FOR YOU
            </span>

            <h2>
              Make it
              <strong> yours.</strong>
            </h2>

          </div>

          <div className="destination-experience-list">

            {destination.experiences.map(
              (experience, index) => (
                <Link
                  to="/experiences"
                  className="destination-experience-item"
                  key={experience}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <div>
                    <FaCoffee />
                    <h3>{experience}</h3>
                  </div>

                  <FaArrowRight />

                </Link>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          RELATED DESTINATIONS
      ===================================================== */}

      <section className="destination-related">

        <div className="container">

          <div className="destination-related-heading">

            <div>
              <span>
                KEEP EXPLORING
              </span>

              <h2>
                More Berlin.
              </h2>
            </div>

            <Link to="/destinations">
              View All
              <FaArrowRight />
            </Link>

          </div>

          <div className="destination-related-grid">

            {relatedDestinations.map(
              ([key, item]) => (
                <Link
                  to={`/destinations/${key}`}
                  className="destination-related-card"
                  key={key}
                >

                  <div className="related-card-image">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className="related-card-overlay"></div>

                    <span>
                      {item.number}
                    </span>

                  </div>

                  <div className="related-card-content">

                    <small>
                      {item.location}
                    </small>

                    <h3>
                      {item.title}
                    </h3>

                    <FaArrowRight />

                  </div>

                </Link>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="destination-detail-cta">

        <div className="destination-detail-cta-bg"></div>

        <div className="destination-detail-cta-overlay"></div>

        <div className="container">

          <div className="destination-detail-cta-content">

            <span>
              YOUR BERLIN STARTS HERE
            </span>

            <h2>
              Don't just
              <br />
              see {destination.title}.
              <br />
              <strong>feel it.</strong>
            </h2>

            <div className="destination-detail-cta-actions">

              <Link
                to="/tours"
                className="detail-cta-primary"
              >
                <span>Explore Berlin Tours</span>
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="detail-cta-secondary"
              >
                Plan My Trip
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default DestinationDetail;