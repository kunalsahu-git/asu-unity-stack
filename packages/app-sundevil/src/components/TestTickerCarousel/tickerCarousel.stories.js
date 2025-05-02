// @ts-check
import React from "react";

// import { Sport } from "../Sport";
import TickerCarousel from "./TickerCarousel";

// /** @type {import("../Sport").Props} */
// const props = {
//   // width: 970,
//   // height: 66,
//   storage: window.localStorage,
//   storageKey: "sun-devils-ads",
//   id: "root-ad",
//   target: "_blank",
//   // sports: [
//   //   {
//   //     name: "All Sports",
//   //     icon: "fas fa-sync-alt",
//   //     position: 1,
//   //     id: ALL_ID,
//   //   },
//   //   {
//   //     name: "Football",
//   //     icon: "fas fa-football-ball",
//   //     position: 2,
//   //     id: "football",
//   //   },
//   //   {
//   //     name: "M. Basketball",
//   //     icon: "fas fa-basketball-ball",
//   //     position: 3,
//   //     id: "basketball",
//   //   },
//   //   {
//   //     name: "Hockey",
//   //     icon: "fas fa-hockey-puck",
//   //     position: 4,
//   //     id: "hockey",
//   //   },
//   //   {
//   //     name: "Baseball",
//   //     icon: "fas fa-baseball-ball",
//   //     position: 5,
//   //     id: "baseball",
//   //   },
//   //   {
//   //     name: "W. Basketball",
//   //     icon: "fas fa-basketball-ball",
//   //     id: "w-basketball",
//   //     position: 6,
//   //   },
//   //   {
//   //     name: "Softball",
//   //     icon: "fas fa-futbol",
//   //     id: "softball",
//   //     position: 7,
//   //   },
//   //   {
//   //     name: "Soccer",
//   //     icon: "fas fa-baseball-ball",
//   //     id: "soccer",
//   //     position: 8,
//   //   },
//   //   {
//   //     name: "Swimming",
//   //     icon: "fas fa-swimmer",
//   //     id: "swimming",
//   //     position: 9,
//   //   },
//   //   {
//   //     name: "Golf",
//   //     icon: "fas fa-golf-ball",
//   //     id: "golf",
//   //     position: 10,
//   //   },
//   //   {
//   //     name: "Tennis",
//   //     icon: "fas fa-table-tennis",
//   //     id: "tennis",
//   //     position: 11,
//   //   },
//   //   {
//   //     name: "W. Lacrosse",
//   //     icon: "fas fa-lacrosse",
//   //     id: "w-lacrosse",
//   //     position: 12,
//   //   },
//   // ],
// };

export default {
  title: "Ticker Carousel",
  component: <TickerCarousel />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <TickerCarousel />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Ticket Carousel",
  // sports: [
  //   {
  //     name: "All Sports",
  //     icon: "fas fa-sync-alt",
  //     position: 1,
  //     id: "football",
  //   },
  //   {
  //     name: "Football",
  //     icon: "fas fa-football-ball",
  //     position: 2,
  //     id: "football",
  //   },
  //   {
  //     name: "M. Basketball",
  //     icon: "fas fa-basketball-ball",
  //     position: 3,
  //     id: "basketball",
  //   },
  //   {
  //     name: "Hockey",
  //     icon: "fas fa-hockey-puck",
  //     position: 4,
  //     id: "hockey",
  //   },
  //   {
  //     name: "Baseball",
  //     icon: "fas fa-baseball-ball",
  //     position: 5,
  //     id: "baseball",
  //   },
  //   {
  //     name: "W. Basketball",
  //     icon: "fas fa-basketball-ball",
  //     id: "w-basketball",
  //     position: 6,
  //   },
  //   {
  //     name: "Softball",
  //     icon: "fas fa-futbol",
  //     id: "softball",
  //     position: 7,
  //   },
  //   {
  //     name: "Soccer",
  //     icon: "fas fa-baseball-ball",
  //     id: "soccer",
  //     position: 8,
  //   },
  //   {
  //     name: "Swimming",
  //     icon: "fas fa-swimmer",
  //     id: "swimming",
  //     position: 9,
  //   },
  //   {
  //     name: "Golf",
  //     icon: "fas fa-golf-ball",
  //     id: "golf",
  //     position: 10,
  //   },
  //   {
  //     name: "Tennis",
  //     icon: "fas fa-table-tennis",
  //     id: "tennis",
  //     position: 11,
  //   },
  //   {
  //     name: "W. Lacrosse",
  //     icon: "fas fa-lacrosse",
  //     id: "w-lacrosse",
  //     position: 12,
  //   },
  // ],
}
