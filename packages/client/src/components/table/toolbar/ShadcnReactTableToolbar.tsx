import ShadcnReactTableFullScreenButton from "./ShadcnReactTableFullScreenButton";
import { ShadcnReactTableProps } from "../types";
import ShadcnReactTableViewOptionsButton from "./ShadcnReactTableViewOptionsButton";
import ShadcnReactTableColumnFilterButton from "./ShadcnReactTableColumnFilterButton";
import ShadcnReactTableGlobalFilterButton from "./ShadcnReactTableGlobalFilterButton";
import { ReactNode } from "react";

export type ShadcnReactTableToolbarProps<TData> =
  ShadcnReactTableProps<TData> & {
    children?: ReactNode;
  };

const ShadcnReactTableToolbar = <TData,>({
  table,
  children,
}: ShadcnReactTableToolbarProps<TData>) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">{children}</div>

      <div className="flex items-center gap-1">
        <ShadcnReactTableGlobalFilterButton table={table} />
        <ShadcnReactTableColumnFilterButton table={table} />
        <ShadcnReactTableViewOptionsButton table={table} />
        <ShadcnReactTableFullScreenButton table={table} />
      </div>
    </div>
  );
};

export default ShadcnReactTableToolbar;
