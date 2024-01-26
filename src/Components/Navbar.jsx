import React from "react";
import NavLinks from "./NavLinks";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/About",
    title: "About",
  },
  {
    path: "/blogs",
    title: "Blog",
  },
  {
    path: "/Profile",
    title: "Profile",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-10 py-5 border-b-2 shadow-lg shadow-gray-200">
      <h1 className="text-3xl font-semibold">Next Hero</h1>
      <ul className="flex items-center justify-between">
        {navLinks.map(({ path, title }) => (
          <li
            className="mx-2 p-2 rounded-md hover:text-red-500 hover:bg-gray-300 "
            key={{ path }}
          >
            <NavLinks
              exact={path === "/"}
              activeClassName="text-blue-500"
              href={path}
            >
              {title}
            </NavLinks>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
