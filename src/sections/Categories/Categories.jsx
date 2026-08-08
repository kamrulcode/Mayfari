import "./Categories.scss";
import { categoryData } from "./categoryData";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Categories() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //   gsap.from(cardsRef.current, {
      //     y: 80,
      //     opacity: 0,
      //     duration: 1,
      //     stagger: 0.2,
      //     ease: "power3.out",
      //     scrollTrigger: {
      //       trigger: sectionRef.current,
      //       start: "top 100%",
      //       // toggleActions: "play none none none",
      //       invalidateOnRefresh: true,
      //     },
      //   });
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="categories">
      <div className="container">
        <div className="section-heading">
          <span>Collections</span>
          <h2>Featured Categories</h2>
        </div>

        <div className="categories__grid">
          <article
            ref={(el) => (cardsRef.current[0] = el)}
            className="category-card large"
          >
            <img src={categoryData[0].image} alt="" />

            <div className="overlay">
              <h3>{categoryData[0].title}</h3>
              <button>Shop Collection →</button>
            </div>
          </article>

          <div className="stack">
            {categoryData.slice(1).map((item, index) => (
              <article
                key={item.id}
                ref={(el) => (cardsRef.current[index + 1] = el)}
                className="category-card"
              >
                <img src={item.image} alt={item.title} />

                <div className="overlay">
                  <h3>{item.title}</h3>
                  <button>Shop Collection →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
