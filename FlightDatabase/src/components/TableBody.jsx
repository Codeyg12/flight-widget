import { useState, useEffect } from "react";
import TableRow from "./TableRow";

const TableBody = () => {
  const [flights, setFlights] = useState(null);

  const getFlight = () => {
    fetch("http://localhost:3001/flights")
      .then((response) => response.json())
      .then((flights) => setFlights(Object.values(flights.data)))
      .catch((err) => console.error(err));
  };

  useEffect(() => getFlight(), []);

  return (
    <tbody>
      {flights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight} />
      ))}
    </tbody>
  );
};

export default TableBody;
