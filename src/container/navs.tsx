import React from "react";
import { MainLinkProps } from "./MainLinks";
import ROUTES from "../enum/routes";
import { FImage } from "../@ui";

export const naves: MainLinkProps[] = [

  {
    icon: <FImage name="dashboardActive" alt="dashboard" width={"20px"} />,
    label: "Dashboard",
    to: ROUTES.DASHBOARD,
    rightSection: 5,
    activeIcon: (
      <FImage name="dashboardActive" alt="dashboard-active" width={"20px"} />
    ),
  },
  {
    icon: <FImage name="hackathon" alt="hackathon" width={"20px"} />,
    label: "Hackathons",
    to: ROUTES.HACKATHONS,
    rightSection: 2,
    activeIcon: (
      <FImage name="hackathon" alt="hackathon" width={"20px"} />
    ),
  },
  {
    icon: <FImage name="externships" alt="externships" width={"20px"} />,
    label: "Externships",
    to: ROUTES.EXTERNSHIPS,
    rightSection: 2,
    activeIcon: (
      <FImage name="externships" alt="externships" width={"20px"} />
    ),
  },
  {
    icon: <FImage name="historyActive" alt="dashboard" width={"20px"} />,
    label: "History",
    to: ROUTES.HISTORY,
    rightSection: 5,
    activeIcon: (
      <FImage name="historyActive" alt="dashboard-active" width={"20px"} />
    ),
  },
  {
    icon: <FImage name="settingIcon" alt="setting" width={"20px"} />,
    label: "Profile",
    to: ROUTES.Profile,
    rightSection: 2,
    activeIcon: (
      <FImage name="settingIcon" alt="dashboard-active" width={"20px"} />
    ),
  },
 
];
