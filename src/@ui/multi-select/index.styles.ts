import { createStyles, getStylesRef } from "@mantine/core";
import { COLORS } from "../../assets/colors/colors";

export const fMultiSelectTextStyles = createStyles(() => ({
  label: {
    ref: getStylesRef("label"),
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "'Public Sans', sans-serif",
    color: COLORS.grayDark600,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayDark600,
    borderRadius: 6,
    padding: "6px 16px",
    height: "auto !important",
    fontSize: 15,
    fontWeight: 500,
    color: COLORS.black,
    fontFamily: " 'Public Sans', sans-serif",
    backgroundColor: "transparent",
    "&:focus": {
      borderColor: COLORS.secondary,
    },
    [`&:focus .${getStylesRef("label")}`]: {
      color: COLORS.secondary,
    },
    "&::placeholder": {
      color: COLORS.grayDark600,
      fontSize: 14,
      fontWeight: 500,
      fontFamily: " 'Public Sans', sans-serif",
      letterSpacing: "0.4px",
    },
  },
  defaultValue: {
    backgroundColor: COLORS.primaryLightOpacity,
  },
  defaultValueLabel: {
    color: COLORS.secondary,
  },
  defaultValueRemove: {
    color: COLORS.secondary,
  },
}));
