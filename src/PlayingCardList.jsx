import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const addCard = async () => {
    const res = useAxios("https://deckofcardsapi.com/api/deck/new/draw/")
    console.log(res)
    setCards(cards => [...cards, { ...res.data, id: uuidv4() }]);
  };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      {/* <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div> */}
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
