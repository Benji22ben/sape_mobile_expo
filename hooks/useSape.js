import React from "react";

function useSape() {
  const [sape, setSape] = React.useState([
    {
      id: 1,
      name: "T-Shirt",
      image: require("../assets/images/testData/tshirt.png"),
    },
    {
      id: 2,
      name: "Shoes",
      image: require("../assets/images/testData/shoes.png"),
    },
  ]);

  const [fits, setFits] = React.useState([
    [
      {
        id: 1,
        name: "T-Shirt",
        image: require("../assets/images/testData/tshirt.png"),
      },
      {
        id: 2,
        name: "Shoes",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 3,
        name: "pants",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 4,
        name: "socks",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 5,
        name: "socks",
        image: require("../assets/images/testData/shoes.png"),
      },
    ],
    [
      {
        id: 1,
        name: "T-Shirt",
        image: require("../assets/images/testData/tshirt.png"),
      },
      {
        id: 2,
        name: "Shoes",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 3,
        name: "pants",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 4,
        name: "socks",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 5,
        name: "socks",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 6,
        name: "socks",
        image: require("../assets/images/testData/shoes.png"),
      },
    ],
    [
      {
        id: 1,
        name: "T-Shirt",
        image: require("../assets/images/testData/tshirt.png"),
      },
      {
        id: 2,
        name: "Shoes",
        image: require("../assets/images/testData/shoes.png"),
      },
    ],
    [
      {
        id: 1,
        name: "T-Shirt",
        image: require("../assets/images/testData/tshirt.png"),
      },
      {
        id: 2,
        name: "Shoes",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 3,
        name: "pants",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 4,
        name: "socks",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 3,
        name: "pants",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 4,
        name: "socks",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 3,
        name: "pants",
        image: require("../assets/images/testData/shoes.png"),
      },
      {
        id: 4,
        name: "socks",
        image: require("../assets/images/testData/shoes.png"),
      },
    ],
  ]);

  return { sape, fits };
}

export default useSape;
