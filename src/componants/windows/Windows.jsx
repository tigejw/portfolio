import { DraggableWindow } from "./DraggableWindow";
import { windowsData } from "../../assets/windowsData";
import { DndContext } from "@dnd-kit/core";
export function Windows({openWindows, dispatch}) {
  const maxZ = Math.max(...openWindows.map((w) => w.z));
  
  function handleDragEnd({ delta, active }) {
    dispatch({
      type: "move",
      id: active.id,
      delta,
    });
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="window-container">
        {openWindows
          .filter((w) => w.open)
          .map(({ id, z, position }) => {
            const activeWindow = windowsData.find((w) => w.id === id);
            if (!activeWindow) return null;
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
    </DndContext>
  );
}
