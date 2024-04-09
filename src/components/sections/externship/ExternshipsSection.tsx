import { Box, Center, Grid } from "@mantine/core";
import React, { memo, useMemo } from "react";
import { FTypography } from "../../../@ui";
import ProjectsCard from "../../card/projects-card/ProjectsCard";
import { useGetActiveExternshipsQuery } from "../../../generated/graphql";
import FLoading from "../../../@ui/loading/FLoading";
import moment from "moment";

const ExternshipsSection = () => {
  const { data, loading } = useGetActiveExternshipsQuery();

  const hackathons = useMemo(() => {
    if (!loading && data && data.getActiveExternships) {
      return data.getActiveExternships;
    } else {
      return [];
    }
  }, [loading, data]);

  if (loading) {
    <Center mih={"50vh"}>
      <FLoading />
    </Center>;
  }

  return (
    <Box my={20}>
      <FTypography text="Applied Externships" variant="tittle" fontWeight={600} />
      <Grid my={15}>
         <Box></Box>
      </Grid>
      <FTypography text="All Externships" variant="tittle" fontWeight={600} />
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
              // onClick={() => {}}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(ExternshipsSection);
