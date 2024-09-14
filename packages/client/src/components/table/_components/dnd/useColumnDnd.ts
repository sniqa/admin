import { DragEndEvent } from "@dnd-kit/core";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

export type ColumnDnd = {
  columnOrder: string[];
  setColumnOrder: React.Dispatch<React.SetStateAction<string[]>>;
  handleDragEnd: (event: DragEndEvent) => void;
};

export const useColumnDnd = <TData>(columns: ColumnDef<TData>[]) => {
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    columns.map((c) => c.id!)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setColumnOrder((columnOrder) => {
        const oldIndex = columnOrder.indexOf(active.id as string);
        const newIndex = columnOrder.indexOf(over.id as string);
        return arrayMove(columnOrder, oldIndex, newIndex); //this is just a splice util
      });
    }
  };

  return {
    columnOrder,
    setColumnOrder,
    handleDragEnd,
  };
};
