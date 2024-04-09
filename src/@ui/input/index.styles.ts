import { createStyles } from "@mantine/core";
import { COLORS } from "../../assets/colors/colors";

export const fInputStyles = createStyles({
  label: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    color: COLORS.aliceBlueDark,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.aliceBlue,
    borderRadius: 6,
    padding: "6px 16px",
    height: "auto !important",
    fontSize: 15,
    fontWeight: 500,
    color: COLORS.black,
    fontFamily: "'Inter', sans-serif",
    backgroundColor: COLORS.aliceBlue,
    "&:focus": {
      borderColor: COLORS.aliceBlue,
    },
    "&::placeholder": {
      color: COLORS.grayDark,
      fontSize: 15,
      fontWeight: 500,
      fontFamily: "'Inter', sans-serif",
      letterSpacing: "0.4px",
    },
  },
});
