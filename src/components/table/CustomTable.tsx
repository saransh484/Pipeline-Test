import React, { memo, ReactNode } from "react";
import { Box, Checkbox, Flex, Table } from "@mantine/core";
import TableLoading from "./components/TableLoading";
import Pagination from "../Pagination/Pagination";
import { tableStyles } from "./index.styles";
import { NavLink, To } from "react-router-dom";

interface IProps {
  search?: boolean;
  onChangeSearch?: (value: string) => void;
  rightComponent?: ReactNode;
  data: { checked: boolean, [key: string]: string | boolean }[];
  columns: TTableColumns[];
  isLoading: boolean;
  paginationProps?: {
    activePage: number;
    setActivePage: React.Dispatch<React.SetStateAction<number>>;
    pagedData: { total: number };
  };
  withSelect?: boolean;
  navLink?: To;
}

const CustomTable: React.FC<IProps> = ({
  data,
  columns,
  isLoading,
  paginationProps,
  withSelect,
  navLink,
}) => {
  const { classes } = tableStyles();
  
  return (
    <Box>
      {!isLoading ? (
        <Box className={classes.tableContainer}>
          <Table
            withBorder={false}
            verticalSpacing={"md"}
            width={"100%"}
            className={classes.table}
          >
            <thead>
              <tr>
                {withSelect && (
                  <th>
                    <Checkbox
                      checked={false}
                      onChange={(e) => {
                        console.log(e);
                      }}
                    />
                  </th>
                )}
                {columns.map((item, index) => {
                  return (
                    <th
                      key={`${"_" + index}`}
                      className={classes.tHead}
                      style={{
                        textAlign: "center",
                        width: "15%",
                        minWidth: item.minWidth ?? "fit-content",
                      }}
                    >
                      {item.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data?.length === 0 && (
                <tr>
                  <td
                    colSpan={columns.length}
                    style={{ textAlign: "center", fontWeight: 500 }}
                  >
                    No Data Found
                  </td>
                </tr>
              )}
              {data?.map((item, index) => {
                return (
                  <tr key={`${"_" + index}`}>
                    {withSelect && (
                      <td>
                        <Checkbox
                          checked={item.checked}
                          onChange={() => console.log("hello")}
                        />
                      </td>
                    )}
                    {columns.map((column, i) => {
                      return (
                        <td key={`${"_" + i}`} className={classes.tBody}>
                          {navLink ? (
                            <NavLink
                              to={navLink ?? "/"}
                              className={classes.link}
                            >
                              {column.renderCell ? (
                                <Flex justify={"center"}>
                                  {column.renderCell(item)}
                                </Flex>
                              ) : (
                                item[column.key]
                              )}
                            </NavLink>
                          ) : column.renderCell ? (
                            <Flex justify={"center"}>
                              {column.renderCell(item)}
                            </Flex>
                          ) : (
                            item[column.key]
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Box>
      ) : (
        <TableLoading />
      )}
      {paginationProps && (
        <Box pb={16} px={32}>
          <Pagination
            activePage={paginationProps.activePage}
            setPage={paginationProps.setActivePage}
            totalPages={paginationProps.pagedData.total}
          />
        </Box>
      )}
    </Box>
  );
};

export default memo(CustomTable);
