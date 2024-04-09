import React, { memo } from "react";
import { typographyStyles } from "./index.styles";
import { TColors } from "../../types";
import { COLORS } from "../../assets/colors/colors";

interface IProps {
  variant:
    | "heading"
    | "description"
    | "lightText"
    | "tittle"
    | "regularText"
    | "date"
    | "subTittle"
    | "descriptionMedium";
  text: string;
  color?: TColors;
  align?:
    | "center"
    | "end"
    | "inherit"
    | "initial"
    | "justify"
    | "left"
    | "right"
    | "start";
  fontWeight?: "bold" | "bolder" | "lighter" | number;
  fontFamily?: string;
  fontSize?: number;
  margin?: string | number;
}

const FTypography = (props: IProps) => {
  const {
    variant,
    text,
    color = "black",
    align,
    fontWeight,
    fontFamily,
    fontSize,
    margin,
  } = props;
  const { classes } = typographyStyles();

  switch (variant) {
    case "heading":
    case "tittle":
    case "regularText":
      return (
        <h2
          className={`${classes.default} ${classes.default}  ${
            classes[variant ?? "lightText"]
          }`}
          style={{
            color: COLORS[color],
            textAlign: align,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            fontSize: fontSize,
            margin: margin,
          }}
        >
          {text}
        </h2>
      );

    case "description":
    case "descriptionMedium":
    case "lightText":
      return (
        <p
          className={`${classes.default} ${classes[variant ?? "lightText"]}`}
          style={{
            color: COLORS[color],
            textAlign: align,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            margin: margin,
            fontSize: fontSize,
          }}
        >
          {text}
        </p>
      );
    case "date":
      return (
        <h4
          className={`${classes.default} ${classes[variant ?? "lightText"]}`}
          style={{
            color: COLORS[color],
            textAlign: align,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            margin: margin,
            fontSize: fontSize,
          }}
        >
          {text}
        </h4>
      );
    case "subTittle":
      return (
        <h3
          className={`${classes.default} ${classes[variant ?? "lightText"]}`}
          style={{
            color: COLORS[color],
            textAlign: align,
            fontWeight: fontWeight,
            fontFamily: fontFamily,
            fontSize: fontSize,
          }}
        >
          {text}
        </h3>
      );

    default:
      return null;
  }
};

export default memo(FTypography);
