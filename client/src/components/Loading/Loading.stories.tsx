import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loading } from "./Loading";

export default {
  title: "Loading",
} as ComponentMeta<typeof Loading>;

export const ConfigurableHeading: ComponentStory<typeof Loading> = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        textAlign: "center",
      }}
    >
      <Loading />
    </div>
  );
};

ConfigurableHeading.args = {};
