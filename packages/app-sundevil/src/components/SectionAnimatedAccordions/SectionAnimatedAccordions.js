import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";
import { trackGAEvent } from "../../track-ga/track-ga-event";

/* -------------------------------------------------------------------------- */
/* PropTypes */
/* -------------------------------------------------------------------------- */
const defaultGAEvent = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content",
};

const AVAILABLE_GA_ACTIONS = {
  OPEN: "open",
  CLOSE: "close",
};

const propTypes = {
  title: PropTypes.string,
  bottomImage: PropTypes.string,
  tiers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
      tags: PropTypes.string,
      rightImage: PropTypes.string,
      benefits: PropTypes.arrayOf(PropTypes.string),
      isPremium: PropTypes.bool,
    })
  ).isRequired,
};

const Root = styled.div`
  position: relative;
  padding: 96px 0;
  overflow: hidden;
  @media (max-width: 768px) {
    padding-bottom: 260px;
  }
`;

const Accordion = styled.div`
  max-width: 1129px;
  display: grid;
  grid-template-columns: 0px 1fr;
  gap: 16px;
`;

const TierItem = styled.div`
  display: contents;
`;

const TierButton = styled.button`
  grid-column: 1;
  height: 80px;
  padding: 0 24px;
  border: none;
  cursor: pointer;
  text-align: left;

  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 16px;
  font-weight: 600;

  background-color: ${({ $isFirst }) => ($isFirst ? "#FFC627" : "#6F6F6F")};
  color: ${({ $isFirst }) => ($isFirst ? "#000" : "#FFF")};

  clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
  transition: background-color 0.25s ease, color 0.25s ease;

  ${({ $active, $isFirst }) =>
    $active &&
    !$isFirst &&
    `
      background-color: #ffffff;
      color: #000;
    `}

  &:hover {
    ${({ $isFirst }) =>
      $isFirst
        ? `
          background-color: #FFC627;
          color: #000;
        `
        : `
          background-color: #ffffff;
          color: #000;
        `}
  }
`;

const PremiumIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #747474;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

/* ---------------------- OPEN SECTION -------------------------------------- */

const TierContent = styled.div`
  grid-column: 2;
  max-height: ${({ $expanded }) => ($expanded ? "360px" : "0")};
  overflow: hidden;
  transition: max-height 0.35s ease;
  @media (max-width: 768px) {
    max-height: none;
    display: ${({ $expanded }) => ($expanded ? "block" : "none")};
  }
`;

const TierContentInner = styled.div`
  position: relative;
  background: ${({ $isFirst }) => ($isFirst ? "#FFC627" : "#FFFFFF")};
  color: #000;
  padding: 0px 76px 40px 16px;
  margin-left: -16px;

  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  /* gap: 32px; */

  /* clip-path: polygon(0 0, 100% 0, 93% 100%, 0 100%); */
  clip-path: polygon(0 0, 100% 0, 78% 100%, 0 100%);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    clip-path: none;
    margin-left: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 32px;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;

  background: #e8e8e8;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

const TierText = styled.div`
  font-size: 16px;
  line-height: 1.6;
`;

const TierBenefits = styled.ul`
  display: flex;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
  font-weight: 600;

  li::before {
    content: "•";
    margin-right: 8px;
  }
`;

/* ---------------------- IMAGE --------------------------------------------- */

const TierImage = styled.div`
  position: relative;
  height: 100%;
  overflow: visible;

  /* clip-path: polygon(22% 0, 100% 0, 78% 100%, 0 100%); */
  clip-path: polygon(39% 0, 100% 0, 44% 100%, 0 76%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);
    z-index: 2;
  }

  /* ✅ GOLD BAR RESTORED */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 134px;
    width: 8px;
    height: 100%;
    background: ${({ $isFirst }) => ($isFirst ? "#FFFFFF" : "#FFC627")};
    transform: skewX(-21deg);
    z-index: 3;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* -------------------------------------------------------------------------- */
/* Component */
/* -------------------------------------------------------------------------- */

export const SectionAnimatedAccordions = ({ bottomImage, title, tiers }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleTier = (id, label, action) => {
    setExpandedId(prev => (prev === id ? null : id));

    trackGAEvent({
      event: "collapse",
      action: action ? "close" : "open",
      name: "onclick",
      type: "accordion",
      region: "main content",
      section: title ?? " ",
      text: label,
      component: "accordion tier",
    });
  };

  return (
    <Root>
      <div id="animated-accordions" className="container">
        {title && <h2 className="text-white mb-6">{title}</h2>}
        {bottomImage && (
          <img
            className="our-partnership img-fluid"
            alt="our-partnership"
            src={bottomImage}
          />
        )}

        <Accordion className="section-accordion">
          {tiers.map((tier, index) => {
            const isOpen = expandedId === tier.id;
            const isFirst = index === 0;

            return (
              <TierItem key={tier.id}>
                <TierButton
                  type="button"
                  $active={isOpen}
                  $isFirst={isFirst}
                  className={[
                    "tier-item",
                    `tier-${index + 1}`,
                    tier.isPremium ? "premium" : "",
                    isOpen ? "active" : "",
                  ].join(" ")}
                  onClick={() => toggleTier(tier.id, tier.label, isOpen)}
                  aria-expanded={isOpen}
                >
                  {tier.isPremium && <PremiumIcon>★</PremiumIcon>}
                  {tier.label}
                </TierButton>

                <TierContent
                  className={["tier-content", `tier-${index + 1}`]}
                  $expanded={isOpen}
                >
                  <TierContentInner $isFirst={isFirst}>
                    {isOpen && (
                      <CloseButton
                        onClick={() => toggleTier(tier.id, tier.label, isOpen)}
                      >
                        ✕
                      </CloseButton>
                    )}

                    <TierText>
                      <div className="section-body-title">
                        {tier.isPremium && (
                          <PremiumIcon style={{ marginRight: "8px" }}>
                            ★
                          </PremiumIcon>
                        )}
                        {tier.label}
                      </div>
                      {tier.description && (
                        <p
                          className="section-body-description"
                          dangerouslySetInnerHTML={{ __html: tier.description }}
                        />
                      )}

                      {tier.tags && (
                        <p className="tier-tags" style={{ fontWeight: "700" }}>
                          {tier.tags.split(",").map((tag, i) => (
                            <React.Fragment key={tag}>
                              {i > 0 && <span className="dot" />}
                              {tag.trim()}
                            </React.Fragment>
                          ))}
                        </p>
                      )}

                      {tier.benefits && (
                        <TierBenefits>
                          {tier.benefits.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </TierBenefits>
                      )}
                    </TierText>

                    {tier.rightImage && (
                      <TierImage>
                        <img
                          className="section-image"
                          src={tier.rightImage}
                          alt=""
                        />
                      </TierImage>
                    )}
                  </TierContentInner>
                </TierContent>
              </TierItem>
            );
          })}
        </Accordion>
      </div>
    </Root>
  );
};

SectionAnimatedAccordions.propTypes = propTypes;
export default SectionAnimatedAccordions;
