import {DraggableWindow} from "./DraggableWindow"
import { windowsData } from "../assets/windowsData";
export function Windows({ openWindows, dispatch }) {

  return (
    <div className="window-container">
      {openWindows.map(({id, z}) => {
        const activeWindow = windowsData.find((w) => w.id === id);
        return (
          <DraggableWindow key={id}
          id={id}
          z={z}
          title={activeWindow.title}
          html={activeWindow.html}
          dispatch={dispatch}/>
        );
      })}
    </div>
    
  );
}
