import { ShadcnReactTableProps } from "../types";
import { TableHead, TableRow } from "@/components/ui/table";
import ShadcnReactTableColumnSortButton from "./ShadcnReactTableColumnSortButton";
import { getCommonPinningStyles } from "../hooks/getCommonStyles";
import { flexRender } from "@tanstack/react-table";
import ShadcnReactTableDndColumns from "./ShadcnReactTableDndColumns";

export type ShadcnReactTableColumnsProps<TData> = ShadcnReactTableProps<TData>;

const ShadcnReactTableColumns = <TData,>({
  table: tableInstance,
}: ShadcnReactTableColumnsProps<TData>) => {
  const { table, columnDnd } = tableInstance;

  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {columnDnd ? (
            <ShadcnReactTableDndColumns
              table={tableInstance}
              headerGroup={headerGroup}
            />
          ) : (
            headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  style={{
                    ...getCommonPinningStyles({ column: header.column }),
                  }}
                >
                  <div className="flex items-center w-full">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <ShadcnReactTableColumnSortButton column={header.column} />
                  </div>
                </TableHead>
              );
            })
          )}
        </TableRow>
      ))}
    </>
  );
};

export default ShadcnReactTableColumns;
