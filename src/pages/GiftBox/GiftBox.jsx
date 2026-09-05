import { Link } from "react-router-dom";
import "./GiftBox.scss";

const giftBoxes = [
  {
    id: 1,
    name: "The Signature Gift",
    subtitle: "A timeless MAYFAIR collection",
    price: 89,
    image: "/images/gift-signature.jpg",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "For Her",
    subtitle: "Elegant scents for unforgettable moments",
    price: 75,
    image: "/images/gift-for-her.jpg",
    tag: "FOR HER",
  },
  {
    id: 3,
    name: "For Him",
    subtitle: "Refined fragrances with character",
    price: 85,
    image: "/images/gift-for-him.jpg",
    tag: "FOR HIM",
  },
  {
    id: 4,
    name: "The Oud Collection",
    subtitle: "Deep, warm and sophisticated",
    price: 110,
    image: "/images/gift-oud.jpg",
    tag: "LUXURY",
  },
  {
    id: 5,
    name: "The Discovery Box",
    subtitle: "Six scents to discover",
    price: 65,
    image: "/images/gift-discovery.jpg",
    tag: "DISCOVERY",
  },
  {
    id: 6,
    name: "The Couple's Box",
    subtitle: "Two fragrances, one beautiful gift",
    price: 125,
    image: "/images/gift-couple.jpg",
    tag: "SPECIAL",
  },
];

function GiftBox() {
  return (
    <main className="gift-page">

      {/* HERO */}
      <section className="gift-hero">
        <div className="gift-hero-content">
          <span className="eyebrow">THE MAYFAIR GIFT EDIT</span>

          <h1>
            The Art
            <br />
            of Giving
          </h1>

          <p>
            Thoughtfully curated fragrance gifts,
            beautifully presented for someone special.
          </p>

          <a href="#gift-collection" className="gift-btn">
            Explore Gift Collection
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="gift-intro">
        <span className="eyebrow">GIVE SOMETHING MEMORABLE</span>

        <h2>
          A fragrance is more
          <br />
          than a gift.
        </h2>

        <p>
          It becomes a memory. Discover our collection of
          beautifully curated MAYFAIR gift boxes, created
          for birthdays, celebrations and every moment
          worth remembering.
        </p>
      </section>

      {/* COLLECTION */}
      <section
        className="gift-collection container"
        id="gift-collection"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>
            <h2>Gift Collection</h2>
          </div>

          <span className="collection-count">
            {giftBoxes.length} GIFTS
          </span>
        </div>

        <div className="gift-grid">
          {giftBoxes.map((gift) => (
            <article className="gift-card" key={gift.id}>

              <Link to={`/gift-box/${gift.id}`}>
                <div className="gift-image">
                  <img src={gift.image} alt={gift.name} />

                  <span className="gift-tag">
                    {gift.tag}
                  </span>

                  <span className="gift-view">
                    VIEW GIFT
                  </span>
                </div>
              </Link>

              <div className="gift-info">
                <div>
                  <h3>{gift.name}</h3>
                  <p>{gift.subtitle}</p>
                </div>

                <strong>${gift.price}</strong>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* GIFT EXPERIENCE */}
      <section className="gift-experience">

        <div className="gift-experience-image">
          <img
            src="/images/gift-wrapping.jpg"
            alt="MAYFAIR gift wrapping"
          />
        </div>

        <div className="gift-experience-content">
          <span className="eyebrow">THE MAYFAIR EXPERIENCE</span>

          <h2>
            Beautifully
            <br />
            wrapped.
          </h2>

          <p>
            Every MAYFAIR gift is prepared with the same
            attention to detail as the fragrance inside.
            From our signature packaging to the finishing
            touches, every detail is designed to make
            opening your gift feel unforgettable.
          </p>

          <Link to="/products" className="text-link">
            SHOP ALL FRAGRANCES
            <span>→</span>
          </Link>
        </div>

      </section>

      {/* FEATURES */}
      <section className="gift-features container">

        <div className="section-heading centered">
          <span className="eyebrow">WHY MAYFAIR</span>
          <h2>Made for meaningful moments.</h2>
        </div>

        <div className="feature-grid">

          <div className="feature">
            <span>01</span>
            <h3>Beautifully Wrapped</h3>
            <p>
              Presented in our signature MAYFAIR
              gift packaging.
            </p>
          </div>

          <div className="feature">
            <span>02</span>
            <h3>Personal Message</h3>
            <p>
              Add a personal note to make your
              gift truly yours.
            </p>
          </div>

          <div className="feature">
            <span>03</span>
            <h3>Curated Scents</h3>
            <p>
              Carefully selected fragrances for
              every personality.
            </p>
          </div>

          <div className="feature">
            <span>04</span>
            <h3>Made to Impress</h3>
            <p>
              A premium experience from the first
              glance to the final spray.
            </p>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="gift-cta">

        <span className="eyebrow">MAKE THEIR DAY SPECIAL</span>

        <h2>
          Give them a scent
          <br />
          they'll remember.
        </h2>

        <Link to="/products" className="gift-btn light">
          Shop MAYFAIR
        </Link>

      </section>

    </main>
  );
}

export default GiftBox;