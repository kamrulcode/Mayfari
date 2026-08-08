import { FiThumbsUp } from "react-icons/fi";

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-header">
        <h4>{review.name}</h4>

        <span>{"★".repeat(review.rating)}</span>
      </div>

      <small>{review.date}</small>

      <h5>{review.title}</h5>

      <p>{review.comment}</p>

      {review.images.length > 0 && (
        <div className="review-images">
          {review.images.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      )}

      <button className="helpful">
        <FiThumbsUp />
        Helpful ({review.helpful})
      </button>
    </article>
  );
}

export default ReviewCard;
