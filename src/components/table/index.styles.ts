import { createStyles } from "@mantine/core";
import { COLORS } from "../../assets/colors/colors";

export const tableStyles = createStyles({
  root: {
    border: "1px solid ",
    borderRadius: 5,
    borderColor: COLORS.warning,
  },
  table: {
    textAlign: "center",
    tableLayout: "auto",
    "& >tbody>tr>td": {
      borderBottomWidth: 1,
      borderBottomColor: COLORS.whiteSmoke,
      borderBottomStyle: "solid",
      fontSize: 12,
      fontWeight: 500,
      color: COLORS.gray500,
      fontFamily: "'Poppins', sans-serif",
      letterSpacing: "0.4px",
      boxShadow: "1px 1px 20px 0px #9CA3AA26",
      padding: "8px 12px",
    },
    "& >thead>tr>th": {
      borderBottomWidth: 0.5,
      borderBottomColor: COLORS.whiteSmoke,
      borderBottomStyle: "solid",
      fontWeight: 600,
      fontFamily: "'Poppins', sans-serif",
      fontSize: 12,
      position: "sticky",
      top: 0,
      backgroundClip: "padding-box",
      color: COLORS.gray700,
      padding: "8px 12px",
    },
  },
  tableContainer: {
    overflow: "auto",
    boxShadow: "1px 1px 20px 0px #9CA3AA26",
  },
  tHead: {
    textAlign: "center",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    backgroundColor: COLORS.whiteLight,
  },
  tBody: {
    backgroundColor: COLORS.white,
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    "& a": {
      fontSize: "14px !important",
      fontWeight: 400,
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: COLORS.gray500,
  },
});
