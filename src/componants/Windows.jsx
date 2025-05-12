import { windowsData } from "../assets/windowsData";

export function Windows({ openWindows, dispatch }) {

  return (
    <>
      {openWindows.map(({id, z}) => {
        const activeWindow = windowsData.find((w) => w.id === id);

        return (
          <div
            className="window"
            key={id}
            style={{ zIndex: z }}
            onMouseDown={() => {
              dispatch({ type: "select", id: id });
            }}
          >
            <div className="window-header">
              <span className="window-title">{activeWindow.title}</span>
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
              <p>
                Filler text!!!:D update to add custom html here !
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
