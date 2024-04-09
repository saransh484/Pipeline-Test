import { createStyles } from "@mantine/core";
import { COLORS } from "../../assets/colors/colors";

export const authStyles = createStyles({
  root: {
    backgroundColor: "transparent",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media(max-width:650px)": {
      height: "100%",
    },
  },
  LeftContainer: {
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media(max-width:650px)": {
      padding: 0,
    },
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: "80%",
    margin: "auto",
    maxWidth: 240,
    "@media(max-width:992px)": {
      width: "80%",
    },
  },
  LeftFooterContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    padding: "0rem 3rem",
    "@media(max-width:650px)": {
      padding: 0,
    },
  },
  heading: {
    color: COLORS.white,
    fontSize: 40,
    fontWeight: 700,
    margin: 0,
    textAlign: "center",
    "@media(max-width:650px)": {
      fontSize: 30,
    },
  },
  description: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 400,
    margin: 0,
    marginTop: 30,
    "@media(max-width:650px)": {
      margin: "10px 0px",
      fontSize: 14,
    },
  },
  bannerImgContainer: {
    width: "50%",
    margin: "0px auto",
    textAlign: "center",
    marginTop: 40,
    "@media(max-width:650px)": {
      marginTop: 20,
      width: "100%",
    },
    "& img": {
      width: "100%",
      maxWidth: 200,
    },
  },
  formContainer: {
    padding: "24px 4rem",
    margin: "auto 10px",
    "@media(max-width:992px)": {
      margin: "10px 0px",
    },
    "@media(max-width:650px)": {
      height: "auto",
      padding: "24px 16px",
    },
  },
});
