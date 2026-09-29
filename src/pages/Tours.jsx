import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBuilding,
  FaCalendarAlt,
  FaClock,
  FaCompass,
  FaLandmark,
  FaMapMarkerAlt,
  FaMusic,
  FaPalette,
  FaPeopleArrows,
  FaStar,
  FaTrain,
  FaUtensils,
} from "react-icons/fa";

import "./Tours.css";


/* =========================================================
   TOURS DATA
========================================================= */

const tours = [
  {
    id: 1,
    category: "CITY STORIES",
    filter: "city",
    title: "Berlin City Discovery",
    description:
      "Explore Berlin's defining landmarks, creative neighbourhoods and local stories through a beautifully paced private city experience.",
    duration: "4 Hours",
    location: "Central Berlin",
    price: "₹12,999",
image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 2,
    category: "HERITAGE",
    filter: "heritage",
    title: "Berlin History Journey",
    description:
      "Walk through Berlin's historic heart, monumental architecture and unforgettable chapters with a carefully curated private journey.",
    duration: "4.5 Hours",
    location: "Mitte",
    price: "₹14,999",
image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 3,
    category: "NEIGHBOURHOODS",
    filter: "neighbourhoods",
    title: "Kreuzberg & Friedrichshain",
    description:
      "Discover colourful streets, iconic walls, independent cafés and the alternative energy that makes East Berlin impossible to forget.",
    duration: "3.5 Hours",
    location: "East Berlin",
    price: "₹10,999",
    image:
      "https://images.unsplash.com/photo-1561568801-47957f54238b?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 4,
    category: "FOOD & CULTURE",
    filter: "food",
    title: "Berlin Food Journey",
    description:
      "Taste local favourites, neighbourhood discoveries and modern Berlin flavours through a relaxed food-focused experience.",
    duration: "4 Hours",
    location: "Kreuzberg",
    price: "₹11,999",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 5,
    category: "NIGHTLIFE",
    filter: "nightlife",
    title: "Berlin After Dark",
    description:
      "Experience Berlin's nocturnal personality through atmospheric streets, creative venues, cocktail bars and local night culture.",
    duration: "3.5 Hours",
    location: "Kreuzberg",
    price: "₹13,999",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 6,
    category: "RIVERSIDE",
    filter: "riverside",
    title: "Spree Side Berlin",
    description:
      "Follow Berlin's riverfront through architectural highlights, peaceful viewpoints and stylish neighbourhoods away from the crowds.",
    duration: "3 Hours",
    location: "River Spree",
    price: "₹9,999",
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 7,
    category: "CITY STORIES",
    filter: "city",
    title: "Berlin Icons & Landmarks",
    description:
      "Visit the city's essential landmarks while discovering the details, stories and viewpoints most visitors pass by.",
    duration: "3 Hours",
    location: "Central Berlin",
    price: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 8,
    category: "NEIGHBOURHOODS",
    filter: "neighbourhoods",
    title: "Prenzlauer Berg Local Edit",
    description:
      "Spend an afternoon discovering one of Berlin's most characterful neighbourhoods through local cafés, design and quiet streets.",
    duration: "3 Hours",
    location: "Prenzlauer Berg",
    price: "₹9,499",
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 9,
    category: "HERITAGE",
    filter: "heritage",
    title: "Berlin Wall Stories",
    description:
      "Explore powerful landmarks and surviving traces of the Berlin Wall while uncovering the human stories behind the city.",
    duration: "3.5 Hours",
    location: "East Berlin",
    price: "₹11,499",
    image:
      "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1400&q=85",
  },
];


/* =========================================================
   FILTERS
========================================================= */

const filters = [
  {
    key: "all",
    label: "ALL EXPERIENCES",
    icon: <FaStar />,
  },
  {
    key: "city",
    label: "CITY STORIES",
    icon: <FaBuilding />,
  },
  {
    key: "heritage",
    label: "HERITAGE",
    icon: <FaLandmark />,
  },
  {
    key: "riverside",
    label: "RIVERSIDE",
    icon: <FaTrain />,
  },
  {
    key: "neighbourhoods",
    label: "NEIGHBOURHOODS",
    icon: <FaCompass />,
  },
  {
    key: "food",
    label: "FOOD & CULTURE",
    icon: <FaUtensils />,
  },
  {
    key: "nightlife",
    label: "NIGHTLIFE",
    icon: <FaMusic />,
  },
];


