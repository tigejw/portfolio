import ButtonGrid from "./ButtonGrid";
import { useAudio } from "../audio/useAudio";
import { useState } from "react";
import SongSelection from "../windows/SongSelection";
export default function Desktop({ dispatch }) {
  const { toggleMute } = useAudio();

  const [showSongSelection, setShowSongSelection] = useState(false)

  const handleEject = () => {
    setShowSongSelection((showSongSelection => !showSongSelection))
  }

  return (
    <div className="desktop-container">
      <div className="rectangle-base">
        <div className="rectangle-top-depth"></div>
        <div className="rectangle-screen">
          {showSongSelection ? <SongSelection/> : <ButtonGrid dispatch={dispatch} />}
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
