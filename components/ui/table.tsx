import { cn } from "@/lib/utils";

import React from "react";

const Table = React.forwardRef<
  React.ElementRef<"table">,
  React.ComponentPropsWithoutRef<"table">
>(({ className, ...props }, ref) => (
  <table ref={ref} className={cn("w-fit min-w-full", className)} {...props} />
));

Table.displayName = "@1stmmd/table";

const TableRow = React.forwardRef<
  React.ElementRef<"tr">,
  React.ComponentPropsWithoutRef<"tr">
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));

Table.displayName = "@1stmmd/table-row";

const TableHead = React.forwardRef<
  React.ElementRef<"thead">,
  React.ComponentPropsWithoutRef<"thead">
>(({ ...props }, ref) => <thead ref={ref} {...props} />);

Table.displayName = "@1stmmd/table-head";

const TableBody = React.forwardRef<
  React.ElementRef<"tbody">,
  React.ComponentPropsWithoutRef<"tbody">
>(({ ...props }, ref) => <tbody ref={ref} {...props} />);

Table.displayName = "@1stmmd/table-body";

const TableHeadCell = React.forwardRef<
  React.ElementRef<"th">,
  React.ComponentPropsWithoutRef<"th">
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn("px-4 h-12 font-normal text-start text-[14px]", className)}
    {...props}
  />
));

Table.displayName = "@1stmmd/table-head-cell";

const TableBodyCell = React.forwardRef<
  React.ElementRef<"td">,
  React.ComponentPropsWithoutRef<"td">
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("px-4 h-12 font-normal text-start text-[14px]", className)}
    {...props}
  />
));

Table.displayName = "@1stmmd/table-body-cell";

export { Table, TableBody, TableBodyCell, TableHead, TableHeadCell, TableRow };
