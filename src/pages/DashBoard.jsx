import { Link } from "react-router-dom";
import data from "../components/data";

function DashBoard() {
  return (
    <div>
      {data.map((n) => {
        const { name, symbol } = n;

        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default DashBoard;
