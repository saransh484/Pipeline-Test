import { Box, Center, Grid } from "@mantine/core";
import React, { memo, useMemo } from "react";
import { FTypography } from "../../../@ui";
import ProjectsCard from "../../card/projects-card/ProjectsCard";
import { useGetUpcomingExternshipsQuery } from "../../../generated/graphql";
import FLoading from "../../../@ui/loading/FLoading";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../enum/routes";

interface IProps {
  type?: "dashboard" | "upcoming" | "registered";
  title?: string;
}
const ExternshipsSection = ({
  type = "dashboard",
  title = "All Externships",
}: IProps) => {
  const navigate = useNavigate();
  const { data, loading } = useGetUpcomingExternshipsQuery({
    variables: { isRegistered: type === "registered" },
  });

  const externships = useMemo(() => {
    if (!loading && data?.getUpcomingExternships) {
      return data.getUpcomingExternships;
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
        {externships.map((externship) => {
          if (type === "upcoming" && externship.isUserRegistered) return null;
          return (
            <Grid.Col span={12} sm={6} md={4} key={externship.id}>
              <ProjectsCard
                registrationCount={externship.registrationCount ?? 0}
                isUserRegistered={externship.isUserRegistered}
                latestRegistrations={
                  externship.latestRegistered.length > 0
                    ? externship.latestRegistered
                    : ["sampleString"]
                }
                tags={externship.tags}
                date={{
                  startDate: externship.startDate,
                  endDate: externship.endDate,
                }}
                title={externship.title}
                shortDescription={externship.shortDescription}
                techStack={externship.techStack as TTechStacks}
                themes={externship.themes}
                onClick={() =>
                  navigate(
                    ROUTES.EXTERNSHIP_DETAILS.replace(
                      ":projectId",
                      externship.id
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

export default memo(ExternshipsSection);
