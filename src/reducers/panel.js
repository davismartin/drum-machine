const SWITCH_POWER = "switch_power";
const SET_ACTIVE_BUTTON = "SET_ACTIVE_BUTTON";
const INITIAL_STATE = {
  activeButton: "",
  btnColor: "#439863",
  powerState: "on"
};

export function switchPower(powerState) {
  return { type: SWITCH_POWER, payload: powerState === "on" ? "off" : "on" };
}

export function activeButton(button) {
  return { type: SET_ACTIVE_BUTTON, payload: button };
}

export function panelReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SWITCH_POWER:
      if (action.payload === "on") {
        return {
          powerState: action.payload,
          btnColor: "#439863"
        };
      } else {
        return {
          powerState: action.payload,
          btnColor: "#986143"
        };
      }
    default:
      return INITIAL_STATE;
  }
}
