import { TextInput, TextInputProps } from "@mantine/core";
import React, { memo } from "react";
import { fInputStyles } from "./index.styles";

interface ICustomTextInput {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  rightSection?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
  formHandler?: TextInputProps;
}

const FInput = (props: ICustomTextInput) => {
  const {
    label,
    placeholder,
    icon,
    rightSection,
    type = "text",
    formHandler,
  } = props;
  const { classes } = fInputStyles();
  return (
    <TextInput
      classNames={{ input: classes.input, label: classes.label }}
      label={label}
      placeholder={placeholder}
      icon={icon}
      rightSection={rightSection}
      type={type}
      {...formHandler}
    />
  );
};

export default memo(FInput);
