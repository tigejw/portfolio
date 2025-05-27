import { useAudio } from "../audio/useAudio";
import { songs } from "../audio/songs";
export default function SongSelection() {
  const { playSong } = useAudio();
  return (
    <div className="song-selection-container">
      <h2> select a song! </h2>
      <ul className="song-selection-list">
        {songs.map((song) => {
          return (<li key={song.id} className="song-selection-song">
            <p>{song.title}</p>
            <button onClick={()=>{playSong(song.id)}}>PLAY</button>
          </li>);
            //what happens when selected song is already playing?
        })}
      </ul>
    </div>
  );
}
