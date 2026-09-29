import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaCheck,
  FaCalendarAlt,
  FaChevronRight,
} from "react-icons/fa";

import "./TourDetail.css";

function TourDetail() {
  const { slug } = useParams();

  const tours = {
    "berlin-essentials": {
      title: "Berlin Essentials",
      category: "SIGNATURE TOUR",
      eyebrow: "THE BERLIN FIRST-TIMER",
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=2200&q=90",
      duration: "4 Hours",
      guests: "2–8 Guests",
      location: "Central Berlin",
      price: "€89",
      type: "SIGNATURE",
      intro:
        "Berlin's defining landmarks, stories and atmosphere arranged into one seamless introduction to the city.",
      description:
        "Designed for first-time visitors, Berlin Essentials connects the city's most recognisable places with the stories that make them meaningful. Move through historic streets, monumental architecture and contemporary neighbourhoods while getting a genuine sense of how Berlin became the city it is today.",
      highlights: [
        "Brandenburg Gate & Pariser Platz",
        "Reichstag & Government District",
        "Museum Island surroundings",
        "Berlin Wall history",
        "Alexanderplatz & TV Tower views",
        "Local neighbourhood stories",
      ],
      itinerary: [
        {
          number: "01",
          title: "Meet in Central Berlin",
          text: "Begin with your guide in the heart of the city and set the rhythm for your Berlin experience.",
        },
        {
          number: "02",
          title: "History & Landmarks",
          text: "Follow a carefully planned route through Berlin's essential historic sights and architectural landmarks.",
        },
        {
          number: "03",
          title: "The Berlin Between",
          text: "Move beyond the postcard views and discover the streets, stories and details that give Berlin its character.",
        },
        {
          number: "04",
          title: "Your Berlin Finish",
          text: "End the experience with local recommendations tailored to what you want to explore next.",
        },
      ],
    },

    "berlin-after-dark": {
      title: "Berlin After Dark",
      category: "NIGHT EDIT",
      eyebrow: "WHEN THE CITY CHANGES RHYTHM",
      image:
        "https://images.unsplash.com/photo-1560930950-5cc20e80e392?auto=format&fit=crop&w=2200&q=90",
      duration: "4 Hours",
      guests: "2–6 Guests",
      location: "Berlin Centre",
      price: "€119",
      type: "NIGHT",
      intro:
        "Discover Berlin after sunset through illuminated streets, hidden corners and the city's unmistakable night energy.",
      description:
        "When daylight fades, Berlin reveals another personality. This evening route blends architecture, neighbourhood atmosphere, nightlife culture and atmospheric city walks for a more cinematic way to experience the capital.",
      highlights: [
        "Berlin after sunset",
        "Illuminated city landmarks",
        "Nightlife neighbourhoods",
        "Hidden evening streets",
        "Local bars & café recommendations",
        "Flexible evening route",
      ],
      itinerary: [
        {
          number: "01",
          title: "Golden Hour Start",
          text: "Meet as Berlin begins to transition from day into night.",
        },
        {
          number: "02",
          title: "Lights & Architecture",
          text: "Explore the city's changing skyline and illuminated historic spaces.",
        },
        {
          number: "03",
          title: "Night Neighbourhoods",
          text: "Follow the energy into one of Berlin's distinctive evening districts.",
        },
        {
          number: "04",
          title: "Late-Night Berlin",
          text: "Finish with personalised suggestions for food, drinks, music or nightlife.",
        },
      ],
    },

    "hidden-berlin": {
      title: "Hidden Berlin",
      category: "LOCAL EDIT",
      eyebrow: "BEYOND THE OBVIOUS",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2200&q=90",
      duration: "5 Hours",
      guests: "2–6 Guests",
      location: "Berlin Neighbourhoods",
      price: "€129",
      type: "LOCAL",
      intro:
        "Leave the obvious route behind and discover neighbourhoods, courtyards and local Berlin.",
      description:
        "Hidden Berlin is built around curiosity. Instead of moving from one famous landmark to another, the experience focuses on neighbourhood character, independent spaces, street details and the quieter stories that often get missed.",
      highlights: [
        "Independent neighbourhoods",
        "Hidden courtyards",
        "Street art & creative spaces",
        "Local cafés",
        "Alternative architecture",
        "Personal recommendations",
      ],
      itinerary: [
        {
          number: "01",
          title: "Start Like a Local",
          text: "Meet in a neighbourhood selected around your interests and travel style.",
        },
        {
          number: "02",
          title: "Walk the Side Streets",
          text: "Explore courtyards, creative corners and everyday Berlin away from the main tourist route.",
        },
        {
          number: "03",
          title: "Culture & Coffee",
          text: "Pause at a local café or independent spot and experience the neighbourhood at its own pace.",
        },
        {
          number: "04",
          title: "Your Hidden List",
          text: "Finish with a curated list of places to continue discovering independently.",
        },
      ],
    },

    "berlin-wall-stories": {
      title: "Berlin Wall Stories",
      category: "HERITAGE",
      eyebrow: "TRACES OF A DIVIDED CITY",
      image:
        "https://images.unsplash.com/photo-1528114039593-4366cc08227d?auto=format&fit=crop&w=2200&q=90",
      duration: "4.5 Hours",
      guests: "2–8 Guests",
      location: "Berlin Wall Sites",
      price: "€99",
      type: "HERITAGE",
      intro:
        "Trace the Berlin Wall and explore the places where the city's divided history remains visible.",
      description:
        "This history-focused route follows significant traces of Berlin's division and reunification. Rather than presenting history as a list of dates, the experience connects places, architecture and personal stories.",
      highlights: [
        "Berlin Wall Memorial",
        "Former Wall route",
        "East Side Gallery",
        "Checkpoint Charlie area",
        "Cold War stories",
        "Reunification landmarks",
      ],
      itinerary: [
        {
          number: "01",
          title: "Before the Wall",
          text: "Understand Berlin's political and urban landscape before the city was divided.",
        },
        {
          number: "02",
          title: "The Division",
          text: "Follow physical traces of the Wall and explore stories from a divided Berlin.",
        },
        {
          number: "03",
          title: "Life Beside the Wall",
          text: "Discover how the Wall shaped everyday life, neighbourhoods and movement through the city.",
        },
        {
          number: "04",
          title: "Berlin Reunited",
          text: "Finish with the places and stories connected to reunification and today's Berlin.",
        },
      ],
    },

    "berlin-food-edit": {
      title: "Berlin Food Edit",
      category: "FOOD TOUR",
      eyebrow: "A TASTE OF THE CITY",
      image:
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2200&q=90",
      duration: "4 Hours",
      guests: "2–6 Guests",
      location: "Berlin Food Districts",
      price: "€139",
      type: "FOOD",
      intro:
        "A curated taste of Berlin through markets, neighbourhood cafés and local food culture.",
      description:
        "Berlin's food scene is as diverse as its neighbourhoods. This experience brings together local favourites, contemporary food culture, markets and independent places in a relaxed route.",
      highlights: [
        "Local food culture",
        "Neighbourhood cafés",
        "Market discoveries",
        "Berlin classics",
        "Contemporary food scene",
        "Curated recommendations",
      ],
      itinerary: [
        {
          number: "01",
          title: "Coffee & Start",
          text: "Begin with a local coffee stop and an introduction to Berlin's evolving food culture.",
        },
        {
          number: "02",
          title: "Market Flavours",
          text: "Explore a lively food market and discover regional and international influences.",
        },
        {
          number: "03",
          title: "Berlin Classics",
          text: "Taste a selection of dishes and snacks associated with the city's everyday food culture.",
        },
        {
          number: "04",
          title: "The Final Table",
          text: "Finish with a carefully selected neighbourhood recommendation for your own evening.",
        },
      ],
    },

    "berlin-by-bike": {
      title: "Berlin by Bike",
      category: "ACTIVE EDIT",
      eyebrow: "MOVE WITH THE CITY",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90",
      duration: "4 Hours",
      guests: "2–8 Guests",
      location: "Berlin",
      price: "€109",
      type: "LOCAL",
      intro:
        "Ride through Berlin's streets, parks and neighbourhoods with a flexible local route.",
      description:
        "See more of Berlin in one afternoon by combining dedicated cycling paths, green spaces, neighbourhood streets and major landmarks. The pace stays flexible and the route can adapt to your interests.",
      highlights: [
        "Dedicated cycling routes",
        "Berlin parks",
        "Neighbourhood streets",
        "Historic landmarks",
        "Spree riverside",
        "Local guide",
      ],
      itinerary: [
        {
          number: "01",
          title: "Bike Pick-Up",
          text: "Meet your guide, choose your bike and get comfortable with the route.",
        },
        {
          number: "02",
          title: "City Streets",
          text: "Cycle through central Berlin and connect major landmarks with local streets.",
        },
        {
          number: "03",
          title: "Green Berlin",
          text: "Move into parks, riverside paths and calmer parts of the city.",
        },
        {
          number: "04",
          title: "Neighbourhood Finish",
          text: "End in a lively district with recommendations for the rest of your day.",
        },
      ],
    },

    "royal-berlin": {
      title: "Royal Berlin",
      category: "LUXURY EDIT",
      eyebrow: "THE REFINED SIDE OF BERLIN",
      image:
        "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=2200&q=90",
      duration: "6 Hours",
      guests: "2–4 Guests",
      location: "City West & Central Berlin",
      price: "€249",
      type: "LUXURY",
      intro:
        "Palaces, elegant avenues, private-style transfers and a refined City West experience.",
      description:
        "Royal Berlin brings together grand architecture, palace history, elegant streets and a more private pace. Designed for smaller groups, it leaves room for personal preferences and spontaneous stops.",
      highlights: [
        "Charlottenburg Palace area",
        "Kurfürstendamm",
        "Elegant City West",
        "Private-style route",
        "Architecture & design",
        "Personalised stops",
      ],
      itinerary: [
        {
          number: "01",
          title: "Elegant Berlin",
          text: "Begin in Berlin's refined western districts with an introduction to the city's royal heritage.",
        },
        {
          number: "02",
          title: "Palace Stories",
          text: "Explore the architecture, gardens and stories surrounding Berlin's royal past.",
        },
        {
          number: "03",
          title: "City West",
          text: "Continue through Kurfürstendamm and the sophisticated side of contemporary Berlin.",
        },
        {
          number: "04",
          title: "Private Finish",
          text: "End with a personalised stop selected around your interests.",
        },
      ],
    },

    "spree-city": {
      title: "Spree & City",
      category: "RIVER EDIT",
      eyebrow: "BERLIN FROM THE WATER",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90",
      duration: "3 Hours",
      guests: "2–8 Guests",
      location: "River Spree",
      price: "€109",
      type: "SIGNATURE",
      intro:
        "Experience Berlin from the water while connecting the river with the city's landmarks.",
      description:
        "See Berlin from a different perspective as the Spree becomes your route through the city. Combine riverside views with stories of architecture, neighbourhoods and Berlin's changing skyline.",
      highlights: [
        "Spree riverside",
        "Central Berlin views",
        "Architecture from the water",
        "Historic landmarks",
        "Relaxed city pace",
        "Photo opportunities",
      ],
      itinerary: [
        {
          number: "01",
          title: "Meet by the Spree",
          text: "Begin beside the river and settle into a slower view of the city.",
        },
        {
          number: "02",
          title: "Berlin on the Water",
          text: "Discover central landmarks and architecture from a different perspective.",
        },
        {
          number: "03",
          title: "River Stories",
          text: "Learn how the Spree has shaped Berlin's neighbourhoods and development.",
        },
        {
          number: "04",
          title: "City Return",
          text: "Finish back in the city with recommendations for exploring on foot.",
        },
      ],
    },

    "green-berlin": {
      title: "Green Berlin",
      category: "NATURE EDIT",
      eyebrow: "A SLOWER SIDE OF THE CITY",
      image:
        "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=2200&q=90",
      duration: "5 Hours",
      guests: "2–6 Guests",
      location: "Berlin Parks & Lakes",
      price: "€129",
      type: "LOCAL",
      intro:
        "A slower side of Berlin featuring parks, lakes, riverside paths and green neighbourhoods.",
      description:
        "Green Berlin is designed for travellers who want space and a slower rhythm. Discover parks, water, quiet paths and neighbourhoods where Berlin feels far removed from the busy centre.",
      highlights: [
        "Berlin parks",
        "Lakes & waterways",
        "Riverside paths",
        "Quiet neighbourhoods",
        "Nature photography",
        "Slow travel",
      ],
      itinerary: [
        {
          number: "01",
          title: "Into the Green",
          text: "Leave the busy centre and enter one of Berlin's expansive green areas.",
        },
        {
          number: "02",
          title: "Parks & Paths",
          text: "Walk through landscaped parks and quieter urban nature.",
        },
        {
          number: "03",
          title: "Water & Neighbourhoods",
          text: "Continue toward the city's lakes, rivers or residential green spaces.",
        },
        {
          number: "04",
          title: "Slow Finish",
          text: "End with a relaxed local stop and recommendations for exploring at your own pace.",
        },
      ],
    },
  };

  const fallbackTour = tours["berlin-essentials"];

  const tour = useMemo(
    () => tours[slug] || fallbackTour,
    [slug]
  );

  const relatedTours = Object.entries(tours)
    .filter(([tourSlug]) => tourSlug !== slug)
    .slice(0, 3);

  return (
    <main className="berlin-tour-detail-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="tour-detail-hero">
        <div
          className="tour-detail-hero-bg"
          style={{ backgroundImage: `url("${tour.image}")` }}
        ></div>

        <div className="tour-detail-hero-overlay"></div>
        <div className="tour-detail-hero-grid"></div>

        <div className="container tour-detail-hero-container">
          <div className="tour-detail-breadcrumb">
            <Link to="/">HOME</Link>
            <FaChevronRight />
            <Link to="/tours">TOURS</Link>
            <FaChevronRight />
            <span>{tour.title.toUpperCase()}</span>
          </div>

          <div className="tour-detail-hero-content">
            <span className="tour-detail-eyebrow">
              <span></span>
              {tour.eyebrow}
            </span>

            <h1>
              {tour.title.split(" ").map((word, index) => (
                <span key={`${word}-${index}`}>
                  {word}
                  {index !== tour.title.split(" ").length - 1 && " "}
                </span>
              ))}
            </h1>

            <p>{tour.intro}</p>

            <div className="tour-detail-hero-meta">
              <div>
                <FaClock />
                <span>{tour.duration}</span>
              </div>

              <div>
                <FaUsers />
                <span>{tour.guests}</span>
              </div>

              <div>
                <FaMapMarkerAlt />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>

          <div className="tour-detail-hero-number">
            <span>NOIR NEON</span>
            <strong>BERLIN</strong>
          </div>
        </div>
      </section>


      {/* =====================================================
          QUICK BOOK BAR
      ===================================================== */}
      <section className="tour-detail-bookbar">
        <div className="container">
          <div className="tour-detail-bookbar-inner">

            <div className="tour-book-price">
              <small>FROM</small>
              <strong>{tour.price}</strong>
              <span>/ PERSON</span>
            </div>

            <div className="tour-book-info">
              <div>
                <FaCalendarAlt />
                <span>FLEXIBLE DATES</span>
              </div>

              <div>
                <FaUsers />
                <span>PRIVATE-STYLE EXPERIENCE</span>
              </div>
            </div>

            <Link to="/contact" className="tour-book-btn">
              <span>Plan This Tour</span>
              <FaArrowRight />
            </Link>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRO / STORY
      ===================================================== */}
      <section className="tour-detail-intro section-padding">
        <div className="container">
          <div className="row g-5 align-items-start">

            <div className="col-lg-5">
              <span className="detail-section-label">
                THE EXPERIENCE
              </span>

              <h2>
                Berlin,
                <br />
                <span>your way.</span>
              </h2>
            </div>

            <div className="col-lg-7">
              <p className="tour-detail-lead">
                {tour.description}
              </p>

              <div className="tour-detail-intro-line"></div>

              <p className="tour-detail-small">
                Our routes are designed around the character of Berlin:
                layered history, changing neighbourhoods, architecture,
                culture and the everyday details between the landmarks.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}
      <section className="tour-highlights-section">
        <div className="container">

          <div className="tour-detail-heading-row">
            <div>
              <span>WHAT YOU'LL DISCOVER</span>
              <h2>
                The
                <br />
                <strong>highlights.</strong>
              </h2>
            </div>

            <p>
              A carefully considered route with enough structure
              to keep the day flowing and enough flexibility to
              make the experience feel personal.
            </p>
          </div>

          <div className="tour-highlights-grid">
            {tour.highlights.map((highlight, index) => (
              <div className="tour-highlight-item" key={highlight}>
                <span>
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <div>
                  <FaCheck />
                  <strong>{highlight}</strong>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          ITINERARY
      ===================================================== */}
      <section className="tour-itinerary-section">
        <div className="container">

          <div className="tour-detail-heading-row itinerary-heading">
            <div>
              <span>THE ROUTE</span>
              <h2>
                How the
                <br />
                <strong>day flows.</strong>
              </h2>
            </div>

            <div className="itinerary-note">
              <span>DESIGNED FOR</span>
              <strong>{tour.guests}</strong>
            </div>
          </div>

          <div className="tour-itinerary-list">
            {tour.itinerary.map((item) => (
              <article
                className="tour-itinerary-item"
                key={item.number}
              >
                <div className="itinerary-number">
                  {item.number}
                </div>

                <div className="itinerary-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <FaArrowRight className="itinerary-arrow" />
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          INCLUDED
      ===================================================== */}
      <section className="tour-included-section">
        <div className="container">

          <div className="tour-included-card">

            <div className="tour-included-heading">
              <span>THE NOIR NEON STANDARD</span>

              <h2>
                What is
                <br />
                <strong>included.</strong>
              </h2>
            </div>

            <div className="tour-included-list">
              <div>
                <FaCheck />
                <span>Experienced local guide</span>
              </div>

              <div>
                <FaCheck />
                <span>Curated route &amp; storytelling</span>
              </div>

              <div>
                <FaCheck />
                <span>Flexible pace</span>
              </div>

              <div>
                <FaCheck />
                <span>Local recommendations</span>
              </div>

              <div>
                <FaCheck />
                <span>Small-group experience</span>
              </div>

              <div>
                <FaCheck />
                <span>Personalised planning support</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PHOTO BREAK
      ===================================================== */}
      <section className="tour-detail-photo">
        <div
          className="tour-photo-bg"
          style={{ backgroundImage: `url("${tour.image}")` }}
        ></div>

        <div className="tour-photo-overlay"></div>

        <div className="container">
          <div className="tour-photo-content">
            <span>BERLIN IS NOT A CHECKLIST.</span>

            <h2>
              Leave room
              <br />
              for <strong>the unexpected.</strong>
            </h2>
          </div>
        </div>
      </section>


      {/* =====================================================
          RELATED TOURS
      ===================================================== */}
      <section className="related-tours-section">
        <div className="container">

          <div className="related-tours-heading">
            <span>KEEP EXPLORING</span>

            <h2>
              More ways
              <br />
              into <strong>Berlin.</strong>
            </h2>
          </div>

          <div className="row g-4">
            {relatedTours.map(([relatedSlug, relatedTour]) => (
              <div
                className="col-lg-4 col-md-6"
                key={relatedSlug}
              >
                <article className="related-tour-card">

                  <Link
                    to={`/tours/${relatedSlug}`}
                    className="related-tour-image"
                  >
                    <img
                      src={relatedTour.image}
                      alt={relatedTour.title}
                      loading="lazy"
                    />

                    <span>
                      {relatedTour.category}
                    </span>
                  </Link>

                  <div className="related-tour-content">
                    <small>
                      {relatedTour.duration}
                    </small>

                    <h3>{relatedTour.title}</h3>

                    <p>{relatedTour.intro}</p>

                    <Link
                      to={`/tours/${relatedSlug}`}
                      className="related-tour-link"
                    >
                      <span>Explore Tour</span>
                      <FaArrowRight />
                    </Link>
                  </div>

                </article>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="tour-detail-cta">
        <div className="container">

          <div className="tour-detail-cta-inner">

            <div>
              <span>READY WHEN YOU ARE</span>

              <h2>
                Make this
                <br />
                <strong>your Berlin.</strong>
              </h2>

              <p>
                Tell us your dates, interests and travel style.
                We'll help shape the experience around you.
              </p>
            </div>

            <Link
              to="/contact"
              className="tour-detail-cta-btn"
            >
              <span>Plan My Tour</span>
              <FaArrowRight />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default TourDetail;