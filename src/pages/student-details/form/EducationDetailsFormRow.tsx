import { ActionIcon, Box, Grid } from "@mantine/core";
import React, { memo } from "react";
import { useStudentDetailsFormContext } from "./StudentProfileForm.context";
import { FImage, FInputText } from "../../../@ui";
import { COUNTRY_LIST, STATES_LIST_INDIA } from "../../../constant/constant";

const EducationDetailsFormRow = () => {
  const {
    values: { educationDetails },
    getInputProps,
    removeListItem,
  } = useStudentDetailsFormContext();

  const fields = educationDetails.map((item, index) => {
    return (
      <Grid gutter={16} key={`item_${index}`} my={24}>
        <Grid.Col lg={12}>
          <FInputText
            label="Institute Name"
            variant="inputText"
            placeholder="Enter Institute Name"
            formHandler={getInputProps(
              `educationDetails.${index}.instituteName`
            )}
          />
        </Grid.Col>
        <Grid.Col lg={6}>
          <FInputText
            label="Batch"
            variant="autocomplete"
            data={[{ label: "2014", value: "2014" }]}
            placeholder="Select or type your passing year"
            formHandler={getInputProps(`educationDetails.${index}.batch`)}
          />
        </Grid.Col>
        <Grid.Col lg={6}>
          <FInputText
            label="Enter Percentage"
            variant="inputText"
            placeholder="e.g. 95%"
            formHandler={getInputProps(`educationDetails.${index}.percentage`)}
          />
        </Grid.Col>
        <Grid.Col lg={6}>
          <FInputText
            label="Select country"
            variant="autocomplete"
            data={COUNTRY_LIST}
            placeholder="Select or type country name"
            formHandler={getInputProps(`educationDetails.${index}.country`)}
          />
        </Grid.Col>
        <Grid.Col lg={6}>
          <FInputText
            label="Select state"
            variant="autocomplete"
            data={STATES_LIST_INDIA}
            placeholder="Select or type state name"
            formHandler={getInputProps(`educationDetails.${index}.state`)}
          />
        </Grid.Col>
        {educationDetails.length > 1 && (
          <Grid.Col
            lg={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <ActionIcon
              onClick={() => removeListItem("educationDetails", index)}
            >
              <FImage width={28} alt="IconDelete" name="IconDelete" />
            </ActionIcon>
          </Grid.Col>
        )}
      </Grid>
    );
  });

  return <Box>{fields}</Box>;
};

export default memo(EducationDetailsFormRow);
