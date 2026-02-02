import { useState } from "react";
import {
  BsFillPauseFill,
  BsFillPlayFill,
} from "react-icons/bs";
import { RiForward10Fill, RiReplay10Line } from "react-icons/ri";

export default function Controls() {
  return(
    <div className="audio-controls__wrapper">
      <div className="audio__controls">
      <button className="audio__controls--btn">
        <RiReplay10Line />
      </button>
      <button className="audio__controls--btn audio__controls--btn-play">
        <BsFillPlayFill />
      </button>
      <button className="audio__controls--btn">
        <RiForward10Fill />
      </button>
      </div>
    </div>
  );
}
