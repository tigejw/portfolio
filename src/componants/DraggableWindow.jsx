import { useDraggable } from "@dnd-kit/core";
export function DraggableWindow({ id, title, html, position, z, dispatch }) {
  //add attached html to windows
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    position: "absolute",
    zIndex: z,
    transform: `translate3d(${position.x + (transform?.x || 0)}px, ${
      position.y + (transform?.y || 0)
    }px, 0)`,
  };

  return (
    <div
      className="window"
      key={id}
      ref={setNodeRef}
      style={style}
      onMouseDown={() => {
        dispatch({ type: "select", id: id });
      }}
    >
      <div className="window-header" {...listeners} {...attributes}>
        <span className="window-title">{title}</span>
        <button
          className="window-close-button"
          onClick={() => {
            //this isnt working, because select is activating on mousedown.......
            console.log("closing", id)
            dispatch({ type: "close", id: id });
          }}
        >
          ×
        </button>
      </div>
      <div className="window-body">
        <p>Filler text!!!:D update to add custom html here !</p>
      </div>
    </div>
  );
}
