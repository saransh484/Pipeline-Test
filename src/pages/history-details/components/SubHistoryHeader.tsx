import { Box, Flex, MediaQuery } from "@mantine/core";
import { FTypography } from "../../../@ui";
import FBadge from "../../../@ui/badge/FBadge";
import React, { memo } from "react";
import { ICONS } from "../../../assets/icons";

const SubHistoryHeader = () => {
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Box>
        <FTypography
          variant="tittle"
          fontSize={22}
          fontWeight={700}
          text="User Name"
        />
        <FTypography
          variant="descriptionMedium"
          text="username@gmail.com"
          fontWeight={700}
          color="blue_2684FF"
        />
      </Box>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Flex gap={7}>
          <FBadge
            variant="primary"
            name={{ url: ICONS.jira_icon }}
            title={"MERN"}
          />
          <FBadge
            variant="primary"
            name={{ url: ICONS.slack_icon }}
            title={"FullStack"}
          />
        </Flex>
      </MediaQuery>
    </Flex>
  );
};

export default memo(SubHistoryHeader);
