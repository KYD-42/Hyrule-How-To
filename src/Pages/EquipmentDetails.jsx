import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/entry";

function EquipmentDetails() {
  const [equipment, setEquipment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`) 
      .then((response) => {
        setEquipment(response.data.data)
      })
     .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {equipment && 
        <section style={{color: "white", marginTop: "200px", textAlign: "center"}}> {/* to replace on CSS */}
          <img src={equipment.image} alt={equipment.name} />
          <h1>{equipment.name}</h1>
          <h3>{equipment.common_locations}</h3>
          <p>{equipment.description}</p>
        </section>
      }
    </div>
  );
}

export default EquipmentDetails;