import React from "react";

export default function ItemCategoryCard1({ subCards }) {
  console.log(subCards);
  return (
    <div>
      {subCards.map((item, index) => (
        <p>{item.card.info.id}</p>
      ))}
    </div>
  );
}
