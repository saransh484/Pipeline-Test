import React, { memo } from "react";
import { Box, Flex, RingProgress, createStyles } from "@mantine/core";
import { FTypography } from "../../../@ui";

interface IProps {
  title: string;
  shortDescription: string;
  score: number;
}

const SubHistoryCard = (props: IProps) => {
  const { title, shortDescription, score } = props;
  const { classes } = styles();
  return (
    <Box className={classes.root}>
      <Flex direction={"row"} justify={"space-between"}>
        <Box>
          <FTypography
            text={title}
            variant="regularText"
            color="secondary_0059CD"
            fontWeight={800}
            fontSize={19}
          />
          <Box my={2}>
            <FTypography
              text={shortDescription}
              variant={"regularText"}
              color={"text_7A7A7A"}
              fontWeight={600}
              fontSize={14}
            />
          </Box>
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
});
