"use client";

import { useState } from "react";
import { RiMenuAddLine } from "react-icons/ri";
import TrackInfo from "@/src/components/TrackInfo";
import Controls from "@/src/components/Controls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import PlayList from "./PlayList";

export default function AudioPlayer() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="audio-player__wrapper">
      <div className="audio-player">
        <TrackInfo />
        <Controls />
        <ProgressBar />
      </div>
    </div>
  );
}
