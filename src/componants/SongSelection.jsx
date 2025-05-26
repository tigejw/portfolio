import { useState } from "react";

export default function SongSelection() {
  const [songs, setSong] = useState([{ title: "Subwoofer Lullaby", id: 1 }]);
  const selectSong = () => {
    
  };
  return (
    <>
      {songs.forEach((song) => {
        return (
          <div>
            <p>{song.title}</p>
            <button onClick={selectSong}></button>
          </div>
        );
      })}
    </>
  );
}
