import {
  Tooltip as ShadcnToolTip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

const Tooltip = ({
  label,
  children,
}: {
  label: ReactNode;
  children: ReactNode;
}) => (
  <TooltipProvider>
    <ShadcnToolTip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </ShadcnToolTip>
  </TooltipProvider>
);

export default Tooltip;
