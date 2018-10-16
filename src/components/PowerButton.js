import React from "react";

export const PowerButton = ({ btnColor, onClick, powerState }) => (
  <button
    id="powerButton"
    type="button"
    className="power"
    onClick={onClick}
    style={{ backgroundColor: btnColor }}
  >
    {powerState}
  </button>
);
