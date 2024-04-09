import { createStyles } from "@mantine/core";
import { COLORS } from "../../../assets/colors/colors";

export const authFormStyles = createStyles({
  heading: {
    fontSize: 28,
    fontWeight: 600,
    margin: 0,
    color: COLORS.gray,
    marginBottom: 12,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:650px)": {
      fontSize: 24,
    },
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    margin: 0,
    color: COLORS.gray,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:650px)": {
      fontSize: 14,
    },
  },
  textCenter: {
    textAlign: "center",
  },
  accountsContainer: {
    margin: "20px auto",
    textAlign: "center",
  },
  signUpText: {
    fontSize: 14,
    fontWeight: 400,
    color: COLORS.grannySmith,
    display: "block",
  },
  linkText: {
    textDecoration: "none",
  },
  mediumText: {
    fontSize: 12,
    fontWeight: 400,
    color: COLORS.grannySmith,
    display: "block",
    marginLeft: 10,
  },
  checkBoxContainer: {
    display: "flex",
  },
});
