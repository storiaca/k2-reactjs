import { useSelector } from "react-redux";
function ShowInfo() {
  const { info } = useSelector((state) => state.productStore);
  return (
    <div>
      <h2 className="text-4xl font-bold text-green-800">{info && info}</h2>
    </div>
  );
}

export default ShowInfo;
