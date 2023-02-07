// Global style variables
export const background = {
  app: "#E5E5E5",
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

export const colorNeutral = {
  // Palette
  black: "#000D42", // Neutral/Black
  darkBlack: "#021563", // Neutral/D_Dark blue
  neutralGrey: "#2B355B", // Neutral/Grey dark
  lightGrey: "##667B90", // Neutral/L_Grey
  greyBlue: "#ABBED1", // Neutral/Grey-blue
  silver: "#F5F7FA", // Neutral/Silver
};

export const colorPrimary = {
  darkBlue: "#3910AA",
  navy: "#320F93",
  midBlue: "#3D10BA",
  azure: "#7045E9",
  skyPink: "#D4D7F3",
  lightBlue: "#EEF5FC",
};

export const colorSuccess = {
  darkGreen: "#115B43",
  forest: "#1B6E53",
  midGreen: "#009262",
  herbal: "#32C997",
  mint: "#84DFC1",
  lightGreen: "#F1FBF8",
};

export const colorWarning = {
  darkYellow: "#E48900",
  lemon: "#FFA826",
  midYellow: "#FFB240",
  straw: "#FFB240",
  sand: "#FFD596",
  lightYellow: "#FFF8EC",
};

export const colorDanger = {
  darkRed: "#C33025",
  scarlet: "#E01507",
  midRed: "#E02B1D",
  radpberry: "#FF5A4F",
  rubicund: "#F0857D",
  lightRed: "#FFF1F0",
};

// !example with scss
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
