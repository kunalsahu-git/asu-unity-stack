// // @ts-check
// import PropTypes from "prop-types";
// import React from "react";

// import { trackGAEvent } from "../../track-ga/track-ga-event";
// import { DropDown } from "../DropDown/DropDown";
// import { DropDownSurface } from "../DropDown/DropDownSurface";
// import { Icon } from "../Icon_";
// import { SelectBase } from "../Select/SelectBase";
// import { Skeleton } from "../Skeleton";
// import { basePropTypes, cleanSportTabs } from "./sports-tabs";
// import { SportsTabDropDownItem } from "./SportsTabDropDownItem";

// /**
//  * @typedef {import("./sports-tabs").Sport} Sport
//  * @typedef {import("./sports-tabs").BaseProps} BaseProps
//  * @typedef {BaseProps & {skeleton?: boolean; variant?: "bottom-bordered" | "borderless" | null | undefined; className?: string; sectionName: string}} Props
//  */

// /**
//  * @type {React.FC<Props>}
//  * */
// export const SportsTabsMobile = ({
//   sports: propsSports = [],
//   onSportItemClick,
//   skeleton,
//   variant,
//   className,
//   sectionName,
// }) => {
//   const sports = cleanSportTabs(propsSports);
//   const activeSport = sports.find(sport => Boolean(sport.active));
//   if (!activeSport) return null;

//   /** @type {Record<string, unknown>} */
//   const initialState = {
//     opened: null,
//   };
//   const [state, setState] = React.useState(initialState);

//   return (
//     // @ts-ignore
//     <Skeleton skeleton={Boolean(skeleton)} className={className}>
//       <DropDown
//         open={state.opened === "dropdown"}
//         onClose={() =>
//           setState(currentState => ({ ...currentState, opened: null }))
//         }
//         style={{ height: "100%", width: "100%" }}
//         renderReference={input => {
//           return (
//             <SelectBase
//               // @ts-ignore
//               ref={input.ref}
//               sectionName={sectionName}
//               variant={variant}
//               renderIcon={props => (
//                 <div // This probably fixes some font awesome issues
//                   key={activeSport?.id ?? activeSport?.name}
//                 >
//                   <Icon style={props?.style} icon={activeSport.icon} />
//                 </div>
//               )}
//               name={activeSport.name}
//               open={input.open}
//               onClick={() =>
//                 setState(currentState => ({
//                   ...currentState,
//                   opened:
//                     currentState.opened === "dropdown" ? null : "dropdown",
//                 }))
//               }
//             />
//           );
//         }}
//         renderContent={input => {
//           return (
//             <DropDownSurface style={{ width: input.referenceWidth }}>
//               {sports.map(sport => (
//                 <SportsTabDropDownItem
//                   key={sport.id ?? sport.name}
//                   label={sport.name}
//                   active={Boolean(sport.active)}
//                   onClick={() => {
//                     setState(currentState => ({
//                       ...currentState,
//                       opened: null,
//                     }));
//                     onSportItemClick(sport.id);
//                     trackGAEvent({
//                       event: "link",
//                       action: "click",
//                       name: "onclick",
//                       type: "internal link",
//                       region: "main content",
//                       section: sectionName,
//                       text: sport?.name ?? " ",
//                       component: "text",
//                     });
//                   }}
//                 />
//               ))}
//             </DropDownSurface>
//           );
//         }}
//       />
//     </Skeleton>
//   );
// };

// // @ts-ignore
// SportsTabsMobile.propTypes = {
//   ...basePropTypes,
//   skeleton: PropTypes.bool,
//   variant: PropTypes.oneOf(["bottom-bordered", "borderless"]),
//   className: PropTypes.string,
// };

// @ts-check

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

  /** @type {Record<string, unknown>} */
  const initialState = {
    opened: null,
    selectedSport: null, // <-- Track selected sport
  };
  const [state, setState] = React.useState(initialState);

  const activeSport = state.selectedSport
    ? sports.find(sport => sport.id === state.selectedSport)
    : null;

  return (
    // @ts-ignore
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
              // @ts-ignore
              ref={input.ref}
              sectionName={sectionName}
              variant={variant}
              renderIcon={props =>
                activeSport ? (
                  <div
                    key={activeSport.id ?? activeSport.name}
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <Icon style={props?.style} icon={activeSport.icon} />
                  </div>
                ) : null
              }
              name={activeSport ? activeSport.name : "Choose a sport"}
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
        renderContent={input => {
          return (
            <DropDownSurface style={{ width: input.referenceWidth }}>
              {sports.map(sport => (
                <SportsTabDropDownItem
                  key={sport.id ?? sport.name}
                  label={sport.name}
                  active={state.selectedSport === sport.id}
                  onClick={() => {
                    setState(currentState => ({
                      ...currentState,
                      opened: null,
                      selectedSport: sport.id, // <-- Save selected sport
                    }));
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
          );
        }}
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
