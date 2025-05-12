import ButtonGrid from "./ButtonGrid"

export default function Desktop(){
    return(
        <div className="desktop-container">
        <div className="rectangle-base">
          <div className="rectangle-top-depth"></div>
          <div className="rectangle-screen">
            <ButtonGrid/>
           </div>
          <div className="rectangle-dvd-under"></div>
          <div className="rectangle-dvd-over"></div>
          <div className="button-dark-mode"></div>
          <div className="button-mute"></div>
          <div className="button-eject"></div>
        </div>
      </div>
    )
}