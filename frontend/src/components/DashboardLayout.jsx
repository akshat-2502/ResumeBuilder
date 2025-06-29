import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "./Navbar";

const DashboardLayout = ({ actuveMenu, children }) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar actuveMenu={actuveMenu} />
      {user && <div className="container mx-auto pb-4 pt-4">{children}</div>}
    </div>
  );
};

export default DashboardLayout;
