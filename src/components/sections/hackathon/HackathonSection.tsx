import { Box, Center, Grid } from "@mantine/core";
import React, { memo, useMemo } from "react";
import { FTypography } from "../../../@ui";
import ProjectsCard from "../../card/projects-card/ProjectsCard";
import { useGetActiveHackathonsQuery } from "../../../generated/graphql";
import FLoading from "../../../@ui/loading/FLoading";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../enum/routes";

const HackathonSection = () => {
  const { data, loading } = useGetActiveHackathonsQuery();
  const navigate = useNavigate();

  const hackathons = useMemo(() => {
    if (!loading && data && data.getActiveHackathons) {
      return data.getActiveHackathons;
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
      <FTypography text="Registered Hackathons" variant="tittle" fontWeight={600} />

      <Grid my={15}>
        {hackathons.map((hackathon) => (
          <Grid.Col span={12} sm={6} md={4} key={hackathon?.id}>
            <ProjectsCard
              tag={hackathon?.category ?? "HACKATHON"}
              totalTime={"08:30:00"}
              tags={(hackathon?.tags as string[]) ?? []}
              date={{
                startDate: moment(hackathon?.startDate).format("DD MMM, YYYY"),
                endDate: moment(hackathon?.endDate).format("DD MMM, YYYY"),
              }}
              title={hackathon?.title ?? ""}
              shortDescription={hackathon?.shortDescription ?? ""}
              techStack={(hackathon?.techStack as TTechStacks) ?? []}
              themes={(hackathon?.themes as string[]) ?? []}
              onClick={() =>
                navigate(
                  ROUTES.HACKATHONS_DETAILS.replace(
                    ":projectId",
                    hackathon?.id ?? ""
                  )
                )
              }
            />
          </Grid.Col>
        ))}
      </Grid>
      <FTypography text="Upcoming Hackathons" variant="tittle" fontWeight={600} />
    </Box>
  );
};

export default memo(HackathonSection);
