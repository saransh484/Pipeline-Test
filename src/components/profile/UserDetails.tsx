import React, { memo } from "react";
import { Box, Flex } from "@mantine/core";
import FBadge from "../../@ui/badge/FBadge";
import FTypography from "../../@ui/typography/FTypography";
import EditProfileButton from "./EditProfileButton";
import { useAuthUser } from "react-auth-kit";
import { User } from "../../generated/graphql";

interface Props {
  userData?: User;
}
const UserDetails: React.FC<Props> = (props: Props) => {
  const { userData } = props;
  const authUser = useAuthUser();
  return (
    <Flex>
      <Box w={266}></Box>
      <Flex w={"calc(100% - 266px)"} justify={"space-between"}>
        <Box mr={12}>
          <FTypography
            variant="descriptionMedium"
            text={authUser()?.name}
            fontWeight={700}
            color="blackCover"
            fontSize={18}
          />
          <FTypography
            variant="descriptionMedium"
            text={authUser()?.email}
            fontWeight={600}
            color="secondary"
            fontSize={14}
          />
          <FTypography
            variant="descriptionMedium"
            text={userData?.personalDetails?.shortBio ?? ""}
            fontWeight={400}
            color="blackCover"
            fontSize={11}
          />
          <Flex gap="sm" direction={"row"} mt={5}>
            {userData?.personalDetails?.techStacks?.length ? (
              userData?.personalDetails?.techStacks?.length > 0 &&
              userData?.personalDetails?.techStacks.map((techstack) => (
                <FBadge
                  key={techstack?.name}
                  title={techstack?.name ?? ""}
                  variant="primary"
                  name={{ url: techstack?.icon }}
                />
              ))
            ) : (
              <></>
            )}
          </Flex>
        </Box>
        <Flex justify={"center"} align={"center"}>
          <EditProfileButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(UserDetails);
