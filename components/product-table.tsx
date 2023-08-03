"use client";

import React, { useMemo, useState } from "react";
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
import { useQuery } from "react-query";
import axios from "axios";
import { ProductType } from "@/types/product";

const ProductTable = () => {
  const { data, isLoading } = useQuery("my-products", async () => {
    return (await axios.get("/api/product/seller")).data;
  });

  const columns: ColumnDef<ProductType>[] = [
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
      id: "name",
      accessorKey: "name",
      cell({ row }) {
        return (
          <TableBodyCell>
            <p className="max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">
              {row.getValue("name")}
            </p>
          </TableBodyCell>
        );
      },
      header() {
        return (
          <TableHeadCell>
            <Button variant="text" color="foreground">
              Name
            </Button>
          </TableHeadCell>
        );
      },
    },
    {
      id: "currency",
      accessorKey: "currency",
      cell({ row }) {
        const Icon = Icons[row.getValue("currency") as string] ?? Icons.Circle;

        return (
          <TableBodyCell className="w-1">
            <div className="w-full grid place-items-center uppercase">
              {/* <Icon className="text-[21px] h-[21px] aspect-square text-success"/> */}
              {row.getValue("currency")}
            </div>
          </TableBodyCell>
        );
      },
      header() {
        return (
          <TableHeadCell className="w-1 text-center">Currency</TableHeadCell>
        );
      },
    },
    {
      id: "category",
      accessorKey: "category",
      cell({ row }) {
        return (
          <TableBodyCell>
            <p className="max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">
              {row.getValue("category")}
            </p>
          </TableBodyCell>
        );
      },
      header() {
        return (
          <TableHeadCell>
            <Button variant="text" color="foreground">
              Category
            </Button>
          </TableHeadCell>
        );
      },
    },
    {
      id: "options",
      cell({ row }) {
        return (
          <TableBodyCell className="w-1">
            <ProductOptions _id={row.getValue("_id")} />
          </TableBodyCell>
        );
      },
      header() {
        return <TableHeadCell className="w-1" />;
      },
      enableHiding: false,
    },
  ];

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: isLoading ? [] : data?.products,
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

      <div className="w-full border border-border rounded overflow-y-auto mb-4">
        <Table className="overflow-hidden">
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
            {!isLoading && table?.getRowModel()?.rows?.length ? (
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
              if (!isLoading && !table?.getRowModel().rows.length) return null;

              const emptyRows = 10 - (table?.getRowModel().rows.length ?? 0);

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
        {isLoading && (
          <Icons.Spinner className="absolute inset-0 m-auto animate-spin text-[21px] text-foreground" />
        )}
      </div>
    </div>
  );
};

export default ProductTable;
