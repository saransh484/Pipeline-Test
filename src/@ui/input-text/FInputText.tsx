import {
  Autocomplete,
  AutocompleteProps,
  MultiSelect,
  MultiSelectProps,
  Select,
  SelectItem,
  SelectProps,
  TextInput,
  TextInputProps,
  Textarea,
  TextareaProps,
} from "@mantine/core";
import React, { Fragment, memo } from "react";
import { fInputTextStyles } from "./index.styles";
import { DateInput, DateInputProps } from "@mantine/dates";
import FMultiSelectValue from "./components/FMultiSelectValue";
import FMultiSelectItem from "./components/FMultiSelectItem";
import FImage from "../FImage";

type InputProps = TextInputProps |
  TextareaProps |
  DateInputProps |
  SelectProps |
  MultiSelectProps;

interface IProps {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  rightSection?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
  formHandler?: InputProps;
  withAsterisk?: boolean;
  variant:
    | "inputText"
    | "textarea"
    | "dateInput"
    | "select"
    | "multiSelect"
    | "autocomplete";
  data?: (string | SelectItem)[];
  customMultiValueSelect?: MultiSelectProps;
}

const FInputText = (props: IProps) => {
  const {
    label,
    placeholder,
    icon,
    rightSection,
    type = "text",
    formHandler,
    variant,
    withAsterisk,
    data,
    customMultiValueSelect,
  } = props;
  const { classes } = fInputTextStyles();

  let inputComponent;

  switch (variant) {
    case "inputText":
      inputComponent = (
        <TextInput
          classNames={{
            input: classes.input,
            label: classes.label,
          }}
          label={label}
          placeholder={placeholder}
          icon={icon}
          rightSection={rightSection}
          type={type}
          {...formHandler as TextInputProps}
        />
      );
      break;
    case "textarea":
      inputComponent = (
        <Textarea
          classNames={{ input: classes.input, label: classes.label }}
          label={label}
          placeholder={placeholder}
          withAsterisk={withAsterisk}
          {...formHandler as TextareaProps}
          minRows={4}
          icon={icon}
        />
      );
      break;
    case "dateInput":
      inputComponent = (
        <DateInput
          rightSection={<FImage name="iconDate" alt="date icon" />}
          classNames={{
            input: classes.input,
            label: classes.label,
          }}
          valueFormat="DD/MM/YYYY "
          label={label}
          placeholder={placeholder}
          mx="auto"
          {...formHandler as DateInputProps}
        />
      );
      break;
    case "select":
      inputComponent = (
        <Select
          classNames={{
            input: classes.input,
            label: classes.label,
          }}
          label={label}
          placeholder={placeholder}
          {...formHandler as SelectProps}
          data={data ?? []}
        />
      );
      break;

    case "autocomplete":
      inputComponent = (
        <Autocomplete
          classNames={{
            input: classes.input,
            label: classes.label,
          }}
          label={label}
          placeholder={placeholder}
          {...formHandler as AutocompleteProps}
          data={data ?? []}
        />
      );
      break;
    case "multiSelect":
      inputComponent = (
        <MultiSelect
          classNames={{
            input: classes.input,
            label: classes.label,
            defaultValue: classes.defaultValue,
            defaultValueRemove: classes.defaultValueRemove,
            defaultValueLabel: classes.defaultValueLabel,
          }}
          limit={20}
          label={label}
          placeholder={placeholder}
          valueComponent={customMultiValueSelect && FMultiSelectValue}
          itemComponent={customMultiValueSelect && FMultiSelectItem}
          nothingFound="Nothing found"
          clearable
          {...formHandler as MultiSelectProps}
          data={data ?? []}
        />
      );
      break;
    default:
      inputComponent = null;
  }

  return <Fragment>{inputComponent}</Fragment>;
};

export default memo(FInputText);
