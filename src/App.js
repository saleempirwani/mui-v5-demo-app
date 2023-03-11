import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import AppButton from "./components/AppButton";
import theme from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppButton />
    </ThemeProvider>
  );
}
