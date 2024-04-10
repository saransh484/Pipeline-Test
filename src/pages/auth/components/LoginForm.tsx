import React, { Fragment, memo, useState } from "react";
import { Box } from "@mantine/core";
import { FButton, FInput, FTypography } from "../../../@ui";
import { useForm, yupResolver } from "@mantine/form";
import { loginInitialValues } from "../../../initial-values/auth/login/login.values";
import { loginValidation } from "../../../validations/auth/login/login.validation";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../../enum/routes";

import { authFormStyles } from "./index.styles";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import moment from "moment";
import { ICONS } from "../../../assets/icons";
import IconButton from "../../../@ui/button/IconButton";
import SocialMediaLogin from "../../../components/social-media-login/SocialMediaLogin";
import {
  UserLoginMutationVariables,
  useUserLoginMutation,
} from "../../../generated/graphql";
import { updateUserData } from "../../../app/reducers/user-data/userData-reducer";
import { useAppDispatch } from "../../../app/hooks";

const LoginForm = () => {
  const [show, setShow] = useState("password");
  const navigate = useNavigate();
  const [loginMutate, { loading }] = useUserLoginMutation();

  const dispatch = useAppDispatch();

  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  const formHandler = useForm({
    initialValues: loginInitialValues,
    validate: yupResolver(loginValidation),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  });

  const { reset } = formHandler;

  const handleLogin = async (variables: UserLoginMutationVariables) => {
    const res = await loginMutate({ variables: variables });
    if (
      res.data?.userLogin &&
      signIn({
        token: res.data.userLogin.token ?? "",
        expiresIn: moment().add(1, "days").diff(moment(), "minutes"),
        tokenType: "Bearer",
        authState: res.data.userLogin.user,
      })
    ) {
      dispatch(updateUserData(res.data.userLogin.user));

      localStorage.setItem("authStudentToken", res.data.userLogin.token ?? "");
      reset();
      navigate(`${ROUTES.DASHBOARD}`);
    }
  };

  const { classes } = authFormStyles();

  if (isAuthenticated()) {
    window.location.replace(`${ROUTES.DASHBOARD}`);
  }
  return (
    <Fragment>
      <form onSubmit={formHandler.onSubmit(handleLogin)}>
        <Box>
          <h2 className={classes.heading}>Welcome back User!</h2>
          <p className={classes.description}>Lets Do something something today 🦓</p>
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
              text=" Forgot Password?"
              align="end"
            />
          </Box>
        </Box>

        <Box mt={20}>
          <FButton
            variant="largeRadius"
            bg="blackDark"
            label="Sign In"
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
          Don’t have an account?{" "}
          <Link to={ROUTES.SIGNUP} className={classes.linkText}>
            <span style={{ color: "#000" }}>Sign Up</span>
          </Link>
        </span>
      </Box>
    </Fragment>
  );
};

export default memo(LoginForm);
