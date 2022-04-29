import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as Icons from "../SvgIcon";

export default {
  component: Icons.AddIcon,
  title: "Icons",
} as ComponentMeta<typeof Icons.AddIcon>;

export const ConfigurableIcons: ComponentStory<typeof Icons.AddIcon> = (
  args
) => {
  return <Icons.AddIcon {...args} />;
};

ConfigurableIcons.args = {
  width: "24px",
  height: "24px",
};

export const AllIcons = () => {
  return (
    <div style={{ display: "flex" }}>
      {Object.values(Icons).map((Icon, i) => (
        <Icon width={48} height={48} key={i} />
      ))}
    </div>
  );
};
