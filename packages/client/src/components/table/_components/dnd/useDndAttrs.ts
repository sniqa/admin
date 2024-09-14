import { UniqueIdentifier } from "@dnd-kit/core";
import { CSSProperties } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const useDndAttrs = (id: UniqueIdentifier, styles: CSSProperties) => {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useSortable({
      id,
    });

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: "relative",
    transform: CSS.Translate.toString(transform), // translate instead of transform to avoid squishing
    transition: "width transform 0.2s ease-in-out",
    zIndex: isDragging ? 1 : 0,
    ...styles,
  };

  return {
    attributes,
    listeners,
    setNodeRef,
    style,
  };
};
