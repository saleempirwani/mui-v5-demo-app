import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { DRAWER_WIDTH } from "../../../constant";

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, isDarkMode }) => ({
  ...(isDarkMode
    ? {
        backgroundColor: "#333",
        color: "#fff",
      }
    : {
        backgroundColor: "pink",
        color: "#333",
      }),

  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
