import React, { Component } from "react";
import { audioData } from "../services/constants";
import { DrumPad } from "./DrumPad";
import { PowerButton } from "./PowerButton";

class Panel extends Component {
  handleClick = () => {
    const { displayKey, switchPower } = this.props;
    displayKey("");
    switchPower(this.props.power);
  };

  handleDrumClick = clickedDrum => {
    this.props.displayKey(clickedDrum);
  };

  render() {
    const { btnColor, id, power } = this.props;
    return (
      <React.Fragment>
        <div className="keyboard">
          {audioData.map(val => (
            <DrumPad
              key={val.id}
              id={val.id}
              sound={val.sound}
              name={val.name}
              onClick={this.handleDrumClick}
              power={power}
            />
          ))}
        </div>
        <div id="panel">
          <div id="topPanel">
            <PowerButton
              btnColor={btnColor}
              onClick={this.handleClick}
              powerState={power}
            />
          </div>
          <div id="bottomPanel">
            <div id="display">
              <div>{id}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Panel;
