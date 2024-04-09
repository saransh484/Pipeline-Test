import React, { memo, useEffect, useMemo } from "react";
import {
  StudentDetailsFormProvider,
  useStudentDetailsForm,
} from "./StudentProfileForm.context";
import { initialValues } from "../../../initial-values";
import { useLocation, useNavigate } from "react-router-dom";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationDetailsForm from "./EducationDetailsForm";
import ProjectDetailsForm from "./ProjectDetailsForm";
import { Box } from "@mantine/core";
import { useUpdateStudentDetailsMutation } from "../../../generated/graphql";

import ROUTES from "../../../enum/routes";
import { showSnackbar } from "../../../utils/showSnackbar";
import { useAppSelector } from "../../../app/hooks";
import {
  TEducationDetails,
  TProjectDetails,
} from "../../../initial-values/auth/student-details/student-details.values";
import moment from "moment";

const StudentProfileForm = () => {
  const { userData } = useAppSelector((state) => state.userData);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const form = useStudentDetailsForm({
    initialValues: { ...initialValues.studentDetailsValues },
  });

  const { setValues } = form;

  const [updateDetailsMutation, { loading }] =
    useUpdateStudentDetailsMutation();

  const handleFormSubmit = async (
    values: typeof initialValues.studentDetailsValues
  ) => {
    const res = await updateDetailsMutation({ variables: values });

    if (res.data?.updateStudentDetails?.status === "success") {
      showSnackbar({ msg: "Details Updated Successfully", variant: "success" });
      navigate(`${ROUTES.DASHBOARD}`);
    }
  };

  console.log("userData", userData);

  useEffect(() => {
    if (userData) {
      const { educationDetails, personalDetails, projectDetails } = userData;
      setValues({
        personalDetails: {
          ...personalDetails,
          coverPhoto: {
            base64String: "",
            fileName: "",
          },
          profilePicture: {
            base64String: "",
            fileName: "",
          },
        },
        educationDetails: [
          ...educationDetails.map((eduDetail: TEducationDetails) => ({
            ...eduDetail,
          })),
        ],
        projectDetails: [
          ...projectDetails.map((project: TProjectDetails) => ({
            ...project,
            dateOfCompletion:
              project.dateOfCompletion !== ""
                ? moment(project.dateOfCompletion)
                : "",
            projectFile: {
              base64String: "",
              fileName: "",
            },
          })),
        ],
      });
    }
  }, [userData, setValues]);

  const currentForm = useMemo(() => {
    switch (pathname) {
      case "/profile":
      case "/profile/personal-details":
        return <PersonalDetailsForm loading={loading} />;
      case "/profile/education-details":
        return <EducationDetailsForm loading={loading} />;
      case "/profile/project-details":
        return <ProjectDetailsForm loading={loading} />;
      default:
        return <PersonalDetailsForm loading={loading} />;
    }
  }, [pathname, loading]);

  return (
    <StudentDetailsFormProvider form={form}>
      <Box mt={70}>
        <form onSubmit={form.onSubmit(handleFormSubmit)}>{currentForm}</form>
      </Box>
    </StudentDetailsFormProvider>
  );
};

export default memo(StudentProfileForm);
