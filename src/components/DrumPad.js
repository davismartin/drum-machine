import React, { Component } from "react";

export class DrumPad extends Component {
  audio = React.createRef();
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
    if (this.props.id === key) {
      this.button.current.click();
      this.button.current.style.backgroundColor = "#d9d9d9";
    }
  };

  handleKeyUp = e => {
    if (this.button.current) {
      this.button.current.style.backgroundColor = "";
    }
  };

  handleOnClick = e => {
    if (this.props.power === "on") {
      this.shouldPlay();
      this.props.onClick(e.target.name);
    }
  };

  shouldPlay = () => {
    if (this.audio.current) {
      if (this.audio.current.paused) {
        this.audio.current.play();
      } else {
        this.audio.current.currentTime = 0;
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
        <audio className="clip" id={id} src={sound} ref={this.audio} />
      </button>
    );
  }
}
