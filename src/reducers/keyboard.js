const DISPLAY_KEY = "display_key";

export function displayKey(id) {
  return {
    type: DISPLAY_KEY,
    payload: id
  };
}

export function keyboardReducer(state = "", action) {
  switch (action.type) {
    case DISPLAY_KEY:
      return {
        displayMsg: action.payload
      };
    default:
      return state;
  }
}
