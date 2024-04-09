import { Box, Center, Grid } from "@mantine/core";
import React, { memo, useMemo } from "react";
import { FTypography } from "../../../@ui";
import ProjectsCard from "../../card/projects-card/ProjectsCard";
import { useGetRegisteredProjectBeforeEndDateQuery } from "../../../generated/graphql";
import FLoading from "../../../@ui/loading/FLoading";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../enum/routes";

const RegisteredSection = () => {
  const navigate = useNavigate();
  const { data, loading } = useGetRegisteredProjectBeforeEndDateQuery();

  const registeredProjects = useMemo(() => {
    if (!loading && data?.getRegisteredProjectBeforeEndDate) {
      return data.getRegisteredProjectBeforeEndDate;
    } else {
      return [];
    }
  }, [loading, data]);

  if (loading) {
    return (
      <Center mih={"50vh"}>
        <FLoading />
      </Center>
    );
  }

  return (
    <Box my={20}>
      <FTypography
        text={"Registered Projects"}
        variant="tittle"
        fontWeight={600}
      />
      <Grid my={15}>
        {registeredProjects.map((registeredProject) => {
          return (
            <Grid.Col
              span={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              key={registeredProject.id}
            >
              <ProjectsCard
                category={registeredProject.category}
                registrationCount={registeredProject.registrationCount ?? 0}
                isUserRegistered={registeredProject.isUserRegistered}
                latestRegistrations={
                  registeredProject.latestRegistered.length > 0
                    ? registeredProject.latestRegistered
                    : ["sampleString"]
                }
                tags={registeredProject.tags}
                date={{
                  startDate: registeredProject.startDate,
                  endDate: registeredProject.endDate,
                }}
                title={registeredProject.title}
                shortDescription={registeredProject.shortDescription}
                techStack={registeredProject.techStack as TTechStacks}
                themes={registeredProject.themes}
                onClick={() =>
                  registeredProject.category === "HACKATHON"
                    ? navigate(
                        ROUTES.HACKATHONS_DETAILS.replace(
                          ":projectId",
                          registeredProject.id
                        )
                      )
                    : navigate(
                        ROUTES.EXTERNSHIP_DETAILS.replace(
                          ":projectId",
                          registeredProject.id
                        )
                      )
                }
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};

export default memo(RegisteredSection);
