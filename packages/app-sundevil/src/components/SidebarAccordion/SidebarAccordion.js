import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";
import { Icon } from "../Icon_";
import { trackGAEvent } from "../../track-ga/track-ga-event";

export const SidebarAccordion = ({ eyebrow, title, description, cards }) => {
  const [expandedId, setExpandedId] = useState(
    cards && cards.length > 0 ? cards[0].id : null
  );

  const activeCard = cards.find(card => card.id === expandedId);
  const backgroundImage = activeCard?.backgroundImage;

  const togglePartnership = (id, label, action) => {
    setExpandedId(expandedId === id ? null : id);

    trackGAEvent({
      event: "collapse",
      action: action ? "close" : "open",
      name: "onclick",
      type: "accordion",
      region: "main content",
      section: title.replace(/<br\s*\/?>/gi, " ").trim() ?? " ",
      text: label,
      component: "accordion tier",
    });
  };

  return (
    <div
      id="left-content-right-accordion"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.80) 100%),
                 url(${backgroundImage}) top center / cover no-repeat`,
      }}
    >
      <div className="container">
        <div className="hero-content-wrapper">
          <div className="hero-layout">
            <div className="hero-left-column">
              <div className="hero-header">
                {eyebrow && <h3 className="hero-label">{eyebrow}</h3>}
                {title && (
                  <h2
                    className="hero-title"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}
              </div>

              {description && (
                <p
                  className="hero-description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>

            {/* Right Column */}
            <div className="partnerships-container">
              <div className="partnerships-list">
                {cards.map(card => (
                  <div
                    key={card.id}
                    className={`partnership-item ${
                      expandedId === card.id ? "expanded" : ""
                    }`}
                  >
                    {/* Header */}
                    <button
                      type="button"
                      className="partnership-header d-flex"
                      onClick={() =>
                        togglePartnership(
                          card.id,
                          card.name,
                          expandedId === card.id
                        )
                      }
                    >
                      {card.icon && <Icon icon={card.icon} />}
                      <h3 className="partnership-title">{card.name}</h3>
                    </button>

                    {/* Expanded Content */}
                    {expandedId === card.id && (
                      <div className="partnership-content">
                        <div className="d-flex">
                          {card.logo && (
                            <img
                              src={card.logo}
                              alt={`${card.name} logo`}
                              className="partnership-logo img-fluid"
                              loading="lazy"
                            />
                          )}

                          {card.logoTitle && (
                            <div className="partnership-title">
                              {card.logoTitle}
                            </div>
                          )}
                        </div>

                        <div className="d-flex title-section">
                          {card.icon && <Icon icon={card.icon} />}
                          {card.name && (
                            <h3 className="h4 text-white">{card.name}</h3>
                          )}
                        </div>

                        {card.badge && (
                          <div className="partnership-badge">
                            <span className="partnership-badge-text">
                              {card.badge}
                            </span>
                          </div>
                        )}

                        {card.description && (
                          <p
                            className="partnership-description"
                            dangerouslySetInnerHTML={{
                              __html: card.description,
                            }}
                          />
                        )}

                        {card.ctaLabel && (
                          <div>
                            <a href={card.ctaLink}>
                              <button type="button" className="cta-button">
                                <svg
                                  className="cta-icon"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                {card.ctaLabel}
                              </button>
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SidebarAccordion.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
      badge: PropTypes.string,
      description: PropTypes.string,
      cta: PropTypes.string,
      backgroundImage: PropTypes.string,
    })
  ).isRequired,
};

export default SidebarAccordion;
