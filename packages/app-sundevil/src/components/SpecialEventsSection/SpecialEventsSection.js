import PropTypes from "prop-types";
import React, { useMemo, useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentDimensions } from "../../utils/use-element-content-dimensions";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import {
  buildSpecialEventsDataSource,
  specialEventsDataSourcePropTypes,
} from "./special-events-data-source/special-events-data-source-impl";
import { SpecialEventCardCarousel } from "./SpecialEventCardCarousel";
import { SpecialEventsDataSourceProvider } from "./SpecialEventsDataSourceContext";
import { useSpecialEventsLoader } from "./use-special-events-loader";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 52px;
  position: relative;
`;

const DESKTOP_CARD_WIDTH = 588;

const SpecialEventsSectionInner = ({ sectionHeader }) => {
  const { isLoading, specialEvents } = useSpecialEventsLoader({
    offset: 0,
    limit: Infinity,
  });

  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementContentXPosition(sectionHeaderRef);

  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const sectionHeaderDimensions = useElementContentDimensions(sectionHeaderRef);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const cardWidth = isMobile
    ? sectionHeaderDimensions.width
    : DESKTOP_CARD_WIDTH;

  const sectionHeaderProps = mapSectionHeaderProps(sectionHeader);
  const sectionName = sectionHeaderProps?.sectionName ?? "";
  const checkIfSpecialEvents = specialEvents.length > 0;

  useEffect(() => {
    // Check layout readiness by watching the 'left' position
    if (sectionHeaderPosition.left > 0) {
      setIsLayoutReady(true);
    } else {
      setIsLayoutReady(false);
    }
  }, [sectionHeaderPosition]);

  return (
    <>
      {checkIfSpecialEvents && (
        <Root>
          <SectionHeader {...sectionHeaderProps} ref={sectionHeaderRef} />
          {isLayoutReady && ( // Only render carousel once position is measured
            <SpecialEventCardCarousel
              cards={specialEvents}
              skeleton={isLoading}
              cardWidth={cardWidth}
              slidesOffsetBefore={sectionHeaderPosition.left}
              sectionName={sectionName}
            />
          )}
        </Root>
      )}
    </>
  );
};

SpecialEventsSectionInner.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes),
  cardCarousel: PropTypes.shape(SpecialEventCardCarousel.propTypes),
  specialEventsDataSource: specialEventsDataSourcePropTypes,
};

export const SpecialEventsSection = ({
  specialEventsDataSource: specialEventsDataSourceConfig,
  ...props
}) => {
  const specialEventsDataSourceInstance = useMemo(
    () => buildSpecialEventsDataSource(specialEventsDataSourceConfig),
    [specialEventsDataSourceConfig]
  );

  return (
    <SpecialEventsDataSourceProvider
      specialEventsDataSource={specialEventsDataSourceInstance}
    >
      <SpecialEventsSectionInner {...props} />
    </SpecialEventsDataSourceProvider>
  );
};

SpecialEventsSection.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes),
  cardCarousel: PropTypes.shape(SpecialEventCardCarousel.propTypes),
  specialEventsDataSource: specialEventsDataSourcePropTypes,
};