import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://json-server-backend-hyrule-how-to.onrender.com";

function AddHints() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const hint = { title, description, image };

    axios
      .post(`${API_URL}/hints`, hint)
      .then(() => navigate("/hints"))
      .catch((error) => console.log(error));
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            name="title"
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group-description">
          <label>Description</label>
          <textarea
            value={description}
            name="description"
            type="text"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            value={image}
            name="image"
            type="text"
            required
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="form-submit-btn" type="submit">
          .°˖✧ Add Hint ✧˖°.
        </button>
      </form>
    </div>
  );
}

export default AddHints;
