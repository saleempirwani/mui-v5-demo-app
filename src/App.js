import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import AppButton from "./components/AppButton";
import AppInput from "./components/AppInput";
import theme from "./theme/theme";
import SideDrawer from "./components/SideDrawer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SideDrawer />
    </ThemeProvider>
  );
}
