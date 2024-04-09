import { Box, createStyles } from "@mantine/core";
import React, { memo } from "react";
import FShadowBtn from "../../@ui/FShadowBtn";

const SocialMediaLogin = () => {
  const { classes } = styles();
  return (
    <Box className={classes.accountsContainer}>
      <FShadowBtn src={"google_icon"} />
      <FShadowBtn src={"apple_icon"} />
      <FShadowBtn src={"facebook_icon"} />
    </Box>
  );
};

export default memo(SocialMediaLogin);

const styles = createStyles({
  accountsContainer: {
    margin: "20px auto",
    textAlign: "center",
  },
});
