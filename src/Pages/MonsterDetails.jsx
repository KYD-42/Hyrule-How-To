import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry";

function MonsterDetails() {
  const [monster, setMonster] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`) 
      .then((response) => {
        setMonster(response.data.data)
      })
     .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {monster && 
        <section className="detailsAll">
          <img className="detailsImg" src={monster.image} alt={monster.name} />
          <div className="detailsInfo">
          <h1>{monster.name}</h1>
          <h3>Locations: {monster.common_locations}</h3>
          <p>{monster.description}</p>
          <p>Drops: {monster.drops}</p>
          </div>
        </section>
      }
    </div>
  );
}

export default MonsterDetails;