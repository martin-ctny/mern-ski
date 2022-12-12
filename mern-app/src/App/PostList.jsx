import postsService from "../setup/services/post.service";
import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await postsService.getPosts();

    setPosts(response);
  };

  return (
    <div className="map">
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <h2>{post.imageUrl}</h2>
          <h2>poids : {post.weight}</h2>
          <h2>size : {post.size}</h2>
          <h2>style : {post.style}</h2>
          <h2>price : {post.price}</h2>
          <h2>{post.description}</h2>
          <h1>Commentaires :</h1>
          {post.comments.map((revision) => (
            <div key={revision.id}>
              <h3>{revision.username}</h3>
              <h3>{revision.description}</h3>
              <h3>{revision.starts}</h3>
              <h3>Disponible : {revision.isAvailable ? "non" : "oui"}</h3>
            </div>
          ))}
          <h1>Booking :</h1>
          {post.booking.map((booking) => (
            <div key={booking.id}>
              <h3>{booking.telephoneNumber}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostList;
