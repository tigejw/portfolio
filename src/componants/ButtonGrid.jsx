import { buttonData } from "../assets/buttonData";

export default function ButtonGrid() {
  return (
    <div className="button-grid">
      {buttonData.map(({ id, label, icon }) => (
        <button
          key={id}
          className="grid-button"
          onClick={console.log(`${label} clicked!`)}
        >
          {icon}
          <p className="button-label">{label}</p>
        </button>
      ))}
    </div>
  );
}
