import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:9000";
function EditProjectPage(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${API_URL}/hints/${id}`).then((response)=>{
      setTitle(response.data.title);
      setDescription(response.data.description);
      setImage(response.data.image);
    }).catch((error)=> console.log(error))
  }, [id])

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {title, description, image};
    axios.put(`${API_URL}/hints/${id}`, data)
    .then(()=>{
      navigate("/hints");
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const deleteProject = () =>{
    axios.delete(`${API_URL}/hints/${id}` ).then(()=>{
      navigate("/hints");
    })
    .catch((error)=>console.log(error));
  }
  
  return (
    <article>
      <form className='form'onSubmit={handleSubmit}>
        <label className='form_label'>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className='form_label'>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label className='form_label'>Image</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className='form_btn' type = "submit">Edit Page</button>
      </form>
      <button onClick={deleteProject}>Delete Page</button>
    </article>
  );
}
export default EditProjectPage;