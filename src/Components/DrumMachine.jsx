import React from "react";
import Display from "./Display";
import Drumpad from "./Drumpad";
import { bankOne, bankTwo } from "../utils/banks.js";

const DrumMachine = () => {
  return (
    <div id="drum-machine">
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
      <Display />
    </div>
  );
};

export default DrumMachine;
