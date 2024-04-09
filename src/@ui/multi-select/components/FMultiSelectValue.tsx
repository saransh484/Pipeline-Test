// Value.js
import React from "react";
import { Box, CloseButton, rem } from "@mantine/core";

interface ValueProps {
  value: { name: string; icon: string };
  label: string;
  onRemove: () => void;
  [key: string]: unknown;
  others: Record<string, unknown>;
}

function FMultiSelectValue({ value, onRemove, ...others }: ValueProps) {
  const { name, icon } = value;

  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: "flex",
          cursor: "default",
          alignItems: "center",
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
          border: `${rem(1)} solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[7]
              : theme.colors.gray[4]
          }`,
          paddingLeft: theme.spacing.xs,
          borderRadius: theme.radius.sm,
        })}
      >
        <Box mr={10} style={{ display: "flex" }}>
          <img src={icon} alt="" width={15} height={15} />
        </Box>
        <Box sx={{ lineHeight: 1, fontSize: rem(12) }}>{name}</Box>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  );
}

export default FMultiSelectValue;
