import React, { forwardRef } from "react";
import { Box, Flex } from "@mantine/core";

interface ItemProps {
  label: string;
  value: { name: string; icon: string };
}

// eslint-disable-next-line react/display-name
const FMultiSelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ value, ...others }, ref) => {
    const { name, icon } = value;

    return (
      <div ref={ref} {...others}>
        <Flex align="center">
          <Box mr={10} style={{ display: "flex" }}>
            <img src={icon} alt="" width={15} height={15} />
          </Box>
          <div>{name}</div>
        </Flex>
      </div>
    );
  }
);

export default FMultiSelectItem;
