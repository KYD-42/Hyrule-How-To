import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:9000";

function HintsDetails() {
  const [hint, setHint] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/hints/${id}`)
      .then((response) => {
        setHint(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div>
      {hint && (
        <section className="detailsAll">
          <img className="detailsImg" src={hint.image} alt={hint.title} />
          <div className="detailsInfo">
          <h1>{hint.title}</h1>
          <p>{hint.description}</p>
          <Link to= {`/edit-project/${id}`}>Edit Hint</Link>
          </div>
        </section>
      )}
    </div>
  );
}
export default HintsDetails;