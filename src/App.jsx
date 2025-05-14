import Desktop from "./componants/Desktop";
import { Windows } from "./componants/Windows"
import { useReducer } from "react"
import {DndContext} from "@dnd-kit/core"
import { windowsReducer, initialWindows } from "./assets/windowsReducer";
function App() {
  const [openWindows, dispatch] = useReducer(windowsReducer, initialWindows)
  
  function handleDragEnd({delta, active}) {
    dispatch({
      type: "move",
      id: active.id,
      delta,
    });
  }
  
  return (
    <>
   <DndContext onDragEnd={handleDragEnd}>
     <Windows openWindows={openWindows} dispatch={dispatch}/>
   </DndContext>
     <Desktop dispatch={dispatch}/>
  
  
    </>
  );
}

export default App;