function Tours() {

  const [activeFilter, setActiveFilter] = useState("all");


  /* =======================================================
     FILTER
  ======================================================= */

  const filteredTours = useMemo(() => {

    if (activeFilter === "all") {
      return tours;
    }

    return tours.filter(
      (tour) => tour.filter === activeFilter
    );

  }, [activeFilter]);


  return (

    <main className="berlin-tours-page">


      {/* =====================================================
          HERO
      ===================================================== */}

    <section
  className="tours-page-hero"
  style={{
    backgroundImage:
     "url('https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=2200&q=90')",
  }}
>

  <div className="tours-hero-overlay"></div>

  <div className="container tours-hero-container">

    <div className="tours-hero-copy">

      <span className="tours-eyebrow">
        NOIR NEON BERLIN
      </span>

      <h1>
        Experience
        <em>Berlin.</em>
      </h1>

      <p>
        Curated city experiences for travellers who
        want to see Berlin beyond the obvious.
      </p>

      <div className="tours-hero-actions">

        <a
          href="#berlin-experiences"
          className="tours-primary-btn"
        >
          Explore Experiences
          <FaArrowRight />
        </a>

        <Link
          to="/contact"
          className="tours-secondary-btn"
        >
          Plan Your Berlin
        </Link>

      </div>

    </div>


    <div className="tours-hero-side">

      <div className="hero-coordinate">
        <span>52°31′N</span>
        <span>13°24′E</span>
      </div>

      <span className="hero-side-label">
        BERLIN / DE
      </span>

    </div>

  </div>

</section>



      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="berlin-marquee">

        <div className="marquee-track">

          <div className="marquee-content">

            <span>BERLIN</span>
            <b>✦</b>

            <span>RAW</span>
            <b>✦</b>

            <span>CREATIVE</span>
            <b>✦</b>

            <span>UNFILTERED</span>
            <b>✦</b>

            <span>CITY STORIES</span>
            <b>✦</b>

            <span>BERLIN NIGHTS</span>
            <b>✦</b>

            <span>LOCAL MOMENTS</span>
            <b>✦</b>

          </div>


          <div className="marquee-content">

            <span>BERLIN</span>
            <b>✦</b>

            <span>RAW</span>
            <b>✦</b>

            <span>CREATIVE</span>
            <b>✦</b>

            <span>UNFILTERED</span>
            <b>✦</b>

            <span>CITY STORIES</span>
            <b>✦</b>

            <span>BERLIN NIGHTS</span>
            <b>✦</b>

            <span>LOCAL MOMENTS</span>
            <b>✦</b>

          </div>

        </div>

      </section>



      {/* =====================================================
          INTRO + TABS + CARDS
      ===================================================== */}

      <section
        className="tours-intro-section"
        id="berlin-experiences"
      >

        <div className="container">


          {/* =================================================
              INTRO
          ================================================= */}

          <div className="tours-intro-grid">

            <div className="tours-intro-heading">

              <span className="section-mini-label">
                THE BERLIN EDIT
              </span>

              <h2>
                Choose your
                <em>Berlin moment.</em>
              </h2>

            </div>


            <div className="tours-intro-copy">

              <span className="intro-label">
                FROM CITY STORIES TO AFTER DARK
              </span>

              <p>
                From historic landmarks to hidden neighbourhoods,
                slow riverside walks and unforgettable nights —
                discover Berlin your way.
              </p>

            </div>

          </div>



          {/* =================================================
              TABS
          ================================================= */}

          <div className="tours-filter-wrapper">

            <div className="tours-filter-scroll">

              {filters.map((filter) => (

                <button
                  key={filter.key}
                  type="button"
                  className={`tour-filter-btn ${
                    activeFilter === filter.key
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveFilter(filter.key)
                  }
                >

                  <span className="tour-filter-icon">
                    {filter.icon}
                  </span>

                  <span>
                    {filter.label}
                  </span>

                </button>

              ))}

            </div>

          </div>



          {/* =================================================
              RESULTS HEADER
          ================================================= */}

          <div className="tours-results-header">

            <div>

              <strong>
                {filteredTours.length}
              </strong>

              <span>
                EXPERIENCES
              </span>

            </div>

            <span className="results-location">
              ALL BERLIN
            </span>

          </div>



          {/* =================================================
              CARDS
          ================================================= */}

          <div className="tours-experience-grid">

            {filteredTours.map((tour) => (

              <article
                className="berlin-tour-card"
                key={tour.id}
              >

                <Link
                  to={`/tours/${tour.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  className="tour-card-link"
                >


                  {/* IMAGE */}

                  <div className="tour-card-image">

                    <img
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                    />

                    <div className="tour-image-overlay"></div>


                    <div className="tour-duration">

                      <FaClock />

                      {tour.duration}

                    </div>


                    <div className="tour-image-arrow">

                      <FaArrowRight />

                    </div>


                    <div className="tour-location">

                      <FaMapMarkerAlt />

                      {tour.location}

                    </div>

                  </div>



                  {/* CONTENT */}

                  <div className="tour-card-content">

                    <span className="tour-category">
                      {tour.category}
                    </span>


                  


                    <p className="tour-description">
                      {tour.description}
                    </p>


                    <div className="tour-card-meta">

                      <span>
                        <FaPeopleArrows />
                        Private Experience
                      </span>

                      <span>
                        <FaCalendarAlt />
                        All Year
                      </span>

                    </div>


                    <div className="tour-card-footer">

                      <div className="tour-price">

                        <small>
                          STARTING FROM
                        </small>

                        <strong>
                          {tour.price}
                        </strong>

                        <span>
                          per person
                        </span>

                      </div>


                      <div className="tour-view-btn">

                        <span>
                          VIEW DETAILS
                        </span>

                        <b>
                          <FaArrowRight />
                        </b>

                      </div>

                    </div>

                  </div>

                </Link>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          NEW SECTION AFTER CARDS
      ===================================================== */}

      <section className="berlin-tour-editorial">

        <div className="container">

          <div className="editorial-tour-grid">


            {/* LEFT IMAGE */}

            <div className="editorial-tour-image">

              <img
                src="https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1400&q=85"
                alt="Berlin street"
              />

              <div className="editorial-image-number">
                01
              </div>

            </div>


            {/* RIGHT CONTENT */}

            <div className="editorial-tour-content">

              <span className="section-mini-label">
                BEYOND THE ITINERARY
              </span>

              <h2>
                Berlin is better
                <em>when you leave room for it.</em>
              </h2>

              <p>
                The best moments are not always on the map.
                A quiet courtyard, a neighbourhood café,
                an unexpected gallery or a street that suddenly
                comes alive — this is the Berlin we want you
                to experience.
              </p>


              <div className="editorial-tour-points">

                <div className="editorial-point">

                  <span>
                    01
                  </span>

                  <div>
                    <h4>
                      LOCAL PERSPECTIVE
                    </h4>

                    <p>
                      Discover the city through places
                      with character and local rhythm.
                    </p>
                  </div>

                </div>


                <div className="editorial-point">

                  <span>
                    02
                  </span>

                  <div>
                    <h4>
                      YOUR OWN PACE
                    </h4>

                    <p>
                      Slow down, explore more and
                      make the experience yours.
                    </p>
                  </div>

                </div>


                <div className="editorial-point">

                  <span>
                    03
                  </span>

                  <div>
                    <h4>
                      CURATED DETAILS
                    </h4>

                    <p>
                      Every route is shaped around
                      atmosphere, culture and discovery.
                    </p>
                  </div>

                </div>

              </div>


              <Link
                to="/contact"
                className="editorial-tour-btn"
              >
                Create My Berlin
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>



    

    </main>
  );
}

export default Tours;