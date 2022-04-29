import { FC, ReactNode } from "react";
import cn from "classnames";

import "./table.scss";

type TableCellProps = {
  className?: string;
  children: ReactNode;
};

export const TableCell: FC<TableCellProps> = ({ children, className = "" }) => {
  return <td className={cn("table-cell", className)}>{children}</td>;
};

type TableRowProps = {
  className?: string;
  children:
    | React.ReactElement<TableCellProps>[]
    | React.ReactElement<TableCellProps>;
};

export const TableRow: FC<TableRowProps> = ({ children, className = "" }) => {
  return <tr className={cn("table-row", className)}>{children}</tr>;
};

type TableProps = {
  className?: string;
  caption?: ReactNode;
  headers: string[];
  children:
    | React.ReactElement<TableRowProps>[]
    | React.ReactElement<TableRowProps>;
};
export const Table: FC<TableProps> = ({
  caption,
  headers,
  children,
  className = "",
}) => {
  return (
    <table className={cn("f-table", className)}>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr key="headers">
          {headers.map((h) => (
            <th key="h">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
