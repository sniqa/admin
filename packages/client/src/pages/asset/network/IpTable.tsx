import { useShadcnReactTable } from "@/components/table/hooks/useShadcnReactTable";
import ShadcnReactTable from "@/components/table/ShadcnReactTable";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { Person, makeData } from "./makeData";

const fakerData = makeData(5_000);

const IpTable = () => {
  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      // {
      //   accessorKey: "id",
      //   filterFn: "equalsString", //note: normal non-fuzzy filter column - exact match required
      // },
      {
        id: "firstName",
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        filterFn: "includesStringSensitive", //note: normal non-fuzzy filter column
      },
      {
        accessorFn: (row) => row.lastName, //note: normal non-fuzzy filter column - case sensitive
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        filterFn: "includesString", //note: normal non-fuzzy filter column - case insensitive
        size: 400,
      },

      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: "fullName",
        header: "Full Name",
        cell: (info) => info.getValue(),
        // filterFn: "fuzzy", //using our custom fuzzy filter function
        // filterFn: fuzzyFilter, //or just define with the function
        // sortingFn: fuzzySort, //sort by fuzzy rank (falls back to alphanumeric)
        size: 140,
      },
    ],
    []
  );

  const table = useShadcnReactTable({
    columns,
    data: fakerData,
  });

  return <ShadcnReactTable table={table} className="w-full border" />;
};

export default IpTable;
