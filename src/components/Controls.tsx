import { useState } from "react";
import {
  BsFillPauseFill,
  BsFillPlayFill,
} from "react-icons/bs";
import { RiForward10Fill, RiReplay10Line } from "react-icons/ri";

export default function Controls() {
  return(
    <div className="player-controls">
      <button className="rewind-btn">
        <RiReplay10Line />
      </button>
      <button className="play-btn">
        <BsFillPlayFill />
      </button>
      <button className="fast-forward__btn">
        <RiForward10Fill />
      </button>
    </div>
  );
}
