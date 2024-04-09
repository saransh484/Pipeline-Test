import { MultiSelect, MultiSelectProps } from "@mantine/core";
import React, { memo } from "react";
import { fMultiSelectTextStyles } from "./index.styles";
import FMultiSelectValue from "./components/FMultiSelectValue";

interface IFMultiSelect {
  label: string;
  placeholder: string;
  formHandler?: Omit<MultiSelectProps, "data">;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any[];
  customMultiValueSelect?: boolean;
}

const FMultiSelect: React.FC<IFMultiSelect> = ({
  label,
  placeholder,
  customMultiValueSelect,
  data,
  formHandler,
}) => {
  const { classes } = fMultiSelectTextStyles();
  return (
    <MultiSelect
      classNames={{
        input: classes.input,
        label: classes.label,
        defaultValue: classes.defaultValue,
        defaultValueRemove: classes.defaultValueRemove,
        defaultValueLabel: classes.defaultValueLabel,
      }}
      styles={{ input: { minHeight: 100 } }}
      limit={20}
      label={label}
      placeholder={placeholder}
      valueComponent={customMultiValueSelect ? FMultiSelectValue : undefined}
      itemComponent={customMultiValueSelect ? FMultiSelectValue : undefined}
      nothingFound="Nothing found"
      clearable
      {...formHandler as MultiSelectProps}
      data={data ?? []}
    />
  );
};

export default memo(FMultiSelect);
