import { createStyles } from "@mantine/core";
import { COLORS } from "../../assets/colors/colors";

export const typographyStyles = createStyles({
  default: {
    margin: 0,
  },
  heading: {
    fontSize: 40,
    fontWeight: 700,
    "@media(max-width:650px)": {
      fontSize: 30,
    },
  },
  description: {
    fontSize: 18,
    fontWeight: 400,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:650px)": {
      fontSize: 14,
    },
  },
  lightText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 400,
    color: COLORS.grannySmith,
  },
  tittle: {
    fontSize: 18,
    fontWeight: 500,
    color: COLORS.black,
  },
  regularText: {
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.black,
    fontFamily: " 'Public Sans', sans-serif",
  },
  date: {
    fontSize: 10,
    fontWeight: 600,
  },
  subTittle: {
    fontSize: 14,
    fontWeight: 600,
  },
  descriptionMedium: {
    fontSize: 12,
    fontWeight: 300,
  },
});
