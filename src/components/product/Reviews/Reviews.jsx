import "./Reviews.scss";

import { reviews } from "../../../data/reviews";

import ReviewSummary from "./ReviewSummary";
import ReviewCard from "./ReviewCard";
import gsap from "gsap";
import { useEffect } from "react";

function Reviews() {
  useEffect(() => {
    gsap.from(".review-card", {
      opacity: 0,

      y: 50,

      stagger: 0.15,

      duration: 1,

      scrollTrigger: {
        trigger: ".reviews",

        start: "top 80%",
      },
    });
  }, []);
  return (
    <section className="reviews">
      <ReviewSummary />

      <div className="review-list">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
