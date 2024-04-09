import React, { memo } from "react";
import { Box, createStyles } from "@mantine/core";
import { IMAGES } from "../../assets/image";
interface ProfileImageProps {
  src: string;
}

const styles = createStyles({
  profileImage: {
    borderRadius: "50%",
    position: "absolute",
    bottom: "-115px",
    left: "10px",
    padding: "5px",
    backgroundColor: "white",
  },
});

const ProfileImage: React.FC<ProfileImageProps> = ({ src }) => {
  const { classes } = styles();
  return (
    <Box h={236} w={236} className={classes.profileImage}>
      <img
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = IMAGES.dummyprofileImage;
        }}
        src={src}
        alt="Profile Image"
        // fit="cover"
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default memo(ProfileImage);
