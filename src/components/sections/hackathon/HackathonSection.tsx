import { Box, Center, Grid } from "@mantine/core";
import React, { memo, useMemo } from "react";
import { FTypography } from "../../../@ui";
import ProjectsCard from "../../card/projects-card/ProjectsCard";
import { useGetUpcomingHackathonsQuery } from "../../../generated/graphql";
import FLoading from "../../../@ui/loading/FLoading";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../enum/routes";
interface IProps {
  type?: "dashboard" | "upcoming" | "registered";
  title?: string;
}
const HackathonSection = ({
  type = "dashboard",
  title = "All Hackathons",
}: IProps) => {
  const { data, loading } = useGetUpcomingHackathonsQuery({
    variables: { isRegistered: type === "registered" },
  });
  const navigate = useNavigate();

  const hackathons = useMemo(() => {
    if (!loading && data?.getUpcomingHackathons) {
      return data.getUpcomingHackathons;
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
      <FTypography text={title} variant="tittle" fontWeight={600} />

      <Grid my={15}>
        {hackathons.map((hackathon) => {
          if (type === "upcoming" && hackathon.isUserRegistered) return null;
          return (
            <Grid.Col span={12} sm={6} md={4} key={hackathon.id}>
              <ProjectsCard
                tags={hackathon.tags}
                date={{
                  startDate: hackathon.startDate,
                  endDate: hackathon.endDate,
                }}
                title={hackathon.title}
                shortDescription={hackathon.shortDescription}
                techStack={hackathon.techStack as TTechStacks}
                themes={hackathon.themes}
                onClick={() =>
                  navigate(
                    ROUTES.HACKATHONS_DETAILS.replace(
                      ":projectId",
                      hackathon.id
                    )
                  )
                }
                registrationCount={hackathon.registrationCount ?? 0}
                isUserRegistered={hackathon.isUserRegistered}
                latestRegistrations={
                  hackathon.latestRegistered.length > 0
                    ? hackathon.latestRegistered
                    : ["sampleString"]
                }
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};

export default memo(HackathonSection);
