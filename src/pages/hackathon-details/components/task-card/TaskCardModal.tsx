import { Box, Flex, Modal, createStyles } from "@mantine/core";
import React, { Fragment } from "react";
import { IconX } from "@tabler/icons-react";
import FChip from "../../../../@ui/FChip";
import { FImage, FTypography } from "../../../../@ui";
import { COLORS } from "../../../../assets/colors/colors";
import { IProps } from "./TaskCard";
interface TasksCardModalProps extends IProps {
  close: () => void;
}
const variant = (tag: string) => {
  switch (tag) {
    case "Hackathon":
      return "success";
    case "Externship":
      return "error";
    default:
      return "default";
  }
};
const pVariant = (Priority: string) => {
  switch (Priority) {
    case "High Priority":
      return "error";
    case "Medium Priority":
      return "warning";
    case "Low Priority":
      return "success";
    default:
      return "default";
  }
};
const TaskCardModal: React.FC<TasksCardModalProps> = ({
  taskName,
  tag,
  Priority,
  shortDescription,
  longDescription,
  approxTime,
  close,
}) => {
  const { classes } = styles();
  return (
    <Fragment>
      <Modal.Header>
        <Flex
          direction={"row"}
          gap={10}
          w={"100%"}
          align={"flex-start"}
          justify={"space-between"}
          p={"16px 12px 11px 16px"}
        >
          <Flex gap={8} align={"center"}>
            <FChip
              variant={pVariant(Priority)}
              title={Priority}
              icon="warning_icon"
              fontSize={12}
              iconSize={16}
            />
            <FChip variant={variant(tag)} title={tag} fontSize={12} />
            <Flex>
              <FImage name="timer_icon_gray" alt="timer_icon" width={15} />
              <FTypography
                text={`${approxTime} Min`}
                variant="descriptionMedium"
                color="gray600"
                fontWeight={500}
              />
            </Flex>
          </Flex>
          <IconX
            size={20}
            style={{ cursor: "pointer" }}
            color={COLORS.black}
            onClick={close}
          />
        </Flex>
        <Box className={classes.blankBLine}></Box>
      </Modal.Header>
      <Flex
        justify={"space-between"}
        direction={"column"}
        gap={8}
        p={"5px 16px 16px 16px"}
      >
        <Box>
          <FTypography
            variant="heading"
            text={taskName ?? ""}
            color="black"
            fontWeight={600}
            fontSize={24}
          />
          <FTypography
            variant="descriptionMedium"
            text={shortDescription ?? ""}
            color="midEmphasis"
            fontWeight={400}
          />
        </Box>
        <Box className={classes.blankLine}></Box>
        <Box>
          <FTypography
            variant="tittle"
            text={"Long Description"}
            color="black"
            fontWeight={500}
          />
          <FTypography
            variant="subTittle"
            text={longDescription ?? ""}
            color="midEmphasis"
            fontWeight={400}
          />
        </Box>
      </Flex>
    </Fragment>
  );
};

export default TaskCardModal;
const styles = createStyles({
  blankLine: {
    margin: "5px 0px 5px",
    width: "100%",
    height: 0.8,
    backgroundColor: COLORS.whiteLight,
  },
  blankBLine: {
    margin: "5px 0px 5px",
    width: "100%",
    height: 0.8,
    backgroundColor: COLORS.lightGray,
  },
});
