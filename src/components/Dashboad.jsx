import React from "react";
import useUserStore from "./useUserStore";
import {
  ActiveUsersIcon,
  InactiveUsersIcon,
  TotalUsersIcon,
} from "../assets/icons";
import TotalActiveUsersChart from "./TotalActiveUsersChart";

const Dashboard = () => {
  const users = useUserStore((state) => state.users);
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive",
  ).length;

  return (
    <div className="md:ml-5">
      <div className="ml-4 mt-8 text-2xl font-normal">Dashboard</div>

      <div className="md:flex">
        <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
          <div className="">
            <div className="text-base">Total Users</div>
            <div className="mt-3 text-2xl font-medium">{totalUsers}</div>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff8e7]">
            <TotalUsersIcon />
          </div>
        </div>

        <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
          <div className="">
            <div className="text-base">Active Users</div>
            <div className="mt-3 text-2xl font-medium">{activeUsers}</div>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ebfcf0]">
            <ActiveUsersIcon />
          </div>
        </div>

        <div className="m-5 flex justify-between rounded-xl border p-5 shadow-lg md:w-64">
          <div className="">
            <div className="text-base">Inactive Users</div>
            <div className="mt-3 text-2xl font-medium">{inactiveUsers}</div>
          </div>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fee6e6]">
            <InactiveUsersIcon />
          </div>
        </div>
      </div>

      <div className="ml-9 mt-14 hidden h-[400px] w-[551px] md:block">
        <TotalActiveUsersChart />
      </div>
    </div>
  );
};

export default Dashboard;
