// import { css } from "@storybook/theming";
// import { rgba } from "polished";

// Global style variables
export const background = {
  app: "#E5E5E5",
  inputFormDefault: "#EEF5FC", // primary/M_Blue
  inputFormHover: "#EEF5FC", // Primary/L_Blue
  inputFormFocus: "#E5E5E5",
  inputFormLoading: "#EEF5FC", // Primary/L_Blue
  warning: "#FFF5CF",
  calmBlue: "#E3F3FF",
};

export const formColor = {
  default: "#EEF5FC", // primary/M_Blue
  hover: "#EEF5FC", // Primary/L_Blue
  focus: "#E5E5E5",
  typing: "#E5E5E5",
  loading: "#EEF5FC", // Primary/L_Blue
  warning: "#FFF8EC", // Warning/L_Yellow
  error: "#FFF1F0", // Danger/L_Red
};

export const color = {
  // Palette
  primary: "#FF4785", // Coral
  secondary: "#029CFD", // Ocean
  tertiary: "#E3E6E8", // Light grey

  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",
  red: "#ff4400",

  // Calm
  bluelight: "#E3F3FF", // rgba($color.blue, 12%)
  bluelighter: "#F5FBFF",

  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F7FAFC",
  light: "#EEF3F6",
  mediumlight: "#ECF4F9",
  medium: "#D9E8F2",
  mediumdark: "#73828C",
  dark: "#5C6870",
  darker: "#454E54",
  darkest: "#2E3438",
  tr10: "rgba(0, 0, 0, 0.1)",
  tr5: "rgba(0, 0, 0, 0.05)",

  border: "hsla(203, 50%, 30%, 0.15)",

  // Status
  neutral: "#000D42",
  primary: "#3910AA",
  negative: "#D43900",
  warning: "#A15C20",
  selected: "#0271B6",
};

export const colors = {
  main: {
    name: "main",
    hex: "#007DBC", // previously 0A6EB4
    scss: "$color__main",
    type: "communications",
  },
  "sequential-default-07": {
    name: "sequential-default-07",
    hex: "#9DEAFF",
    scss: "$color__sequential-default-07",
    type: "sequential-default",
    shortDescription: "sequential default 07",
  },
};

// Typography styles
// export const headers = {
//   hero1: css({
//     fontSize: typography.size.l3,
//     fontWeight: typography.weight.bold,
//   })}

//   export const breakpoint = 600;
//   export const pageMargin = 5.55555;

//   export const pageMargins = css`
//     padding: 0 ${spacing.padding.medium}px;
//     @media (min-width: ${breakpoint * 1}px) {
//       margin: 0 ${pageMargin * 1}%;
//     }
//     @media (min-width: ${breakpoint * 2}px) {
//       margin: 0 ${pageMargin * 2}%;
//     }
//     @media (min-width: ${breakpoint * 3}px) {
//       margin: 0 ${pageMargin * 3}%;
//     }
//     @media (min-width: ${breakpoint * 4}px) {
//       margin: 0 ${pageMargin * 4}%;
//     }
//   `;
