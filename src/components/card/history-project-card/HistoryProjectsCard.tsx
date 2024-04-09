import React, { memo } from "react";
import { Avatar, Box, Flex, Group, createStyles } from "@mantine/core";
import FChip from "../../../@ui/FChip";
import FBadge from "../../../@ui/badge/FBadge";
import { FImage, FTypography } from "../../../@ui";
import { ICONS } from "../../../assets/icons";

interface IProps {
  tag: "HACKATHON" | "EXTERNSHIP";
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
  disabled?: boolean;
  onClick?: () => void;
}

const HistoryProjectsCard = (props: IProps) => {
  const { title, shortDescription, date, tags, techStack, onClick } = props;
  const { classes } = styles();
  return (
    <Box onClick={onClick} className={classes.root}>
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
          <FTypography
            text={shortDescription}
            variant={"descriptionMedium"}
            color={"gray_494949"}
            fontWeight={400}
          />
        </Box>
      </Box>
      <Flex mt={12} gap={4} justify={"space-between"} wrap={"wrap"} align={"center"}>
        <Box>
          <Group my={0} spacing={5}>
            {techStack.map((item, index) => (
              <FBadge
                key={index}
                name={{ url: item.icon }}
                title={item.name}
                variant="primary"
              />
            ))}
          </Group>
        </Box>
        <Avatar.Group sx={{ alignItems: "center" }}>
          <Avatar size={35} radius={"lg"} src={ICONS.Avatar1} />
          <Avatar size={35} radius={"lg"} src={ICONS.Avatar2} />
          <Avatar size={35} radius={"lg"} src={ICONS.Avatar3} />
          <Avatar size={35} radius={"lg"} src={ICONS.Avatar3} />
        </Avatar.Group>
      </Flex>
    </Box>
  );
};

const styles = createStyles({
  root: {
    padding: "20px 16px",
    borderRadius: 4,
    boxShadow: "2px 4px 30px 0px #9CA3AA33",
    display: "block",
    textDecoration: "none",
    cursor: "pointer",
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
