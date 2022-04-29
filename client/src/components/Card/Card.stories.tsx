import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";

export default {
  component: Card,
  title: "card",
  argTypes: {},
} as ComponentMeta<typeof Card>;

export const ConfigurableCard: ComponentStory<typeof Card> = (args) => {
  return (
    <Card {...args}>
      this is a sample card. you can put all your components here
    </Card>
  );
};

ConfigurableCard.args = {
  styles: {
    width: "300px",
    height: "200px",
    display: "flex",
    padding: "5%",
    boxSizing: "border-box",
  },
};
