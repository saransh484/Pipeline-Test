import React, { memo } from "react";
import { Box, Grid, Flex } from "@mantine/core";
import { FButton, FTypography } from "../../@ui";
import ProjectsCard from "../card/history-project-card/HistoryProjectsCard";
import { ICONS } from "../../assets/icons/index";

type TTechStacks = {
  name: string;
  icon: string;
}[];

const ProfileCardSection = () => {
  const dummyarray: TTechStacks = [
    { name: "Jira", icon: ICONS.jira_icon },
    { name: "Slack", icon: ICONS.slack_icon },
  ];
  return (
    <Box my={20}>
      <Flex align={"center"} justify={"space-between"} pl={3}>
        <FTypography text="Projects" variant="tittle" fontWeight={600} />
        <FButton
          label="Add Projects"
          bg="blue_2684FF"
          variant="mediumRadius"
          type="button"
          w={"134px"}
          style={{
            borderRadius: "8px",
            gap: "10px",
          }}
        />
      </Flex>
      <Box>
        <Grid my={15}>
          <Grid.Col span={12} sm={6} md={4}>
            <ProjectsCard
              tag={"HACKATHON"}
              date={{
                startDate: "18 AUG 2023",
                endDate: "18 AUG 2023",
              }}
              title={"Project Title"}
              shortDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores tempora explicabo"
              }
              tags={["Need Feedback"]}
              techStack={dummyarray}
            />
          </Grid.Col>
          <Grid.Col span={12} sm={6} md={4}>
            <ProjectsCard
              tag={"HACKATHON"}
              date={{
                startDate: "18 AUG 2023",
                endDate: "18 AUG 2023",
              }}
              title={"Project Title"}
              shortDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores tempora explicabo"
              }
              tags={["Need Feedback"]}
              techStack={dummyarray}
            />
          </Grid.Col>
          <Grid.Col span={12} sm={6} md={4}>
            <ProjectsCard
              tag={"HACKATHON"}
              date={{
                startDate: "18 AUG 2023",
                endDate: "18 AUG 2023",
              }}
              title={"Project Title"}
              shortDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores tempora explicabo"
              }
              tags={["Need Feedback"]}
              techStack={dummyarray}
            />
          </Grid.Col>
          <Grid.Col span={12} sm={6} md={4}>
            <ProjectsCard
              tag={"HACKATHON"}
              date={{
                startDate: "18 AUG 2023",
                endDate: "18 AUG 2023",
              }}
              title={"Project Title"}
              shortDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores tempora explicabo"
              }
              tags={["Need Feedback"]}
              techStack={dummyarray}
            />
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};

export default memo(ProfileCardSection);
