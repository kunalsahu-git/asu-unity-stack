// @ts-check
import React from "react";
import { TickerSection } from "./TickerSection";
// import { TickerMobileView } from "./TickerMobileView";

const props = {
  tickerAPI:
    "https://4week-web-sda.ws.asu.edu/jsonapi/node/past_games_new?sort=-field_date_time",
};
export default {
  title: "Ticker Section",
  component: TickerSection,
  // component: <TickerMobileView />,
};

const Template = () => {
  return <TickerSection {...props} />;
  // return <TickerMobileView {...props} />;
};

export const Default = Template.bind({});
Default.args = props;
