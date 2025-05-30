// @ts-check
import React from "react";
import TickerSection from "./TickerSection.js";

const props = {
  tickerAPI: "https://webfix-web-sda.ws.asu.edu/jsonapi/node/past_games_new?sort=-field_date_time"
}
export default {
  title: "Ticker Section",
  component: <TickerSection />,
};

const Template = () => {
  return <TickerSection {...props} />;
};

export const Default = Template.bind({});
Default.args = props;
