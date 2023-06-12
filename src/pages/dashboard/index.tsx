import DashboardNav from "@/components/dashboard/dashboard-nav";
import DataTable from "@/components/dashboard/data-table";
import React from "react";

function Admin() {
  return (
    <main className="flex w-full h-full">
      <DashboardNav />
      <DataTable />
    </main>
  );
}

export default Admin;
