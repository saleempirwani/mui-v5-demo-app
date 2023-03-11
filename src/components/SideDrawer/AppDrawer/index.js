import { Drawer, styled } from "@mui/material";
import { DRAWER_WIDTH } from "../../../constant";

export const AppDrawer = styled(Drawer)(({ theme, isDarkMode }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,

  "& .MuiDrawer-paper": {
    width: DRAWER_WIDTH,
    boxSizing: "border-box",
    backgroundColor: isDarkMode ? theme.palette.custom.primary : "#fff",
  },
}));
