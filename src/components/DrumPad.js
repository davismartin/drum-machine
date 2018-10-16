import React, { Component } from "react";

export class DrumPad extends Component {
  component = React.createRef();
  button = React.createRef();

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  handleKeyDown = e => {
    var key = e.key.toUpperCase();
    if (this.props.power === "on" && this.props.id === key) {
      this.shouldPlay();
      this.props.onClick(this.props.name);
      if (this.button.current) {
        this.button.current.style.backgroundColor = "#d9d9d9";
      }
    }
  };

  handleKeyUp = e => {
    if (this.button.current) {
      this.button.current.style.backgroundColor = "#eac67a";
    }
  };

  handleOnClick = e => {
    if (this.props.power === "on") {
      this.shouldPlay();
      this.props.onClick(e.target.name);
    }
  };

  shouldPlay = () => {
    if (this.component.current) {
      if (this.component.current.paused) {
        this.component.current.play();
      } else {
        this.component.current.currentTime = 0;
      }
    }
  };

  render() {
    const { id, name, sound } = this.props;
    return (
      <button
        name={name}
        id={id}
        type="button"
        className="drum-pad"
        onClick={this.handleOnClick}
        ref={this.button}
      >
        {id}
        <audio className="clip" id={id} src={sound} ref={this.component} />
      </button>
    );
  }
}
