// @ts-check
import React, { useEffect, useLayoutEffect, useRef } from "react";

import { throttleFn } from "../../../shared";
import trackReactComponent from "../../../shared/services/componentDatalayer";
import { HeaderMain } from "./components/HeaderMain";
import { AppContextProvider } from "./core/context/app-context";
import { HeaderPropTypes } from "./core/models/app-prop-types";
import { tryAddActivePage } from "./core/utils/helpers/active-page";
import { Header, HeaderDiv } from "./header.styles";
import { TickerSection } from "../../app-sundevil/src/components/TickerSection";
import TickerMobileView from "../../app-sundevil/src/components/TickerSection/TickerMobileView";
import { useBreakpoint } from "../../app-sundevil/src/utils/use-breakpoint";
import { APP_CONFIG } from "../../app-sundevil/src/config";
/**
 * @typedef {import("./core/models/types").HeaderProps} HeaderProps
 */

/**
 *
 * @param {{headerRef: React.MutableRefObject<HTMLDivElement | null>, scrollTarget: HTMLElement | Window}} input
 */
function useScrollCollapse({ headerRef, scrollTarget = window }) {
  useLayoutEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) {
        return;
      }

      if (!scrollTarget) {
        return;
      }

      const scrollYPosition =
        scrollTarget instanceof Window
          ? scrollTarget.scrollY
          : scrollTarget.scrollTop;

      if (scrollYPosition > 0) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    onScroll();

    const onWindowScrollThrottled = throttleFn(onScroll, 300);

    scrollTarget?.addEventListener("scroll", onWindowScrollThrottled, {
      passive: true,
    });
    return () => {
      scrollTarget.removeEventListener("scroll", onWindowScrollThrottled);
    };
  }, [headerRef, scrollTarget]);
}

/**
 *
 * @param {HeaderProps} props
 * @returns {JSX.Element}
 */

const ASUHeader = ({
  isPartner,
  navTree: rawNavTree,
  title,
  baseUrl,
  parentOrg,
  parentOrgUrl,
  partnerLogo,
  logo,
  sponsorLogo,
  loggedIn,
  userName,
  loginLink,
  onLoginClick,
  logoutLink,
  onLogoutClick,
  buttons,
  breakpoint,
  animateTitle,
  expandOnHover,
  mobileNavTree: rawMobileNavTree,
  searchUrl,
  site,
  renderDiv = "false",
  universalNavbar,
  mobile,
  stickyPortalEntranceId,
  renderTop,
  style = {},
  scrollTarget,
  tickerAPI,
}) => {
  const navTree = tryAddActivePage(rawNavTree);
  const mobileNavTree = tryAddActivePage(rawMobileNavTree);
  const isLargeScreen = !useBreakpoint(APP_CONFIG.breakpointDesktopSmall); // > 1024px
  /**
   * @type {React.MutableRefObject<HTMLDivElement | null>}
   */
  const headerRef = useRef(null);
  // const tickerProps = {
  //   tickerAPI: "https://hokiesports.com/website-api/schedule-events?filter%5Bpast%5D=true&sort%5B0%5D=datetime&include%5B0%5D=conference.image&include%5B1%5D=opponent.customLogo&include%5B2%5D=opponent.officialLogo&include%5B3%5D=opponentLogo&include%5B4%5D=postEventArticle.image&include%5B5%5D=preEventArticle.image&include%5B6%5D=presentedBy&include%5B7%5D=schedule.sport&include%5B8%5D=scheduleEventLinks.icon&include%5B9%5D=scheduleEventResult&include%5B10%5D=secondOpponent.customLogo&include%5B11%5D=secondOpponent.officialLogo&include%5B12%5D=secondOpponentLogo&include%5B13%5D=tournament&per_page=100&page=1"
  // }

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "component-header",
        component: "Component Header",
        type: "NA",
        configuration: {
          site,
          isPartner,
          searchUrl,
          navTree,
          parentOrg,
          buttons,
          mobileNavTree,
        },
      });
    }
  }, []);

  useScrollCollapse({
    headerRef,
    scrollTarget: scrollTarget || window,
  });

  const renderHeader = () => {
    // Determine the wrapper based on renderDiv value
    const Wrapper = renderDiv === "true" ? HeaderDiv : Header;

    return (
      <Wrapper
        style={style}
        id="asuHeader"
        ref={headerRef}
        // @ts-ignore
        breakpoint={breakpoint}
      >
        <HeaderMain />
        {typeof stickyPortalEntranceId === "string" &&
          stickyPortalEntranceId.trim().length > 0 && (
            <div
              style={{
                width: "100%",
              }}
              id={stickyPortalEntranceId}
            />
          )}
        {isLargeScreen ? (
          <TickerSection tickerAPI={tickerAPI} />
        ) : (
          <TickerMobileView tickerAPI={tickerAPI} />
        )}
      </Wrapper>
    );
  };

  return (
    <AppContextProvider
      initialValue={{
        isPartner,
        navTree,
        title,
        baseUrl,
        parentOrg,
        parentOrgUrl,
        // @ts-ignore
        partnerLogo,
        // @ts-ignore
        logo,
        // @ts-ignore
        sponsorLogo,
        loggedIn,
        userName,
        loginLink,
        // @ts-ignore
        onLoginClick,
        logoutLink,
        // @ts-ignore
        onLogoutClick,
        // @ts-ignore
        buttons,
        breakpoint,
        animateTitle,
        expandOnHover,
        mobileNavTree,
        hasNavigation: !!navTree?.length || !!mobileNavTree?.length,
        searchUrl,
        site,
        // @ts-ignore
        universalNavbar,
        // @ts-ignore
        mobile,
        // @ts-ignore
        renderTop,
        style,
      }}
    >
      {renderHeader()}
    </AppContextProvider>
  );
};

ASUHeader.propTypes = { ...HeaderPropTypes };

ASUHeader.defaultProps = {
  isPartner: false,
  baseUrl: "/",
  breakpoint: "Xl",
  expandOnHover: false,
};

export { ASUHeader };
