// import { Switch } from "@material-ui/core";
import React, { Component } from "react";
import MasterVolCard from "./MaterVolCard";
import SoundQCard from "./SoundQCard";
import SwitchCard from "./SwitchCard";

export default class Dashboard extends Component {
  render() {
    return (
      <div className = 'page__sec'>
        <h1>Welcome User</h1>
        <SwitchCard />
        <MasterVolCard />
        <SoundQCard />
      </div>
    );
  }
}
