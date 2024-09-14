import { TableHead } from "@/components/ui/table";
import { getCommonPinningStyles } from "../hooks/getCommonStyles";
import DnDTriggerButton from "../_components/dnd/DnDTriggerButton";
import ShadcnReactTableColumnSortButton from "./ShadcnReactTableColumnSortButton";
import { useDndAttrs } from "../_components/dnd/useDndAttrs";
import { flexRender, Header, HeaderGroup } from "@tanstack/react-table";
import { ShadcnReactTableProps } from "../types";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

export type ShadcnReactTableDndColumnProps<TData, TValue> = {
  header: Header<TData, TValue>;
};

const ShadcnReactTableDndColumn = <TData, TValue>({
  header,
}: ShadcnReactTableDndColumnProps<TData, TValue>) => {
  const { listeners, attributes, setNodeRef, style } = useDndAttrs(
    header.column.id,
    {
      whiteSpace: "nowrap",
      width: header.column.getSize(),
    }
  );

  return (
    <TableHead
      colSpan={header.colSpan}
      ref={setNodeRef}
      className="pr-0"
      style={{
        ...getCommonPinningStyles({ column: header.column }),
        ...style,
      }}
    >
      <div className="flex items-center w-full justify-between h-full ">
        <div className="flex items-center w-full gap-1">
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
          <ShadcnReactTableColumnSortButton column={header.column} />

          <DnDTriggerButton {...listeners} {...attributes} />
        </div>

        {header.index != header.headerGroup.headers.length - 1 && (
          <div
            {...{
              onDoubleClick: () => header.column.resetSize(),
              onMouseDown: header.getResizeHandler(),
              onTouchStart: header.getResizeHandler(),
              className: `cursor-col-resize h-3/5 bg-gray-300 w-1 rounded-full`,
            }}
          />
        )}
      </div>
    </TableHead>
  );
};

export type ShadcnReactTableDndColumnsProps<TData> =
  ShadcnReactTableProps<TData> & {
    headerGroup: HeaderGroup<TData>;
  };
export const ShadcnReactTableDndColumns = <TData,>({
  headerGroup,
  table: { columnDnd },
}: ShadcnReactTableDndColumnsProps<TData>) => {
  const { columnOrder } = columnDnd!;

  return (
    <SortableContext
      items={columnOrder}
      strategy={horizontalListSortingStrategy}
    >
      {headerGroup.headers.map((header) => (
        <ShadcnReactTableDndColumn key={header.id} header={header} />
      ))}
    </SortableContext>
  );
};

export default ShadcnReactTableDndColumns;
