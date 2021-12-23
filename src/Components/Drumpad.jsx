import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Drumpad = ({ keyCode, keyTrigger, id, url }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const dispatch = useDispatch();

  const playPad = (padId) => {
    dispatch({ type: "DISPLAY_CHANGE", payload: padId });

    const sound = document.getElementById(padId);
    sound.currentTime = 0;
    sound.play();
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) {
      dispatch({ type: "DISPLAY_CHANGE", payload: id });
      const sound = document.getElementById(id);
      sound.currentTime = 0;
      sound.play();
    }
  };

  return (
    <button className="drum-pad" onClick={() => playPad(id)}>
      <p>{keyTrigger}</p>
      <p>{id}</p>
      <audio className="clip" id={id} src={url}></audio>
    </button>
  );
};

export default Drumpad;
