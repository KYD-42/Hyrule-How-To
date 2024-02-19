import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function HyruleEquipment() {
  const [equipment, setEquipment] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment")
      .then((response) => {
        setEquipment(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <section className="hyruleCard">
      {error && <div>Error: {error.message}</div>}
      {equipment &&
        equipment.data.map((equipment) => (
          <article className="cardID" key={equipment.id}>
            <img className="cardImg" src={equipment.image} alt={equipment.name} />
            <h2 className="cardName">{equipment.name}</h2>
            <Link to={`/equipment/${equipment.id}`}><button>View</button></Link>
          </article>
        ))}
    </section>
  );
}
export default HyruleEquipment;