import { Button } from "@/components/ui/button";
// import {} from '@/components/ui/'
import { ShadcnReactTableProps } from "../types";
import { ColumnsIcon } from "@radix-ui/react-icons";

export type ShadcnReactTableColumnFilterButtonProps<TData> =
  ShadcnReactTableProps<TData>;

const ShadcnReactTableColumnFilterButton = <TData,>({
  table,
}: ShadcnReactTableColumnFilterButtonProps<TData>) => {
  const {
    columnFilter: [, toggleColumnFilter],
  } = table;

  return (
    // <Tooltip label={<p>{"hello"}</p>}>
    <Button variant="ghost" size="icon" onClick={toggleColumnFilter}>
      <ColumnsIcon className="h-5 w-5" />
    </Button>
    // </Tooltip>
  );
};

export default ShadcnReactTableColumnFilterButton;
