import React from "react";
import CustomTable from "./CustomTable";

export default {
  title: "CustomTable",
  component: CustomTable,
};

const Template = args => <CustomTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Sparky's Den",
  description:
    "<div class='d-flex flex-column'><div class='mb-3' style='font-size: 20px;'>This show is live on <b>Arizona Sports 98.7FM</b> and then produced for TV on <b>Friday nights* on Fox 10</b> and <b>Fox 10 Extra</b>.</div><div class='mb-3' style='font-size: 16px;' >*Show times may vary</div><a class='text-gold' href=''>Go to Football schedule</a></div>",
  tableHeaderData: [
    { tableTitle: "Show #" },
    { tableTitle: "Date" },
    { tableTitle: "Upcoming Opponent" },
    { tableTitle: "Location" },
  ],
  footerText:
    "Gold text represents a change to the regular Wednesday schedule and location.",
  tablesData: [
    {
      textColor: "text-gold",
      tableText: {
        tableData1: "Wednesday, Aug. 27",
        tableData2: "vs. Northern Arizona",
        tableData3: "Trophy in Chaler",
      },
    },
    {
      textColor: "text-white",
      tableText: {
        tableData1: "Wednesday, Sept. 3",
        tableData2: "at Mississippi State",
        tableData3: "Mountain America Stadiumr",
      },
    },
    {
      textColor: "text-white",
      tableText: {
        tableData1: "Wednesday, Sept. 10",
        tableData2: "vs. Texas State",
        tableData3: "Trophy in Chaler",
      },
    },
    {
      textColor: "text-gold",
      tableText: {
        tableData1: "Wednesday, Sept. 10",
        tableData2: "vs. Texas State",
        tableData3: "Trophy in Chaler",
      },
    },
    {
      textColor: "text-white",
      tableText: {
        tableData1: "Wednesday, Sept. 3",
        tableData2: "at Mississippi State",
        tableData3: "Mountain America Stadiumr",
      },
    },
    {
      textColor: "text-white",
      tableText: {
        tableData1: "Wednesday, Sept. 3",
        tableData2: "at Mississippi State",
        tableData3: "Mountain America Stadiumr",
      },
    },
    {
      textColor: "text-white",
      tableText: {
        tableData1: "Wednesday, Sept. 3",
        tableData2: "at Mississippi State",
        tableData3: "Mountain America Stadiumr",
      },
    },
    {
      textColor: "text-white",
      tableText: {
        tableData1: "Wednesday, Sept. 3",
        tableData2: "at Mississippi State",
        tableData3: "Mountain America Stadiumr",
      },
    },
    {
      textColor: "text-gold",
      tableText: {
        tableData1: "Wednesday, Sept. 3",
        tableData2: "at Mississippi State",
        tableData3: "Mountain America Stadiumr",
      },
    },
    {
      textColor: "text-white",
      tableText: {
        tableData1: "Wednesday, Sept. 3",
        tableData2: "at Mississippi State",
        tableData3: "Mountain America Stadiumr",
      },
    },
  ],
};
