import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { iconPropType } from "../Icon_";

// Existing specialEventPropTypes
const buttonPropTypes = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.oneOf(["maroon", "dark"]),
});

/**
 * @typedef {Object} Button
 * @property {string} label
 * @property {string} href
 * @property {string} ariaLabel
 * @property {"maroon" | "dark"} color
 */

export const specialEventPropTypes = PropTypes.shape({
  id: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  sportName: PropTypes.string,
  sportIcon: iconPropType,
  title: PropTypes.string,
  subtitles: PropTypes.arrayOf(PropTypes.string),
  body: PropTypes.string,
  buttons: PropTypes.arrayOf(buttonPropTypes),
});

/**
 * @typedef {Object} SpecialEvent
 * @property {string} [id]
 * @property {string} [imageSrc]
 * @property {string} [imageAlt]
 * @property {string} [sportName]
 * @property {any} [sportIcon]
 * @property {string} [title]
 * @property {string[]} [subtitles]
 * @property {string} [body]
 * @property {Button[]} [buttons]
 */

// Styled Card component with dynamic height
const Card = styled.div`
  width: ${({ $cardWidth }) => ($cardWidth ? `${$cardWidth}px` : "100%")};
  height: ${({ $cardHeight }) => ($cardHeight ? `${$cardHeight}px` : "auto")};
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  &:hover .card-body {
    opacity: 1;
    max-height: 200px;
  }
`;

const CardBody = styled.p`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease;
`;

// Main component
export const CarouselTallCard = ({
  specialEventCard,
  cardWidth,
  cardHeight,
  skeleton,
}) => {
  if (skeleton) {
    return (
      <Card $cardWidth={cardWidth} $cardHeight={cardHeight}>
        {/* Your skeleton UI here */}
      </Card>
    );
  }

  return (
    <Card $cardWidth={cardWidth} $cardHeight={cardHeight}>
      <img
        src={specialEventCard.imageSrc}
        alt={specialEventCard.imageAlt}
        style={{ width: "100%", height: "auto" }}
      />
      <div style={{ padding: "16px" }}>
        <h3>{specialEventCard.title}</h3>
        {specialEventCard.subtitles?.map((sub, i) => (
          <p key={i}>{sub}</p>
        ))}
        <CardBody className="card-body">{specialEventCard.body}</CardBody>
      </div>
    </Card>
  );
};

CarouselTallCard.propTypes = {
  specialEventCard: specialEventPropTypes.isRequired,
  cardWidth: PropTypes.number,
  cardHeight: PropTypes.number,
  skeleton: PropTypes.bool,
};
