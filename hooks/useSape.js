import React from "react";

function useSape() {
  function getScoreColor(score) {
    if (score < 25) {
      return "#00FF85";
    } else if (score < 50) {
      return "#EDC180";
    } else if (score < 75) {
      return "#FF5C5C";
    }
    return "#202020";
  }

  const pull = {
    id: 1,
    name: "Pull",
    image: require("../assets/images/testData/pull.png"),
    score: 23,
  };

  const pant = {
    id: 2,
    name: "Pant",
    image: require("../assets/images/testData/pant.png"),
    score: 48,
  };

  const socks = {
    id: 3,
    name: "Socks",
    image: require("../assets/images/testData/socks.png"),
    score: 74,
  };

  const tshirt = {
    id: 4,
    name: "T-Shirt",
    image: require("../assets/images/testData/tshirt.png"),
    score: 85,
  };

  const shoes = {
    id: 5,
    name: "Shoes",
    image: require("../assets/images/testData/shoes.png"),
    score: 92,
  };

  const [outfitOfTheDay, setOutfitOfTheDay] = React.useState([
    pull,
    tshirt,
    pant,
    socks,
    shoes,
  ]);

  const [sape, setSape] = React.useState([pull, tshirt, pant, socks, shoes]);

  const [fits, setFits] = React.useState([
    [pull, tshirt, pant, socks, shoes],
    [pull, tshirt, pant, socks, shoes, shoes],
    [pull, tshirt],
    [pull, shoes, socks],
    [pull, pant, socks, shoes],
  ]);

  return { sape, fits, getScoreColor, outfitOfTheDay };
}

export default useSape;
