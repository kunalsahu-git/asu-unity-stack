import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Skeleton } from "../../Skeleton";
import { specialEventPropTypes } from "../carousel-tall-card";

const Card = styled.div`
  height: 520px;
  position: relative;
  overflow: hidden;
  &:hover .card-body {
    opacity: 1;
    max-height: 200px;
  }
`;

// const CardImage = styled.img`
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 0;
// `;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 32px;
  z-index: 2;
  color: white;
  width: 100%;
`;

const CardTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 32px;
  font-weight: 700;
`;

const CardBody = styled.div`
  flex: 1;
  width: 100%;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.5s ease, max-height 0.5s ease;
`;

const CardBodyText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: white;
  line-height: 1.2em;
  overflow: hidden;
  position: relative;
  word-wrap: break-word;
  text-overflow: ellipsis;

  /* Ensure child elements don't break the layout */
  & > * {
    display: inline;
    margin: 0;
    padding: 0;
  }
`;

export const CarouselTallCard = ({ specialEventCard, cardWidth, skeleton }) => {
  const cardRef = useRef();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Skeleton skeleton={skeleton}>
      <Card
        ref={cardRef}
        style={{
          width: cardWidth === 0 ? "100%" : cardWidth,
        }}
      >
        {!isImageLoaded && <Skeleton />}
        {/* <CardImage
          src={specialEventCard.imageSrc}
          alt={specialEventCard.imageAlt ?? " "}
          onLoad={() => setIsImageLoaded(true)}
          style={{ display: isImageLoaded ? "block" : "none" }}
        /> */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "inline-block",
          }}
        >
          <img
            src={specialEventCard.imageSrc}
            alt={specialEventCard.imageAlt ?? " "}
            onLoad={() => setIsImageLoaded(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%)",
            }}
          />
        </div>

        <CardContent>
          <CardTitle>{specialEventCard.title}</CardTitle>
          <CardBody className="card-body">
            <CardBodyText
              dangerouslySetInnerHTML={{ __html: specialEventCard.body }}
            />
          </CardBody>
        </CardContent>
      </Card>
    </Skeleton>
  );
};

CarouselTallCard.propTypes = {
  specialEventCard: specialEventPropTypes,
  cardWidth: PropTypes.number,
  skeleton: PropTypes.bool,
};
