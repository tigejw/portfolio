import Desktop from "./componants//desktop/Desktop";
import { Windows } from "./componants//windows/Windows";
import { useReducer } from "react";
import { windowsReducer, initialWindows } from "./assets/windowsReducer";
import { AudioProvider } from "./componants/audio/AudioProvider";
import SongSelection from "./componants/windows/SongSelection";
function App() {
  const [openWindows, dispatch] = useReducer(windowsReducer, initialWindows);
  return (
    <>
      <AudioProvider>
        <Windows openWindows={openWindows} dispatch={dispatch} />

        <Desktop dispatch={dispatch} />
      </AudioProvider>
    </>
  );
}

export default App;
