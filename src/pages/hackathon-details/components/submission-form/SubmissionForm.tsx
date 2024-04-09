import { Box } from "@mantine/core";
import React, { useEffect } from "react";
import {
  FieldAttribute,
  FieldAttributes,
  FieldType,
  SubmissionFormProvider,
  useSubmissionForm,
} from "./form-context/FormContext";
import RenderFields from "./render-fields/RenderFields";
import {
  FormStructure,
  useFillSubmissionFormMutation,
  useGetSubmissionFormQuery,
} from "../../../../generated/graphql";
import { FTypography } from "../../../../@ui";
import { yupResolver } from "@mantine/form";
import { generateValidation } from "./generateValidation";
import FLoading from "../../../../@ui/loading/FLoading";
import { showSnackbar } from "../../../../utils/showSnackbar";

interface Iprops {
  projectId: string;
}

const SubmissionForm = (props: Iprops) => {
  const { projectId } = props;

  const { data, loading: loadingQuery } = useGetSubmissionFormQuery({
    // static projectId for testing, will be removed once component is finished
    // variables: { projectId: "6602753723f5117ee6cbd856" },
    variables: { projectId: projectId },
  });

  function removeTypename(obj: FormStructure[]) {
    const newObj = JSON.parse(JSON.stringify(obj));
    newObj.forEach((val: FormStructure) => {
      delete val.__typename;
      val.options?.forEach((optionVal) => {
        delete optionVal.__typename;
      });
    });
    return newObj;
  }

  const submissionForm = removeTypename(data?.getSubmissionForm ?? []);
  // const submissionForm = data?.getSubmissionForm ?? [];

  const [fillSubmissionFormMutation] = useFillSubmissionFormMutation();

  const getInitialValues = (data: FormStructure[]) => {
    return data.map((e) => ({
      ...e,
      placeholder: e.placeholder ?? "",
      inline: !!e.inline,
      required: !!e.required,
      type: e.type as FieldType,
      options: e.options
        ? e.options.map((option) => ({
            ...option,
            key: option.key ?? undefined,
          }))
        : [],
      minRows: e.minRows ?? undefined,
    }));
  };

  const formHandler = useSubmissionForm({
    initialValues: {
      data: [] as FieldAttributes[],
    },
    validate: yupResolver(generateValidation(submissionForm)),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  });

  useEffect(() => {
    if (!loadingQuery && submissionForm?.length) {
      formHandler.setValues({
        data: getInitialValues(submissionForm),
      });
    }
  }, [data, loadingQuery]);

  if (loadingQuery) {
    return <FLoading />;
  }

  const renderField = (field: FieldAttributes, index: number) => {
    return <RenderFields key={index} field={field} />;
  };

  const handleSubmit = async (e: FieldAttribute) => {
    const { data, ...values } = e;
    try {
      const res = await fillSubmissionFormMutation({
        variables: {
          projectId: projectId,
          form: { value: values, form: data },
        },
        onError: (e) => {
          console.log("errorone", e);
        },
      });

      if (res.data?.fillSubmissionForm.status === "1") {
        showSnackbar({ msg: "Submission Successfull", variant: "success" });
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <Box py={12}>
      <Box>
        <FTypography
          text={"Submission Form"}
          variant="heading"
          fontWeight={600}
          fontSize={20}
          color="gray_343339"
          margin={"2px 0px"}
        />
        <FTypography
          text={"Fill the Submission Form"}
          variant="lightText"
          fontWeight={400}
          fontSize={14}
          color="midEmphasis"
          margin={"8px 0px"}
        />
      </Box>
      <SubmissionFormProvider form={formHandler}>
        <form onSubmit={formHandler.onSubmit((e) => handleSubmit(e))}>
          {formHandler.values.data.map(renderField)}
        </form>
      </SubmissionFormProvider>
    </Box>
  );
};

export default SubmissionForm;
