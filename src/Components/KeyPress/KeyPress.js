import React, { useEffect, useState } from 'react';

function useKeyDown(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
        /*
        if (key === 37/right){
          allSnake[i+1];
        }
        else if (key === 38/left){
          allSnake[i-1]
        }
        etc..
        */  
      }
    }
    
    // If released key is our target key then set to false
    // const upHandler = ({ key }) => {
    //   if (key === targetKey) {
    //     setKeyPressed(false);
    //   }
    // };

    // Add event listeners
    useEffect( () => {
      window.addEventListener("keydown", downHandler);
      // window.addEventListener("keyup", upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keydown", downHandler);
        // window.removeEventListener("keyup", upHandler);
      };
    }, [] ); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
  }

  const KeyPress = () => {
    const downPress = useKeyDown("1");
    const upPress = useKeyDown("2");
    const leftPress = useKeyDown("ArrowLeft");
    const rightPress = useKeyDown("ArrowRight");
    
    return (
        <div>
          {/* babeljs: react creat elelment and check the thing that on the right of && only and render it*/}
            {downPress && "💗"}
            {upPress && "😢"}
            {leftPress && "🤖"}
            {rightPress && "😍"} 
        </div>
    );
  }

export default KeyPress;