import { createContext, useState, useRef, useEffect } from "react";
import { songs } from "./songs";
import { Howl } from "howler";
export const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [currentSongId, setCurrentSongId] = useState(songs[0].id);
  const [isMuted, setIsMuted] = useState(false);
  const howlRef = useRef(null);

  const currentSong = songs.find((song) => song.id === currentSongId);

  useEffect(() => {
    //what happens when selected song is already playing?
    if (!currentSong) return

    if (howlRef.current) {
      howlRef.current.unload();
    }

    howlRef.current = new Howl({
      src: [currentSong.src],
      loop: true,
      volume: isMuted ? 0 : 1,
    });
    howlRef.current.play();
  }, [currentSongId]);

  useEffect(() => {
    if (howlRef.current) {
      howlRef.current.mute(isMuted);
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((isMuted) => !isMuted);
  };

  const playSong = (songId) => {
    setCurrentSongId(songId);
  };

  const value = {
    currentSong,
    isMuted,
    toggleMute,
    playSong,
    songs,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}
