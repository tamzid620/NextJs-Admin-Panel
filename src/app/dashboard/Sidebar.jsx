import NavLinks from "@/Components/NavLinks";
import Link from "next/link";
import React from "react";

const sideLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
];

const Sidebar = () => {
  return (
<aside className="mr-10">
      <h1 className="text-green-500 text-3xl font-semibold bg-slate-200">Dashboard</h1>
      <ul>
        {sideLinks.map(({ path, title }) => (
          <li key={path}>
            <NavLinks exact activeClassName="text-blue-500" href={path}>{title}</NavLinks>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
