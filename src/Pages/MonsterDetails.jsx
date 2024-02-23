import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          <h1 style={{fontSize: '50px', textTransform: 'capitalize'}}>{monster.name}</h1>
          <h3>Location(s): {monster.common_locations}</h3>
          <p>{monster.description}</p>
          <p style={{textTransform: 'capitalize'}}>Drops: {monster.drops ? monster.drops : 'N/A'}</p>
          <Link to= {`/monsters`}><button style={{marginTop: '20px'}}className="addButton"> Back </button></Link>
          </div>
        </section>
      }
    </div>
  );
}

export default MonsterDetails;