import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./DestinationCard.css";

function DestinationCard({
  image,
  title,
  location,
  description,
  category,
  slug,
}) {
  return (
    <article className="berlin-destination-card">

      {/* IMAGE */}
      <div className="destination-card-image">

        <img
          src={image}
          alt={title}
          loading="lazy"
        />

        <div className="destination-image-shade"></div>

        <div className="destination-image-glow"></div>

        {/* TOP META */}
        <div className="destination-card-top">

          {category && (
            <span className="destination-category">
              <span className="category-dot"></span>
              {category}
            </span>
          )}

          <span className="destination-berlin">
            BERLIN
          </span>

        </div>

        {/* IMAGE LOCATION */}
        <div className="destination-image-location">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>

        {/* Hover Number */}
        <span className="destination-big-number">
          01
        </span>

      </div>

      {/* CONTENT */}
      <div className="destination-card-content">

        <div className="destination-title-wrap">

          <span className="destination-kicker">
            BERLIN DISTRICT
          </span>

          <h3>{title}</h3>

        </div>

        {description && (
          <p className="destination-description">
            {description}
          </p>
        )}

        <Link
          to={`/destinations/${slug}`}
          className="destination-explore"
        >
          <span className="destination-explore-text">
            Explore Place
          </span>

          <span className="destination-arrow">
            <FaArrowRight />
          </span>
        </Link>

      </div>

      {/* Bottom accent */}
      <span className="destination-card-line"></span>

    </article>
  );
}

export default DestinationCard;