import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function HyruleMonsters() {
  const [monsters, setMonsters] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters")
      .then((response) => {
        setMonsters(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <section className="hyruleCard">
      {error && <div>Error: {error.message}</div>}
      {monsters &&
        monsters.data.map((monster) => (
          <article className="cardID" key={monster.id}>
            <img className="cardImg" src={monster.image} alt={monster.name} />
            <h2 className="cardName">{monster.name}</h2>
            <Link to={`/monsters/${monster.id}`}><button>View</button></Link>
          </article>
        ))}
    </section>
  );
}
export default HyruleMonsters;