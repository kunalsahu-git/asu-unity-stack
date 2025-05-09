// @ts-check
import React from "react";
import TickerSection from "./TickerSection.js";

const props = {
  tickerAPI: "https://hokiesports.com/website-api/schedule-events?filter%5Bpast%5D=true&sort%5B0%5D=datetime&include%5B0%5D=conference.image&include%5B1%5D=opponent.customLogo&include%5B2%5D=opponent.officialLogo&include%5B3%5D=opponentLogo&include%5B4%5D=postEventArticle.image&include%5B5%5D=preEventArticle.image&include%5B6%5D=presentedBy&include%5B7%5D=schedule.sport&include%5B8%5D=scheduleEventLinks.icon&include%5B9%5D=scheduleEventResult&include%5B10%5D=secondOpponent.customLogo&include%5B11%5D=secondOpponent.officialLogo&include%5B12%5D=secondOpponentLogo&include%5B13%5D=tournament&per_page=100&page=1"
}
export default {
  title: "Ticker Carousel",
  component: <TickerSection />,
};

const Template = () => {
  return <TickerSection {...props} />;
};

export const Default = Template.bind({});
Default.args = props;
