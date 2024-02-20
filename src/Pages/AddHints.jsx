import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const API_URL = "http://localhost:9000";

function AddHints(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

   const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        const hint = {title, description, image};

        axios.post(`${API_URL}/hints`, hint)
        .then(()=> navigate("/hints"))
        .catch((error)=> console.log(error));

    }
    return (
      <form className='form'onSubmit={handleSubmit}>
        <label className='form_label'>Title</label>
        <input value = {title} name="title" type="text" required onChange={(e)=> setTitle(e.target.value)}/>
        <label className='form_label'>Description</label>
        <input value = {description} name="description" type="text" required onChange={(e)=> setDescription(e.target.value)} />
        <label className='form_label'>Image</label>
        <input value = {image} name="image" type="text" required onChange={(e)=> setImage(e.target.value)} />
        <button className='form_btn' type="submit">Add Hint</button>
      </form>
    );
}

export default AddHints;