import { Avatar, Box, Flex, Group, createStyles } from "@mantine/core";
import React, { memo } from "react";
import { COLORS } from "../../../assets/colors/colors";
import FBadge from "../../../@ui/badge/FBadge";
import { FButton, FImage, FTypography } from "../../../@ui";
import FChip from "../../../@ui/FChip";
import { ICONS } from "../../../assets/icons";

interface IProps {
  tag: "HACKATHON" | "EXTERNSHIP";
  title: string;
  shortDescription: string;
  totalTime: string;
  date: {
    startDate: string;
    endDate: string;
  };
  tags: string[];
  techStack: TTechStacks;
  themes: string[];
  disabled?: boolean;
  onClick?: () => void;
}

const ProjectsCard = (props: IProps) => {
  const {
    title,
    shortDescription,
    date,
    tags,
    techStack,
    themes,
    onClick,
    disabled,
  } = props;
  const { classes } = styles();
  return (
    <Box onClick={onClick} className={classes.root}>
      <Box className={classes.header}>
        <Box>
          <FChip
            variant={"default"}
            bg="successOpacityPointOne"
            color="successOpacityOne"
            title={`Starts In - 12D : 22 Hr : 30 Min : 40 Sec`}
            fontSize={12}
          />
        </Box>
      </Box>
      <Group spacing={8} my={8}>
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

      <Box my={10}>
        <FTypography
          text={"Tech Stacks"}
          variant={"descriptionMedium"}
          color={"gray_707070"}
          fontWeight={500}
        />

        <Group my={10} spacing={5}>
          {techStack.map((item, index) => (
            <FBadge
              key={index}
              name={{ url: item.icon }}
              title={item.name}
              variant="primary"
            />
          ))}
        </Group>
        {/*  */}
      </Box>
      <Box my={8}>
        <FTypography
          text={"Themes"}
          variant={"descriptionMedium"}
          color={"gray_707070"}
          fontWeight={500}
        />
        <Group my={8} spacing={5}>
          {themes.map((item, index) => (
            <FBadge key={index} title={item} variant="secondary" />
          ))}
        </Group>
      </Box>
      <Flex mt={12} justify={"space-between"} align={"center"}>
        <Avatar.Group sx={{ alignItems: "center" }}>
          <Avatar size={35} radius={"lg"} src={ICONS.Avatar1} />
          <Avatar size={35} radius={"lg"} src={ICONS.Avatar2} />
          <Avatar size={35} radius={"lg"} src={ICONS.Avatar3} />
          <Avatar size={35} radius={"lg"} src={ICONS.Avatar4} />
          <FTypography
            color="successOpacityOne"
            text="+200 Applied"
            variant="regularText"
            fontSize={10}
            fontWeight={500}
          />
        </Avatar.Group>
        <FButton
          label="Apply Now"
          bg="blue_2684FF"
          variant="mediumRadius"
          disabled={disabled}
          onClick={onClick}
          fullWidth={false}
          w={140}
        />
      </Flex>
    </Box>
  );
};

export default memo(ProjectsCard);

const styles = createStyles({
  root: {
    padding: "20px 16px",
    borderRadius: 4,
    boxShadow: "2px 4px 30px 0px #9CA3AA33",
    display: "block",
    textDecoration: "none",
    cursor: "pointer",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  leftSide: {
    marginRight: 6,
  },
  badge: {
    backgroundColor: COLORS.white,
    padding: "4px 8px",
    borderRadius: 8,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderStyle: "solid",
    marginRight: 8,
  },
  logoText: {
    marginLeft: 30,
    backgroundColor: "red",
  },
});
