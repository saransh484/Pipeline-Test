import { Box } from "@mantine/core";
import React, { useMemo } from "react";
import ProjectTabs from "./components/ProjectTabs";
import { useGetProjectDetailsQuery } from "../../generated/graphql";
import { useParams } from "react-router-dom";
import ProjectHeroSection from "./components/ProjectHeroSection";
import FLoading from "../../@ui/loading/FLoading";

const HackathonDetails = () => {
  const { projectId = "" } = useParams<{ projectId: string }>();

  const { data, loading } = useGetProjectDetailsQuery({
    variables: { projectId },
  });

  const project = useMemo(() => {
    if (!loading && data && data.getProjectDetails) {
      return data.getProjectDetails;
    }
  }, [loading, data]);

  if (loading) {
    return <FLoading />;
  }

  return (
    <Box>
      <ProjectHeroSection project={project} />
      <Box my={24}>
        <ProjectTabs project={project} />
      </Box>
    </Box>
  );
};

export default HackathonDetails;
