import { Button } from "@/components/ui/button";
import { EnterFullScreenIcon, ExitFullScreenIcon } from "@radix-ui/react-icons";
import { ShadcnReactTableProps } from "../types";

export type ShadcnReactTableFullScreenButtonProps<TData> =
  ShadcnReactTableProps<TData>;

const ShadcnReactTableFullScreenButton = <TData,>({
  table,
}: ShadcnReactTableFullScreenButtonProps<TData>) => {
  const {
    fullScreen: [isFullScreen, toggleFullScreen],
  } = table;
  return (
    <Button variant="ghost" size="icon" onClick={toggleFullScreen}>
      {isFullScreen ? (
        <ExitFullScreenIcon className="h-5 w-5" />
      ) : (
        <EnterFullScreenIcon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ShadcnReactTableFullScreenButton;
