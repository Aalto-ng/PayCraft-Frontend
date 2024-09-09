import { Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

export default DashBoard;
