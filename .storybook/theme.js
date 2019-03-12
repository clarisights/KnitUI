import { create } from "@storybook/theming";

export default create({
  // Is this a 'light' or 'dark' theme?
  base: "dark",

  // Color palette
  colorPrimary: "red", // primary color
  colorSecondary: "#0088FF", // secondary color

  // UI
  appBg: "#262626",
  appContentBg: "white",
  appBorderColor: "rgba(0,0,0,.1)",
  appBorderRadius: 4,

  // Fonts
  fontBase: '"Inter", "Helvetica", Arial, sans-serif',
  fontCode: "Monaco, monospace",

  // Text colors
  textColor: "#b1b1b1",
  textInverseColor: "#333333"
});
