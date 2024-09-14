import {
  CellContext,
  ColumnDef,
  Table as ReactTable,
} from "@tanstack/react-table";
import { ReactNode } from "react";
import { ColumnDnd } from "./_components/dnd/useColumnDnd";

export type ToggleSwitch = [boolean, () => void];

export type ShadcnReactTableTheme = "light" | "dark" | "system";

export type ShadcnReactTableProps<TData> = {
  table: ShadcnReactTableInstance<TData>;
  className?: string;
};

export type ShadcnReactTableOptions<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  toolbar?: (table: ShadcnReactTableInstance<TData>) => ReactNode;
  header?: (table: ShadcnReactTableInstance<TData>) => ReactNode;
  footer?: (table: ShadcnReactTableInstance<TData>) => ReactNode;
  body?: (table: ShadcnReactTableInstance<TData>) => ReactNode;
  rowActions?: (cell: CellContext<TData, unknown>) => ReactNode;
  rowActionsHeader?: string;
  enableSelecte?: boolean;
  enableColumnDnd?: boolean;
  pageSizeOptions?: number[];
  theme?: ShadcnReactTableTheme;
};

export type ShadcnReactTableInstance<TData> = Omit<
  ShadcnReactTableOptions<TData>,
  "columns" | "data"
> & {
  table: ReactTable<TData>;
  fullScreen: ToggleSwitch;
  columnFilter: ToggleSwitch;
  globalFilter: ToggleSwitch;
  setGlobalFilter: (v: string) => void;
  columnDnd?: ColumnDnd;
};
