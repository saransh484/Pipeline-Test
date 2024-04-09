import * as Yup from "yup";

export const teamValidation = Yup.object().shape({
  registrationType: Yup.string().required("field is required"),
  teamName: Yup.string().when("registrationType", {
    is: "TEAM",
    then: (schema) => schema.required("field is required"),
  }),
  teamLeader: Yup.string().when("registrationType", {
    is: "TEAM",
    then: (schema) => schema.required("field is required"),
  }),
  teamLeaderMail: Yup.string().when("registrationType", {
    is: "TEAM",
    then: (schema) =>
      schema.email("enter a valid email").required("field is required"),
  }),
  teamDetail: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string(),
        email: Yup.string(),
      })
    )
    .when("registrationType", {
      is: "TEAM",
      then: (schema) => {
        return schema.of(
          Yup.object().shape({
            name: Yup.string().required("field is required"),
            email: Yup.string()
              .email("enter a valid email")
              .required("field is required"),
          })
        );
      },
    }),
});
