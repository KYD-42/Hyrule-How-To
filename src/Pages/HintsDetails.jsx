import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:9000";

function HintsDetails() {
  const [hint, setHint] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        setHint(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {hint && (
        <section
          style={{ color: "white", marginTop: "200px", textAlign: "center" }}
        >
          {" "}
          {/* to replace on CSS */}
          <img src={hint.image} alt={hint.title} />
          <h1>{hint.title}</h1>
          <p>{hint.description}</p>
        </section>
      )}
    </div>
  );
}
export default HintsDetails;