import { Box, createStyles } from "@mantine/core";
import React from "react";
import { COLORS } from "../../../assets/colors/colors";
import { FImage, FTypography } from "../../../@ui";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileSteppers = () => {
  const { pathname } = useLocation();
  const { classes } = styles();

  const navigate = useNavigate();

  switch (pathname) {
    case "/profile":
    case "/profile/personal-details":
      return (
        <Box className={classes.root}>
          <Box
            onClick={() => navigate("/profile/personal-details")}
            className={`${classes.circle} ${classes.circleActive}`}
          >
            <Box className={classes.currentStep} />
            <Box className={classes.stepperText}>
              <FTypography
                text="Personal Details"
                variant="lightText"
                color="secondary"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
          <Box className={classes.line}></Box>

          <Box
            onClick={() => navigate("/profile/education-details")}
            className={classes.circle}
          >
            <Box className={classes.stepperText}>
              <FTypography
                text="Education"
                variant="lightText"
                color="gray_6A6E74"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
          <Box className={classes.line}></Box>
          <Box
            onClick={() => navigate("/profile/project-details")}
            className={classes.circle}
          >
            <Box className={classes.stepperText}>
              <FTypography
                text="Projects"
                variant="lightText"
                color="gray_6A6E74"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
        </Box>
      );
    case "/profile/education-details":
      return (
        <Box className={classes.root}>
          <Box
            className={classes.circle}
            onClick={() => navigate("/profile/personal-details")}
          >
            <Box className={classes.currentStep} />
            <FImage alt="active" name="stepperCompleted" width={32} />
            <Box className={classes.stepperText}>
              <FTypography
                text="Personal Details"
                variant="lightText"
                color="secondary"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
          <Box className={`${classes.line} ${classes.activeLine}`}></Box>

          <Box
            className={`${classes.circle} ${classes.circleActive}`}
            onClick={() => navigate("/profile/education-details")}
          >
            <Box className={classes.currentStep} />

            <Box className={classes.stepperText}>
              <FTypography
                text="Education"
                variant="lightText"
                color="secondary"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
          <Box className={classes.line}></Box>
          <Box
            className={classes.circle}
            onClick={() => navigate("/profile/project-details")}
          >
            <Box className={classes.stepperText}>
              <FTypography
                text="Projects"
                variant="lightText"
                color="gray_6A6E74"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
        </Box>
      );
    case "/profile/project-details":
      return (
        <Box className={classes.root}>
          <Box
            className={classes.circle}
            onClick={() => navigate("/profile/personal-details")}
          >
            <Box className={classes.currentStep} />
            <FImage alt="active" name="stepperCompleted" width={32} />
            <Box className={classes.stepperText}>
              <FTypography
                text="Personal Details"
                variant="lightText"
                color="secondary"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
          <Box className={`${classes.line} ${classes.activeLine}`}></Box>

          <Box
            className={`${classes.circle} ${classes.circleActive}`}
            onClick={() => navigate("/profile/education-details")}
          >
            <Box className={classes.currentStep} />
            <FImage alt="active" name="stepperCompleted" width={32} />

            <Box className={classes.stepperText}>
              <FTypography
                text="Education"
                variant="lightText"
                color="secondary"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
          <Box className={`${classes.line} ${classes.activeLine}`}></Box>
          <Box
            className={`${classes.circle} ${classes.circleActive}`}
            onClick={() => navigate("/profile/project-details")}
          >
            <Box className={classes.currentStep} />
            <Box className={classes.stepperText}>
              <FTypography
                text="Projects"
                variant="lightText"
                color="secondary"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
        </Box>
      );
    default:
      return (
        <Box className={classes.root}>
          <Box
            className={`${classes.circle} ${classes.circleActive}`}
            onClick={() => navigate("/profile/personal-details")}
          >
            <Box className={classes.currentStep} />
            <Box className={classes.stepperText}>
              <FTypography
                text="Personal Details"
                variant="lightText"
                color="secondary"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
          <Box className={classes.line}></Box>

          <Box
            className={classes.circle}
            onClick={() => navigate("/profile/education-details")}
          >
            <Box className={classes.stepperText}>
              <FTypography
                text="Education"
                variant="lightText"
                color="gray_6A6E74"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
          <Box className={classes.line}></Box>
          <Box
            className={classes.circle}
            onClick={() => navigate("/profile/project-details")}
          >
            <Box className={classes.stepperText}>
              <FTypography
                text="Projects"
                variant="lightText"
                color="gray_6A6E74"
                fontSize={16}
                fontWeight={400}
              />
            </Box>
          </Box>
        </Box>
      );
  }
};

export default ProfileSteppers;

const styles = createStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 500,
    margin: "32px auto",
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 100,
    borderColor: COLORS.gray_D1D5DB,
    borderWidth: 2,
    borderStyle: "solid",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  circleActive: {
    borderColor: COLORS.secondary,
  },
  activeLine: {
    backgroundColor: COLORS.secondary,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: COLORS.gray_D1D5DB,
    marginHorizontal: 10,
  },
  stepperText: {
    position: "absolute",
    bottom: -35,
    width: 150,
    left: 0,
  },

  currentStep: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 100,
  },
});
