import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <Outlet />{" "}
    </div>
  );
};

export default Dashboard;
