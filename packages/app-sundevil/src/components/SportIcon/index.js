import {
  faBaseballBall,
  faCircleNodes,
  faFootball,
  faFutbol,
  faRunning,
  faSwimmer,
  faVolleyballBall,
  faBaseballBatBall,
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
  "cross-country": faRunning,
  "football": faFootball,
  "swimming-and-diving": faSwimmer,
  "soccer": faFutbol,
  "softball": faBaseballBall,
  "triathlon": faCircleNodes,
  "volleyball": faVolleyballBall,
};

/**
 * @type {React.FC<SportIconProps>}
//  */

export const SportIcon = ({ sportName }) => {
  switch (sportName) {
    case "basketball":
      return (
        <img
          src="https://sundevils.com//sites/default/files/2024-07/basketball_2.svg"
          alt="Golf"
          className="color-image"
        />
      );
    case "beach-volleyball":
      return (
        <img
          src="https://sundevils.com//sites/default/files/2024-07/beach-volleyball_0.svg"
          alt="Golf"
          className="color-image"
        />
      );
    case "golf":
      return (
        <img
          src="https://sundevils.com/sites/default/files/2024-07/golf_0.svg"
          alt="Golf"
          className="color-image"
        />
      );
    case "gymnastics":
      return (
        <img
          src="https://sundevils.com//sites/default/files/2024-07/gymnastics.svg"
          alt="Lacrosse"
          className="color-image"
        />
      );
    case "ice-hockey":
      return (
        <img
          src="https://sundevils.com//sites/default/files/2024-07/ice-hockey_0.svg"
          alt="Golf"
          className="color-image"
        />
      );
    case "lacrosse":
      return (
        <img
          src="https://sundevils.com/sites/default/files/2024-07/lacrosse_0.svg"
          alt="Lacrosse"
          className="color-image"
        />
      );
    case "tennis":
      return (
        <img
          src="https://sundevils.com//sites/default/files/2024-07/tennis_2.svg"
          alt="Golf"
          className="color-image"
        />
      );
    case "track-and-field":
      return (
        <img
          src="https://sundevils.com//sites/default/files/2024-07/track-and-field.svg"
          alt="Golf"
          className="color-image"
        />
      );
    case "water-polo":
      return (
        <img
          src="https://sundevils.com/sites/default/files/2024-08/water-polo_0.svg"
          alt="Water Polo"
          className="color-image"
        />
      );
    case "wrestling":
      return (
        <img
          src="https://sundevils.com//sites/default/files/2024-07/wrestling.svg"
          alt="Golf"
          className="color-image"
        />
      );
    default:
      const icon = iconMap[sportName] || faFootball;
      return <FontAwesomeIcon color="currentColor" icon={icon} />;
  }
};



SportIcon.propTypes = sportIconPropTypes;
