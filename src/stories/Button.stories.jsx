import React from "react";
import { Button } from "./Button";
import { colorNeutral } from "../components/shared/styles";
import { colors } from "../components/shared/styles";

export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  backgroundColor: colors.main.scss,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
  backgroundColor: colors.main.hex,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Red = Template.bind({});
Red.args = {
  size: "large",
  backgroundColor: colorNeutral.darkBlack,
  label: "Button",
};

Red.argTypes = {
  backgroundColor: {
    control: "inline-radio",
    options: [colorNeutral.darkBlack, "green", "blue"],
  },
};

// export const Practice = Template.bind({});
// Practice.args = {
//   size: "large",
//   backgroundColor: Red,
//   label: "Button",
// };
