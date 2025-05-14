export const initialWindows = []
export function windowsReducer(openWindows, action){
    switch(action.type){
        case "open" : {
            const maxZ = openWindows.length ? Math.max(...openWindows.map((w)=>w.z || 1 )) : 1
            const alreadyOpen = openWindows.find((w) => w.id === action.id);
            if (alreadyOpen) {
              return openWindows.map((w) =>
                w.id === action.id ? { ...w, z: maxZ + 1 } : w
              );
            }else{
                return [...openWindows, {id: action.id, z: maxZ + 1,  position: action.position || { x: 100, y: 100 }, }]
            }
        }
        case "close" : {
            return openWindows.filter((w)=> w.id !== action.id)
        }
        case "select" : {
            const maxZ = Math.max(0, ...openWindows.map(w=>w.z))
            return openWindows.map(win=>{
                if(win.id === action.id){
                    win.z = maxZ + 1
                    return win
                }else{
                    return win
                }
            })
        }
        case "move": {
            return openWindows.map((win) => {
              if (win.id === action.id) {
                return {
                  ...win,
                  position: {
                    x: win.position.x + action.delta.x,
                    y: win.position.y + action.delta.y,
                  },
                };
              }
              return win;
            });
          }
        default:
            return openWindows
    }
}