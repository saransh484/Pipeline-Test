import React, { memo } from "react";
import FChip from "../../../../@ui/FChip";

type TPriority = {
  priority: "High Priority" | "Medium Priority" | "Low Priority";
};
const variant = (priority: string) => {
  switch (priority) {
    case "High Priority":
      return "error";
    case "Medium Priority":
      return "warning";
    case "Low Priority":
      return "success";
    default:
      return "default";
  }
};
const PriorityChip = (props: TPriority) => {
  const { priority } = props;
  return (
    <FChip
      variant={variant(priority)}
      title={priority}
      icon={priority === "Medium Priority" ? "warning_icon" : undefined}
      iconSize={10}
    />
  );
};

export default memo(PriorityChip);
