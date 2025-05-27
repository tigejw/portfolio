import { buttonData } from "../../assets/buttonsData";
export default function ButtonGrid({ dispatch }) {
  
  function handleWindowOpen(id) {
    dispatch({
      type: "open",
      id: id
    })
  }
  
  return (
    <div className="button-grid">
      {buttonData.map(({ id, label, icon }) => (
        <button
          key={id}
          className="grid-button"
          onClick={() => {
            handleWindowOpen(id);
          }}
        >
          {icon}
          <p className="button-label">{label}</p>
        </button>
      ))}
    </div>
  );
}
