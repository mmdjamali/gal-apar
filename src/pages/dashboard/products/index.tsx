import DashboardNav from "@/components/dashboard/dashboard-nav";
import ProductsTable from "@/components/tables/products-table";
import SearchInput from "@/components/ui/search-input";
import React from "react";

function Products() {
  return (
    <main className="flex w-full h-full relative">
      <DashboardNav />

      <div className="flex flex-col items-start h-full w-full relative gap-4 overflow-x-auto">
        <header className="flex flex-shrink-0 sticky top-0 items-center w-full bg-background z-[10] border-pre-flight border-b h-[56px] px-4 border-border">
          <SearchInput />
        </header>

        <div className="flex flex-col h-fit w-full relative px-4">
          <ProductsTable />
        </div>
      </div>
    </main>
  );
}

export default Products;
