import React from "react";
import { ActionIcon, Box, Flex, createStyles } from "@mantine/core";
import { FInput } from "../../@ui";
import { COLORS } from "../../assets/colors/colors";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { randomId } from "@mantine/hooks";
import { UseFormReturnType } from "@mantine/form";
import { IProjectRegistrationValues } from "./ProjectRegistration";

interface IProps {
  formHandler: UseFormReturnType<
    IProjectRegistrationValues,
    (values: IProjectRegistrationValues) => IProjectRegistrationValues
  >;
}

const TeamRegistration = ({ formHandler }: IProps) => {
  const { classes } = styles();

  return (
    <Box className={classes.registrationTypeBox}>
      <FInput
        label=""
        placeholder="Enter your team name"
        formHandler={formHandler.getInputProps("teamName")}
      />
      <Flex my={5} gap={10} justify={"space-between"}>
        <FInput
          width="100%"
          label="Team Leader Name"
          placeholder="Enter your name"
          formHandler={formHandler.getInputProps("teamLeader")}
        />
        <FInput
          width="100%"
          label="Team Leader Email"
          placeholder="Enter your email"
          formHandler={formHandler.getInputProps("teamLeaderMail")}
        />
      </Flex>
      {formHandler.values.teamDetail.map((item, index) => (
        <Flex
          key={index}
          my={15}
          gap={10}
          align={"center"}
          justify={"space-between"}
        >
          <FInput
            width="100%"
            label=""
            placeholder="Name"
            formHandler={formHandler.getInputProps(`teamDetail.${index}.name`)}
          />
          <FInput
            width="100%"
            label=""
            type="email"
            placeholder="Email"
            formHandler={formHandler.getInputProps(`teamDetail.${index}.email`)}
          />
          {formHandler.values.teamDetail.length > 1 && (
            <ActionIcon
              w="10%"
              onClick={() => formHandler.removeListItem("teamDetail", index)}
            >
              <IconMinus color={COLORS["black"]} />
            </ActionIcon>
          )}
        </Flex>
      ))}
      <Flex justify={"end"}>
        <ActionIcon
          className={classes.actionIcon}
          onClick={() =>
            formHandler.insertListItem("teamDetail", {
              name: "",
              email: "",
              key: randomId(),
            })
          }
        >
          <IconPlus color={COLORS["black"]} />
        </ActionIcon>
      </Flex>
    </Box>
  );
};

const styles = createStyles({
  registrationTypeBox: {
    padding: "18px 24px",
    border: "2px solid #E0E0E0",
    borderRadius: 10,
    boxShadow: "0px 2px 4px -2px #2121210F",
    cursor: "pointer",
    flex: 1,
  },
  actionIcon: {
    border: "2px solid black",
    borderRadius: "100%",
  },
});

export default TeamRegistration;
