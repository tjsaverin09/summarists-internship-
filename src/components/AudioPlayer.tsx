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
    <div>
      <div className="min-h-24 bg-[#2e2d2d] flex gap-9 lg:flex-row justify-between items-center text-white p-[0.5rem_10px]">
        <TrackInfo />
        <Controls />
        <ProgressBar />
      </div>
    </div>
  );
}
