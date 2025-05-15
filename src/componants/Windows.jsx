import { DraggableWindow } from "./DraggableWindow";
import { windowsData } from "../assets/windowsData";
export function Windows({ openWindows, dispatch }) {
  const maxZ = Math.max(...openWindows.map(w => w.z));
  return (
    <div className="window-container">
      {openWindows
        .filter((w) => w.open)
        .map(({ id, z, position }) => {
          const activeWindow = windowsData.find((w) => w.id === id);
          if(!activeWindow) return null
          return (
            <DraggableWindow
              key={id}
              id={id}
              z={z}
              maxZ={maxZ}
              title={activeWindow.title}
              html={activeWindow.html}
              position={position}
              dispatch={dispatch}
            />
          );
        })}
    </div>
  );
}
