// needed for table body level scope DnD setup
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  type DragEndEvent,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";

export type DnDContainerProps = {
  onDragEnd: (event: DragEndEvent) => void;
  children?: JSX.Element;
};

const DnDContainer = ({ onDragEnd, children }: DnDContainerProps) => {
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={onDragEnd}
      sensors={sensors}
    >
      {children}
    </DndContext>
  );
};

export default DnDContainer;
