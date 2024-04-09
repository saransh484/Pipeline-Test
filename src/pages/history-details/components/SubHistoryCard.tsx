import React, { memo } from "react";
import { Box, Flex, List, RingProgress, createStyles } from "@mantine/core";
import { FTypography } from "../../../@ui";
import { COLORS } from "../../../assets/colors/colors";
import { IconCircleFilled } from "@tabler/icons-react";

interface IProps {
  title: string;
  shortDescription: string[];
  score: number;
}

const SubHistoryCard = (props: IProps) => {
  const { title, shortDescription, score } = props;
  const { classes } = styles();
  return (
    <Box className={classes.root}>
      <Flex direction={"row"} justify={"space-between"} align={"center"}>
        <Box>
          <FTypography
            text={title}
            variant="regularText"
            color="blue_0052CC"
            fontWeight={700}
            fontSize={19}
          />
          <List
            size={"sm"}
            my={"14px"}
            classNames={{
              item: classes.item,
              itemIcon: classes.itemIcon,
            }}
            icon={<IconCircleFilled size={"14px"} />}
          >
            {shortDescription.map((item) => (
              <List.Item key={item}>{item}</List.Item>
            ))}
          </List>
        </Box>
        <RingProgress
          label={
            <FTypography
              variant="regularText"
              fontSize={16}
              fontWeight={500}
              text={`${score.toString()}/10`}
              align="center"
              color="secondary"
            />
          }
          rootColor={COLORS.blue_E9E9FF}
          size={110}
          thickness={9}
          roundCaps
          sections={[{ value: score * 10, color: "blue" }]}
        />
      </Flex>
    </Box>
  );
};

export default memo(SubHistoryCard);

const styles = createStyles({
  root: {
    padding: "20px 16px",
    borderRadius: 8,
    boxShadow: "2px 4px 10px 0px #9CA3AA33",
    display: "block",
    textDecoration: "none",
  },
  item: {
    fontSize: "14px",
    fontWeight: 600,
    color: COLORS.gray_707070,
    fontFamily: " 'Public Sans', sans-serif",
  },
  itemIcon: {
    marginRight: 5,
    lineHeight: 1.8,
    fontWeight: 400,
  },
});
