import React from "react";
import Display from "./Display";
import Drumpad from "./Drumpad";
import { bankOne, bankTwo } from "../utils/banks.js";
import { useSelector } from "react-redux";

const DrumMachine = () => {
  const display = useSelector((state) => state.display);
  return (
    <div id="drum-machine">
      <Display display={display} />
      <div className="banks-container">
        {bankOne.map((bank) => {
          return (
            <Drumpad
              keyCode={bank.keyCode}
              keyTrigger={bank.keyTrigger}
              id={bank.id}
              url={bank.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DrumMachine;
