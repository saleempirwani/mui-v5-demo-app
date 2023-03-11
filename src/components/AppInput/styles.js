import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { FONTS } from "../../assets/fonts";

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100%",
  border: "1px solid #333",
  borderRadius: "5px",
  input: {
    fontSize: "14px",
    fontFamily: FONTS.primaryItalic,
    "&:focus": {
      outline: 0,
      boxShadow: "none",
      border: 0,
    },
  },
  [theme.breakpoints.down("md")]: {
    backgroundColor: "orange",
  },
}));
