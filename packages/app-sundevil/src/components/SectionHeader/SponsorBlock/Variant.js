/* eslint-disable react/prop-types */
// @ts-check
import React, { forwardRef } from "react";
import { VariantGoogleAd } from "./VariantGoogleAd";

/**
 * @type {React.FC<import("../props").SectionHeaderProps >}
 */
export const Variant = forwardRef((props, ref) => {
    return (
        <VariantGoogleAd
        {...props}
        // @ts-ignore
        ref={ref}
      />
    );
});
