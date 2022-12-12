import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComments from "../components/AddComments";

const CardDetails = ({ posts }) => {
  const { _id } = useParams();
  const produit = posts.find((post) => post._id === _id);

  useEffect(() => {}, []);

  return (
    <div className="details">
      <div className="all-comments">
        <AddComments id={_id} />
        {produit.comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <h3>{comment.username}</h3>
            <h3>{comment.description}</h3>
            <h3>{comment.starts}</h3>
          </div>
        ))}
      </div>
      <div className="card-detail">
        <div className="">
          <img src={produit.imageUrl} alt="" />
          <div className="right">
            <h2>{produit.title}</h2>
            <h2>{produit.weight}</h2>
            <h2>{produit.style}</h2>
            <h2>{produit.price}€ / J</h2>
            <h2>{produit.size} cm</h2>
            <h3>{produit.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
