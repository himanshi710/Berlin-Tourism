import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaPlaneArrival,
  FaRoute,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

import SectionTitle from "../components/SectionTitle";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    arrival: "",
    departure: "",
    travellers: "",
    tripStyle: "",
    accommodation: "",
    transfer: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const contactCards = [
    {
      icon: <FaEnvelope />,
      label: "EMAIL",
      title: "hello@noirberlin.com",
      text: "Tell us what you have in mind.",
      link: "mailto:hello@noirberlin.com",
      className: "email-card",
    },
    {
      icon: <FaPhoneAlt />,
      label: "PHONE",
      title: "+49 30 000 000",
      text: "Speak directly with our Berlin team.",
      link: "tel:+493000000000",
      className: "phone-card",
    },
    {
      icon: <FaWhatsapp />,
      label: "WHATSAPP",
      title: "Chat with us",
      text: "Quick questions, fast answers.",
      link: "https://wa.me/493000000000",
      className: "whatsapp-card",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "BERLIN",
      title: "Berlin, Germany",
      text: "Your journey starts here.",
      link: "#berlin-map",
      className: "location-card",
    },
  ];

  const planningSteps = [
    {
      number: "01",
      title: "Tell us your idea",
      text: "Share your dates, interests, travel style and the Berlin experience you imagine.",
    },
    {
      number: "02",
      title: "We shape the route",
      text: "Our local team turns your ideas into a thoughtful route around the city.",
    },
    {
      number: "03",
      title: "Make it yours",
      text: "Refine the details, choose your experiences and prepare for Berlin.",
    },
  ];

  const tripStyles = [
    "FIRST BERLIN",
    "CULTURE",
    "ART & DESIGN",
    "FOOD",
    "NIGHTLIFE",
    "LOCAL LIFE",
    "LUXURY",
    "SLOW TRAVEL",
  ];

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="contact-hero-image"></div>
        <div className="contact-hero-overlay"></div>

        <div className="container contact-hero-container">
          <div className="contact-hero-copy">

            <div className="contact-eyebrow">
              <span></span>
              NOIR NEON BERLIN
            </div>

            <h1>
              Let's Make
              <br />
              <em>Berlin Yours.</em>
            </h1>

            <p>
              Tell us what kind of Berlin you want to experience.
              We will help turn the idea into a journey worth remembering.
            </p>

            <a href="#contact-form" className="contact-hero-btn">
              START A CONVERSATION
              <FaArrowRight />
            </a>

          </div>
        </div>

        <div className="contact-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="contact-intro section-space">
        <div className="container">

          <div className="contact-intro-grid">

            <div className="contact-intro-left">
              <div className="section-kicker">
                GET IN TOUCH
              </div>

              <h2>
                Berlin starts with
                <span>a conversation.</span>
              </h2>
            </div>

            <div className="contact-intro-right">
              <p className="contact-lead">
                Every great Berlin trip begins with a simple idea.
                Maybe you want hidden courtyards, brutalist architecture,
                legendary clubs, intimate restaurants or a slower side of
                the city.
              </p>

              <p>
                Whatever brings you here, our local team can shape the
                details around you. No generic itineraries. No unnecessary
                tourist stops. Just Berlin, designed around your interests.
              </p>

              <div className="contact-intro-note">
                <FaStar />
                <span>
                  PERSONAL · LOCAL · UNEXPECTED
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="contact-info-section">
        <div className="container">

          <div className="contact-info-grid">

            {contactCards.map((card, index) => (
              <a
                href={card.link}
                key={index}
                className={`contact-info-card ${card.className}`}
              >
                <div className="contact-card-top">
                  <div className="contact-card-icon">
                    {card.icon}
                  </div>

                  <span>{card.label}</span>
                </div>

                <div className="contact-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>

                <div className="contact-card-arrow">
                  <FaArrowRight />
                </div>
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="contact-form-section section-space" id="contact-form">
        <div className="container">

          <div className="contact-form-layout">

            {/* LEFT */}
            <div className="contact-form-intro">

              <div className="section-kicker">
                PLAN YOUR BERLIN
              </div>

              <h2>
                Tell us
                <span>everything.</span>
              </h2>

              <p>
                Give us a few details and we'll start building the
                Berlin experience around you.
              </p>

              <div className="contact-form-features">

                <div className="form-feature">
                  <div className="form-feature-icon">
                    <FaRoute />
                  </div>

                  <div>
                    <strong>Tailored routes</strong>
                    <span>Built around your interests.</span>
                  </div>
                </div>

                <div className="form-feature">
                  <div className="form-feature-icon">
                    <FaClock />
                  </div>

                  <div>
                    <strong>Local response</strong>
                    <span>We'll get back to you shortly.</span>
                  </div>
                </div>

                <div className="form-feature">
                  <div className="form-feature-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <strong>Berlin expertise</strong>
                    <span>Ideas from people who know the city.</span>
                  </div>
                </div>

              </div>

              <div className="contact-response-note">
                <FaCheck />
                <span>
                  No obligation. Just a conversation about Berlin.
                </span>
              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="contact-form-wrapper">

              {submitted ? (
                <div className="contact-success">

                  <div className="success-icon">
                    <FaCheck />
                  </div>

                  <div className="success-kicker">
                    MESSAGE RECEIVED
                  </div>

                  <h3>
                    Danke.
                    <span>We'll be in touch.</span>
                  </h3>

                  <p>
                    Your Berlin idea has landed with our team.
                    We'll get back to you shortly.
                  </p>

                  <button
                    className="contact-reset-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    SEND ANOTHER MESSAGE
                  </button>

                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  <div className="form-heading">
                    <span>01 — YOUR DETAILS</span>
                    <h3>Start your journey.</h3>
                  </div>

                  <div className="form-grid">

                    <div className="form-group">
                      <label>FULL NAME *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>EMAIL *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>PHONE</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+49..."
                      />
                    </div>

                    <div className="form-group">
                      <label>TRAVELLERS</label>
                      <select
                        name="travellers"
                        value={formData.travellers}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="1">1 traveller</option>
                        <option value="2">2 travellers</option>
                        <option value="3-4">3–4 travellers</option>
                        <option value="5-8">5–8 travellers</option>
                        <option value="9+">9+ travellers</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>ARRIVAL</label>
                      <input
                        type="date"
                        name="arrival"
                        value={formData.arrival}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>DEPARTURE</label>
                      <input
                        type="date"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>ACCOMMODATION</label>
                      <select
                        name="accommodation"
                        value={formData.accommodation}
                        onChange={handleChange}
                      >
                        <option value="">Choose one</option>
                        <option value="boutique">Boutique hotel</option>
                        <option value="luxury">Luxury hotel</option>
                        <option value="design">Design hotel</option>
                        <option value="apartment">Apartment</option>
                        <option value="already-booked">
                          Already booked
                        </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>AIRPORT TRANSFER</label>
                      <select
                        name="transfer"
                        value={formData.transfer}
                        onChange={handleChange}
                      >
                        <option value="">Choose one</option>
                        <option value="yes">Yes, please</option>
                        <option value="maybe">Maybe</option>
                        <option value="no">No thanks</option>
                      </select>
                    </div>

                  </div>

                  <div className="form-section-label">
                    02 — YOUR BERLIN
                  </div>

                  <div className="trip-style-grid">

                    {tripStyles.map((style) => (
                      <label
                        key={style}
                        className={`trip-style-option ${
                          formData.tripStyle === style
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="tripStyle"
                          value={style}
                          checked={formData.tripStyle === style}
                          onChange={handleChange}
                        />

                        <span>{style}</span>

                        <FaCheck className="trip-check" />
                      </label>
                    ))}

                  </div>

                  <div className="form-group form-message">
                    <label>YOUR MESSAGE</label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you would love to experience in Berlin..."
                      rows="6"
                    ></textarea>
                  </div>

                  <div className="form-submit-row">

                    <p>
                      By sending this form, you agree to be contacted
                      about your Berlin journey.
                    </p>

                    <button
                      type="submit"
                      className="form-submit-btn"
                    >
                      SEND ENQUIRY
                      <FaPaperPlane />
                    </button>

                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="contact-process-section">
        <div className="container">

          <div className="contact-process-header">
            <div>
              <div className="section-kicker">
                HOW IT WORKS
              </div>

              <h2>
                From idea
                <span>to Berlin.</span>
              </h2>
            </div>

            <p>
              Simple, personal and designed around you.
            </p>
          </div>

          <div className="contact-process-grid">

            {planningSteps.map((step, index) => (
              <div
                className="contact-process-card"
                key={index}
              >
                <div className="process-number">
                  {step.number}
                </div>

                <div className="process-line"></div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

                <div className="process-arrow">
                  <FaArrowRight />
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="contact-map-section" id="berlin-map">
        <div className="container">

          <div className="contact-map-card">

            <div className="contact-map-content">

              <div className="section-kicker">
                FIND US IN BERLIN
              </div>

              <h2>
                Meet us
                <span>in the city.</span>
              </h2>

              <p>
                Berlin is best understood street by street. Our local
                team knows the neighborhoods, hidden corners and places
                worth crossing the city for.
              </p>

              <div className="map-location-list">

                <div className="map-location-item">
                  <div className="map-location-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <strong>Berlin, Germany</strong>
                    <span>52.5200° N · 13.4050° E</span>
                  </div>
                </div>

                <div className="map-location-item">
                  <div className="map-location-icon pink">
                    <FaPlaneArrival />
                  </div>

                  <div>
                    <strong>BER Airport</strong>
                    <span>Berlin Brandenburg Airport</span>
                  </div>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Berlin,Germany"
                target="_blank"
                rel="noreferrer"
                className="map-btn"
              >
                OPEN BERLIN MAP
                <FaArrowRight />
              </a>

            </div>

            <div className="contact-map-frame">
              <iframe
                title="Berlin map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.3500%2C52.4900%2C13.4500%2C52.5400&layer=mapnik&marker=52.5200%2C13.4050"
                loading="lazy"
              ></iframe>

              <div className="map-overlay-badge">
                <span></span>
                BERLIN
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= ARRIVAL ================= */}
      <section className="contact-arrival-section section-space">
        <div className="container">

          <div className="contact-arrival-card">

            <div className="arrival-image">
             <img
    src="https://images.unsplash.com/photo-1561544238-580f35f73cf0?auto=format&fit=crop&w=1800&q=90"
    alt="Berlin city"
  />
              <div className="arrival-image-label">
                BERLIN BRANDENBURG
              </div>
            </div>

            <div className="arrival-content">

              <div className="section-kicker">
                ARRIVING IN BERLIN
              </div>

              <h2>
                Start the
                <span>right way.</span>
              </h2>

              <p>
                Landing at BER? We can arrange a private transfer,
                help with your first evening and make sure your Berlin
                experience starts smoothly.
              </p>

              <div className="arrival-points">

                <div>
                  <FaCheck />
                  <span>Private airport transfers</span>
                </div>

                <div>
                  <FaCheck />
                  <span>Hotel check-in assistance</span>
                </div>

                <div>
                  <FaCheck />
                  <span>First-day city orientation</span>
                </div>

              </div>

              <a
                href="#contact-form"
                className="arrival-btn"
              >
                ADD ARRIVAL DETAILS
                <FaArrowRight />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ================= NOTES / FAQ ================= */}
      <section className="contact-notes-section">
        <div className="container">

          <div className="contact-notes-header">
            <div className="section-kicker">
              BEFORE YOU WRITE
            </div>

            <h2>
              A few things
              <span>to know.</span>
            </h2>
          </div>

          <div className="contact-notes-grid">

            <div className="contact-note">
              <span className="note-number">01</span>

              <h3>How quickly do you reply?</h3>

              <p>
                We aim to respond to new enquiries as quickly as
                possible during our working hours.
              </p>
            </div>

            <div className="contact-note">
              <span className="note-number">02</span>

              <h3>Can you work with my existing plans?</h3>

              <p>
                Absolutely. Tell us what is already booked and we'll
                build around it.
              </p>
            </div>

            <div className="contact-note">
              <span className="note-number">03</span>

              <h3>Do you create custom itineraries?</h3>

              <p>
                Yes. Your interests, pace and travel style become the
                foundation of the route.
              </p>
            </div>

            <div className="contact-note">
              <span className="note-number">04</span>

              <h3>Can you arrange transfers?</h3>

              <p>
                Yes. Airport and private city transfers can be included
                in your Berlin plans.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="contact-final-cta">

        <div className="contact-final-image"></div>
        <div className="contact-final-overlay"></div>

        <div className="container contact-final-container">

          <div className="contact-final-content">

            <div className="section-kicker light">
              YOUR BERLIN AWAITS
            </div>

            <h2>
              Don't just visit.
              <span>Feel Berlin.</span>
            </h2>

            <p>
              Tell us what you're looking for and let's create
              something uniquely yours.
            </p>

            <a
              href="#contact-form"
              className="final-cta-btn"
            >
              START PLANNING
              <FaArrowRight />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;