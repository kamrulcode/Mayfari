import "./Bundle.scss";

import { useEffect, useState } from "react";

import { bundleProducts } from "../../../data/bundleData";

import BundleItem from "./BundleItem";
import gsap from "gsap";
import Button from "../../common/Button/Button";

function Bundle() {
  const [items, setItems] = useState(bundleProducts);

  useEffect(() => {
    gsap.from(".bundle-item", {
      opacity: 0,

      x: -40,

      stagger: 0.15,

      duration: 0.8,

      scrollTrigger: {
        trigger: ".bundle",

        start: "top 80%",
      },
    });
  }, []);

  const toggle = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,

              selected: !item.selected,
            }
          : item,
      ),
    );
  };

  const selectedItems = items.filter((item) => item.selected);

  //   const save = 12;
  const originalTotal = selectedItems.reduce(
    (sum, item) => sum + item.price,
    0,
  );

  const discountRate = 0.15; // 15%

  const savings = Math.round(originalTotal * discountRate);

  const bundlePrice = originalTotal - savings;

  return (
    <section className="bundle">
      <h2>Frequently Bought Together</h2>

      <div className="bundle-grid">
        {items.map((item) => (
          <BundleItem key={item.id} item={item} toggle={toggle} />
        ))}
      </div>

      <div className="bundle-total">
        <p>
          Total
          <strong>${originalTotal}</strong>
        </p>

        <p>
          Save
          <strong>${savings}</strong>
        </p>

        <h3>Bundle Price ${bundlePrice}</h3>

        <Button>Add Bundle To Cart</Button>
      </div>
    </section>
  );
}

export default Bundle;
