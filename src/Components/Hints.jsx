import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:9000";
function Hints() {
  const [hints, setHints] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_URL}/hints`)
      .then((response) => {
        setHints(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return (
    <section className="hyruleCard">
      {error && <div>Error: {error.message}</div>}
      {hints &&
        hints.map((hint) => (
          <article className="cardID" key={hint.id}>
            <img className="cardImg" src={hint.image} alt={hint.name} />
            <h2 className="cardName">{hint.title}</h2>
            <Link to={`/hints/${hint.id}`}><button className="viewButton">View</button></Link>
          </article>
        ))}
    </section>
  );
}
export default Hints;












