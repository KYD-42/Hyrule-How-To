import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <section style={{color: "white", marginTop: "200px", textAlign: "center"}}> {/* to replace on CSS */}
          <img src={treasure.image} alt={treasure.name} />
          <h1>{treasure.name}</h1>
          <h3>{treasure.common_locations}</h3>
          <p>{treasure.description}</p>
          <p>Drops: {treasure.drops}</p>
        </section>
      }
    </div>
  );
}

export default TreasureDetails;