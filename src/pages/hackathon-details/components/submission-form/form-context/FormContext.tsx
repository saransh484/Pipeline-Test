import { createFormContext } from "@mantine/form";

export enum FieldType {
  Button = "BUTTON",
  Checkbox = "CHECKBOX",
  Date = "DATE",
  Number = "NUMBER",
  Radio = "RADIO",
  Select = "SELECT",
  Text = "TEXT",
  Textarea = "TEXTAREA",
}

export interface FieldAttributes {
  required: boolean;
  name: string;
  label: string;
  placeholder: string;
  inline: boolean;
  type: FieldType;
  minRows: number;
  options: { label: string; value: string; key?: string }[];
}

export interface FieldAttribute {
  data: FieldAttributes[];
}

export const [
  SubmissionFormProvider,
  useSubmissionFormContext,
  useSubmissionForm,
] = createFormContext<FieldAttribute>();
