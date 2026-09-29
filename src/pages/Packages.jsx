import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaCheck,
  FaStar,
  FaBuilding,
  FaLandmark,
  FaMoon,
  FaUtensils,
  FaLeaf,
  FaHeart,
  FaCompass,
} from "react-icons/fa";

import "./Packages.css";

function Packages() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const packages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1800&q=90",
      title: "Berlin First Light",
      category: "CITY",
      categoryLabel: "CITY BREAK",
      duration: "2 Days / 1 Night",
      guests: "2–4 Guests",
      price: "€299",
      description:
        "A beautifully paced introduction to Berlin's landmarks, neighbourhoods and unmistakable city atmosphere.",
      features: [
        "Berlin Essentials tour",
        "Central neighbourhood walk",
        "Local café recommendations",
        "Flexible free time",
      ],
      gradient: "pink",
      slug: "berlin-first-light",
      featured: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=1600&q=90",
      title: "Berlin Heritage",
      category: "CULTURE",
      categoryLabel: "HISTORY EDIT",
      duration: "3 Days / 2 Nights",
      guests: "2–6 Guests",
      price: "€549",
      description:
        "Explore Berlin's layered history through landmarks, museums and the places shaped by the city's past.",
      features: [
        "Berlin Wall Stories",
        "Historic Berlin route",
        "Museum Island visit",
        "Local history guide",
      ],
      gradient: "purple",
      slug: "berlin-heritage",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",
      title: "Berlin After Hours",
      category: "NIGHT",
      categoryLabel: "NIGHT EDIT",
      duration: "3 Days / 2 Nights",
      guests: "2–6 Guests",
      price: "€599",
      description:
        "A city break built around Berlin after sunset, neighbourhood energy, food and late-night culture.",
      features: [
        "Berlin After Dark tour",
        "Night neighbourhood route",
        "Dinner recommendations",
        "Evening city experience",
      ],
      gradient: "blue",
      slug: "berlin-after-hours",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=90",
      title: "Taste Berlin",
      category: "FOOD",
      categoryLabel: "FOOD EDIT",
      duration: "3 Days / 2 Nights",
      guests: "2–6 Guests",
      price: "€649",
      description:
        "Discover Berlin through markets, cafés, neighbourhood restaurants and the city's diverse food culture.",
      features: [
        "Berlin Food Edit",
        "Market experience",
        "Curated restaurant list",
        "Local café route",
      ],
      gradient: "orange",
      slug: "taste-berlin",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1800&q=90",
      title: "Berlin Privé",
      category: "LUXURY",
      categoryLabel: "LUXURY EDIT",
      duration: "4 Days / 3 Nights",
      guests: "2–4 Guests",
      price: "€1,299",
      description:
        "A refined private Berlin experience combining elegant stays, tailored touring and flexible city time.",
      features: [
        "Private-style touring",
        "Luxury neighbourhood route",
        "Personal trip planning",
        "Flexible city time",
      ],
      gradient: "violet",
      slug: "berlin-prive",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1800&q=90",
      title: "Slow Berlin",
      category: "SLOW",
      categoryLabel: "SLOW TRAVEL",
      duration: "4 Days / 3 Nights",
      guests: "2–6 Guests",
      price: "€799",
      description:
        "Take Berlin slowly through parks, waterways, neighbourhood cafés and quieter local experiences.",
      features: [
        "Green Berlin route",
        "Spree experience",
        "Neighbourhood discovery",
        "Slow travel recommendations",
      ],
      gradient: "green",
      slug: "slow-berlin",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=90",
      title: "Berlin Family Edit",
      category: "FAMILY",
      categoryLabel: "FAMILY",
      duration: "4 Days / 3 Nights",
      guests: "2–6 Guests",
      price: "€749",
      description:
        "A flexible family-friendly Berlin escape combining major sights, open spaces and easy-going experiences.",
      features: [
        "Family-friendly city route",
        "Parks & open spaces",
        "Flexible daily schedule",
        "Local family recommendations",
      ],
      gradient: "lime",
      slug: "berlin-family-edit",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=90",
      title: "Berlin Unfiltered",
      category: "LOCAL",
      categoryLabel: "LOCAL EDIT",
      duration: "5 Days / 4 Nights",
      guests: "2–6 Guests",
      price: "€949",
      description:
        "Go beyond the obvious with creative neighbourhoods, hidden courtyards, street culture and local Berlin.",
      features: [
        "Hidden Berlin experience",
        "Creative neighbourhoods",
        "Street culture route",
        "Personal local recommendations",
      ],
      gradient: "coral",
      slug: "berlin-unfiltered",
    },
  ];

  const filters = [
    {
      id: "ALL",
      label: "ALL PACKAGES",
      icon: <FaCompass />,
    },
    {
      id: "CITY",
      label: "CITY BREAK",
      icon: <FaBuilding />,
    },
    {
      id: "CULTURE",
      label: "CULTURE",
      icon: <FaLandmark />,
    },
    {
      id: "NIGHT",
      label: "NIGHT EDIT",
      icon: <FaMoon />,
    },
    {
      id: "FOOD",
      label: "FOOD",
      icon: <FaUtensils />,
    },
    {
      id: "LUXURY",
      label: "LUXURY",
      icon: <FaStar />,
    },
    {
      id: "SLOW",
      label: "SLOW TRAVEL",
      icon: <FaLeaf />,
    },
    {
      id: "FAMILY",
      label: "FAMILY",
      icon: <FaHeart />,
    },
    {
      id: "LOCAL",
      label: "LOCAL",
      icon: <FaCompass />,
    },
  ];

  const filteredPackages = useMemo(() => {
    if (activeFilter === "ALL") {
      return packages;
    }

    return packages.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  const featuredPackage =
    activeFilter === "ALL"
      ? packages[0]
      : filteredPackages[0];

  const gridPackages =
    activeFilter === "ALL"
      ? filteredPackages.slice(1)
      : filteredPackages;

  return (
    <main className="berlin-packages-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="packages-hero">

        <div className="packages-hero-image"></div>

        <div className="packages-hero-overlay"></div>

        <div className="packages-hero-noise"></div>

        <div className="container">

          <div className="packages-hero-content">

            <div className="packages-eyebrow">
              <span></span>
              NOIR NEON BERLIN
            </div>

            <h1>
              Berlin,
              <br />
              <em>your way.</em>
            </h1>

            <p>
              Curated city escapes designed around
              your pace, your interests and the Berlin
              you want to discover.
            </p>

            <div className="packages-hero-actions">

              <a
                href="#package-collection"
                className="package-primary-btn"
              >
                <span>Explore Packages</span>
                <FaArrowRight />
              </a>

              <Link
                to="/contact"
                className="package-secondary-btn"
              >
                Build My Escape
              </Link>

            </div>

          </div>

          <div className="packages-hero-side">

            <span>CURATED</span>

            <strong>BERLIN</strong>

            <small>
              CITY
              <br />
              CULTURE
              <br />
              NIGHT
              <br />
              LOCAL
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="packages-intro">

        <div className="container">

          <div className="packages-intro-grid">

            <div>

              <span className="section-eyebrow">
                NOT A STANDARD PACKAGE
              </span>

              <h2>
                Travel Berlin
                <br />
                <em>differently.</em>
              </h2>

            </div>

            <div className="packages-intro-right">

              <p>
                Choose a ready-made escape or use one
                of our concepts as the starting point
                for something completely personal.
              </p>

              <div className="intro-stat">

                <strong>08</strong>

                <span>
                  CURATED
                  <br />
                  ESCAPES
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FILTER TABS
      ===================================================== */}

      <section
        className="packages-filter-section"
        id="package-collection"
      >

        <div className="container">

          <div className="packages-filter-head">

            <div className="packages-filter-title">

              <span>CHOOSE YOUR BERLIN</span>

              <strong>
                {filteredPackages.length
                  .toString()
                  .padStart(2, "0")}
              </strong>

              <small>PACKAGES</small>

            </div>

          </div>


          <div className="packages-tabs">

            {filters.map((filter) => (

              <button
                key={filter.id}
                type="button"
                className={
                  activeFilter === filter.id
                    ? "package-tab active"
                    : "package-tab"
                }
                onClick={() =>
                  setActiveFilter(filter.id)
                }
              >

                <span className="package-tab-icon">
                  {filter.icon}
                </span>

                <span>
                  {filter.label}
                </span>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED PACKAGE
      ===================================================== */}

      {featuredPackage && (

        <section className="featured-package-section">

          <div className="container">

            <article
              className={`featured-package ${featuredPackage.gradient}`}
            >

              <div className="featured-package-image">

                <img
                  src={featuredPackage.image}
                  alt={featuredPackage.title}
                />

                <div className="featured-image-gradient"></div>

                <span className="featured-badge">
                  {activeFilter === "ALL"
                    ? "SIGNATURE ESCAPE"
                    : featuredPackage.categoryLabel}
                </span>

                <span className="featured-number">
                  01
                </span>

              </div>


              <div className="featured-package-content">

                <span className="featured-eyebrow">
                  {featuredPackage.categoryLabel}
                </span>

                <h2>
                  {featuredPackage.title}
                  <span>.</span>
                </h2>

                <p>
                  {featuredPackage.description}
                </p>


                <div className="featured-meta">

                  <div>
                    <FaClock />
                    <span>
                      {featuredPackage.duration}
                    </span>
                  </div>

                  <div>
                    <FaUsers />
                    <span>
                      {featuredPackage.guests}
                    </span>
                  </div>

                  <div>
                    <FaMapMarkerAlt />
                    <span>
                      CENTRAL BERLIN
                    </span>
                  </div>

                </div>


                <div className="featured-bottom">

                  <div className="featured-price">

                    <small>FROM</small>

                    <strong>
                      {featuredPackage.price}
                    </strong>

                    <span>
                      / PERSON
                    </span>

                  </div>

                  <Link
                    to="/contact"
                    className="featured-btn"
                  >
                    <span>Explore Package</span>
                    <FaArrowRight />
                  </Link>

                </div>

              </div>

            </article>

          </div>

        </section>

      )}


      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section className="package-collection">

        <div className="container">

          <div className="package-collection-head">

            <div>

              <span>
                THE COLLECTION
              </span>

              <h2>
                Find your
                <br />
                <em>Berlin mood.</em>
              </h2>

            </div>

            <p>
              Every escape has a different rhythm.
              Choose the one that feels most like you.
            </p>

          </div>


          {gridPackages.length > 0 ? (

            <div className="package-grid">

              {gridPackages.map((item) => (

                <article
                  className={`package-card ${item.gradient}`}
                  key={item.slug}
                >

                  <div className="package-card-image">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className="package-card-gradient"></div>

                    <span className="package-card-tag">
                      {item.categoryLabel}
                    </span>

                    <span className="package-card-index">
                      {String(item.id).padStart(2, "0")}
                    </span>

                  </div>


                  <div className="package-card-content">

                    <div className="package-card-meta">

                      <span>
                        <FaClock />
                        {item.duration}
                      </span>

                      <span>
                        <FaUsers />
                        {item.guests}
                      </span>

                    </div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>


                    <div className="package-features">

                      {item.features
                        .slice(0, 3)
                        .map((feature) => (

                          <span key={feature}>
                            <FaCheck />
                            {feature}
                          </span>

                        ))}

                    </div>


                    <div className="package-card-bottom">

                      <div className="package-card-price">

                        <small>FROM</small>

                        <strong>
                          {item.price}
                        </strong>

                      </div>

                      <Link
                        to="/contact"
                        className="package-view-btn"
                      >
                        <span>View</span>
                        <FaArrowRight />
                      </Link>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="package-empty">
              No packages available in this category.
            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          BERLIN MOODS
      ===================================================== */}

      <section className="package-moods">

        <div className="container">

          <div className="package-moods-head">

            <span>
              ONE CITY. MANY WAYS.
            </span>

            <h2>
              What kind of
              <br />
              Berlin are you
              <br />
              <em>looking for?</em>
            </h2>

          </div>


          <div className="moods-grid">

            <Link
              to="/contact"
              className="mood-card mood-pink"
            >

              <span className="mood-number">
                01
              </span>

              <div>

                <small>CULTURE</small>

                <h3>
                  Go Deeper
                </h3>

                <p>
                  Museums, history, architecture
                  and stories behind the city.
                </p>

              </div>

              <span className="mood-arrow">
                <FaArrowRight />
              </span>

            </Link>


            <Link
              to="/contact"
              className="mood-card mood-purple"
            >

              <span className="mood-number">
                02
              </span>

              <div>

                <small>NIGHT</small>

                <h3>
                  Stay Late
                </h3>

                <p>
                  Evening streets, food, music
                  and Berlin after dark.
                </p>

              </div>

              <span className="mood-arrow">
                <FaArrowRight />
              </span>

            </Link>


            <Link
              to="/contact"
              className="mood-card mood-lime"
            >

              <span className="mood-number">
                03
              </span>

              <div>

                <small>LUXURY</small>

                <h3>
                  Slow It Down
                </h3>

                <p>
                  Refined stays, private touring
                  and flexible city time.
                </p>

              </div>

              <span className="mood-arrow">
                <FaArrowRight />
              </span>

            </Link>


            <Link
              to="/contact"
              className="mood-card mood-dark"
            >

              <span className="mood-number">
                04
              </span>

              <div>

                <small>LOCAL</small>

                <h3>
                  Live Berlin
                </h3>

                <p>
                  Neighbourhoods, cafés, streets
                  and places locals love.
                </p>

              </div>

              <span className="mood-arrow">
                <FaArrowRight />
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY NOIR NEON
      ===================================================== */}

      <section className="package-difference">

        <div className="container">

          <div className="difference-card">

            <div className="difference-left">

              <span>
                WHY NOIR NEON
              </span>

              <h2>
                A package
                <br />
                should feel
                <br />
                <em>personal.</em>
              </h2>

            </div>


            <div className="difference-right">

              <div className="difference-item">

                <span>01</span>

                <div>
                  <strong>CURATED</strong>

                  <p>
                    Every route is designed around
                    a distinct Berlin experience.
                  </p>
                </div>

              </div>


              <div className="difference-item">

                <span>02</span>

                <div>
                  <strong>FLEXIBLE</strong>

                  <p>
                    Adjust the pace, activities and
                    free time around your trip.
                  </p>
                </div>

              </div>


              <div className="difference-item">

                <span>03</span>

                <div>
                  <strong>LOCAL</strong>

                  <p>
                    Discover neighbourhoods and
                    experiences beyond a checklist.
                  </p>
                </div>

              </div>


              <div className="difference-item">

                <span>04</span>

                <div>
                  <strong>HUMAN</strong>

                  <p>
                    Real planning support before and
                    during your Berlin escape.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TESTIMONIAL
      ===================================================== */}

      <section className="packages-testimonial">

        <div className="container">

          <div className="testimonial-card">

            <div className="testimonial-stars">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

            <blockquote>
              “The best part was that it never
              felt like a package. It felt like
              someone had designed Berlin
              specifically for us.”
            </blockquote>

            <div className="testimonial-author">

              <strong>
                SOFIA &amp; MARCO
              </strong>

              <span>
                MILAN · 4-DAY BERLIN ESCAPE
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="packages-custom-cta">

        <div className="packages-custom-image"></div>

        <div className="packages-custom-overlay"></div>

        <div className="container">

          <div className="custom-cta-content">

            <span>
              NOTHING FEELS QUITE RIGHT?
            </span>

            <h2>
              Build your
              <br />
              own <em>escape.</em>
            </h2>

            <p>
              Tell us how many days you have,
              what you love and how you want
              Berlin to feel. We'll shape the
              trip around you.
            </p>

            <Link
              to="/contact"
              className="custom-cta-btn"
            >
              <span>
                Create My Berlin Escape
              </span>

              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Packages;