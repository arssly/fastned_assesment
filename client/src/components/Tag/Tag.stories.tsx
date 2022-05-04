import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tag, TagStatus } from "./Tag";

export default {
  title: "Tag",
  argTypes: {
    status: {
      control: { type: "select" },
      options: Object.keys(TagStatus),
    },
  },
} as ComponentMeta<typeof Tag>;

export const ConfigurableTag: ComponentStory<typeof Tag> = (args) => {
  const { status, children } = args;

  return <Tag status={status}>{children}</Tag>;
};

ConfigurableTag.args = {
  children: "some value",
  status: TagStatus.green,
};
