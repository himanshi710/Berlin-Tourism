import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaUsers,
} from "react-icons/fa";

import "./TourCard.css";

function TourCard({
  image,
  title,
  category,
  duration,
  guests,
  price,
  description,
  slug,
  featured = false,
}) {
  return (
    <article
      className={`berlin-tour-card ${
        featured ? "tour-card-featured" : ""
      }`}
    >
      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="tour-card-image">

        <img
          src={image}
          alt={title}
          loading="lazy"
        />

        <div className="tour-card-overlay"></div>

        {category && (
          <span className="tour-card-category">
            {category}
          </span>
        )}

        {featured && (
          <span className="tour-card-featured-label">
            SIGNATURE
          </span>
        )}

      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="tour-card-content">

        <div className="tour-card-meta">

          {duration && (
            <span>
              <FaClock />
              {duration}
            </span>
          )}

          {guests && (
            <span>
              <FaUsers />
              {guests}
            </span>
          )}

        </div>

        <h3>
          {title}
        </h3>

        {description && (
          <p>
            {description}
          </p>
        )}

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="tour-card-bottom">

          {price && (
            <div className="tour-card-price">
              <small>
                FROM
              </small>

              <strong>
                {price}
              </strong>
            </div>
          )}

          <Link
            to={`/tours/${slug}`}
            className="tour-card-link"
          >
            <span>
              Explore Tour
            </span>

            <span className="tour-card-arrow">
              <FaArrowRight />
            </span>
          </Link>

        </div>

      </div>
    </article>
  );
}

export default TourCard;