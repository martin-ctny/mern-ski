import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostList = ({ posts }) => {
  const naviguate = useNavigate();
  const [search, setSearch] = useState("");

  const handleClick = (e, _id) => {
    e.preventDefault();
    console.log(_id);
    naviguate(`/posts/${_id}`);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const filteredTitle = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="map">
      <input onChange={handleSearch} type="rechercher" />{" "}
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <img src={post.imageUrl} alt="" />
          <div className="right">
            <h2>{post.title}</h2>
            <h2>poids : {post.weight}</h2>
            <h2>style : {post.style}</h2>
            <h2>{post.price}€ / J</h2>
            <h2>{post.size} cm</h2>
            <h3>{post.description}</h3>
            <h3>{post._id}</h3>
            <button onClick={(e) => handleClick(e, post._id)}>Détails</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
