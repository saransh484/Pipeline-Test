import React from "react";
import { Box, createStyles } from "@mantine/core";
import { IMAGES } from "../../assets/image";
import ProfileImage from "../../components/profile/ProfileImage";
import ProfileCardSection from "../../components/profile/ProfileCardSection";
import UserDetails from "../../components/profile/UserDetails";

const styles = createStyles({
  coverImage: {
    backgroundImage: `url(${IMAGES.coverImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
});

const Profile = () => {
  const { classes } = styles();
  return (
    <Box>
      <Box className={classes.coverImage} w={"100%"} h={292}>
        <ProfileImage src={IMAGES.dummyprofileImage} />
      </Box>
      <UserDetails />
      <ProfileCardSection />
    </Box>
  );
};

export default Profile;
