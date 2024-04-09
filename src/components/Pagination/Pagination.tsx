import React, { memo } from "react";
import { Pagination } from "@mantine/core";
import { CONSTANTS } from "../../constant/constant";

interface Props {
  activePage: number;
  totalPages: number;
  setPage: (number: number) => void;
}

const ThemePagination = (props: Props) => {
  const { activePage, setPage, totalPages } = props;

  if (totalPages && totalPages <= CONSTANTS.PAGE_LIMIT) {
    return null;
  }

  return (
    <Pagination
      value={activePage}
      onChange={setPage}
      size={"sm"}
      total={Math.ceil(totalPages / CONSTANTS.PAGE_LIMIT)}
      radius="sm"
      mt={20}
    />
  );
};

export default memo(ThemePagination);
