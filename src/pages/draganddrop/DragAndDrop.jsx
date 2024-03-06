import React, { memo, useState, useEffect } from "react";
import "./DragAndDrop.css";
import { texts } from "../../static/exercise";

const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const DragAndDrop = () => {
    const [textEnIds, setTextEnIds] = useState([]);
    const [textUzIds, setTextUzIds] = useState([]);
    const [textEnId, setTextEnId] = useState(null);
    const [textUzId, setTextUzId] = useState(null);
    const [text, setText] = useState("");



    const randomizedTexts = shuffleArray(texts);

    const handleRandomize = () => {
        const randomizedEnIds = shuffleArray(randomizedTexts.map((text) => text.id)).slice(0, 4);
        const randomizedUzIds = shuffleArray(randomizedTexts.map((text) => text.id)).slice(0, 4);
        setTextEnIds(randomizedEnIds);
        setTextUzIds(randomizedUzIds);


        if (textEnId == textUzId) {
            console.log("ok");
            setText("siz to'g'ri javob kiritdingiz")
        }
        else {
            console.log("not");
            setText("siz noto'g'ri javob kiritdingiz")
        }

        setTimeout(() => {
            setText("")
        }, 2000);

    };

    useEffect(() => {
        const randomizedEnIds = shuffleArray(randomizedTexts.map((text) => text.id)).slice(0, 4);
        const randomizedUzIds = shuffleArray(randomizedTexts.map((text) => text.id)).slice(0, 4);
        setTextEnIds(randomizedEnIds);
        setTextUzIds(randomizedUzIds);
    }, [])


    return (
        <div className="container">
            <div className="drag_container">
                <div className="drop_cards">
                    <div className="drop_header">
                        <h2>Matching</h2>
                        <button className="matching_btn" onClick={handleRandomize}>Tekshirish</button>
                    </div>
                    <div className="matching_container">
                        <ul className="matching-top">
                            <b>English Words</b>
                            {textEnIds.map((id) => (
                                <li key={id} onClick={() => setTextEnId(id)}>
                                    {texts.find((text) => text.id === id).en}
                                </li>
                            ))}
                        </ul>
                        <b className="matching-answer">{text}</b>
                        <ul className="matching-bottom">
                            <b>Uzbek words</b>
                            {textUzIds.map((id) => (
                                <li key={id} onClick={() => setTextUzId(id)}>
                                    {texts.find((text) => text.id === id).uz}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(DragAndDrop);