import React, { memo, useMemo } from "react";
import { Box, Grid, Flex } from "@mantine/core";
import { FButton, FTypography } from "../../@ui";
import ProjectsCard from "../card/history-project-card/HistoryProjectsCard";
import moment from "moment";
import { useGetRegisteredProjectAfterEndDateQuery } from "../../generated/graphql";

const ProfileCardSection = () => {
  const { data, loading } = useGetRegisteredProjectAfterEndDateQuery();

  const registerdHistoryProject = useMemo(() => {
    if (!loading && data?.getRegisteredProjectAfterEndDate) {
      return data.getRegisteredProjectAfterEndDate;
    } else {
      return [];
    }
  }, [loading, data]);

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
          {registerdHistoryProject.map((project) => (
            <Grid.Col key={project.id} span={12} sm={6} md={4}>
              <ProjectsCard
                date={{
                  startDate: moment(project.startDate).format("DD MMM, YYYY"),
                  endDate: moment(project.endDate).format("DD MMM, YYYY"),
                }}
                title={project.title}
                shortDescription={project.shortDescription}
                tags={project.tags}
                techStack={project.techStack}
                latestRegistrations={project.latestRegistered}
                registrationCount={project.registrationCount}
                projectcategory={project.category}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default memo(ProfileCardSection);
