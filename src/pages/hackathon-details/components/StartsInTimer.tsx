import React, { memo } from "react";
import FChip from "../../../@ui/FChip";
import moment from "moment";
import { Box } from "@mantine/core";
import useTimer from "../../../@ui/hook/useTimer";
import { useMediaQuery } from "@mantine/hooks";

interface IProps {
  date: {
    startDate: Date;
    endDate: Date;
  };
  onTimerEnd?: () => void;
}

const StartsInTimer = (props: IProps) => {
  const { date, onTimerEnd } = props;
  const remainingTime = moment.duration(moment(date.startDate).diff(moment()));
  const { customTime, time } = useTimer({
    initialTime: remainingTime.asSeconds(),
    onTimerEnd: () => {
      if (onTimerEnd) onTimerEnd();
    },
  });
  const largeScreen = useMediaQuery("(min-width: 85em)");
  return (
    <Box>
      <FChip
        variant={"default"}
        bg="successOpacityPointOne"
        color="successOpacityOne"
        title={
          largeScreen
            ? `Starts In - ${customTime.days}D : ${time.split(":")[0]} Hr : ${
                time.split(":")[1]
              } Min : ${time.split(":")[2]} Sec`
            : `Starts In - ${customTime.days}D : ${time.split(":")[0]} : ${
                time.split(":")[1]
              } : ${time.split(":")[2]}`
        }
        fontSize={11}
      />
    </Box>
  );
};
export default memo(StartsInTimer);
