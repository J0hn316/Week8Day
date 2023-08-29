import { useParams } from "react-router-dom";
import data from "../components/data";

function Stocks() {
  const params = useParams();
  const symbol = params.symbol;
  //   console.log(symbol);

  const selectStock = data.find((el) => {
    return el.symbol === symbol;
  });

  return (
    <div>
      <h1>Name: {selectStock.name}</h1>
      <h1>Price: {selectStock.lastPrice}</h1>
    </div>
  );
}

export default Stocks;
