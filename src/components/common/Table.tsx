import { type ReactElement } from "react";
import { flexRender, type Table } from "@tanstack/react-table";
import type { Character } from "../../types/apiTypes";
import "../styles/tableStyles.css";
import { TableCellShimmer } from "./Shimmer";

type TableProps = {
  table: Table<Character>;
  loader: boolean;
};

export default function Table({ table, loader }: TableProps): ReactElement {
  return (
    <div className="table-container">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {!loader ? (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  ) : (
                    <TableCellShimmer />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
