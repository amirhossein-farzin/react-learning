import React from "react";
import Button from "./Button";
import "./Card.css";

function Card({
  image,
  name = "Benz",
  description,
  speed,
  Taiile,
  Difficulte,
}) {
  return (
    <div className="card">
      <img className="card-img" src={image} />
      <h1 className="card-car">{name}</h1>
      <p className="card-description">{description}</p>
      <div className="card-info">
        {/* Speed */}
        <div className="card-item">
          <div className="card-item-top">
            <span style={{ fontWeight: "bold" }}>Speed:</span>
            <span style={{ color: "gray" }}>{speed} KM/H</span>
          </div>
          <div className="card-item-bottom">
            <div
              style={{ width: `${speed}%` }}
              className="card-item-fill"
            ></div>
          </div>
        </div>

        {/* Taiile */}
        <div className="card-item">
          <div className="card-item-top">
            <span style={{ fontWeight: "bold" }}>Taiile:</span>
            <span style={{ color: "gray" }}>{Taiile} KM/H</span>
          </div>
          <div className="card-item-bottom">
            <div
              style={{ width: `${Taiile}%` }}
              className="card-item-fill"
            ></div>
          </div>
        </div>

        {/* Difficulte */}
        <div className="card-item">
          <div className="card-item-top">
            <span style={{ fontWeight: "bold" }}>Difficulte:</span>
            <span style={{ color: "gray" }}>{Difficulte} KM/H</span>
          </div>
          <div className="card-item-bottom">
            <div
              style={{ width: `${Difficulte}%` }}
              className="card-item-fill"
            ></div>
          </div>
        </div>
      <Button />
      </div>
    </div>
  );
}
export default Card;
