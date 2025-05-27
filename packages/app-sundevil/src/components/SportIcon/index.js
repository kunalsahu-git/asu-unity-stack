import {
  faBaseballBall,
  faBasketballBall,
  faBiking,
  faFistRaised,
  faFootball,
  faFutbol,
  faGolfBall,
  faHockeyPuck,
  faRunning,
  faSwimmer,
  faTableTennis,
  faVolleyballBall,
  faBaseballBatBall,
  faPersonRunning
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";

import { sportNamePropTypes } from "./sport-name";

const sportIconPropTypes = {
  sportName: sportNamePropTypes,
};

/**
 * @typedef {import('prop-types').InferProps<typeof sportIconPropTypes>} SportIconProps
 */

const iconMap = {
  "baseball": faBaseballBatBall,
  "basketball": faBasketballBall,
  "cross-country": faRunning,
  "football": faFootball,
  "golf": faGolfBall,
  "ice-hockey": faHockeyPuck,
  "swimming-and-diving": faSwimmer,
  "tennis": faTableTennis,
  "track-and-field": faRunning,
  "wrestling": faFistRaised,
  "beach-volleyball": faVolleyballBall,
  "gymnastics": faPersonRunning,
  "soccer": faFutbol,
  "softball": faBaseballBall,
  "triathlon": faBiking,
  "volleyball": faVolleyballBall,
};

/**
 * @type {React.FC<SportIconProps>}
 */
export const SportIcon = ({ sportName }) => {
  const icon = iconMap[sportName] || faFootball;
  if (sportName === "water-polo") {
    return <img src="https://sundevils.com/sites/default/files/2024-08/water-polo_0.svg" alt="Water Polo" class="color-image"/>
  } else if (sportName === "lacrosse") {
    return <img src="https://sundevils.com/sites/default/files/2024-07/lacrosse_0.svg" alt="Lacrose" class="color-image"/>
  } else {
    const icon = iconMap[sportName] || faFootball;
    return <FontAwesomeIcon color="currentColor" icon={icon} />;
  }
};

SportIcon.propTypes = sportIconPropTypes;
