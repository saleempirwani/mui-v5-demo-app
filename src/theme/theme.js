import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
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
          fontFamily: "monospace",
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
  },
});

export default theme;
