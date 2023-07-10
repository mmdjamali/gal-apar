"use client";

import React, { useState } from "react";
import { Icons } from "./icons";
import Button from "./ui/button";
import { Chip } from "./ui/chip";
import Input from "./ui/input";
import {
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "./ui/table";

import {
  useReactTable,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import ProductOptions from "./product-options";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Product {
  _id: string;
  created_at: number;
  title: string;
}

const data: Product[] = [
  {
    _id: "0",
    created_at: new Date().getMilliseconds(),
    title: "test 0",
  },
  {
    _id: "1",
    created_at: new Date().getMilliseconds(),
    title: "test 1",
  },
  {
    _id: "2",
    created_at: new Date().getMilliseconds(),
    title: "test 2",
  },
  {
    _id: "3",
    created_at: new Date().getMilliseconds(),
    title: "test 3",
  },
  {
    _id: "4",
    created_at: new Date().getMilliseconds(),
    title: "test 4",
  },
  {
    _id: "5",
    created_at: new Date().getMilliseconds(),
    title: "test 5",
  },
  {
    _id: "6",
    created_at: new Date().getMilliseconds(),
    title: "test 6",
  },
  {
    _id: "7",
    created_at: new Date().getMilliseconds(),
    title: "test 7",
  },
  {
    _id: "8",
    created_at: new Date().getMilliseconds(),
    title: "test 8",
  },
  {
    _id: "9",
    created_at: new Date().getMilliseconds(),
    title: "test 9",
  },
  {
    _id: "10",
    created_at: new Date().getMilliseconds(),
    title: "test 10",
  },
];

const columns: ColumnDef<Product>[] = [
  {
    id: "_id",
    accessorKey: "_id",
    cell({ row }) {
      return (
        <TableBodyCell className="w-1">
          <Button
            onClick={() => {
              navigator.clipboard.writeText(row.getValue("_id"));
            }}
            className="p-2"
            color="foreground"
          >
            <Icons.FileCopy className="text-[16px]" />
          </Button>
        </TableBodyCell>
      );
    },
    header() {
      return <TableHeadCell className="w-1 text-center">_id</TableHeadCell>;
    },
  },
  {
    id: "title",
    accessorKey: "title",
    cell({ row }) {
      return (
        <TableBodyCell>
          <p>{row.getValue("title")}</p>
        </TableBodyCell>
      );
    },
    header() {
      return (
        <TableHeadCell>
          <Button variant="text" color="foreground">
            Title
          </Button>
        </TableHeadCell>
      );
    },
  },
  {
    id: "options",
    cell() {
      return (
        <TableBodyCell className="w-1">
          <ProductOptions />
        </TableBodyCell>
      );
    },
    header() {
      return <TableHeadCell className="w-1" />;
    },
    enableHiding: false,
  },
];

const ProductTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="flex flex-col gap-4 w-full relative text-foreground">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Input placeholder="Search..." />
          <Button>Submit</Button>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outlined" color="foreground">
                Columns
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
              <DropdownMenuContent align="end" className="min-w-[150px]">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column, idx) => (
                    <DropdownMenuItem
                      key={idx}
                      onClick={() => {
                        column.toggleVisibility(!column.getIsVisible());
                      }}
                    >
                      <span className="flex items-center justify-center h-[16px] aspect-square">
                        {column.getIsVisible() ? (
                          <Icons.Check className="text-[16px]" />
                        ) : (
                          ""
                        )}
                      </span>
                      {column.id}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </div>
      </div>

      <div className="w-full border border-border rounded overflow-auto mb-4">
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup, idx) => (
              <TableRow key={idx}>
                {headerGroup.headers.map((header, idx) => (
                  <React.Fragment key={idx}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </React.Fragment>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, idx) => (
                <TableRow
                  className={cn(idx + 1 === 10 ? "border-b-[0px]" : "")}
                  key={row?.id}
                >
                  {row.getVisibleCells().map((cell, idx) => (
                    <React.Fragment key={idx}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </React.Fragment>
                  ))}
                </TableRow>
              ))
            ) : (
              <></>
            )}

            {(() => {
              if (!table.getRowModel().rows.length) return null;

              const emptyRows = 10 - table.getRowModel().rows.length;

              return (
                <>
                  {Array(emptyRows)
                    .fill(" ")
                    .map((_, idx) => (
                      <TableRow className="border-none" key={idx}>
                        <TableBodyCell />
                      </TableRow>
                    ))}
                </>
              );
            })()}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductTable;
