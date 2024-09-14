import { ShadcnReactTableProps } from "../types";
import { flexRender } from "@tanstack/react-table";
import { TableCell, TableRow } from "@/components/ui/table";
import { getCommonPinningStyles } from "../hooks/getCommonStyles";
import ShadcnReactTableDndCell from "./ShadcnReactTableDndCell";

export type ShadcnReactTableBodyProps<TData> = ShadcnReactTableProps<TData>;

const ShadcnReactTableBody = <TData,>({
  table: { table, columnDnd },
}: ShadcnReactTableBodyProps<TData>) => {
  return table.getRowModel().rows?.length ? (
    table.getRowModel().rows.map((row) => {
      const isSelect = row.getIsSelected();

      return (
        <TableRow key={row.id} data-state={isSelect && "selected"}>
          {row.getVisibleCells().map((cell) =>
            columnDnd ? (
              <ShadcnReactTableDndCell
                cell={cell}
                key={cell.id}
                columnOrder={columnDnd.columnOrder}
              />
            ) : (
              <TableCell
                key={cell.id}
                style={{
                  ...getCommonPinningStyles({ column: cell.column }),
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            )
          )}
        </TableRow>
      );
    })
  ) : (
    <TableRow>
      <TableCell
        colSpan={table.getAllColumns().length}
        className="h-24 text-center"
      >
        No results.
      </TableCell>
    </TableRow>
  );
};

export default ShadcnReactTableBody;
