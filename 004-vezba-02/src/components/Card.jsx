import React, { useState } from "react";
import cardImg from "../assets/rabbit.jpg";
function Card({ price, naslov }) {
  const [cena, setCena] = useState(price);

  function handlePrice() {
    setCena(1000);
  }

  return (
    <div className="card">
      <h2 className="card_title">{naslov}</h2>
      <img className="card_img" src={cardImg} alt="Card" />
      <h3 className="card_price">{cena}$</h3>

      <button onClick={handlePrice}>Promena cene</button>

      <div className="card_counter">
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
    </div>
  );
}

export default Card;
