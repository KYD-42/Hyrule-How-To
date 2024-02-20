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
        setEquipment(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {equipment && (
        <section className="detailsAll">
          <img className="detailsImg" src={equipment.image} alt={equipment.name} />
          <div className="detailsInfo">
          <h1>{equipment.name}</h1>
          <h3>{equipment.common_locations}</h3>
          <p>{equipment.description}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default EquipmentDetails;