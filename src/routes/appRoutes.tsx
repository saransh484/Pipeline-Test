import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import ProtectedRoute from "../routers/Protected.route";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import ProfileRoute from "../routers/Profile.route";
import StudentDetails from "../pages/student-details/StudentDetails";
import ROUTES from "../enum/routes";
import PROFILE_ROUTES from "../enum/profile.routes";
import HackathonDetails from "../pages/hackathon-details/HackathonDetails";
import HistoryDetails from "../pages/history-details/HistoryDetails";
import History from "../pages/history/History";
import Profile from "../pages/profile/Profile";
import Hackathon from "../pages/hackathon/Hackathon";
import Externships from "../pages/externships/Externships";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTES.HACKATHONS_DETAILS,
        element: <HackathonDetails />,
      },
      {
        path: ROUTES.HISTORY_DETAILS,
        element: <HistoryDetails />,
      },
      {
        path: ROUTES.HISTORY,
        element: <History />,
      },
      {
        path: ROUTES.Profile,
        element: <Profile/>,
      },
      {
        path: ROUTES.HACKATHONS,
        element: <Hackathon/>,
      },
      {
        path: ROUTES.EXTERNSHIPS,
        element: <Externships/>,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: PROFILE_ROUTES.PROFILE,
    element: <ProfileRoute />,
    children: [
      // project routes
      {
        path: PROFILE_ROUTES.PERSONAL_DETAILS,
        element: <StudentDetails />,
      },
      {
        path: PROFILE_ROUTES.EDUCATION_DETAILS,
        element: <StudentDetails />,
      },
      {
        path: PROFILE_ROUTES.PROJECT_DETAILS,
        element: <StudentDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROUTES.SIGNUP,
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
]);
