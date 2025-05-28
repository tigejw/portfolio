import Desktop from "./componants//desktop/Desktop";
import { Windows } from "./componants//windows/Windows";
import { useReducer, useState } from "react";
import { windowsReducer, initialWindows } from "./assets/windowsReducer";
import { AudioProvider } from "./componants/audio/AudioProvider";
import SongSelection from "./componants/windows/SongSelection";
function App() {
  const [openWindows, dispatch] = useReducer(windowsReducer, initialWindows);
  const [showSongSelection, setShowSongSelection] = useState(false);
  return (
    <>
      <AudioProvider>
        {showSongSelection ? (
          <SongSelection showSongSelection={showSongSelection} />
        ) : null}
        <Windows openWindows={openWindows} dispatch={dispatch} />
        <Desktop
          dispatch={dispatch}
          showSongSelection={showSongSelection}
          setShowSongSelection={setShowSongSelection}
        />
      </AudioProvider>
    </>
  );
}

export default App;
