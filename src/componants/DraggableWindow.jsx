import { useDraggable } from "use-draggable";

export function DraggableWindow({ id, title, html, z, dispatch }) {
 //add attached html to windows
  const {targetRef, handleRef} = useDraggable({controlStyle: true})

  return (
    <div
      className="window"
      key={id}
      ref={targetRef}
      style={{ zIndex: z, position: "absolute" }}
      onMouseDown={() => {
        dispatch({ type: "select", id: id });
      }}
    >
      <div className="window-header" ref={handleRef}>
        <span className="window-title">{title}</span>
        <button
          className="window-close-button"
          onClick={() => {
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
