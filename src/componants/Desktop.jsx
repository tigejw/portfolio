import ButtonGrid from "./ButtonGrid";
import { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";
export default function Desktop({ dispatch }) {
  const [musicMuted, setMusicMuted] = useState(true);
  const [selectedSongSrc, setSelectedSongSrc] = useState(["/audio/1-03. Subwoofer Lullaby.mp3"])
  const minecraftRef = useRef(null);

  useEffect(() => {
    minecraftRef.current = new Howl({
      src: selectedSongSrc,
      loop: true,
    });
    Howler.volume(0.5);
  }, []);

  const muteButtonAction = () => {
    setMusicMuted(!musicMuted);
    musicMuted ? minecraftRef.current?.pause() : minecraftRef.current?.play();
  };

  const songSelector = () => {};

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
        <div className="button-mute" onClick={muteButtonAction}>
          m
        </div>
        <div className="button-eject" onClick={songSelector}></div>
      </div>
    </div>
  );
}
