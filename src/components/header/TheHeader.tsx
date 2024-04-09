import {
  Box,
  Burger,
  Flex,
  Grid,
  MediaQuery,
  createStyles,
} from "@mantine/core";
import React, { memo } from "react";
import { COLORS } from "../../assets/colors/colors";
import { FActionIconBtn, FAvatar } from "../../@ui";
import { IMAGES } from "../../assets/image";
import { IconSunFilled } from "@tabler/icons-react";
import FSearch from "../../@ui/FSearch";
import { useLocation, useNavigate } from "react-router-dom";
import PROFILE_ROUTES from "../../enum/profile.routes";

interface IProps {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const TheHeader = (props: IProps) => {
  const { setOpened, opened } = props;
  const router = useLocation().pathname;
  const splitPathname = router.split("/");
  const replacePathName = splitPathname[1].replace("-", " ");

  const navigate = useNavigate();

  const { classes } = styles();
  return (
    <Grid className={classes.root} justify="space-between" m={0} align="center">
      <Grid.Col span={6} sm={2} orderSm={1} order={1}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
        <h2 className={classes.title}> {replacePathName || "Dashboard"}</h2>

        {replacePathName && (
          <div className={classes.subTitleContainer}>
            <h6 className={`${classes.subTitle} ${classes.active}`}>
              {replacePathName}
            </h6>
            <h6 className={classes.subTitle}>
              <span>{" > "}</span> Sub Page
            </h6>
          </div>
        )}
      </Grid.Col>
      <Grid.Col span={12} sm={6} orderSm={2} order={3}>
        <FSearch placeholder="Search here..." />
      </Grid.Col>
      <Grid.Col
        span={6}
        sm={2}
        orderSm={3}
        order={2}
        sx={{
          "@media (min-width: 36em)": {
            alignSelf: "center",
          },
        }}
      >
        <Flex justify={"flex-end"} align={"center"}>
          <FActionIconBtn icon={<IconSunFilled color="#fff" />} />
          <Box
            onClick={() => navigate(PROFILE_ROUTES.PERSONAL_DETAILS)}
            className={classes.avatarContainer}
          >
            <FAvatar src={IMAGES.user_profileImg} />
          </Box>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default memo(TheHeader);

const styles = createStyles({
  root: {
    backgroundColor: COLORS.primaryLight,
    marginBottom: "0px",
    display: "flex",
    padding: "8px 20px",
  },
  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 500,
    color: COLORS.white,
    textTransform: "capitalize",
  },
  subTitleContainer: {
    display: "flex",
  },
  subTitle: {
    margin: 0,
    fontSize: 10,
    fontWeight: 400,
    color: COLORS.white,
    textTransform: "capitalize",
    "& span": {
      display: "inline-block",
      marginLeft: 3,
    },
  },
  active: {
    color: COLORS.secondary,
  },
  avatarContainer: {
    marginLeft: 20,
  },
});
