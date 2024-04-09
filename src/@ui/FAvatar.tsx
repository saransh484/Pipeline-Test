import { Avatar, createStyles } from "@mantine/core";
import React, { memo } from "react";

interface IProps {
  src?: string;
  width?: string | number;
}

const FAvatar = (props: IProps) => {
  const { src, width } = props;
  const { classes } = styles();
  return (
    <Avatar
      classNames={{ root: classes.avatar }}
      styles={{ root: { width: width, height: width, minWidth: width } }}
      src={src}
      alt="it's me"
    />
  );
};

export default memo(FAvatar);

const styles = createStyles({
  avatar: {
    cursor: "pointer",
  },
});
