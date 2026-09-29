import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./ExperienceCard.css";

function ExperienceCard({
  image,
  title,
  category,
  description,
  number,
  slug,
}) {
  return (
    <article className="berlin-experience-card">

      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="experience-card-image">

        <img
          src={image}
          alt={title}
          loading="lazy"
        />

        <div className="experience-card-overlay"></div>

        {/* Number */}

        {number && (
          <span className="experience-card-number">
            {number}
          </span>
        )}

        {/* Category */}

        {category && (
          <span className="experience-card-category">
            {category}
          </span>
        )}

      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="experience-card-content">

        <span className="experience-card-label">
          BERLIN EXPERIENCE
        </span>

        <h3>
          {title}
        </h3>

        {description && (
          <p>
            {description}
          </p>
        )}

        <Link
          to={`/experiences/${slug}`}
          className="experience-card-link"
        >
          <span>
            Discover
          </span>

          <span className="experience-card-arrow">
            <FaArrowRight />
          </span>
        </Link>

      </div>

    </article>
  );
}

export default ExperienceCard;