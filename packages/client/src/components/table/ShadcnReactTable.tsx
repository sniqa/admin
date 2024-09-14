import ShadcnReactTableContainer from "./ShadcnReactTableContainer";
import { ShadcnReactTableProps } from "./types";

const ShadcnReactTable = <TData,>({
  table,
  className,
}: ShadcnReactTableProps<TData>) => {
  console.log(table);

  return <ShadcnReactTableContainer table={table} className={className} />;
};

export default ShadcnReactTable;
