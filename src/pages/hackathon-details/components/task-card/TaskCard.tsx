import { Box, Flex, Modal, createStyles } from "@mantine/core";
import React, { Fragment, memo } from "react";
import PriorityChip from "../priority/PriorityChip";
import FChip from "../../../../@ui/FChip";
import { FImage, FTypography } from "../../../../@ui";
import TaskCardModal from "./TaskCardModal";
import { useDisclosure } from "@mantine/hooks";
import TextClamp from "../../../../@ui/TextClamp";

export interface IProps {
  taskName: string;
  tag: "Externship Task" | "Hackathon Task";
  Priority: "High Priority" | "Medium Priority" | "Low Priority";
  shortDescription: string;
  longDescription?: string;
  spaceLeft?: number | string;
  approxTime?: string;
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

const TasksCard = (props: IProps) => {
  const {
    taskName,
    tag,
    Priority,
    shortDescription,
    longDescription,
    spaceLeft,
    approxTime,
  } = props;
  const { classes } = styles();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Fragment>
      <Box
        className={classes.root}
        style={{ marginLeft: spaceLeft }}
        onClick={open}
      >
        <Box className={classes.header}>
          <Box className={classes.leftSide}>
            <PriorityChip priority={Priority} />
          </Box>
          <Box>
            <FChip variant={variant(tag)} title={tag} />
          </Box>
        </Box>
        <Box className={classes.text}>
          <FTypography text={taskName} variant="subTittle" color="blackCover" />
          <TextClamp lines={3}>
            <FTypography
              text={shortDescription}
              variant="descriptionMedium"
              color="gray300"
              fontWeight={300}
            />
          </TextClamp>
        </Box>
        <Flex my={8} align={"center"}>
          <Flex mr={10}>
            <Flex mr={6}>
              <FImage name="timer_icon_gray" alt="timer_icon" width={15} />
            </Flex>
            <Flex>
              <FTypography
                text={`${approxTime} Min`}
                variant="date"
                color="gray600"
                fontWeight={500}
              />
            </Flex>
          </Flex>
          {/* <Flex>
          <Flex mr={6}>
            <FImage name="calender_icon" alt="calender_icon" width={12} />
          </Flex>
          <Flex>
            <FTypography
              text={`${date?.startDate} - ${date?.endDate}`}
              variant="date"
              color="gray600"
              fontWeight={500}
            />
          </Flex>
        </Flex> */}
        </Flex>
      </Box>
      <Modal
        classNames={{
          body: classes.modalContent,
          header: classes.modalHeader,
        }}
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={500}
        overlayProps={{
          color: "#0C0C0C45",
          opacity: 0.27,
          blur: 3,
        }}
      >
        <TaskCardModal
          Priority={Priority}
          tag={tag}
          approxTime={approxTime}
          taskName={taskName}
          shortDescription={shortDescription}
          longDescription={longDescription}
          close={close}
        />
      </Modal>
    </Fragment>
  );
};

export default memo(TasksCard);

const styles = createStyles({
  root: {
    padding: 12,
    borderRadius: 2,
    boxShadow: "1px 1px 20px 0px #9CA3AA26",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    textDecoration: "none",
    height: "100%",
    cursor: "pointer",
  },
  header: {
    display: "flex",
  },
  leftSide: {
    marginRight: 6,
  },
  modalHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    width: "100%",
  },
  modalContent: {
    padding: 0,
  },
  text: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    height: "100%",
  },
});
