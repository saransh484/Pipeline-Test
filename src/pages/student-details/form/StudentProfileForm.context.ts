import { createFormContext } from "@mantine/form";
import { TStudentDetailsFormValues } from "../../../initial-values/auth/student-details/student-details.values";

export const [
  StudentDetailsFormProvider,
  useStudentDetailsFormContext,
  useStudentDetailsForm,
] = createFormContext<TStudentDetailsFormValues>();
