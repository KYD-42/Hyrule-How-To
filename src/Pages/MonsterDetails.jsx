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
        <section style={{color: "white", marginTop: "200px", textAlign: "center"}}> {/* to replace on CSS */}
          <img src={monster.image} alt={monster.name} />
          <h1>{monster.name}</h1>
          <h3>{monster.common_locations}</h3>
          <p>{monster.description}</p>
          <p>Drops: {monster.drops}</p>
        </section>
      }
    </div>
  );
}

export default MonsterDetails;