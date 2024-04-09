import { Box, Grid, createStyles } from "@mantine/core";
import React, { FC, memo } from "react";
import { FButton, FImage, FTypography } from "../../../@ui";
import { COLORS } from "../../../assets/colors/colors";
import RegistrationTimer from "./RegistrationTimer";
import { GetProjectDetailsQuery } from "../../../generated/graphql";
import moment from "moment";
import { useDisclosure } from "@mantine/hooks";
import ProjectRegistration from "../../../components/project-registration/ProjectRegistration";

interface IProjectHeroSection {
  project: GetProjectDetailsQuery["getProjectDetails"];
}

const ProjectHeroSection: FC<IProjectHeroSection> = ({ project }) => {
  const { classes } = styles();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      {project && (
        <ProjectRegistration
          opened={opened}
          close={close}
          projectDetails={project}
          registered={project.isUserRegistered}
        />
      )}

      <Grid gutter={32}>
        <Grid.Col lg={8}>
          <FImage width={"100%"} alt="hackathonCover" name="hackathonCover" />
          <Box my={18}>
            <FTypography
              text={project?.title as string}
              variant="heading"
              fontWeight={700}
              fontSize={26}
              color="heading_09090A"
            />
            <FTypography
              text={project?.shortDescription as string}
              variant="description"
              fontWeight={500}
              fontSize={12}
              color="description_7B7491"
              margin={"2px 0px"}
            />
          </Box>
        </Grid.Col>
        <Grid.Col lg={4}>
          <Box className={classes.hackathonDeadline}>
            <Box className={classes.deadlineDate}>
              <FTypography
                text="RUNS FROM"
                variant="subTittle"
                fontFamily="'Public Sans', sans-serif"
                fontWeight={700}
                fontSize={18}
              />
              <FTypography
                text={`${moment(project?.startDate).format("DD")} - ${moment(
                  project?.endDate
                ).format("DD, YYYY")}`}
                color="midEmphasis"
                variant="regularText"
                fontFamily="'Public Sans', sans-serif"
                fontWeight={400}
                fontSize={14}
                margin={"4px 0px"}
              />
            </Box>

            {project?.startDate ? (
              <RegistrationTimer startDate={project.startDate} />
            ) : (
              <></>
            )}

            <FButton
              textColor={
                project?.isUserRegistered ? "successOpacityOne" : "white"
              }
              onClick={open}
              bg={
                project?.isUserRegistered
                  ? "successOpacityPointOne"
                  : "blue_2684FF"
              }
              label={
                project?.isUserRegistered
                  ? "Update Registration"
                  : "Register Now"
              }
              disabled={moment().isAfter(moment(project?.startDate))}
              sx={{
                padding: "12px 16px",
              }}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default memo(ProjectHeroSection);

const styles = createStyles({
  hackathonDeadline: {
    padding: 24,
    borderRadius: 8,
    boxShadow: "4px 4px 36px 0px #00000029",
    background: COLORS.white,
  },
  deadlineDate: {
    borderLeft: "3px solid #4C6FFF",
    padding: "2px 12px",
  },
  deadlineTimer: {
    borderRadius: 4,
    padding: "16px 14px",
    background: "#2684FF14",
  },
  header: {
    background: "red",
    padding: "0 15px",
  },
});
