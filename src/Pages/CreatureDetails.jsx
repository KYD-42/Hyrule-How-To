import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
            <h1 style={{fontSize: '50px', textTransform: 'capitalize'}}>{creature.name}</h1>
            <h3>Location(s): {creature.common_locations ? creature.common_locations : 'N/A'}</h3>
            <p>{creature.description}</p>
            <p>Edible: {creature.edible ? 'Yes' : 'No'}</p>
            <p style={{textTransform: 'capitalize'}}>Cooking Effect: {creature.cooking_effect ? creature.cooking_effect : 'N/A'}</p>
            <Link to= {`/creatures`}><button style={{marginTop: '20px'}}className="addButton"> Back </button></Link>
          </div>
        </section>
      }
    </div>
  );
}

export default CreatureDetails;