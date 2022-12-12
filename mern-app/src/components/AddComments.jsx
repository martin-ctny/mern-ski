import { useState } from "react";
import { useParams } from "react-router-dom";

const AddComments = () => {
  const { _id } = useParams();

  const [newComments, setNewComments] = useState({
    username: "",
    description: "",
    starts: "",
    posts: _id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComments({ ...newComments, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // post comments
  };

  return (
    <form action="submit" onClick={handleClick}>
      <input
        type="text"
        name="username"
        onChange={(e) => handleChange(e)}
        placeholder="Votre Nom"
      />
      <input
        type="text"
        name="description"
        onChange={(e) => handleChange(e)}
        placeholder="Commentaire"
      />
      <input
        type="text"
        name="starts"
        onChange={(e) => handleChange(e)}
        placeholder="stars"
      />
      <button type="submit">Ajouter un commentaire</button>
    </form>
  );
};

export default AddComments;
