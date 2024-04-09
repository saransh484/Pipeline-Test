import { Box, Grid } from "@mantine/core";
import React, { FC, memo, useMemo } from "react";
import { FButton, FInputText, FTypography } from "../../../@ui";
import FFileDropzone from "../../../@ui/dropzone/FFileDropzone";
import { useStudentDetailsFormContext } from "./StudentProfileForm.context";
import { useGetTechStacksQuery } from "../../../generated/graphql";
import { TECH_STACKS } from "../../../constant/constant";
import FMultiSelect from "../../../@ui/multi-select/FMultiSelect";
import { useNavigate } from "react-router-dom";
import { fileToBase64String } from "../../../utils/fileToBase64String";

interface IPersonalDetailsForm {
  loading: boolean;
}

const PersonalDetailsForm: FC<IPersonalDetailsForm> = ({ loading }) => {
  const { getInputProps, setFieldValue } = useStudentDetailsFormContext();
  const navigate = useNavigate();

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

  return (
    <Box>
      <FTypography
        fontSize={20}
        fontWeight={700}
        text="Personal Details"
        variant="tittle"
        fontFamily="'Public Sans', sans-serif"
      />
      <FTypography
        fontSize={14}
        fontWeight={400}
        text="Add your profile personal details"
        variant="description"
        fontFamily="'Public Sans', sans-serif"
        color="midEmphasis"
        margin={"6px 0px"}
      />

      <Grid gutter={16} mt={24}>
        <Grid.Col span={6} lg={6} sm={12} xs={12}>
          <FFileDropzone
            label="Profile Picture"
            description="Drop files here or click to upload."
            onChange={async (file) =>
              setFieldValue("personalDetails.profilePicture", {
                fileName: file[0].name,
                base64String: await fileToBase64String(file[0]),
              })
            }
          />
        </Grid.Col>
        <Grid.Col span={6} lg={6} sm={12} xs={12}>
          <FFileDropzone
            label="Cover Photo "
            description="Drop files here or click to upload."
            onChange={async (file) => {
              setFieldValue("personalDetails.coverPhoto", {
                fileName: file[0].name,
                base64String: await fileToBase64String(file[0]),
              });
            }}
          />
        </Grid.Col>
        <Grid.Col span={12} lg={12} sm={12} xs={12}>
          <FInputText
            label="SHORT BIO"
            formHandler={getInputProps(`personalDetails.shortBio`)}
            placeholder="A short bio about yourself"
            variant="textarea"
          />
        </Grid.Col>
        <Grid.Col span={12} lg={12} sm={12} xs={12}>
          <FMultiSelect
            data={techStacks}
            label={"TECH STACKS"}
            placeholder={"Tech stacks"}
            formHandler={getInputProps("personalDetails.techStacks")}
            customMultiValueSelect
          />
        </Grid.Col>
        <Grid.Col span={12} lg={12} sm={12} xs={12}>
          <FButton
            disabled={loading}
            loading={loading}
            mt={32}
            onClick={() => navigate("/profile/education-details")}
            radius={8}
            fullWidth
            type="button"
            bg="primary"
            label="Continue"
            p={16}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default memo(PersonalDetailsForm);
