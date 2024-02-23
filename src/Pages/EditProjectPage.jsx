import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://json-server-backend-hyrule-how-to.onrender.com";
function EditProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/hints/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setImage(response.data.image);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, description, image };
    axios
      .put(`${API_URL}/hints/${id}`, data)
      .then(() => {
        navigate("/hints");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProject = () => {
    axios
      .delete(`${API_URL}/hints/${id}`)
      .then(() => {
        navigate("/hints");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group-description">
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="form-submit-btn" type="submit">
          .°˖✧ Edit ✧˖°.
        </button>
      </form>
      <button className="form-submit-btn" onClick={deleteProject}>
        ✖ Delete ✖
      </button>
    </div>
  );
}
export default EditProjectPage;
