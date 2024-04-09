import React from "react";
import { showNotification } from "@mantine/notifications";
import {
  IconCircleCheckFilled,
  IconExclamationCircle,
} from "@tabler/icons-react";

export const showSnackbar = ({
  variant,
  msg,
}: {
  variant: "success" | "error";
  msg: string;
}) => {
  if (variant === "success") {
    showNotification({
      message: msg,
      icon: <IconCircleCheckFilled />,
      bg: "#008F66",
      color: "#008F66",
    });
  } else {
    showNotification({
      message: msg,
      icon: <IconExclamationCircle />,
      color: "red",
      bg: "red",
    });
  }
};
