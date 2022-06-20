import React, { useState } from 'react';
import { BiPlay } from 'react-icons/bi';

import './PlayButton.css';

const PlayButton = ({viewButton}) => {
  // const [startButton, setStartButton] = useState({viewButton:true});

  // const removeButton = (event) => {
  //   // event.preventDefault();
  //   setStartButton({viewButton:false});
  // }

  return (
    <div 
      className="PlayButton"
      // onClick={removeButton}
      >
        <BiPlay />
    </div>
  );
}

export default PlayButton;