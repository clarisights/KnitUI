import InterThin from "../../../assets/fonts/Inter-Thin.woff"
import InterLight from "../../../assets/fonts/Inter-Light.woff"
import InterRegular from "../../../assets/fonts/Inter-Regular.woff"
import InterMedium from "../../../assets/fonts/Inter-Medium.woff"
import InterBold from "../../../assets/fonts/Inter-Bold.woff"
import InterBlack from "../../../assets/fonts/Inter-Black.woff"

export const fontsDefinition = `
@font-face {
    font-family: "InterThin";
    src: url(${InterThin}); /*URL to font*/
  }
  
  @font-face {
    font-family: "InterLight";
    src: url(${InterLight});
  }

  @font-face {
    font-family: "InterRegular";
    src: url(${InterRegular});
  }

  @font-face {
    font-family: "InterMedium";
    src: url(${InterMedium});
  }

  @font-face {
    font-family: "InterBold";
    src: url(${InterBold});
  }

  @font-face {
    font-family: "InterBlack";
    src: url(${InterBlack});
  }
`

export const fontsSource = {
  InterThin,
  InterLight,
  InterRegular,
  InterMedium,
  InterBold,
  InterBlack
}
