import { ActionIcon, Box, Grid } from "@mantine/core";
import React, { memo, useMemo } from "react";
import { useStudentDetailsFormContext } from "./StudentProfileForm.context";
import { FImage, FInputText } from "../../../@ui";

import FMultiSelect from "../../../@ui/multi-select/FMultiSelect";
import { useGetTechStacksQuery } from "../../../generated/graphql";
import { TECH_STACKS } from "../../../constant/constant";
import FFileDropzone from "../../../@ui/dropzone/FFileDropzone";
import { fileToBase64String } from "../../../utils/fileToBase64String";

const ProjectDetailsFormRow = () => {
  const {
    values: { projectDetails },
    getInputProps,
    removeListItem,
    setFieldValue,
  } = useStudentDetailsFormContext();

  // get tech stacks

  const { data: techData, loading: techLoading } = useGetTechStacksQuery();

  const techStacks = useMemo(() => {
    if (!techLoading && techData && techData.getTechStacks) {
      return techData.getTechStacks.map((tech) => ({
        value: {
          name: tech?.label ?? "",
          icon: tech?.icon ?? "",
        },
        label: tech?.label ?? "",
      }));
    } else {
      return TECH_STACKS;
    }
  }, [techData, techLoading]);

  const fields = projectDetails.map((item, index) => {
    return (
      <Grid gutter={16} key={`item_${index}`} my={24}>
        <Grid.Col lg={12}>
          <FInputText
            label="Project Name"
            variant="inputText"
            placeholder="Enter Project Name"
            formHandler={getInputProps(`projectDetails.${index}.projectName`)}
          />
        </Grid.Col>
        <Grid.Col lg={12}>
          <FMultiSelect
            label={"TECH STACKS"}
            data={techStacks}
            placeholder={"Tech stacks"}
            formHandler={getInputProps(`projectDetails.${index}.techStacks`)}
          />
        </Grid.Col>
        <Grid.Col lg={6}>
          <FInputText
            label="Date of Completion"
            variant="dateInput"
            placeholder="e.g. 20/7/2023"
            formHandler={getInputProps(
              `projectDetails.${index}.dateOfCompletion`
            )}
          />
        </Grid.Col>
        <Grid.Col lg={6}>
          <FInputText
            label="Deployed Link"
            variant="inputText"
            placeholder="Enter Deployed Link"
            formHandler={getInputProps(`projectDetails.${index}.deployedLink`)}
          />
        </Grid.Col>
        <Grid.Col lg={12}>
          <FFileDropzone
            label="Upload Project Zip"
            description="Drop files here or click to upload."
            onChange={async (file) =>
              setFieldValue(`projectDetails.${index}.projectFile`, {
                fileName: file[0].name,
                base64String: await fileToBase64String(file[0]),
              })
            }
          />
        </Grid.Col>

        {projectDetails.length > 1 && (
          <Grid.Col
            lg={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <ActionIcon onClick={() => removeListItem("projectDetails", index)}>
              <FImage width={28} alt="IconDelete" name="IconDelete" />
            </ActionIcon>
          </Grid.Col>
        )}
      </Grid>
    );
  });

  return <Box>{fields}</Box>;
};

export default memo(ProjectDetailsFormRow);
