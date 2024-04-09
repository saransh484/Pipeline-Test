import { CheckboxProps, Checkbox, createStyles } from "@mantine/core";
import React, { memo } from "react";

interface IProps {
  formHandler?: CheckboxProps;
  checked?: boolean;
  label?: React.ReactNode;
  onChange?: (e: boolean) => void;
}

const FCheckbox = (props: IProps) => {
  const { formHandler, checked, label, onChange } = props;
  const { classes } = styles();
  return (
    <Checkbox
      classNames={{ inner: classes.inner }}
      checked={checked}
      onChange={(e) => {
        onChange && onChange(e.target.checked);
      }}
      label={label}
      {...formHandler}
    />
  );
};

export default memo(FCheckbox);

const styles = createStyles({
  inner: {
    marginTop: 5,
  },
});
