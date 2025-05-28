import ButtonGrid from "./ButtonGrid";
import { useAudio } from "../audio/useAudio";
import { useState } from "react";
import SongSelection from "../windows/SongSelection";
export default function Desktop({ dispatch , setShowSongSelection, showSongSelection}) {
  const { toggleMute } = useAudio();

  const handleEject = () => {
    console.log("click")
    setShowSongSelection((showSongSelection => !showSongSelection))
    console.log("show song selectiong in desktop", showSongSelection)
  }

  return (
    <div className="desktop-container">
      <div className="rectangle-base">
        <div className="rectangle-top-depth"></div>
        <div className="rectangle-screen">
          <ButtonGrid dispatch={dispatch} />
        </div>

        <div className="rectangle-dvd-under"></div>
        <div className="rectangle-dvd-over"></div>
        <div className="button-dark-mode"></div>
        <div className="button-mute" onClick={toggleMute}>
          m
        </div>
        <div className="button-eject" onClick={handleEject}>
          n
        </div>
      </div>
    </div>
  );
}
