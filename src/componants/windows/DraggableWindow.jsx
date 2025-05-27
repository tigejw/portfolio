import { useDraggable } from "@dnd-kit/core";
export function DraggableWindow({
  id,
  title,
  html,
  maxZ,
  position,
  z,
  dispatch,
}) {
  //add attached html to windows
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id });

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
        if (z < maxZ) {
          dispatch({ type: "select", id: id });
        }
      }}
    >
      <div className="window-header">
        <span className="window-title" {...listeners} {...attributes}>
          {title}
        </span>
        <button
          className="window-close-button"
          onClick={(e) => {
            dispatch({ type: "close", id: id });
          }}
        >
         [x]
        </button>
      </div>
      <div className="window-body">
        {html}
      </div>
    </div>
  );
}
