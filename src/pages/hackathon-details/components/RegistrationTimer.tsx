import { Box, createStyles } from "@mantine/core";
import React, { memo } from "react";

import { COLORS } from "../../../assets/colors/colors";
import useTimer from "../../../@ui/hook/useTimer";
import { FTypography } from "../../../@ui";

const RegistrationTimer = () => {
  const { classes } = styles();

  const { time } = useTimer({
    initialTime: 864,
    onTimerEnd: () => {
      console.log("called");
    },
  });

  return (
    <Box my={20} className={classes.deadlineTimer}>
      <FTypography
        color="blue_4C6FFF"
        text="APPLICATION CLOSES IN"
        variant="regularText"
        fontWeight={700}
        fontSize={12}
        fontFamily="'Poppins', sans-serif"
      />

      <FTypography
        color="secondary_0059CD"
        text={time}
        variant="regularText"
        fontWeight={600}
        fontSize={18}
        margin={"6px 0px 0px 0px"}
        fontFamily="'Poppins', sans-serif"
      />
    </Box>
  );
};

export default memo(RegistrationTimer);

const styles = createStyles({
  hackathonDeadline: {
    padding: 24,
    borderRadius: 8,
    boxShadow: "4px 4px 36px 0px #00000029",
    background: COLORS.white,
  },
  deadlineDate: {
    borderLeft: "3px solid #4C6FFF",
    padding: "2px 12px",
  },
  deadlineTimer: {
    borderRadius: 4,
    padding: "16px 14px",
    background: "#2684FF14",
  },
});
