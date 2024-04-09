import React, { Fragment, memo, useState } from "react";
import { Box } from "@mantine/core";
import { FButton, FCheckbox, FInput, FTypography } from "../../../@ui";
import { COLORS } from "../../../assets/colors/colors";
import { useForm, yupResolver } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../../enum/routes";
import { signUpValidation } from "../../../validations/auth/sign-up/signUp.validation";
import { singUpInitialValues } from "../../../initial-values/auth/sign-up/signUp.values";
import SocialMediaLogin from "../../../components/social-media-login/SocialMediaLogin";
import { authFormStyles } from "./index.styles";

import IconButton from "../../../@ui/button/IconButton";
import { ICONS } from "../../../assets/icons";
import { UserSignupMutationVariables, useUserSignupMutation } from "../../../generated/graphql";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import moment from "moment";
import PROFILE_ROUTES from "../../../enum/profile.routes";
import { useAppDispatch } from "../../../app/hooks";
import { updateUserData } from "../../../app/reducers/user-data/userData-reducer";

const SignUpForm = () => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState("password");
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const [signUpMutate, { loading }] = useUserSignupMutation();
  const formHandler = useForm({
    initialValues: singUpInitialValues,
    validate: yupResolver(signUpValidation),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  });

  const { reset } = formHandler;

  const handleSignUp = async (variables: UserSignupMutationVariables) => {
    const res = await signUpMutate({
      variables: variables,
    });
    if (
      res.data?.userSignup &&
      signIn({
        token: res.data.userSignup.token ?? "",
        expiresIn: moment().add(1, "days").diff(moment(), "minutes"),
        tokenType: "Bearer",
        authState: res.data.userSignup.user,
      })
    ) {
      dispatch(updateUserData(res.data.userSignup.user));

      localStorage.setItem("authStudentToken", res.data.userSignup.token ?? "");
      reset();
      navigate(`${PROFILE_ROUTES.PERSONAL_DETAILS}`);
    }
  };

  const { classes } = authFormStyles();

  if (isAuthenticated()) {
    window.location.replace(`${ROUTES.DASHBOARD}`);
  }
  return (
    <Fragment>
      <form onSubmit={formHandler.onSubmit(handleSignUp)}>
        <Box>
          <h2 className={classes.heading}>Create your account</h2>
          <p className={classes.description}>It&apos;s free and easy</p>
        </Box>
        <Box mt={20}>
          <FInput
            label="Full name"
            placeholder="Enter your name"
            formHandler={formHandler.getInputProps("name")}
          />
        </Box>
        <Box mt={20}>
          <FInput
            label="E-mail Id"
            placeholder="Type your e-mail"
            formHandler={formHandler.getInputProps("email")}
          />
        </Box>
        <Box mt={20}>
          <FInput
            label="Password"
            placeholder="Type your password"
            rightSection={
              show === "text" ? (
                <IconButton
                  onClick={() => setShow("password")}
                  label={<img src={ICONS.eyeCloseIcon} alt="lock" />}
                />
              ) : (
                <IconButton
                  onClick={() => setShow("text")}
                  label={<img src={ICONS.eyeOpenIcon} alt="lock" />}
                />
              )
            }
            type={show}
            formHandler={formHandler.getInputProps("password")}
          />
          <Box mt={8}>
            <FTypography
              variant="lightText"
              color="grannySmith"
              text=" Must be 8 characters at least"
              align="left"
            />
          </Box>
        </Box>
        <Box mt={40} className={classes.checkBoxContainer}>
          <FCheckbox
            formHandler={formHandler.getInputProps("policy")}
            onChange={(e) => e}
            label={
              <span className={`${classes.mediumText} `}>
                By creating an account means you agree to the{" "}
                <span style={{ color: COLORS.aliceBlueDark }}>
                  Terms and conditions,
                </span>{" "}
                and our{" "}
                <span style={{ color: COLORS.aliceBlueDark }}>
                  Privacy Policy
                </span>
              </span>
            }
          />
        </Box>

        <Box mt={40}>
          <FButton
            variant="largeRadius"
            bg="blackDark"
            label="Sign Up"
            type="submit"
            loading={loading}
          />
        </Box>
      </form>
      <Box mt={20}>
        <FTypography
          variant="lightText"
          color="grannySmith"
          text="or do it via other accounts"
          align="center"
        />
      </Box>

      <SocialMediaLogin />
      <Box mt={20}>
        <span className={`${classes.signUpText} ${classes.textCenter}`}>
          Already have an account?{" "}
          <Link to={ROUTES.LOGIN} className={classes.linkText}>
            <span style={{ color: "#000" }}>Sign In</span>
          </Link>
        </span>
      </Box>
    </Fragment>
  );
};

export default memo(SignUpForm);
