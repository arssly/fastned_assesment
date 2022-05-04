import { FC, ReactNode } from "react";
import { Table, TableRow, TableCell } from "@components";

import "./dataTable.scss";

type Props = {
  caption?: ReactNode;
  headers: string[];
  data?: ReactNode[][];
  emptyMessage?: string;
};

export const DataTable: FC<Props> = ({
  emptyMessage = "",
  data = [],
  headers,
  caption,
}) => {
  const rows = data.map((dr, i) => (
    <TableRow key={i}>
      {dr.map((dc, ii) => (
        <TableCell key={ii}>{dc}</TableCell>
      ))}
    </TableRow>
  ));
  return (
    <Table headers={headers} caption={caption}>
      {rows}
      {data.length === 0 ? (
        <tr>
          <td colSpan={headers.length} className="empty-message">
            {emptyMessage}
          </td>
        </tr>
      ) : (
        ""
      )}
    </Table>
  );
};
