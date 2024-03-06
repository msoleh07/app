import React, { useState } from 'react'
import { texts } from '../../static/exercise'
import { GiSpeaker } from "react-icons/gi";
import { FaRandom } from "react-icons/fa";
import "./learn.css"

const Learn = () => {
  const [text, setText] = useState(texts[0])
  const handlerandom = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    const randomData = texts[randomIndex];
    setText(randomData);
  }

  const play = (sound) => {
    new Audio(sound).play()
  }

  return (
    <div>
      <div className='text_lists'>
        <h1 >{text.en}</h1>
        <GiSpeaker className='play_voice' onClick={() => play(text.voice)} />
        <h1 >{text.uz}</h1>
        <button className='text_lists_btn' onClick={() => handlerandom()}>
          <FaRandom />
        </button>
      </div>

    </div >
  )
}

export default Learn
