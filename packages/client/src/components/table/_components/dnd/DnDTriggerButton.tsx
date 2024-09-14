import { Button } from "@/components/ui/button";
import { DragHandleDots1Icon } from "@radix-ui/react-icons";

const DnDTriggerButton = ({ ...props }) => {
  return (
    <Button native {...props}>
      <DragHandleDots1Icon className="w-4 h-4 m-0" />
    </Button>
  );
};

export default DnDTriggerButton;
