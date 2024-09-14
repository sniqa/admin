import { CellContext, ColumnDef } from "@tanstack/react-table";
import { ReactNode, useMemo } from "react";

export const useRowActions = <TData,>(
  columns: ColumnDef<TData>[],
  rowActionsHeader?: string,
  rowActions?: (cell: CellContext<TData, unknown>) => ReactNode
) => {
  return useMemo(() => {
    if (rowActions) {
      columns.push({
        id: "_action",
        header: rowActionsHeader,
        cell: rowActions,
        size: 40,
      });
    }

    return columns;
  }, [columns, rowActions, rowActionsHeader]);
};
