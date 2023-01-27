
import useRandomColor from "../../components/common/search/Search";

const Events = () => {
  const { color, changeColor } = useRandomColor();
  return (
    <div style={{  backgroundColor: "#"+color}}>
      <h1>Click to Change Color</h1>
      <button onClick={changeColor}>Click</button>
    </div>
  );
};
export default Events;
