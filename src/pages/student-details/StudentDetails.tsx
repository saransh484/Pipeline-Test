import { Box, Button, Flex, createStyles } from "@mantine/core";
import React, { useEffect } from "react";
import { FTypography } from "../../@ui";
import { COLORS } from "../../assets/colors/colors";
import ProfileSteppers from "./components/ProfileSteppers";
import StudentProfileForm from "./form/StudentProfileForm";
import ROUTES from "../../enum/routes";
import { useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../../generated/graphql";
import { updateUserData } from "../../app/reducers/user-data/userData-reducer";
import { store } from "../../app/store";

const StudentDetails = () => {
  const { classes } = styles();
  const navigate = useNavigate();

  const { data, loading, refetch } = useGetUserProfileQuery();

  useEffect(() => {
    refetch();
    if (!loading && data && data.getUserProfile) {
      store.dispatch(updateUserData(data.getUserProfile));
    }
  }, [loading, data, refetch]);

  return (
    <Box className={classes.rootContainer}>
      <Flex align={"center"} justify={"space-between"}>
        <Box>
          <FTypography
            fontSize={28}
            fontWeight={700}
            text="Student Details"
            variant="tittle"
            fontFamily="'Public Sans', sans-serif"
          />
          <FTypography
            fontSize={16}
            fontWeight={400}
            text="Complete your details to create a profile"
            variant="description"
            fontFamily="'Public Sans', sans-serif"
            color="midEmphasis"
            margin={"6px 0px"}
          />
        </Box>

        <Button onClick={() => navigate(ROUTES.DASHBOARD)} variant="white">
          Skip
        </Button>
      </Flex>

      <ProfileSteppers />

      <StudentProfileForm />
    </Box>
  );
};

export default StudentDetails;

const styles = createStyles({
  rootContainer: {
    width: 700,
    background: COLORS.white,
    padding: "32px 30px",
    borderRadius: 12,
    boxShadow: "0px 0px 20px 0px #6F71752E",
    margin: "50px auto",
  },
});
