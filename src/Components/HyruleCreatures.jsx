import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function HyruleCreatures() {
  const [creatures, setCreatures] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures")
      .then((response) => {
        setCreatures(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <section className="hyruleCard">
      {error && <div>Error: {error.message}</div>}
      {creatures &&
        creatures.data.map((creature) => (
          <article className="cardID" key={creature.id}>
            <img className="cardImg" src={creature.image} alt={creature.name} />
            <h2 className="cardName">{creature.name}</h2>
            <Link to={`/creatures/${creature.id}`}><button className="viewButton" >View</button></Link>
          </article>
        ))}
    </section>
  );
}
export default HyruleCreatures;