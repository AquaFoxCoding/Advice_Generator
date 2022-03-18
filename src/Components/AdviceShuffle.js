import React, { useState, useEffect } from "react";
import style from "./style.css";
import adviceSlip from "./api/adviceSlip";
import { render } from "@testing-library/react";

class AdviceShuffle extends React.Component {
  state = { content: "...loading", adviceNum: "" };

  fetchData = async () => {
    const response = await adviceSlip.get("/advice");
    const quote = response.data.slip.advice;
    this.setState({
      content: response.data.slip.advice,
      adviceNum: response.data.slip.id,
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div className="content">
        <div>
          <h5>Advice #{this.state.adviceNum}</h5>
        </div>
        <div>
          <p>{this.state.content}</p>
        </div>
        <div>
          <img
            className="divider"
            src="./images/pattern-divider-mobile.svg"
          ></img>
          <img
            className="divider-desktop"
            src="./images/pattern-divider-desktop.svg"
          ></img>
        </div>
        <div className="shuffle-btn" onClick={this.fetchData}>
          <img src="./images/icon-dice.svg"></img>
        </div>
      </div>
    );
  }
}
export default AdviceShuffle;
