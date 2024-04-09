import React from "react";
import {
  Box,
  Burger,
  MediaQuery,
  Navbar,
  ScrollArea,
  createStyles,
} from "@mantine/core";
import { MainLinks } from "./MainLinks";
import { COLORS } from "../assets/colors/colors";
import { FAvatar } from "../@ui";
import { IMAGES } from "../assets/image";
import { ICONS } from "../assets/icons";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import ROUTES from "../enum/routes";

interface ISidebar {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const TheSidebar = (props: ISidebar) => {
  const { opened, setOpened } = props;
  const { classes } = styles();
  const signOut = useSignOut();
  const navigate = useNavigate();
  const authUser = useAuthUser();

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 250 }}
      classNames={{ root: classes.root }}
    >
      <Box className={classes.logoContainer}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mx="xl"
          />
        </MediaQuery>
        <img src={IMAGES.logo_student} alt="logout-icon" width={"100%"} />
      </Box>
      <Navbar.Section
        grow
        component={ScrollArea}
        classNames={{ root: classes.scrollAreaRoot }}
      >
        <MainLinks toggle={() => setOpened((e) => !e)} />
      </Navbar.Section>
      <Box className={classes.footerContainer}>
        <Box className={classes.userInfoContainer}>
          <Box className={classes.avatarContainer}>
            <FAvatar src={IMAGES.logOutAvaterImg} />
          </Box>
          <Box>
            <h1>{authUser()?.name}</h1>
            <span>{authUser()?.email}</span>
          </Box>
        </Box>
        <Box
          onClick={() => {
            signOut();
            navigate(`${ROUTES.LOGIN}`);
          }}
          style={{ cursor: "pointer" }}
        >
          <img src={ICONS.logout_icon} alt="logout-icon" width={20} />
        </Box>
      </Box>
    </Navbar>
  );
};

export default TheSidebar;

const styles = createStyles({
  root: {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: "0px",
  },
  logoContainer: {
    padding: "1rem 0px 0px",
    "& img": {
      "@media (max-width: 47.9375em)": {
        maxWidth: 300,
      },
    },
  },
  scrollAreaRoot: {
    padding: "0rem 1rem",
  },
  footerContainer: {
    padding: "1rem",
    backgroundColor: "#FFFFFF0D",
    boxShadow: "0px 1px 0px 0px #FFFFFF0F inset",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h1": {
      margin: 0,
      color: COLORS.white,
      fontSize: 14,
      fontWeight: 500,
    },
    "& span": {
      color: COLORS.white,
      fontSize: 10,
      opacity: 0.5,
      display: "inherit",
    },
  },
  avatarContainer: {
    marginRight: 10,
  },
});
