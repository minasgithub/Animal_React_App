import "./styles.css";
import React from "react";
import { animals } from "./animals.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: animals.dog
    };
    this.handleDogClick = this.handleDogClick.bind(this);
    this.handleCatClick = this.handleCatClick.bind(this);
    this.handleOtterClick = this.handleOtterClick.bind(this);
  }

  handleDogClick() {
    this.setState((state) => ({
      url: animals.dog
    }));
  }

  handleCatClick() {
    this.setState((state) => ({
      url: animals.cat
    }));
  }

  handleOtterClick() {
    this.setState((state) => ({
      url: animals.otter
    }));
  }

  render() {
    return (
      <div className="App">
        <button className="dogBtn" onClick={this.handleDogClick}>
          DOG
        </button>
        <button className="catBtn" onClick={this.handleCatClick}>
          CAT
        </button>
        <button className="otterBtn" onClick={this.handleOtterClick}>
          OTTER
        </button>
        <div className="imgDiv">
          <img src={this.state.url} alt="animal" />
        </div>
      </div>
    );
  }
}
