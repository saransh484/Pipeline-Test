import React, { memo, useMemo } from "react";
import { FTypography } from "../../../@ui";
import { Box, Grid } from "@mantine/core";
import TaskCard from "./task-card/TaskCard";
import FLoading from "../../../@ui/loading/FLoading";
import { useGetProjectTasksForStudentQuery } from "../../../generated/graphql";
interface HackathonTaskProps {
  projectId: string;
}

const HackathonTask: React.FC<HackathonTaskProps> = ({ projectId }) => {
  const { data, loading } = useGetProjectTasksForStudentQuery({
    variables: { projectId },
  });

  const tasks = useMemo(() => {
    if (!loading && data?.getProjectTasksForStudent) {
      return data.getProjectTasksForStudent;
    }
  }, [loading, data]);

  if (loading) {
    return <FLoading />;
  }

  return (
    <Box py={12}>
      <FTypography text={"Tasks"} variant="tittle" color="black" />
      <Grid m={0} my={12}>
        {tasks?.length !== 0 ? (
          tasks?.map((task) => {
            if (!task) return;
            return (
              <Grid.Col span={12} sm={6} md={4} key={task?.id}>
                <TaskCard
                  Priority={task.priority}
                  longDescription={task.longDescription}
                  shortDescription={`${task?.shortDescription}`}
                  tag="Hackathon Task"
                  taskName={`${task?.title}`}
                  approxTime="50"
                  // date={{
                  //   startDate: "18 AUG, 2024",
                  //   endDate: "18 AUG, 2023",
                  // }}
                />
              </Grid.Col>
            );
          })
        ) : (
          <h1>No Tasks For Now!</h1>
        )}
      </Grid>
    </Box>
  );
};

export default memo(HackathonTask);
