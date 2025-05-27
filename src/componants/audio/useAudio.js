import { useContext } from "react";
import { AudioContext } from "./AudioProvider";

export function useAudio() {
  return useContext(AudioContext);
}
