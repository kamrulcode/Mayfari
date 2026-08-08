import "./Hero.scss";
import heroImage from "../../assets/images/hero-candle.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
function Hero() {
  const heroRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const textRef = useRef();
  const buttonsRef = useRef();
  const imageRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        clearProps: "all",
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 60,
            duration: 0.8,
            clearProps: "all",
          },
          "-=.3",
        )
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
            clearProps: "all",
          },
          "-=.4",
        )
        .from(
          buttonsRef.current.children,
          {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.5,
            clearProps: "all",
          },
          "-=.2",
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            x: 100,
            scale: 0.9,
            duration: 1,
            clearProps: "all",
          },
          "-=.8",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.from(subtitleRef.current, {
  //     opacity: 0,

  //     y: 30,

  //     duration: 0.6,
  //   })

  //     .from(
  //       titleRef.current,
  //       {
  //         opacity: 0,

  //         y: 60,

  //         duration: 0.8,
  //       },
  //       "-=.3",
  //     )

  //     .from(
  //       textRef.current,
  //       {
  //         opacity: 0,

  //         y: 40,

  //         duration: 0.6,
  //       },
  //       "-=.4",
  //     )

  //     .from(
  //       buttonsRef.current.children,
  //       {
  //         opacity: 0,

  //         y: 30,

  //         stagger: 0.15,

  //         duration: 0.5,
  //       },
  //       "-=.2",
  //     )

  //     .from(
  //       imageRef.current,
  //       {
  //         opacity: 0,

  //         x: 100,

  //         scale: 0.9,

  //         duration: 1,
  //       },
  //       "-=.8",
  //     );
  // }, []);

  useEffect(() => {
    const image = imageRef.current;

    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;

      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      gsap.to(image, {
        x,

        y,

        duration: 1,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);
  return (
    <section ref={heroRef} className="hero">
      <div className="hero__noise"></div>

      <div className="hero__glow"></div>
      <div className="container hero__container">
        <div className="hero__content">
          <span ref={subtitleRef} className="hero__subtitle">
            Luxury Handcrafted Candles
          </span>

          <h1 ref={titleRef} className="hero__title">
            Light Your
            <br />
            Space.
          </h1>

          <p ref={textRef} className="hero__text">
            Discover handcrafted soy candles designed to create warmth, calm and
            unforgettable moments.
          </p>

          <div ref={buttonsRef} className="hero__buttons">
            <button className="btn btn--primary">
              <span>Shop Collection</span>
            </button>

            <button className="btn btn--outline">Explore</button>
          </div>
        </div>

        <div ref={imageRef} className="hero__image">
          <img src={heroImage} alt="Luxury Candle" />
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
