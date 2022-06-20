import React from 'react';

import './Board.css';

import PlayButton from'../PlayButton/PlayButton';
import SnakeHead from '../SnakeHead/SnakeHead';
import SnakeBody from '../SnakeBody/SnakeBody';
import SnakeTail from '../SnakeTail/SnakeTail';
import Apple from '../Apple/Apple';

// put all in arrays beacuse are gridboard is arr
const allSnake = [<SnakeTail />, <SnakeBody />, <SnakeBody />, <SnakeBody />, <SnakeHead />];
const playButton = [<PlayButton />];
const apple = [<Apple />];
// make rand position and time for the apples
const randItem = Math.floor(Math.random() * 888);

const CreateBoard = () => {
    const allItems = [];
    // build the grid = arr with indexes
    for (let i = 0; i < 912; i++) {
      allItems.push(<div key={i} className="gridItems"></div>);
    }
  //snake start position
  allItems[537] = allSnake;
  allItems[895] = playButton;
  // make it dispaly in rand place. for rand time we define it inside the apple component
  allItems[randItem] = apple;
    return allItems;
};

const Board = () => {

    return (
        <div className="gridBoard">
            {CreateBoard()}
        </div>
    );
}

export default Board;

/*

NOTES:

1. for avoid unneccery space between div's - we didn't make items as seperate component

2. for repalce item in array: allItems.splice(1, 1, someVal); - from stackOverFlow

3. for acsses the items object for manipulate them we do:
   // console.log(allItems[i]);

   // this is the object in the console:
   {$$typeof: Symbol(react.element), type: "div", key: "8", ref: null, props: {…}, …}
        $$typeof: Symbol(react.element)
        key: "8"
        props: {className: "gridItems"}
        ref: null
        type: "div"
        _owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
        _store: {validated: false}
        _self: undefined
        _source: {fileName: "C:\\uriel yair sabag codes\\snake-game\\src\\Components\\GridBoard\\GridBoard.js", 
        lineNumber: 7, columnNumber: 21}
        __proto__: Object

*/