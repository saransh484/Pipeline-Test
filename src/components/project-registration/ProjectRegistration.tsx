import {
  ActionIcon,
  Box,
  Flex,
  Group,
  Modal,
  createStyles,
} from "@mantine/core";
import React, { memo, useState } from "react";
import { FButton, FImage, FTypography } from "../../@ui";
import { IconX } from "@tabler/icons-react";
import { COLORS } from "../../assets/colors/colors";
import FBadge from "../../@ui/badge/FBadge";
import {
  RegistrationType,
  useRegisterHackathonMutation,
} from "../../generated/graphql";
import { showSnackbar } from "../../utils/showSnackbar";

interface IProjectRegistrationProps {
  opened: boolean;
  close: () => void;
  projectDetails?: Pick<
    TProject,
    "category" | "title" | "techStack" | "themes" | "id"
  >;
}

const ProjectRegistration: React.FC<IProjectRegistrationProps> = ({
  close,
  opened,
  projectDetails,
}) => {
  const { classes, cx } = styles();
  const [registrationType, setRegistrationType] = useState<
    "INDIVIDUAL" | "TEAM"
  >("INDIVIDUAL");

  const [registerMutation, { loading }] = useRegisterHackathonMutation();

  const handleRegistration = async () => {
    const res = await registerMutation({
      variables: {
        projectId: projectDetails?.id ?? "",
        registrationFor: projectDetails?.category,
        registrationType: registrationType as RegistrationType,
      },
    });

    if (res.data?.registerHackathon) {
      showSnackbar({ msg: "Registration Success", variant: "success" });
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
      <Flex justify={"space-between"} align={"baseline"}>
        <Box>
          <FTypography
            text="Hackathon Register"
            variant="tittle"
            fontWeight={700}
            fontSize={20}
          />
          <FTypography
            text="Register for the hackathon"
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
      <Box my={16}>
        <FTypography
          text="Hackathon Register"
          variant="heading"
          fontWeight={500}
          fontSize={16}
          color="text_7A7A7A"
        />
        <FTypography
          text={projectDetails?.title ?? ""}
          variant="heading"
          fontWeight={600}
          fontSize={20}
          color="gray_343339"
          margin={"2px 0px"}
        />
      </Box>
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
            {projectDetails?.techStack.map((item, index) => (
              <FBadge
                key={index}
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
            {projectDetails?.themes.map((item, index) => (
              <FBadge key={index} title={item} variant="secondary" />
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
          <Box
            onClick={() => setRegistrationType("INDIVIDUAL")}
            mr={12}
            className={cx(classes.registrationTypeBox, {
              [classes.activeBox]: registrationType === "INDIVIDUAL",
            })}
          >
            <Flex align={"flex-start"} justify={"space-between"} mb={10}>
              <FImage
                alt="user"
                name={
                  registrationType === "INDIVIDUAL"
                    ? "UserActive"
                    : "UserInActive"
                }
                width={47}
              />
              {registrationType === "INDIVIDUAL" && (
                <FImage alt="user" name="checkMarkFilled" width={24} />
              )}
            </Flex>
            <FTypography
              text={"Individual Player"}
              variant={"description"}
              color={
                registrationType === "INDIVIDUAL" ? "secondary" : "black_161616"
              }
              fontWeight={500}
              fontSize={20}
              margin={"4px 0px"}
            />
            <FTypography
              text={"Register as an individual for the hackathon"}
              variant={"description"}
              color={"gray_525252"}
              fontWeight={500}
              fontSize={12}
              margin={"4px 0px"}
            />
          </Box>
          <Box
            onClick={() => setRegistrationType("TEAM")}
            ml={12}
            className={cx(classes.registrationTypeBox, {
              [classes.activeBox]: registrationType === "TEAM",
            })}
          >
            <Flex align={"flex-start"} justify={"space-between"} mb={10}>
              <FImage
                alt="user"
                name={
                  registrationType !== "TEAM"
                    ? "TeamUsersActive"
                    : "TeamUsersInactive"
                }
                width={47}
              />
              {registrationType === "TEAM" && (
                <FImage alt="user" name="checkMarkFilled" width={24} />
              )}
            </Flex>
            <FTypography
              text={"Team Player"}
              variant={"description"}
              color={registrationType === "TEAM" ? "secondary" : "black_161616"}
              fontWeight={500}
              fontSize={20}
              margin={"4px 0px"}
            />
            <FTypography
              text={"Register with team for the hackathon"}
              variant={"description"}
              color={"gray_525252"}
              fontWeight={500}
              fontSize={12}
              margin={"4px 0px"}
            />
          </Box>
        </Flex>
      </Box>
      <FButton
        onClick={handleRegistration}
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
    </Modal>
  );
};

export default memo(ProjectRegistration);

const styles = createStyles({
  registrationTypeBox: {
    padding: "18px 24px",
    border: "2px solid #E0E0E0",
    borderRadius: 10,
    boxShadow: "0px 2px 4px -2px #2121210F",
    cursor: "pointer",
    flex: 1,
  },
  activeBox: {
    border: "3px solid #0F62FE",
  },
});
