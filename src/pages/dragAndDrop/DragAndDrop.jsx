import React, { memo, useEffect, useState } from "react";
import "./DragAndDrop.css";
import dragData from "../../static/drag";

// --------------------------------------------------------------------------------

const randomizeDragData = () => {
  const keys = Object.keys(dragData);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const randomDragData = { [randomKey]: dragData[randomKey] };

  const randomizedData = {};
  Object.keys(randomDragData).forEach((key) => {
    randomizedData[key] = {
      start: shuffleArray(randomDragData[key].start),
      and: shuffleArray(randomDragData[key].and),
    };
  });

  return randomizedData;
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// --------------------------------------------------------------------------------

const DragAndDrop = () => {
  const [randomizedData, setRandomizedData] = useState(randomizeDragData());

  const handleRandomize = () => {
    setRandomizedData(randomizeDragData());
  };

  return (
    <div className="drag_page">
      <div className="container">
        <div className="drag_container">
          <div className="drop_cards">
            <div className="drop_header">
              <h2>Matching</h2>
              <button onClick={handleRandomize}>Randomize</button>
            </div>

            {randomizedData &&
              Object.keys(randomizedData).map((key) => (
                <div className="matching_container" key={key}>
                  <ul className="start">
                    {randomizedData[key].start.map((item, index) => (
                      <li key={index}>{item.title}</li>
                    ))}
                  </ul>
                  <ul className="and">
                    {randomizedData[key].and.map((item, index) => (
                      <li key={index}>{item.title}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DragAndDrop);
