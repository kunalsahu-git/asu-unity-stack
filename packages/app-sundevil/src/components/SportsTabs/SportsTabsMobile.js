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
 * @typedef {import("./sports-tabs").Sport} Sport
 * @typedef {import("./sports-tabs").BaseProps} BaseProps
 * @typedef {BaseProps & {skeleton?: boolean; variant?: "bottom-bordered" | "borderless" | null | undefined; className?: string; sectionName: string}} Props
 */

/**
 * @type {React.FC<Props>}
 * */
export const SportsTabsMobile = ({
  sports: propsSports = [],
  onSportItemClick,
  skeleton,
  variant,
  className,
  sectionName,
}) => {
  const sports = cleanSportTabs(propsSports);

  // No default selection — force user to choose
  const [selectedSport, setSelectedSport] = React.useState(null);
  const [state, setState] = React.useState({ opened: null });

  return (
    // @ts-ignore
    <Skeleton skeleton={Boolean(skeleton)} className={className}>
      <DropDown
        open={state.opened === "dropdown"}
        onClose={() => setState(current => ({ ...current, opened: null }))}
        style={{ height: "100%", width: "100%" }}
        renderReference={input => (
          <SelectBase
            // @ts-ignore
            ref={input.ref}
            sectionName={sectionName}
            variant={variant}
            renderIcon={props =>
              selectedSport?.icon ? (
                <div>
                  <Icon style={props?.style} icon={selectedSport.icon} />
                </div>
              ) : null
            }
            name={selectedSport?.name || "Choose a sport"}
            open={input.open}
            onClick={() =>
              setState(current => ({
                ...current,
                opened: current.opened === "dropdown" ? null : "dropdown",
              }))
            }
          />
        )}
        renderContent={input => (
          <DropDownSurface style={{ width: input.referenceWidth }}>
            {sports.map(sport => (
              <SportsTabDropDownItem
                key={sport.id ?? sport.name}
                label={sport.name}
                active={selectedSport?.id === sport.id}
                onClick={() => {
                  setSelectedSport(sport); // set user's choice
                  setState(current => ({ ...current, opened: null }));
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
