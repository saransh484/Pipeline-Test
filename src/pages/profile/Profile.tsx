import React, { useMemo } from "react";
import { Box, createStyles } from "@mantine/core";
import { IMAGES } from "../../assets/image";
import ProfileImage from "../../components/profile/ProfileImage";
import ProfileCardSection from "../../components/profile/ProfileCardSection";
import UserDetails from "../../components/profile/UserDetails";
import { useGetUserProfileQuery } from "../../generated/graphql";

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

  const { data, loading } = useGetUserProfileQuery();
  const userData = useMemo(() => {
    if (!loading && data?.getUserProfile) {
      return data.getUserProfile;
    }
  }, [loading, data]);

  return (
    <Box>
      <Box className={classes.coverImage} w={"100%"} h={292}>
        <ProfileImage src={`${userData?.personalDetails?.profilePicture}`} />
      </Box>
      <UserDetails userData={userData} />
      <ProfileCardSection />
    </Box>
  );
};

export default Profile;
