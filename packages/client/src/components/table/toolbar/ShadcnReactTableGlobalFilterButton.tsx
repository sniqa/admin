import { Input } from "@/components/ui/input";
import { ShadcnReactTableProps } from "../types";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export type ShadcnReactTableGlobalFilterButtonProps<TData> =
  ShadcnReactTableProps<TData>;

const ShadcnReactTableGlobalFilterButton = <TData,>({
  table,
}: ShadcnReactTableGlobalFilterButtonProps<TData>) => {
  const {
    setGlobalFilter,
    globalFilter: [isEnableGlobalFilter, setIsEnableGlobalFilter],
  } = table;
  return (
    <>
      <div
        className={`inline-flex justify-between overflow-hidden transition-all rounded-lg ${
          isEnableGlobalFilter ? "w-64 border" : "w-0"
        }`}
      >
        <Input onChange={(v) => setGlobalFilter(v.target.value)} />
      </div>

      <Button size={`icon`} variant={`ghost`} onClick={setIsEnableGlobalFilter}>
        <MagnifyingGlassIcon className="h-5 w-5" />
      </Button>
    </>
  );
};

export default ShadcnReactTableGlobalFilterButton;
