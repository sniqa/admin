import { useReactTable } from "@tanstack/react-table";
import { ShadcnReactTableOptions } from "../types";
// import { fuzzyFilter } from "../fns/fuzzyFilter";
import { useToggleSwitch } from "./useToggleSwitch";
import { useGlobalFilter } from "./useGlobalFilter";
import { useSelecte } from "./useSelected";
import { useRowActions } from "./useRowActions";
import { useColumnDnd } from "../_components/dnd/useColumnDnd";

export const useShadcnReactTable = <TData>({
  columns,
  data,
  enableSelecte = false,
  // enableColumnDnd = false,
  rowActionsHeader,
  rowActions,
  ...options
}: ShadcnReactTableOptions<TData>) => {
  const fullScreen = useToggleSwitch(false);

  const columnFilter = useToggleSwitch(false);

  const globalFilter = useToggleSwitch(false);

  const selectedColumns = useSelecte(columns, enableSelecte);

  useRowActions(columns, rowActionsHeader, rowActions);

  const columnDnd = useColumnDnd(columns);

  const {
    options: globalFilterOptions,
    state: globalFilterState,
    setGlobalFilter,
  } = useGlobalFilter<TData>();

  const reactTable = useReactTable({
    columns: selectedColumns,
    data,
    columnResizeMode: "onChange",
    state: {
      columnOrder: columnDnd.columnOrder || [],
      ...globalFilterState,
    },
    ...globalFilterOptions,
  });

  return {
    table: reactTable,
    fullScreen,
    columnFilter,
    globalFilter,
    setGlobalFilter,
    columnDnd,
    ...options,
  };
};
