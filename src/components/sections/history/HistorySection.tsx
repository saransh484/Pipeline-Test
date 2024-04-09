import { Box, Center, Grid } from "@mantine/core";
import React, { memo, useMemo } from "react";
import { useGetActiveHackathonsQuery } from "../../../generated/graphql";
import FLoading from "../../../@ui/loading/FLoading";
import { FTypography } from "../../../@ui";
import HistoryProjectsCard from "../../card/history-project-card/HistoryProjectsCard";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../enum/routes";

const HistorySection = () => {
  const { data, loading } = useGetActiveHackathonsQuery();
  const navigate = useNavigate();

  const hackathons = useMemo(() => {
    if (!loading && data?.getActiveHackathons) {
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
      <FTypography text="Projects" variant="tittle" fontWeight={600} />
      <Box>
        <Grid my={15}>
          {hackathons.map((hackathon) => (
            <Grid.Col span={12} sm={6} md={4} key={hackathon?.id}>
              <HistoryProjectsCard
                tag={hackathon?.category ?? "HACKATHON"}
                tags={(hackathon?.tags as string[]) ?? []}
                date={{
                  startDate: moment(hackathon?.startDate).format(
                    "DD MMM, YYYY"
                  ),
                  endDate: moment(hackathon?.endDate).format("DD MMM, YYYY"),
                }}
                title={hackathon?.title ?? ""}
                shortDescription={hackathon?.shortDescription ?? ""}
                techStack={
                  (hackathon?.techStack as unknown as TTechStacks) ?? []
                }
                onClick={() =>
                  navigate(ROUTES.HISTORY_DETAILS.replace(":projectId", "11"))
                }
              />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default memo(HistorySection);
