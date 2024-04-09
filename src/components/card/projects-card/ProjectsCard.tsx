import { Avatar, Box, Flex, Group, createStyles } from "@mantine/core";
import React, { memo, useState } from "react";
import { COLORS } from "../../../assets/colors/colors";
import FBadge from "../../../@ui/badge/FBadge";
import { FButton, FImage, FTypography } from "../../../@ui";
import FChip from "../../../@ui/FChip";
import TextClamp from "../../../@ui/TextClamp";
import moment from "moment";
import StartsInTimer from "../../../pages/hackathon-details/components/StartsInTimer";
import { Category } from "../../../generated/graphql";
import { randomId } from "@mantine/hooks";

interface IProps {
  title: string;
  shortDescription: string;
  date: {
    startDate: Date;
    endDate: Date;
  };
  tags: string[];
  techStack: TTechStacks;
  themes: string[];
  disabled?: boolean;
  isUserRegistered?: boolean;
  registrationCount?: number;
  latestRegistrations?: Array<string>;
  onClick?: () => void;
  category?: Category;
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
    registrationCount,
    latestRegistrations,
    isUserRegistered,
    category,
  } = props;
  const { classes } = styles();
  const [timerStop, setTimerStop] = useState(
    moment().isAfter(moment(date.startDate))
  );

  return (
    <Box onClick={onClick} className={classes.root}>
      <Box className={classes.header}>
        <Box>
          {!timerStop && (
            <StartsInTimer date={date} onTimerEnd={() => setTimerStop(true)} />
          )}
        </Box>
        {category && (
          <FChip
            title={`${category}`}
            variant={category === "HACKATHON" ? "default" : "error"}
            fontSize={10}
          />
        )}
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
            text={`${moment(date.startDate).format("DD MMM, YYYY")} - ${moment(
              date.endDate
            ).format("DD MMM, YYYY")}`}
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
          <TextClamp lines={3}>
            <FTypography
              text={shortDescription}
              variant={"descriptionMedium"}
              color={"gray_494949"}
              fontWeight={400}
            />
          </TextClamp>
        </Box>
      </Box>

      <Box my={4}>
        <FTypography
          text={"Tech Stacks"}
          variant={"descriptionMedium"}
          color={"gray_707070"}
          fontWeight={500}
        />

        <Group my={4} spacing={5}>
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
      <Box mb={8}>
        <FTypography
          text={"Themes"}
          variant={"descriptionMedium"}
          color={"gray_707070"}
          fontWeight={500}
        />
        <Group my={8} spacing={5}>
          {themes.map((item) => (
            <FBadge key={item} title={item} variant="secondary" />
          ))}
        </Group>
      </Box>
      <Flex
        mt={0}
        justify={registrationCount ? "space-between" : "flex-end"}
        align={"center"}
      >
        {registrationCount ? (
          <Avatar.Group sx={{ alignItems: "center" }}>
            {latestRegistrations?.map((link) => {
              return (
                <Avatar
                  color={"indigo"}
                  key={randomId()}
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
        <FButton
          textColor={isUserRegistered ? "successOpacityOne" : "white"}
          label={isUserRegistered ? "Applied" : "Apply Now"}
          bg={isUserRegistered ? "successOpacityPointOne" : "blue_2684FF"}
          variant="mediumRadius"
          disabled={disabled}
          // onClick={onClick}
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textDecoration: "none",
    cursor: "pointer",
    height: "100%",
    "@media (max-width: 300px)": {
      padding: "20px 12px",
    },
    "@media (max-width: 770px) and (min-width: 768px) ": {
      padding: "20px 14px",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 8,
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
