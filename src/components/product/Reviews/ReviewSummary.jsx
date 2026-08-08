function ReviewSummary() {
  const stats = [
    { star: 5, value: 102 },
    { star: 4, value: 18 },
    { star: 3, value: 5 },
    { star: 2, value: 2 },
    { star: 1, value: 1 },
  ];

  return (
    <section className="review-summary">
      <h2>4.9</h2>

      <p>Based on 128 Reviews</p>

      {stats.map((item) => (
        <div key={item.star} className="rating-row">
          <span>{item.star}★</span>

          <div className="bar">
            <div
              className="fill"
              style={{
                width: `${item.value}%`,
              }}
            />
          </div>

          <span>{item.value}</span>
        </div>
      ))}
    </section>
  );
}

export default ReviewSummary;
