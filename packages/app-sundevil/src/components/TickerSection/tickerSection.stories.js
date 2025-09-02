// @ts-check
import React from "react";
// import { TickerMobileView } from "./TickerMobileView";
import { TickerSection } from "./TickerSection";

const props = {
  tickerAPI:
    "https://4week-web-sda.ws.asu.edu/jsonapi/node/past_games_new?sort=-field_date_time",
};
export default {
  title: "Ticker Section",
  // component: TickerMobileView,
  component: TickerSection,
};

const Template = () => {
  // return <TickerMobileView {...props} />;
  return <TickerSection {...props} />;
};

export const Default = Template.bind({});
Default.args = props;
