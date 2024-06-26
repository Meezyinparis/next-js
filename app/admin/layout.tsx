import React, { ReactNode } from "react";

interface Props {
  children: Readonly<ReactNode>;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-800 p-5 mr-5">Admin Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
