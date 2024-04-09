import * as Yup from "yup";
import { FormStructure } from "../../../../generated/graphql";
import { FieldType } from "./form-context/FormContext";

export const generateValidation = (fields: FormStructure[]) => {
  const schemaObject: Yup.AnyObject = {};
  fields?.forEach((field) => {
    if (
      field.type !== FieldType.Button &&
      field.type !== FieldType.Checkbox &&
      field.required
    ) {
      schemaObject[field.name] = Yup.string().required(
        `${field.label} is required`
      );
    }
    if (field.type === FieldType.Checkbox) {
      schemaObject[field.name] = Yup.array().required(
        `${field.label} is required`
      );
    }
  });
  const validateSchema = Yup.object({
    ...schemaObject,
  });
  return validateSchema;
};
