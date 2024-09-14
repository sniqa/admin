import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
// import { ChevronsUpDown, Plus, X } from "lucide-react";
import { CaretUpIcon, CaretDownIcon } from "@radix-ui/react-icons";

const NetworkPanel = () => {
  return (
    <div className="w-1/5 h-full border-r overflow-y-auto">
      <Panel />
      <Panel />
      <Panel />
      <Panel />
    </div>
  );
};

export default NetworkPanel;

const Panel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border-b"
    >
      <div className="flex items-center justify-between px-2 ">
        <span className="text-sm font-semibold py-3">@peduarte starred</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            {isOpen ? (
              <CaretUpIcon className="h-4 w-4" />
            ) : (
              <CaretDownIcon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-1 pl-6 flex flex-col bg-gray-50">
        <div className="rounded-md font-mono text-sm h-8">
          @radix-ui/primitives
        </div>
        <div className="rounded-md font-mono text-sm h-8">
          @radix-ui/primitives
        </div>
        <div className="rounded-md font-mono text-sm h-8">
          @radix-ui/primitives
        </div>
        <div className="rounded-md font-mono text-sm h-8">
          @radix-ui/primitives
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
