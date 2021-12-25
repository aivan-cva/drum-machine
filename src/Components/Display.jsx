import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const display = useSelector((state) => state.display);
  return (
    <div className="display" id="display">
      {display}
    </div>
  );
};

export default Display;
