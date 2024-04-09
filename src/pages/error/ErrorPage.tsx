import {
  AppShell,
  Box,
  Center,
  Divider,
  Grid,
  createStyles,
} from "@mantine/core";
import React, { useState } from "react";

import TheSidebar from "../../container/TheSidebar";
import TheHeader from "../../components/header/TheHeader";
import { FButton, FImage, FTypography } from "../../@ui";
import { COLORS } from "../../assets/colors/colors";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const [opened, setOpened] = useState(false);
  const { classes } = styles();
  const navigate = useNavigate();

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
          <Center w={"80%"} m={"auto"} mih={"89%"}>
            <Grid sx={{ alignItems: "center" }}>
              <Grid.Col lg={5}>
                <FTypography
                  text="404"
                  variant="subTittle"
                  color="blue_4C6FFF"
                  fontWeight={400}
                  fontSize={34}
                />
                <FTypography
                  text="Something’s gone missing..."
                  variant="subTittle"
                  color="black"
                  fontWeight={600}
                  fontSize={40}
                />
                <Divider my={13} size={5} color={COLORS.blue_4C6FFF} />
                <FTypography
                  text="Requested page is missing..."
                  variant="subTittle"
                  color="black"
                  fontWeight={400}
                  fontSize={16}
                />
                <FButton
                  onClick={() => navigate("/")}
                  color="blue_2684FF"
                  w={136}
                  my={17}
                  fullWidth={false}
                  bg="secondary"
                  label="Go Home"
                />
              </Grid.Col>
              <Grid.Col lg={7}>
                <FImage width={"100%"} alt="error img" name="ErrorPage" />
              </Grid.Col>
            </Grid>
          </Center>
        </Box>
      </Box>
    </AppShell>
  );
};

export default ErrorPage;

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
