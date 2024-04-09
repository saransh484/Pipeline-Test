import React, { memo } from "react";
import { NavLink, createStyles } from "@mantine/core";
import { useNaves } from "./navs";
import { useMatch, useNavigate } from "react-router-dom";
import { COLORS } from "../assets/colors/colors";

export interface MainLinkProps {
  activeIcon: React.ReactNode;
  icon: React.ReactNode;
  label: string;
  to: string;
  rightSection?: number;
  children?: MainLinkProps[];
}

// eslint-disable-next-line react/display-name
const MainLink = memo(
  ({
    icon,
    label,
    to,
    children,
    rootPath,
    toggle,
    activeIcon,
    rightSection,
  }: MainLinkProps & { rootPath: string; toggle: () => void }) => {
    const navigate = useNavigate();

    const match = useMatch(!children ? rootPath + to : to);
    const { classes } = styles();

    return (
      <NavLink
        classNames={{ root: classes.root }}
        onClick={() => {
          if (!children) {
            navigate(rootPath + to);
            toggle();
          }
        }}
        label={label}
        icon={match ? activeIcon : icon}
        rightSection={
          rightSection ? (
            <span className={classes.count}> {rightSection} </span>
          ) : undefined
        }
        active={Boolean(match)}
      >
        {children?.map((link) => (
          <MainLink toggle={toggle} rootPath={to} {...link} key={link.label} />
        ))}
      </NavLink>
    );
  }
);

export const MainLinks = ({ toggle }: { toggle: () => void }) => {
  const naves = useNaves();
  const links = naves.map((link) => (
    <MainLink toggle={toggle} rootPath="" {...link} key={link.label} />
  ));
  return <div>{links}</div>;
};

const styles = createStyles({
  root: {
    margin: "10px 0px",
    borderRadius: 8,
    color: COLORS.white,
    opacity: 0.5,
    "&:hover": {
      backgroundColor: COLORS.secondary,
      color: COLORS.white,
      opacity: 1,
    },
    "&[data-active]": {
      backgroundColor: COLORS.secondary,
      color: COLORS.white,
      opacity: 1,
    },
    "&[data-active]:hover": {
      "&:hover": {
        backgroundColor: COLORS.secondary,
        color: COLORS.white,
        opacity: 1,
      },
    },
  },
  count: {
    backgroundColor: COLORS.aliceBlueDark,
    width: 20,
    height: 20,
    color: COLORS.white,
    borderRadius: 100,
    fontSize: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
});
