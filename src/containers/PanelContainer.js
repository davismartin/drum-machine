import { connect } from "react-redux";

import Panel from "../components/Panel";
import { displayKey } from "../reducers/keyboard";
import { switchPower } from "../reducers/panel";

function mapStateToProps(state) {
  return {
    btnColor: state.panel.btnColor,
    id: state.keyboard.displayMsg,
    power: state.panel.powerState
  };
}

export default connect(
  mapStateToProps,
  {
    displayKey,
    switchPower
  }
)(Panel);
