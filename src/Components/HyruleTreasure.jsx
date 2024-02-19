import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function HyruleTreasure() {
  const [treasure, setTreasure] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure")
      .then((response) => {
        setTreasure(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <section className="hyruleCard">
      {error && <div>Error: {error.message}</div>}
      {treasure &&
        treasure.data.map((treasure) => (
          <article className="cardID" key={treasure.id}>
            <img className="cardImg" src={treasure.image} alt={treasure.name} />
            <h2 className="cardName">{treasure.name}</h2>
            <Link to={`/equipment/${treasure.id}`}><button>View</button></Link>
          </article>
        ))}
    </section>
  );
}
export default HyruleTreasure;