import { createTheme } from "@mui/material/styles";
import { DARK_MODE } from "../constant";
import OpenSans from "../assets/fonts/OpenSans-Regular.ttf";
import OpenSansBold from "../assets/fonts/OpenSans-Bold.ttf";
import OpenSansMedium from "../assets/fonts/OpenSans-Medium.ttf";
import OpenSansItalic from "../assets/fonts/OpenSans-Italic.ttf";
import { FONTS } from "../assets/fonts";

const isDarkMode = (mode = true) =>
  mode ? { primary: "#1f2128" } : { primary: "#fff" };

const theme = createTheme({
  palette: {
    custom: {
      accent: "#6c5dd3",
      ...(DARK_MODE
        ? { primary: "#1f2128" }
        : {
            primary: "#fff",
          }),
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: ${FONTS.primary};
          src: url(${OpenSans});
        }

        @font-face {
          font-family: ${FONTS.primaryBold};
          src: url(${OpenSansBold});
        }

        @font-face {
          font-family: ${FONTS.primaryMedium};
          src: url(${OpenSansMedium});
        }

        @font-face {
          font-family: ${FONTS.primaryItalic};
          src: url(${OpenSansItalic});
        }
        ,
        ,
      `,
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          backgroundColor: "#6c5dd3",
          fontSize: "17px",
          textTransform: "capitalize",
          borderRadius: "19px",
          minHeight: "69px",
          minWidth: "150px",
          fontFamily: FONTS.primaryBold,
          boxShadow: "none",
          transition: "all .3s ease",
          "&:hover": {
            backgroundColor: "#6c5dd3",
            boxShadow: "none",
            transform: "scale(1.05)",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "lightgreen",
        },
      },
    },
  },
});

export default theme;
