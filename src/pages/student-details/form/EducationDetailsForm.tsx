import { ActionIcon, Box, Flex, Grid } from "@mantine/core";
import React, { FC, memo } from "react";
import { FButton, FTypography } from "../../../@ui";
import { IconPlus } from "@tabler/icons-react";
import { useStudentDetailsFormContext } from "./StudentProfileForm.context";
import { initialValues } from "../../../initial-values";
import EducationDetailsFormRow from "./EducationDetailsFormRow";
import { useNavigate } from "react-router-dom";

interface IEducationDetailsForm {
  loading: boolean;
}

const EducationDetailsForm: FC<IEducationDetailsForm> = ({ loading }) => {
  const { insertListItem } = useStudentDetailsFormContext();
  const navigate = useNavigate();

  return (
    <Box>
      <Flex justify={"space-between"} align={"center"}>
        <Box>
          <FTypography
            fontSize={20}
            fontWeight={700}
            text="Education Details"
            variant="tittle"
            fontFamily="'Public Sans', sans-serif"
          />
          <FTypography
            fontSize={14}
            fontWeight={400}
            text="Add all your past and present education’s"
            variant="description"
            fontFamily="'Public Sans', sans-serif"
            color="midEmphasis"
            margin={"6px 0px"}
          />
        </Box>
        <ActionIcon
          onClick={() =>
            insertListItem("educationDetails", {
              ...initialValues.studentDetailsValues.educationDetails[0],
            })
          }
        >
          <IconPlus size={15.68} color="#000" />
        </ActionIcon>
      </Flex>
      <EducationDetailsFormRow />
      <Grid>
        <Grid.Col span={6} lg={6} sm={12} xs={12}>
          <FButton
            mt={32}
            onClick={() => navigate("/profile/personal-details")}
            radius={8}
            fullWidth
            type="button"
            bg="bg_D1D7DF"
            label="Back"
            styles={{
              label: { color: "#4D4D4D", fontWeight: 600, fontSize: 14 },
            }}
            p={16}
          />
        </Grid.Col>
        <Grid.Col span={6} lg={6} sm={12} xs={12}>
          <FButton
            disabled={loading}
            loading={loading}
            mt={32}
            onClick={() => navigate("/profile/project-details")}
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

export default memo(EducationDetailsForm);
