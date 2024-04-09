import { Box, Container, Grid } from "@mantine/core";
import React, { memo } from "react";
import { IMAGES } from "../../assets/image";
import SignUpForm from "./components/SignUpForm";
import { FImage } from "../../@ui";
import { authStyles } from "./index.styles";

const SignUp = () => {
  const { classes } = authStyles();
  return (
    <div className={classes.root}>
      <Container
        size={"xl"}
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          padding: 0,
          "@media(max-width:992px)": {
            height: "100%",
          },
        }}
      >
        <Grid
          sx={{
            height: "100%",
            width: "100%",
            "@media(max-width:992px)": {
              height: "auto",
            },
          }}
          justify="space-between"
          m={0}
        >
          <Grid.Col
            span={12}
            md={6}
            sx={{
              background: "#353945",
              height: "100%",
              "@media(max-width:992px)": {
                height: "auto",
                padding: "30px 24px",
              },
              "@media(max-width:650px)": {
                height: "auto",
                padding: "30px 16px",
              },
            }}
          >
            <Box className={classes.LeftContainer}>
              <Box className={classes.logoContainer}>
                <FImage
                  name="logo_student"
                  className={classes.logo}
                  alt="login-Img"
                />
              </Box>
              <Box className={classes.LeftFooterContainer}>
                <Box className={classes.contentContainer}>
                  <Box>
                    <h1 className={classes.heading}>Welcome to Sweetdeli!</h1>
                    <p className={classes.description}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vulputate ut laoreet velit ma.
                    </p>
                  </Box>
                </Box>
                <Box className={classes.bannerImgContainer}>
                  <img src={IMAGES.galleryImg} alt="" />
                </Box>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col
            span={12}
            md={6}
            sx={{
              height: "100%",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box className={classes.formContainer}>
              <SignUpForm />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default memo(SignUp);
