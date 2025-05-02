/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

import { GoogleAd } from "../../../google-ads/GoogleAd";

/**
 * @type {React.FC<import("../props").SectionHeaderProps >}
 */
export const VariantGoogleAd = forwardRef((props, ref) => {
  return (
    <GoogleAd
      ref={ref}
      googleAdBody={props?.sponsorBlock?.googleAdBody}
      googleAdHead={props?.sponsorBlock?.googleAdHead}
    />
  );
});
