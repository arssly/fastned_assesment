import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading, HeadingTypes } from "./Heading";

export default {
  title: "Heading",
  argTypes: {
    type: {
      control: { type: "select" },
      options: HeadingTypes,
    },
  },
} as ComponentMeta<typeof Heading>;

export const ConfigurableHeading: ComponentStory<typeof Heading> = (args) => {
  const { type, children } = args;

  return <Heading type={type}>{children}</Heading>;
};

ConfigurableHeading.args = {
  children: "some value",
  type: HeadingTypes.h1,
};
