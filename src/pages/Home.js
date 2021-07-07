import React, { Component } from "react";
import "../App.css";
import { Hero, News } from "../components";

export default class TOP extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-wrapper">
          <Hero />
          <News />
        </div>
      </div>
    );
  }
}
