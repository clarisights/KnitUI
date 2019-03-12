const InterThin = require("../assets/fonts/Inter-Thin-BETA.woff")
const InterLight = require("../assets/fonts/Inter-Light-BETA.woff")
const InterRegular = require("../assets/fonts/Inter-Regular.woff")
const InterMedium = require("../assets/fonts/Inter-Medium.woff")
const InterBold = require("../assets/fonts/Inter-Bold.woff")
const InterBlack = require("../assets/fonts/Inter-Black.woff")

export const fontsDefinition = `
  @font-face {
    font-family: "InterThin";
    src: url(${InterThin}) format('woff'); /*URL to font*/
  }

  @font-face {
    font-family: "InterLight";
    src: url(${InterLight}) format('woff');
  }

  @font-face {
    font-family: "InterRegular";
    src: url(${InterRegular}) format('woff');
  }

  @font-face {
    font-family: "InterMedium";
    src: url(${InterMedium}) format('woff');
  }

  @font-face {
    font-family: "InterBold";
    src: url(${InterBold}) format('woff');
  }

  @font-face {
    font-family: "InterBlack";
    src: url(${InterBlack}) format('woff');
  }
`

export const fontsSource = {
  InterThin,
  InterLight,
  InterRegular,
  InterMedium,
  InterBold,
  InterBlack,
}
