import { TextInput, createStyles } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import React, { memo, useEffect } from "react";
import { COLORS } from "../assets/colors/colors";
import { ICONS } from "../assets/icons";

interface IProps {
  onChangeText?: (value: string) => void;
  placeholder?: string;
}

const FSearch: React.FC<IProps> = ({ onChangeText, placeholder }) => {
  const { classes } = useStyle();
  const [value, setValue] = useDebouncedState("", 400);

  useEffect(() => {
    onChangeText && onChangeText(value);
  }, [value, onChangeText]);

  return (
    <TextInput
      classNames={{
        root: classes.inputRoot,
        input: classes.input,
      }}
      placeholder={placeholder ?? "Search"}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      icon={<img src={ICONS.search_icon} alt="search-icon" width={18} />}
    />
  );
};

export default memo(FSearch);

const useStyle = createStyles({
  inputRoot: {
    width: "100%",
  },
  input: {
    borderWidth: 0,
    borderRadius: 8,
    padding: "4px 16px",
    height: "auto !important",
    fontSize: "12px",
    fontWeight: 400,
    color: COLORS.white,
    backgroundColor: COLORS.darkGray,
    fontFamily: "'Poppins', sans-serif",
    "&:focus": {
      borderColor: COLORS.primary,
    },
    "&::placeholder": {
      color: COLORS.white,
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: "0.4px",
      fontFamily: "'Poppins', sans-serif",
    },
  },
});
