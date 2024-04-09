type TTableColumns = {
  label: string;
  key: string;
  renderCell?: (value: object) => React.ReactNode;
  minWidth?: number | string;
};
