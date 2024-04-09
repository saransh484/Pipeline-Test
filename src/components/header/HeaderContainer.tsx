import { Box, Flex } from "@mantine/core";
import React, { memo } from "react";
import { FButton, FTypography } from "../../@ui";
import { IconPlus } from "@tabler/icons-react";
import { NavLink, To } from "react-router-dom";

interface IProps {
  text: string;
  routsLink?: To;
  btnProps: {
    label: string;
    onClick?: () => void;
  };
}

const HeaderContainer = (props: IProps) => {
  const { text, btnProps, routsLink } = props;
  return (
    <Flex justify={"space-between"} py={12}>
      <FTypography text={text} variant="tittle" color="black" />
      <Box>
        {routsLink && (
          <NavLink to={routsLink}>
            <FButton
              label={btnProps.label}
              bg={"secondary"}
              variant={"mediumRadius"}
              leftIcon={<IconPlus size={12} />}
              onClick={btnProps.onClick}
            />
          </NavLink>
        )}
        {!routsLink && (
          <FButton
            label={btnProps.label}
            bg={"secondary"}
            variant={"mediumRadius"}
            leftIcon={<IconPlus size={12} />}
          />
        )}
      </Box>
    </Flex>
  );
};

export default memo(HeaderContainer);
