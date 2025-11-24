// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { trackGAEvent } from "../../track-ga/track-ga-event";
import { DropDown } from "../DropDown/DropDown";
import { DropDownSurface } from "../DropDown/DropDownSurface";
import { Icon } from "../Icon_";
import { SelectBase } from "../Select/SelectBase";
import { Skeleton } from "../Skeleton";
import { basePropTypes, cleanSportTabs } from "./sports-tabs";
import { SportsTabDropDownItem } from "./SportsTabDropDownItem";

/**
 * @type {React.FC<Props>}
 */
export const SportsTabsMobile = ({
  sports: propsSports = [],
  onSportItemClick,
  skeleton,
  variant,
  className,
  sectionName,
}) => {
  const sports = cleanSportTabs(propsSports);

  // ⬇️ NEW: start with no selection
  const [selectedSport, setSelectedSport] = React.useState(null);

  const [state, setState] = React.useState({ opened: null });

  return (
    <Skeleton skeleton={Boolean(skeleton)} className={className}>
      <DropDown
        open={state.opened === "dropdown"}
        onClose={() =>
          setState(currentState => ({ ...currentState, opened: null }))
        }
        style={{ height: "100%", width: "100%" }}
        renderReference={input => {
          return (
            <SelectBase
              ref={input.ref}
              sectionName={sectionName}
              variant={variant}
              // ⬇️ NEW: show icon only when selected
              renderIcon={props =>
                selectedSport?.icon ? (
                  <div key={selectedSport.id}>
                    <Icon style={props?.style} icon={selectedSport.icon} />
                  </div>
                ) : null
              }
              // ⬇️ NEW: default text
              name={selectedSport?.name || "Choose a sport"}
              open={input.open}
              onClick={() =>
                setState(currentState => ({
                  ...currentState,
                  opened:
                    currentState.opened === "dropdown" ? null : "dropdown",
                }))
              }
            />
          );
        }}
        renderContent={input => (
          <DropDownSurface style={{ width: input.referenceWidth }}>
            {sports.map(sport => (
              <SportsTabDropDownItem
                key={sport.id ?? sport.name}
                label={sport.name}
                active={selectedSport?.id === sport.id}
                onClick={() => {
                  setSelectedSport(sport); // ⬅️ NEW: select sport
                  setState(currentState => ({ ...currentState, opened: null }));
                  onSportItemClick(sport.id);
                  trackGAEvent({
                    event: "link",
                    action: "click",
                    name: "onclick",
                    type: "internal link",
                    region: "main content",
                    section: sectionName,
                    text: sport?.name ?? " ",
                    component: "text",
                  });
                }}
              />
            ))}
          </DropDownSurface>
        )}
      />
    </Skeleton>
  );
};

// @ts-ignore
SportsTabsMobile.propTypes = {
  ...basePropTypes,
  skeleton: PropTypes.bool,
  variant: PropTypes.oneOf(["bottom-bordered", "borderless"]),
  className: PropTypes.string,
};
