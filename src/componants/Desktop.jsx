import ButtonGrid from "./ButtonGrid"
import { useEffect, useRef } from "react";
import { Howl, Howler } from "howler";
export default function Desktop({dispatch}){

  const minecraftRef = useRef(null);

  useEffect(() => {
    minecraftRef.current = new Howl({
      src: ["/audio/1-03. Subwoofer Lullaby.mp3"],
      loop: true,
    });
    Howler.volume(0.5);
  }, []);

  const startAudio = () => {
    minecraftRef.current?.play();
  };

    return(
        <div className="desktop-container">
        <div className="rectangle-base">
          <div className="rectangle-top-depth"></div>
          <div className="rectangle-screen">
            <ButtonGrid dispatch={dispatch}/>
           </div>
          
          <div className="rectangle-dvd-under"></div>
          <div className="rectangle-dvd-over"></div>
          <div className="button-dark-mode"></div>
          <div className="button-mute" onClick={startAudio}>
m
          </div>
          <div className="button-eject"></div>
        </div>
      </div>
    )
}