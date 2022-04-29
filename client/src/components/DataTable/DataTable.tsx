import { FC, ReactNode } from "react";
import { Table, TableRow, TableCell } from "@components";

type Props = {
  caption?: ReactNode;
  headers: string[];
  data: ReactNode[][];
};

export const DataTable: FC<Props> = ({ data, headers, caption }) => {
  if (headers.length !== data[0].length) {
    throw new Error("Invalid Table structure");
  }
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
    </Table>
  );
};
