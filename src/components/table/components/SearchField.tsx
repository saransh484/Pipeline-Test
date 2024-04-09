import { TextInput, createStyles } from "@mantine/core";
import React, { memo } from "react";
import { COLORS } from "../../../assets/colors/colors";

interface IProps {
  onChangeText?: (value: string) => void;
}

const SearchField: React.FC<IProps> = ({ onChangeText }) => {
  const { classes } = useStyle();
  return (
    <TextInput
      className={classes.root}
      placeholder="search"
      onChange={(e) => {
        onChangeText && onChangeText(e.target.value);
      }}
    />
  );
};

export default memo(SearchField);

const useStyle = createStyles({
  root: {
    width: "100%",
    maxWidth: 380,
    marginRight: 10,
    "& input": {
      borderColor: COLORS.warning,
      borderRadius: 5,
      padding: "0px 15px",
      height: "auto !important",
      fontSize: "14px",
      fontWeight: 300,
    },
  },
});
