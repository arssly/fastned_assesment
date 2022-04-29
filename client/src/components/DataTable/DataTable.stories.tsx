import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DataTable } from "./DataTable";

export default {
  component: DataTable,
  title: "data table",
  argTypes: {},
} as ComponentMeta<typeof DataTable>;

export const ConfigurableDataTable: ComponentStory<typeof DataTable> = (
  args
) => {
  return <DataTable {...args} />;
};

const data = [
  ["value1", "value2", "value3"],
  ["secondRow1", "secondRow2", "secondRow3"],
  ["secondRow1", "secondRow2", "secondRow3"],
  [
    "ssecondRow1s econdRow1secondRo w1secondRow1secondRow1secondRow1secondRow1secondRow1secondRow1econdRow1",
    "secondRow2",
    "secondRow3",
  ],
  ["secondRow1", "secondRow2", "secondRow3"],
];

ConfigurableDataTable.args = {
  caption: "smaple data table",
  headers: ["first one", "second Once", "Third One"],
  data,
};
