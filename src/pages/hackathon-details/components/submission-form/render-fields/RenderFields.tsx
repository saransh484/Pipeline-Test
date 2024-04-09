import React, { memo } from "react";
import { Box, Checkbox, Flex, Group, Radio, createStyles } from "@mantine/core";
import {
  FieldAttributes,
  FieldType,
  useSubmissionFormContext,
} from "../form-context/FormContext";
import { FButton, FInputText } from "../../../../../@ui";
import { COLORS } from "../../../../../assets/colors/colors";

interface RenderFieldProp {
  field: FieldAttributes;
  // index: number;
}

const RenderField: React.FC<RenderFieldProp> = ({ field }) => {
  const form = useSubmissionFormContext();
  const { classes } = styles();
  return (
    <Flex direction={"column"} my={20} w={"100%"}>
      {field.type === FieldType.Text && (
        <FInputText
          withAsterisk={field.required}
          label={field.label}
          placeholder={field.placeholder}
          variant="inputText"
          formHandler={form.getInputProps(field.name)}
        />
      )}
      {field.type === FieldType.Textarea && (
        <FInputText
          withAsterisk={field.required}
          variant="textarea"
          minRows={field.minRows}
          label={field.label}
          placeholder={field.placeholder}
          formHandler={form.getInputProps(field.name)}
        />
      )}

      {field.type === FieldType.Checkbox && (
        <Checkbox.Group
          classNames={{ label: classes.label }}
          label={field.name}
          withAsterisk={field.required}
          {...form.getInputProps(field.name)}
        >
          <Group mt="xs">
            {field.options?.map((option) => (
              <Checkbox
                key={option.value}
                value={option.value}
                label={option.label}
              ></Checkbox>
            ))}
          </Group>
        </Checkbox.Group>
      )}

      {field.type === FieldType.Radio && (
        <Radio.Group
          name={field.name}
          label={field.name}
          withAsterisk={field.required}
          classNames={{ label: classes.label }}
          {...form.getInputProps(field.name)}
        >
          <Group mt="xs">
            {field.options?.map((option) => (
              <Radio
                key={option.value}
                value={option.value}
                label={option.label}
              ></Radio>
            ))}
          </Group>
        </Radio.Group>
      )}

      {field.type === FieldType.Button && (
        <Box>
          <FButton
            bg="secondary"
            label={field.label}
            type="submit"
            // onClick={()=>{}}
          />
        </Box>
      )}

      {field.type === FieldType.Select && (
        <FInputText
          withAsterisk={field.required}
          label={field.label}
          placeholder={field.placeholder}
          variant="select"
          data={
            field.options?.map((option) => ({
              value: option.value,
              label: option.label,
            })) ?? []
          }
          formHandler={form.getInputProps(field.name)}
        />
      )}
      {field.type === FieldType.Number && (
        <FInputText
          withAsterisk={field.required}
          variant="number"
          label={field.label}
          min={0}
          placeholder={field.placeholder}
          formHandler={form.getInputProps(field.name)}
        />
      )}
      {field.type === FieldType.Date && (
        <FInputText
          withAsterisk={field.required}
          variant="dateInput"
          label={field.label}
          placeholder={field.placeholder}
          formHandler={form.getInputProps(field.name)}
        />
      )}
    </Flex>
  );
};

export default memo(RenderField);
const styles = createStyles({
  label: {
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "'Public Sans', sans-serif",
    color: COLORS.grayDark600,
    marginBottom: 2,
  },
});
