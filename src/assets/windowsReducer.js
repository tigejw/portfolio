export const initialWindows = []
export function windowsReducer(openWindows, action){
    switch(action.type){
        //if window already open dispatch select call <-----
        case "open" : {
            const maxZ = openWindows.length ? Math.max(...openWindows.map((w)=>w.z || 0 )) : 0
            return [...openWindows, {id: action.id, z: maxZ + 1}]
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
        default:
            return openWindows
    }
}