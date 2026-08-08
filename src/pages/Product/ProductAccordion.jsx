import { useState } from "react";
import "./Product.scss";

const items = [
  {
    title: "Description",

    content: "Made with premium soy wax.",
  },

  {
    title: "Shipping",

    content: "Free worldwide shipping.",
  },

  {
    title: "Ingredients",

    content: "Soy Wax, Cotton Wick.",
  },
];

function ProductAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => setActive(index)}>{item.title}</button>

          {active === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default ProductAccordion;
