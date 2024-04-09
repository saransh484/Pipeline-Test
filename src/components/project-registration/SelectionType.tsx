import React, { memo } from "react";
import { Box, Flex, createStyles } from "@mantine/core";
import { FImage, FTypography } from "../../@ui";
import { TIcons } from "../../types";
import { Category } from "../../generated/graphql";

interface SelectionTypeProps {
  type: "INDIVIDUAL" | "TEAM";
  active: boolean;
  onClick: () => void;
  category: Category;
}

const getImageName = (type: "INDIVIDUAL" | "TEAM", active: boolean): TIcons => {
  if (type === "TEAM") {
    return active ? "TeamUsersActive" : "TeamUsersInactive";
  } else {
    return active ? "UserActive" : "UserInActive";
  }
};

const SelectionType: React.FC<SelectionTypeProps> = ({
  type,
  active,
  onClick,
  category,
}) => {
  const { classes, cx } = styles();
  const eCategory = (category: Category) => {
    if (category === "HACKATHON") {
      return "hackathon";
    }
    return "externship";
  };
  const imageName: TIcons = getImageName(type, active);

  return (
    <Box
      onClick={onClick}
      mr={12}
      className={cx(classes.registrationTypeBox, {
        [classes.activeBox]: active,
      })}
    >
      <Flex align="flex-start" justify="space-between" mb={10}>
        <FImage alt="user" name={imageName} width={47} />
        {active && <FImage alt="user" name="checkMarkFilled" width={24} />}
      </Flex>
      <FTypography
        text={type === "INDIVIDUAL" ? "Individual Player" : "Team Player"}
        variant="description"
        color={active ? "secondary" : "black_161616"}
        fontWeight={500}
        fontSize={20}
        margin="4px 0px"
      />
      <FTypography
        text={
          type === "INDIVIDUAL"
            ? `Register as an individual for the ${eCategory(category)}`
            : `Register with team for the ${eCategory(category)}`
        }
        variant="description"
        color="gray_525252"
        fontWeight={500}
        fontSize={12}
        margin="4px 0px"
      />
    </Box>
  );
};

const styles = createStyles({
  registrationTypeBox: {
    padding: "18px 24px",
    border: "2px solid #E0E0E0",
    borderRadius: 10,
    boxShadow: "0px 2px 4px -2px #2121210F",
    cursor: "pointer",
    flex: 1,
  },
  activeBox: {
    border: "3px solid #0F62FE",
  },
});

export default memo(SelectionType);
