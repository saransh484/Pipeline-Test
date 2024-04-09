import React from "react";
import { MainLinkProps } from "./MainLinks";
import ROUTES from "../enum/routes";
import { FImage } from "../@ui";
import {
  Category,
  useGetNewProjectsCountQuery,
  useGetRegisteredProjectsCountQuery,
  useGetUpcomingExternshipsCountQuery,
  useGetUpcomingHackathonsCountQuery,
} from "../generated/graphql";

export const useNaves = () => {
  const externshipCount: number =
    useGetUpcomingExternshipsCountQuery().data?.getUpcomingExternshipsCount
      .count ?? 0;
  const hackathonCount: number =
    useGetUpcomingHackathonsCountQuery().data?.getUpcomingHackathonsCount
      .count ?? 0;

  const newHackathonCount: number =
    useGetNewProjectsCountQuery({
      variables: { category: Category.Hackathon },
    }).data?.getNewProjectsCount.count ?? 0;

  const newExternshipCount: number =
    useGetNewProjectsCountQuery({
      variables: { category: Category.Externship },
    }).data?.getNewProjectsCount.count ?? 0;

  const registeredHackathonCount: number =
    useGetRegisteredProjectsCountQuery({
      variables: { category: Category.Hackathon },
    }).data?.getRegisteredProjectsCount.count ?? 0;

  const registeredExternshipCount: number =
    useGetRegisteredProjectsCountQuery({
      variables: { category: Category.Externship },
    }).data?.getRegisteredProjectsCount.count ?? 0;

  const naves: MainLinkProps[] = [
    {
      icon: <FImage name="dashboardActive" alt="dashboard" width={"20px"} />,
      label: "Dashboard",
      to: ROUTES.DASHBOARD,
      rightSection: hackathonCount + externshipCount,
      activeIcon: (
        <FImage name="dashboardActive" alt="dashboard-active" width={"20px"} />
      ),
    },
    {
      icon: <FImage name="hackathon" alt="hackathon" width={"20px"} />,
      label: "Hackathons",
      to: ROUTES.HACKATHONS,
      rightSection: newHackathonCount + registeredHackathonCount,
      activeIcon: <FImage name="hackathon" alt="hackathon" width={"20px"} />,
    },
    {
      icon: <FImage name="externships" alt="externships" width={"20px"} />,
      label: "Externships",
      to: ROUTES.EXTERNSHIPS,
      rightSection: newExternshipCount + registeredExternshipCount,
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
  return naves;
};
