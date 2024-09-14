import { Cell, flexRender } from "@tanstack/react-table";
import { useDndAttrs } from "../_components/dnd/useDndAttrs";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { TableCell } from "@/components/ui/table";
import { getCommonPinningStyles } from "../hooks/getCommonStyles";

export type ShadcnReactTableDragCellProps<TData, TValue> = {
  cell: Cell<TData, TValue>;
  className?: string;
};

const ShadcnReactTableDragCell = <TData, TValue>({
  cell,
}: ShadcnReactTableDragCellProps<TData, TValue>) => {
  const { setNodeRef, style } = useDndAttrs(cell.column.id, {
    width: cell.column.getSize(),
  });

  return (
    <TableCell
      ref={setNodeRef}
      key={cell.id}
      style={{
        ...getCommonPinningStyles({ column: cell.column }),
        ...style,
      }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  );
};

export type ShadcnReactTableDndCellProps<TData, TValue> = {
  cell: Cell<TData, TValue>;
  columnOrder: string[];
  className?: string;
};

const ShadcnReactTableDndCell = <TData, TValue>({
  cell,
  columnOrder,
  className,
}: ShadcnReactTableDndCellProps<TData, TValue>) => {
  return (
    <SortableContext
      key={cell.id}
      items={columnOrder}
      strategy={horizontalListSortingStrategy}
    >
      <ShadcnReactTableDragCell cell={cell} className={className} />
    </SortableContext>
  );
};

export default ShadcnReactTableDndCell;
