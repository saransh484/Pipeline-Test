import React, { memo } from "react";
import { useIsAuthenticated } from "react-auth-kit";

import { Center } from "@mantine/core";
import StudentDetails from "../pages/student-details/StudentDetails";
import { COLORS } from "../assets/colors/colors";

const ProfileRoute = () => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated()) {
    window.location.replace("/login");
  }

  return (
    <Center bg={COLORS.whiteSmoke_F4F4F4} mih={"100vh"}>
      <StudentDetails />
    </Center>
  );
};

export default memo(ProfileRoute);
