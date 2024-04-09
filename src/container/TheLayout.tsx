import React, { useState } from "react";
import { AppShell, createStyles, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import TheSidebar from "./TheSidebar";
import TheHeader from "../components/header/TheHeader";

const TheLayout = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = styles();
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      classNames={{ main: classes.main, body: classes.body }}
      navbar={<TheSidebar opened={opened} setOpened={setOpened} />}
    >
      <Box sx={{ height: "100%" }}>
        <TheHeader opened={opened} setOpened={setOpened} />
        <Box style={{ padding: 16, height: "100%" }}>
          <Outlet />
        </Box>
      </Box>
    </AppShell>
  );
};

export default TheLayout;

const styles = createStyles({
  main: {
    paddingLeft: "calc(var(--mantine-navbar-width, 0px) + 0rem)",
    paddingRight: "calc(var(--mantine-aside-width, 0px) + 0rem)",
    paddingBottom: "calc(var(--mantine-footer-height, 0px) + 0rem)",
    paddingTop: "calc(var(--mantine-header-height, 0px) + 0rem)",
    "@media (max-width: 47.9375em)": {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  body: {
    padding: "0px",
  },
});
