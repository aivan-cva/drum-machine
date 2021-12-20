import React from "react";

const Drumpad = ({ keyCode, keyTrigger, id, url }) => {
  return (
    <div className="drum-pad">
      <p>{keyTrigger}</p>
      <audio className="clip" id={id}>
        <source src={url} />
      </audio>
    </div>
  );
};

export default Drumpad;
