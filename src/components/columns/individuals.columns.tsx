import React from "react";
import { Box, Flex } from "@mantine/core";
import { FAvatar, FTypography } from "../../@ui";
import FChip from "../../@ui/FChip";
import { IMAGES } from "../../assets/image";

export const individualsColumns: TTableColumns[] = [
  {
    label: "Team Name",
    key: "teamName",
    renderCell(
      // row
      ) {
      return (
        <Flex align={"center"}>
          <FAvatar src={IMAGES.user_profileImg} width={24} />
          <Box ml={10}>
            <FTypography
              variant="descriptionMedium"
              text="Member Test"
              fontWeight={500}
              color="primary"
            />
          </Box>
        </Flex>
      );
    },
  },
  {
    label: "Status",
    key: "status",
    renderCell(
      // row
      ) {
      return <FChip variant="success" title="Reviewed" fontSize={10} />;
    },
  },
  {
    label: "Total Score",
    key: "totalScore",
  },
];
