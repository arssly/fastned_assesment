import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonTheme } from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    onClick: { action: "clicked" },
    theme: {
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const ConfigurableButton: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

ConfigurableButton.args = {
  theme: ButtonTheme.PRIMARY,
  title: "some value",
  disabled: false,
};
