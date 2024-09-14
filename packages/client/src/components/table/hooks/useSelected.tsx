import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export const useSelecte = <TData,>(
  columns: ColumnDef<TData>[],
  enableSeleted: boolean
) => {
  return useMemo(() => {
    if (enableSeleted) {
      columns.unshift({
        id: "_select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
        size: 20,
      });
    }

    return columns;
  }, [columns, enableSeleted]);
};
