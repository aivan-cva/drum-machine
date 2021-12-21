import React from "react";

const Drumpad = ({ keyCode, keyTrigger, id, url }) => {
  const playPad = () => {
    const sound = document.getElementById(id);
    sound.play();
  };

  return (
    <div className="drum-pad" onClick={playPad}>
      <p>{keyTrigger}</p>
      <audio className="clip" id={id} src={url}></audio>
    </div>
  );
};

export default Drumpad;
