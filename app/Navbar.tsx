import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-800 p-5">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Meezy
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
