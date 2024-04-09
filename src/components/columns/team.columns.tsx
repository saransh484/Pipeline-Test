import React from "react";
import { FGroupAvatar } from "../../@ui";
import FChip from "../../@ui/FChip";

export const teamsColumns: TTableColumns[] = [
  {
    label: "Team Name",
    key: "teamName",
  },
  {
    label: "Members",
    key: "members",
    renderCell(
      // row
      ) {
      return <FGroupAvatar />;
    },
  },
  {
    label: "Status",
    key: "status",
    renderCell(
      // row
      ) {
      return <FChip variant="warning" title="Pending" fontSize={10} />;
    },
  },
  {
    label: "Total Score",
    key: "totalScore",
  },
];
