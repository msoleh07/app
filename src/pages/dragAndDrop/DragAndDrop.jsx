import React, { memo, useEffect, useState } from "react";
import "./DragAndDrop.css";
import dragData from "../../static/drag";

const DragAndDrop = () => {
  const [dragDataItem, setDragDataItem] = useState(null);

  useEffect(() => {
    // Randomize data when component mounts
    randomizeData();
  }, []);

  const randomizeData = () => {
    // Copy the initial data to avoid mutations
    const newData = { ...dragData };

    // Shuffle each start and and array
    Object.keys(newData).map((key) => {
      newData[key].start = shuffleArray(newData[key].start);
      newData[key].and = shuffleArray(newData[key].and);
    });

    setDragDataItem(newData);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
        console.log("i =>", i, "j =>", j),
      ];
    }
    return shuffledArray;
  };
  //   console.log(dragDataItem);

  return (
    <div className="drag_page">
      <div className="container">
        <div className="drag_container">
          <div className="drop_cards">
            <div className="drop_header">
              <h2>title</h2>
            </div>
            <div className="drop_text_container">
              {dragData?.dragOne?.start?.map((item, inx) => (
                <ul key={inx}>
                  <li>{item?.title}</li>
                </ul>
              ))}
            </div>
            <div className="drop_text_container">
              {dragData?.dragOne?.and?.map((item, inx) => (
                <ul key={inx}>
                  <li>{item?.title}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DragAndDrop);
