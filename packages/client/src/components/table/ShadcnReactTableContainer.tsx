import { cn } from "@/lib/utils";
import { ShadcnReactTableProps } from "./types";
import { ReactNode } from "react";
import { Table, TableBody, TableHeader } from "@/components/ui/table";
import ShadcnReactTablePagination from "./footer/ShadcnReactTablePagination";
import ShadcnReactTableColumns from "./header/ShadcnReactTableColumns";
import ShadcnReactTableToolbar from "./toolbar/ShadcnReactTableToolbar";
import ShadcnReactTableBody from "./body/ShadcnReactTableBody";
import DnDContainer from "./_components/dnd/DnDContainer";

export type ShadcnReactTableContainer<TData> = ShadcnReactTableProps<TData> & {
  children?: ReactNode;
};

const ShadcnReactTableContainer = <TData,>({
  table: tableInstance,
  className,
}: ShadcnReactTableContainer<TData>) => {
  const {
    toolbar = (table) => <ShadcnReactTableToolbar table={table} />,
    header = (table) => <ShadcnReactTableColumns table={table} />,
    footer = (table) => <ShadcnReactTablePagination table={table} />,
    body = (table) => <ShadcnReactTableBody table={table} />,
    fullScreen: [isFullScreen],
    columnDnd,
  } = tableInstance;
  return (
    <div
      className={cn(className + " p-4 rounded-2xl")}
      style={
        isFullScreen
          ? {
              position: "absolute",
              zIndex: 49,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: "white",
            }
          : {}
      }
    >
      {toolbar && toolbar(tableInstance)}

      {columnDnd ? (
        <DnDContainer onDragEnd={columnDnd.handleDragEnd}>
          <Table>
            <TableHeader>{header && header(tableInstance)}</TableHeader>
            <TableBody className=" overflow-scroll  w-[1356px]">
              {body && body(tableInstance)}
            </TableBody>
          </Table>
        </DnDContainer>
      ) : (
        <Table>
          <TableHeader>{header && header(tableInstance)}</TableHeader>
          <TableBody>{body && body(tableInstance)}</TableBody>
        </Table>
      )}

      {footer && footer(tableInstance)}
    </div>
  );
};

export default ShadcnReactTableContainer;
