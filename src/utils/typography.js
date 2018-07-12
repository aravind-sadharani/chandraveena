import Typography from "typography"

const chandraveenaTheme = {
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  headerFontFamily: [
    "Gentium Book Basic",
    "serif",
  ],
  bodyFontFamily: [
    "Noto Serif",
    "serif",
  ],
  googleFonts: [
    {
      name: "Sansita",
      styles: [
        "400",
        "700",
      ],
    },
    {
      name: "Gentium Book Basic",
      styles: [
        "400",
        "700",
      ],
    },
    {
      name: "Noto Serif",
      styles: [
        "400",
      ]
    },
  ],
  overrideStyles: () => ({
    h1: {
      fontFamily: ["Sansita"].join(","),
      fontWeight: "700",
    },
    blockquote: {
      fontFamily: ["Sansita"].join(","),
      fontWeight: "400",
      fontSize: "1.4em",
    },
  })
}

const typography = new Typography(chandraveenaTheme)

export default typography
