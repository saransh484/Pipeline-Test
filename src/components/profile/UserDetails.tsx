import React, { memo } from "react";
import { Box, Flex } from "@mantine/core";
import FBadge from "../../@ui/badge/FBadge";
import { ICONS } from "../../assets/icons/index";
import FTypography from "../../@ui/typography/FTypography";
import EditProfileButton from "./EditProfileButton";

const UserDetails: React.FC = () => {
  return (
    <Flex>
      <Box w={266}></Box>
      <Flex w={"calc(100% - 266px)"} justify={"space-between"}>
        <Box>
          <FTypography
            variant="descriptionMedium"
            text="User Name"
            fontWeight={700}
            color="blackCover"
            fontSize={18}
          />
          <FTypography
            variant="descriptionMedium"
            text="email@gmail.com"
            fontWeight={600}
            color="secondary"
            fontSize={14}
          />
          <FTypography
            variant="descriptionMedium"
            text="This is a sample bio of the user. Lorem ipsum"
            fontWeight={400}
            color="blackCover"
            fontSize={11}
          />
          <Flex gap="sm" mt={5}>
            <FBadge
              title="MERN"
              variant="primary"
              name={{ url: ICONS.jira_icon }}
            />
            <FBadge
              title="Fullstack"
              variant="primary"
              name={{ url: ICONS.slack_icon }}
            />
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
