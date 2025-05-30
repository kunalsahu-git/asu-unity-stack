// @ts-check
import React from "react";
import useDeviceType from "./useDeviceType";

import { ASUHeader } from "../../../../component-header/src";
import { headerPropTypes } from "./props";
import { mapProps } from "./props-map";

export const SunDevilsHeader = props => {
  const deviceType = useDeviceType();
  const mappedProps = { ...mapProps(props, deviceType) };
  return <ASUHeader {...mappedProps} />;
};
SunDevilsHeader.propTypes = headerPropTypes;
