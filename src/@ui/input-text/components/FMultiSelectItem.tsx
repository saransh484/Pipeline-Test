import React, { forwardRef } from "react";
import { Box, Flex } from "@mantine/core";

interface ItemProps {
  value: { name: string; icon: string };
  [key: string]: unknown;
}

const FMultiSelectItem = forwardRef<HTMLDivElement, ItemProps>(
  function FMultiSelectItem({ value, ...others }, ref) {
    const { name, icon } = value;

    return (
      <div ref={ref} {...others}>
        <Flex align="center">
          <Box mr={10} style={{ display: "flex" }}>
            <img src={icon} alt="" />
          </Box>
          <div>{name}</div>
        </Flex>
      </div>
    );
  }
);

FMultiSelectItem.displayName = "FMultiSelectItem";

export default FMultiSelectItem;
