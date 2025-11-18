import React from "react";
import Card from "./Card";
function App() {
  const cars = [
    {
      id: 1,
      image: "/src/assets/1.png",
      name: "pride",
      description: "Pride Minimum 11 Years Old And 1.5m Tall",
      speed: 60,
      Taiile: 40,
      Difficulte: 80,
      quote: "این ماشین رنگ قرمز موجود است",
    },
    {
      id: 2,
      image: "/src/assets/2.png",
      name: "206",
      description: "206 Minimum 11 Years Old And 1.5m Tall",
      speed: 90,
      Taiile: 70,
      Difficulte: 50,
      quote: "این ماشین رنگ سفید موجود است",
    },
    {
      id: 3,
      image: "/src/assets/3.png",
      name: "207",
      description: "207 Minimum 11 Years Old And 1.5m Tall",
      speed: 80,
      Taiile: 20,
      Difficulte: 30,
      quote: "این ماشین رنگ آبی و سبز موجود است",
    },
  ];
  return (
    <div className="app">
      {cars.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}
export default App;
