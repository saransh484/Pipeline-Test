import React, { memo } from "react";
import { Avatar, Box, Flex, Group, createStyles } from "@mantine/core";
import FChip from "../../../@ui/FChip";
import FBadge from "../../../@ui/badge/FBadge";
import { FImage, FTypography } from "../../../@ui";
import TextClamp from "../../../@ui/TextClamp";

interface IProps {
  title: string;
  shortDescription: string;
  // totalTime: string;
  date: {
    startDate: string;
    endDate: string;
  };
  tags: string[];
  techStack: TTechStacks;
  // themes: string[];
  registrationCount?: number;
  latestRegistrations?: Array<string>;
  projectcategory?: string;
  onClick?: () => void;
}

const HistoryProjectsCard = (props: IProps) => {
  const {
    title,
    shortDescription,
    date,
    tags,
    techStack,
    registrationCount,
    projectcategory,
    latestRegistrations,
    onClick,
  } = props;
  const { classes } = styles();
  return (
    <Box onClick={onClick} className={classes.root}>
      <Flex justify={"space-between"}>
        <Group spacing={8} my={0}>
          {tags.map((item) => (
            <FChip
              key={item}
              bg={"primaryLightOpacity"}
              color={"secondary"}
              variant={"default"}
              title={item}
              fontSize={10}
            />
          ))}
        </Group>
        <Box>
          <FChip
            title={`${projectcategory}`}
            variant={projectcategory === "HACKATHON" ? "default" : "error"}
            fontSize={10}
          />
        </Box>
      </Flex>
      <Flex my={8} align={"center"}>
        <Flex mr={6}>
          <FImage name="calender_icon" alt="calender_icon" width={10} />
        </Flex>
        <Flex>
          <FTypography
            text={`${date.startDate} - ${date.endDate}`}
            variant="date"
            color="gray_707070"
          />
        </Flex>
      </Flex>
      <Box>
        <FTypography
          text={title}
          variant="description"
          color="gray_343339"
          fontWeight={600}
        />
        <Box my={2}>
          <TextClamp lines={4}>
            <FTypography
              text={shortDescription}
              variant={"descriptionMedium"}
              color={"gray_494949"}
              fontWeight={400}
            />
          </TextClamp>
        </Box>
      </Box>

      <Flex
        mt={12}
        gap={4}
        justify={"space-between"}
        wrap={"wrap"}
        align={"center"}
      >
        <Box>
          <Group my={0} spacing={5}>
            {techStack.map((item) => (
              <FBadge
                key={item.name}
                name={{ url: item.icon }}
                title={item.name}
                variant="primary"
              />
            ))}
          </Group>
        </Box>
        {registrationCount && registrationCount > 1 ? (
          <Avatar.Group sx={{ alignItems: "center" }}>
            {latestRegistrations?.map((link) => {
              return (
                <Avatar
                  color={"indigo"}
                  key={link}
                  size={30}
                  radius={"lg"}
                  src={link}
                />
              );
            })}

            {registrationCount > 4 ? (
              <FTypography
                color="successOpacityOne"
                text={`+${registrationCount - 4} Applied`}
                variant="regularText"
                fontSize={8}
                fontWeight={500}
              />
            ) : null}
          </Avatar.Group>
        ) : null}
      </Flex>
    </Box>
  );
};

const styles = createStyles({
  root: {
    padding: "20px 16px",
    borderRadius: 4,
    boxShadow: "2px 4px 30px 0px #9CA3AA33",
    display: "flex",
    textDecoration: "none",
    cursor: "pointer",
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  // header: {
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  // leftSide: {
  //   marginRight: 6,
  // },
  // badge: {
  //   backgroundColor: COLORS.white,
  //   padding: "4px 8px",
  //   borderRadius: 8,
  //   borderColor: COLORS.lightGray,
  //   borderWidth: 1,
  //   borderStyle: "solid",
  //   marginRight: 8,
  // },
  // logoText: {
  //   marginLeft: 30,
  //   backgroundColor: "red",
  // },
});

export default memo(HistoryProjectsCard);
