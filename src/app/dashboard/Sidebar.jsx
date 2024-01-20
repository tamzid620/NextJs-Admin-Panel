import Link from "next/link";
import React from "react";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
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
      <h1 className="text-green-500 text-3xl font-semibold">Dashboard</h1>
      <ul>
        {navLinks.map(({ path, title }) => {
          <li key={path}>
            <Link>{title}</Link>
          </li>;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
