import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry";

function TreasureDetails() {
  const [treasure, setTreasure] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`) 
      .then((response) => {
        setTreasure(response.data.data)
      })
     .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {treasure && 
        <section className="detailsAll">
          <img className="detailsImg" src={treasure.image} alt={treasure.name} />
          <div className="detailsInfo">
          <h1 style={{fontSize: '50px', textTransform: 'capitalize'}}>{treasure.name}</h1>
          <h3>Location(s): {treasure.common_locations}</h3>
          <p>{treasure.description}</p>
          <p style={{textTransform: 'capitalize'}}>Drops: {treasure.drops ? treasure.drops : 'N/A'}</p>
          <Link to= {`/treasure`}><button style={{marginTop: '20px'}}className="addButton"> Back </button></Link>
          </div>
        </section>
      }
    </div>
  );
}

export default TreasureDetails;