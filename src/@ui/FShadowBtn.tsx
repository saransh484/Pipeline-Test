import React, { memo } from "react";
import { COLORS } from "../assets/colors/colors";
import { createStyles } from "@mantine/core";
import FImage from "./FImage";
import { TIcons, TImages } from "../types";

interface IProps {
  src: TImages | TIcons;
}

const FShadowBtn = (props: IProps) => {
  const { src } = props;
  const { classes } = styles();
  return (
    <button className={classes.shadowBtn}>
      {/* <img className={classes.icon} src={src} alt="" /> */}
      <FImage name={src} className={classes.icon} alt="" />
    </button>
  );
};

export default memo(FShadowBtn);

const styles = createStyles({
  shadowBtn: {
    backgroundColor: COLORS.white,
    borderWidth: 0,
    cursor: "pointer",
    boxShadow: "0px 1px 3px 0px #3232471A",
    padding: 10,
    borderRadius: 50,
    margin: "0px 10px",
    display: "inline-block",
    width: 52,
    height: 52,
  },
  icon: {
    maxWidth: 23,
  },
});
