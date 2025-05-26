import Desktop from "./componants/Desktop";
import { Windows } from "./componants/Windows"

import { useReducer } from "react";
import { windowsReducer, initialWindows } from "./assets/windowsReducer";
function App() {
  
 
  const [openWindows, dispatch] = useReducer(windowsReducer, initialWindows);

  return (
    <>
   
     <Windows openWindows={openWindows} dispatch={dispatch}/>

     <Desktop dispatch={dispatch}/>
  
  
    </>
  );
}

export default App;
