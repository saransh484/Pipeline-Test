import { ActionIcon, Box, Flex, Group, Modal } from "@mantine/core";
import React, { memo } from "react";
import { FButton, FTypography } from "../../@ui";
import { IconX } from "@tabler/icons-react";
import { COLORS } from "../../assets/colors/colors";
import FBadge from "../../@ui/badge/FBadge";
import TeamRegistration from "./TeamRegistration";

import {
  Category,
  GetProjectDetailsDocument,
  GetProjectDetailsQuery,
  RegistrationType,
  useGetUserRegistrationQuery,
  useRegisterHackathonMutation,
} from "../../generated/graphql";
import { showSnackbar } from "../../utils/showSnackbar";
import { useForm, yupResolver } from "@mantine/form";
import { teamValidation } from "../../validations/registration/team.validation";
import { randomId } from "@mantine/hooks";
import SelectionType from "./SelectionType";

interface IProjectRegistrationProps {
  opened: boolean;
  close: () => void;
  projectDetails: GetProjectDetailsQuery["getProjectDetails"];
  registered: boolean;
}

export interface IProjectRegistrationValues {
  registrationType: "INDIVIDUAL" | "TEAM";
  teamName: string;
  teamLeader: string;
  teamLeaderMail: string;
  teamDetail: {
    name: string;
    email: string;
    key?: string;
  }[];
}

const initialValues: IProjectRegistrationValues = {
  registrationType: "INDIVIDUAL",
  teamName: "",
  teamLeader: "",
  teamLeaderMail: "",
  teamDetail: [
    {
      name: "",
      email: "",
      key: randomId(),
    },
  ],
};

const ProjectRegistration: React.FC<IProjectRegistrationProps> = ({
  close,
  opened,
  projectDetails,
  registered,
}) => {
  const formHandler = useForm({
    initialValues: initialValues,
    validate: yupResolver(teamValidation),
    validateInputOnChange: true,
    validateInputOnBlur: true,
  });
  const { setFieldValue, values } = formHandler;

  const [registerMutation, { loading }] = useRegisterHackathonMutation({
    refetchQueries: [
      {
        query: GetProjectDetailsDocument,
        variables: { projectId: projectDetails?.id ?? "" },
      },
    ],
  });
  const { data } = useGetUserRegistrationQuery({
    variables: { projectId: projectDetails?.id ?? "" },
  });
  const registration = data?.getUserRegistration;

  const teamInfo = () => {
    setFieldValue("registrationType", "TEAM");
    if (registered && registration?.teamName) {
      setFieldValue("teamName", `${registration?.teamName}`);
      setFieldValue("teamLeader", `${registration?.name}`);
      setFieldValue("teamLeaderMail", `${registration?.email}`);
      setFieldValue("teamDetail", registration?.team ?? []);
    }
  };
  const handleSubmission = async (data: IProjectRegistrationValues) => {
    const newdata = data.teamDetail.map((obj) => ({
      name: obj.name,
      email: obj.email,
    }));
    newdata.push({
      name: data.teamLeader,
      email: data.teamLeaderMail,
    });

    const res = await registerMutation({
      variables: {
        projectId: projectDetails?.id ?? "",
        registrationFor: projectDetails?.category ?? Category.Hackathon,
        registrationType: data.registrationType as RegistrationType,
        teamName: data.teamName,
        team: newdata,
      },
    });

    if (res.data?.registerHackathon) {
      if (!registered) {
        showSnackbar({ msg: "Registration Success", variant: "success" });
      } else {
        showSnackbar({ msg: "Updation Success", variant: "success" });
      }
      close();
    }
  };

  return (
    <Modal
      withCloseButton={false}
      centered
      size={700}
      opened={opened}
      onClose={close}
      maw={"100%"}
      styles={{ content: { padding: "18px 24px", borderRadius: 8 } }}
    >
      <form onSubmit={formHandler.onSubmit(handleSubmission)}>
        <Flex justify={"space-between"} align={"baseline"}>
          <Box>
            <FTypography
              text={projectDetails?.title ?? ""}
              variant="heading"
              fontWeight={600}
              fontSize={20}
              color="gray_343339"
              margin={"2px 0px"}
            />
            <FTypography
              text={
                registered
                  ? "Update Registration"
                  : projectDetails?.category === "HACKATHON"
                  ? "Register for the hackathon"
                  : "Register for the externship"
              }
              variant="lightText"
              fontWeight={400}
              fontSize={14}
              color="midEmphasis"
              margin={"8px 0px"}
            />
          </Box>

          <ActionIcon onClick={close}>
            <IconX size={24} color={COLORS["black"]} />
          </ActionIcon>
        </Flex>
        <Group mb={16} spacing={16}>
          <Box>
            <FTypography
              text={"Tech Stacks"}
              variant={"description"}
              color={"text_7A7A7A"}
              fontWeight={500}
              fontSize={16}
            />

            <Group my={8} spacing={5}>
              {projectDetails?.techStack.map((item) => (
                <FBadge
                  key={item.name}
                  name={{ url: item.icon }}
                  title={item.name}
                  variant="primary"
                />
              ))}
            </Group>
          </Box>
          <Box>
            <FTypography
              text={"Themes"}
              variant={"description"}
              color={"text_7A7A7A"}
              fontWeight={500}
              fontSize={16}
            />
            <Group my={8} spacing={5}>
              {projectDetails?.themes.map((item) => (
                <FBadge key={item} title={item ?? ""} variant="secondary" />
              ))}
            </Group>
          </Box>
        </Group>
        <Box>
          <FTypography
            text={"Select One"}
            variant={"description"}
            color={"text_7A7A7A"}
            fontWeight={500}
            fontSize={16}
          />
          <Flex my={12}>
            <SelectionType
              type="INDIVIDUAL"
              active={values.registrationType === "INDIVIDUAL"}
              onClick={() => setFieldValue("registrationType", "INDIVIDUAL")}
              category={projectDetails?.category ?? Category.Hackathon}
            />
            <SelectionType
              type="TEAM"
              active={values.registrationType === "TEAM"}
              onClick={teamInfo}
              category={projectDetails?.category ?? Category.Hackathon}
            />
          </Flex>
          {values.registrationType === "TEAM" && (
            <TeamRegistration formHandler={formHandler} />
          )}
        </Box>
        <FButton
          type="submit"
          loading={loading}
          disabled={loading}
          mt={38}
          styles={{
            label: {
              fontSize: 14,
              fontWeight: 600,
            },
          }}
          px={14}
          py={16}
          label="Continue"
          bg="blue_2684FF"
        />
      </form>
    </Modal>
  );
};

export default memo(ProjectRegistration);
