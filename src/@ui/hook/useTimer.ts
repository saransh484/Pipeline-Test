import moment from "moment";
import { useState, useEffect } from "react";

interface IUseTimerProps {
  initialTime: number;
  onTimerEnd: () => void;
  formate?: string;
}

const useTimer = ({ initialTime, onTimerEnd, formate }: IUseTimerProps) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isRunning) {
      timerId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timerId);
            onTimerEnd();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning, onTimerEnd]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds: number) => {
    const days = Math.floor(timeInSeconds / (3600 * 24));
    const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const duration = moment.duration(timeInSeconds, "seconds");
    const formattedTime = moment
      .utc(duration.asMilliseconds())
      .format(formate ?? "HH:mm:ss");
    return {
      formattedTime,
      customTime: {
        days,
        hours,
        minutes,
        seconds,
      },
    };
  };

  return {
    time: formatTime(time).formattedTime,
    isRunning,
    startTimer,
    pauseTimer,
    customTime: formatTime(time).customTime,
  };
};

export default useTimer;
