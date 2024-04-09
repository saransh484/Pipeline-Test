import React, { Fragment, memo } from "react";
import { TIcons, TImages } from "../types";
import { IMAGES } from "../assets/image";
import { ICONS } from "../assets/icons";

interface IProps {
  name?: TImages | TIcons;
  url?: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
}

const FImage = ({
  name,
  alt,
  className,
  style,
  width = "auto",
  url,
}: IProps) => {
  return (
    <Fragment>
      {name && (
        <img
          src={`${IMAGES[name as TImages] || ICONS[name as TIcons]}`}
          className={className}
          style={style}
          alt={alt}
          width={width}
        />
      )}
      {url && (
        <img
          src={url}
          className={className}
          style={style}
          alt={alt}
          width={width}
        />
      )}
    </Fragment>
  );
};

export default memo(FImage);
