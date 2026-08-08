// const products = [
//   {
//     id: 1,
//     slug: "vanilla-bergamot",

//     name: "Vanilla Bergamot",

//     price: 38,

//     description: "Luxury scented candle handcrafted with natural soy wax.",

//     image: "/images/products/candle-1.png",

//     gallery: [
//       "/images/products/candle-1.png",
//       "/images/products/candle-2.png",
//       "/images/products/candle-3.png",
//     ],
//     isBestSeller: true,

//     category: "Luxury",

//     stock: 12,

//     rating: 4.9,
//   },

//   {
//     id: 2,

//     slug: "black-orchid",

//     name: "Black Orchid",

//     price: 45,

//     description: "Elegant fragrance with floral notes.",

//     image: "/images/products/candle-2.png",

//     gallery: ["/images/products/candle-2.png", "/images/products/candle-4.png"],

//     category: "Luxury",

//     stock: 8,

//     rating: 4.8,
//   },
// ];

// export default products;

import blackImg from "../assets/images/black.png";
import whiteImg from "../assets/images/white.png";
const products = [
  {
    id: 1,
    slug: "vanilla-dream",
    name: "Vanilla Dream",
    price: 38,

    image: blackImg,
    hoverImage: blackImg,

    images: [blackImg, blackImg, blackImg],

    rating: 5,

    description:
      "A luxurious scented candle handcrafted with natural soy wax and a warm vanilla fragrance.",

    wax: "100% Soy Wax",
    burnTime: "45 Hours",
    scent: "Vanilla & Bergamot",

    isBestSeller: true,
  },

  {
    id: 2,
    slug: "black-oud",
    name: "Black Oud",
    price: 45,
    image: whiteImg,
    hoverImage: whiteImg,
    images: [blackImg, blackImg, blackImg],
    rating: 4,
    isBestSeller: true,
  },

  {
    id: 3,
    slug: "ocean-breeze",
    name: "Ocean Breeze",
    price: 35,
    image: blackImg,
    hoverImage: blackImg,
    images: [blackImg, blackImg, blackImg],
    rating: 5,
    isBestSeller: false,
  },
];

export default products;
