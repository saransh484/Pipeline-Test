import { Box, Button, createStyles } from "@mantine/core";
import React, { FC, memo, useMemo, useState } from "react";
import ProjectDescriptionTab from "./ProjectDescriptionTab";
import { COLORS } from "../../../assets/colors/colors";
import { GetProjectDetailsQuery } from "../../../generated/graphql";
import HackathonTask from "./HackathonTask";
import SubmissionForm from "./submission-form/SubmissionForm";
import moment from "moment";

interface IProjectTabs {
  project: GetProjectDetailsQuery["getProjectDetails"];
}

const ProjectTabs: FC<IProjectTabs> = ({ project }) => {
  const [tab, setTab] = useState<"details" | "tasks" | "submission">("details");
  const { classes, cx } = styles();

  const TabContent = useMemo(() => {
    switch (tab) {
      case "details":
        return <ProjectDescriptionTab html={project?.longDescription ?? ""} />;
      case "tasks":
        return <HackathonTask projectId={`${project?.id}`} />;
      case "submission":
        return <SubmissionForm projectId={`${project?.id}`} />;

      default:
        return <ProjectDescriptionTab html={project?.longDescription ?? ""} />;
    }
  }, [tab, project]);

  return (
    <Box>
      <Button.Group>
        <Button
          classNames={{
            root: cx(classes.tabRoot, {
              [classes.activeTabRoot]: tab === "details",
            }),
          }}
          onClick={() => setTab("details")}
          variant="outline"
        >
          Details
        </Button>
        <Button
          classNames={{
            root: cx(classes.tabRoot, {
              [classes.activeTabRoot]: tab === "tasks",
            }),
          }}
          onClick={() => setTab("tasks")}
          variant="outline"
        >
          Tasks
        </Button>
        {moment().isAfter(moment(project?.startDate)) && (
          <Button
            classNames={{
              root: cx(classes.tabRoot, {
                [classes.activeTabRoot]: tab === "submission",
              }),
            }}
            onClick={() => setTab("submission")}
            variant="outline"
          >
            Submission
          </Button>
        )}
      </Button.Group>
      {TabContent}
    </Box>
  );
};

export default memo(ProjectTabs);

const styles = createStyles({
  tabRoot: {
    minWidth: 85,
    fontSize: 12,
    color: COLORS.blue_2684FF,
    fontWeight: 500,
  },
  activeTabRoot: {
    background: COLORS.blue_2684FF,
    color: "white",
    fontSize: 12,
    fontWeight: 500,
    ":hover": {
      background: COLORS.blue_2684FF,
    },
  },
});
