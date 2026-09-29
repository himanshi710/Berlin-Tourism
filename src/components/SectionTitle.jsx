function SectionTitle({
  eyebrow = "BERLIN EXPERIENCE",
  title,
  highlight,
  description,
  align = "left",
}) {
  return (
    <div className={`berlin-section-title ${align}`}>

      {/* Eyebrow */}

      <span className="section-eyebrow">
        <span className="eyebrow-line"></span>
        {eyebrow}
      </span>

      {/* Main Title */}

      <h2 className="section-heading">
        {title}

        {highlight && (
          <>
            {" "}
            <span>{highlight}</span>
          </>
        )}
      </h2>

      {/* Description */}

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionTitle;