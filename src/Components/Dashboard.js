// import { Switch } from "@material-ui/core";
import { DashboardOutlined } from "@material-ui/icons";
import React, { Component } from "react";
import MasterVolCard from "./MaterVolCard";
import SoundQCard from "./SoundQCard";
import SwitchCard from "./SwitchCard";

function Dashboard() {
  return (
    <div className="page__sec">
      <h1>Welcome User</h1>
      <SwitchCard />
      <MasterVolCard />
      <SoundQCard />
    </div>
  );
}

export default Dashboard;
