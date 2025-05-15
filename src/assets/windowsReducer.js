export const initialWindows = [
  { id: 1, z: 1, open: false, position: { x: 100, y: 100 } },
  { id: 2, z: 1, open: false, position: { x: 200, y: 100 } },
  { id: 3, z: 1, open: false, position: { x: 300, y: 100 } },
  { id: 4, z: 1, open: false, position: { x: 100, y: 200 } },
  { id: 5, z: 1, open: false, position: { x: 200, y: 200 } },
  { id: 6, z: 1, open: false, position: { x: 300, y: 200 } },
];
export function windowsReducer(openWindows, action) {
  switch (action.type) {
    case "open": {
      const maxZ = Math.max(0, ...openWindows.map((w) => w.z || 1));
      return openWindows.map((w) =>
        w.id === action.id ? { ...w, z: maxZ + 1, open: true } : w
      );
    }
    case "close": {
      return openWindows.map((w) =>
        w.id === action.id ? { ...w, open: false } : w
      );
    }
    case "select": {
        console.log("selecting", action.id)
        const maxZ = Math.max(0, ...openWindows.map((w) => w.z));
        return openWindows.map((w) => {
          return w.id === action.id ? { ...w, z: maxZ + 1 } : w;
        });
      }
    case "move": {
      return openWindows.map((w) => {
        if (w.id === action.id) {
          return {
            ...w,
            position: {
              x: w.position.x + action.delta.x,
              y: w.position.y + action.delta.y,
            },
          };
        }
        return w;
      });
    }
    default:
      return openWindows;
  }
}
