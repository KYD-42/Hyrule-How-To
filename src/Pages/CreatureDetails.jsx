import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry";

function CreatureDetails() {
  const [creature, setCreature] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`) 
      .then((response) => {
        setCreature(response.data.data)
      })
     .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {creature && 
        <section className="detailsAll">
          <img className="detailsImg" src={creature.image} alt={creature.name} />
          <div className="detailsInfo">
            <h1>{creature.name}</h1>
            <h3>{creature.common_locations}</h3>
            <p>{creature.description}</p>
            <p>Edible: {creature.edible ? 'Yes' : 'No'}</p>
            <p>Cooking Effect: {creature.cooking_effect}</p>
          </div>
        </section>
      }
    </div>
  );
}

export default CreatureDetails;