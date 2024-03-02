import React, {useState} from 'react'
import { texts } from '../../static/exercise'
import { CiPlay1 } from "react-icons/ci";

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

    const randomIndex = Math.floor(Math.random() * texts.length);
    const randomData = texts[randomIndex];
    setText(randomData);
  }
    
  return (
    <div>
      <div className='text_lists'>
        
       
            <div className='text_list'  >
              <div>

              <h1 >{text.en}</h1>
              </div>
              <div>

              <CiPlay1 className='play_voice'  onClick={() =>play(text.voice)} />
              </div>
                <div>

              <h1 >{text.uz}</h1>
                </div>

            </div>
   

       
      </div>
      <button onClick={()=> handlerandom()}>
        click
      </button>

    </div>
  )
}

export default Learn