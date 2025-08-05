// @ts-check
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket,
  faCartShopping,
  faArrowRight,
  // Add more icons as needed
} from "@fortawesome/free-solid-svg-icons";

import { ButtonPropTypes } from "../../core/models/app-prop-types";
import { ButtonWrapper } from "../Button/index.styles";

/**
 * @typedef {import('../../core/models/types').LogoButton} LogoButton
 */

// Map your icon names to actual FontAwesome icons
const iconMap = {
  ticket: faTicket,
  cart: faCartShopping,
  arrow: faArrowRight,
};

const LogoButton = ({
  href,
  color,
  text,
  classes,
  onClick,
  onFocus,
  style,
  icon, // receives the icon object
}) => {
  const IconComponent = icon?.icon_name ? iconMap[icon.icon_name] : null;

  return (
    // @ts-ignore
    <ButtonWrapper
      href={href}
      className={`button-${color} ${classes ?? ""}`}
      onClick={onClick}
      onFocus={onFocus}
      style={style}
    >
      {IconComponent && (
        <FontAwesomeIcon icon={IconComponent} style={{ marginRight: "8px" }} />
      )}
      <span>{text}</span>
    </ButtonWrapper>
  );
};

LogoButton.propTypes = {
  ...ButtonPropTypes,
  icon: PropTypes.shape({
    icon_name: PropTypes.string.isRequired,
    style: PropTypes.string,
    settings: PropTypes.string,
  }),
};

export { LogoButton };
