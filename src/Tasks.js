/*
בס"ד דיתברך ויתעלה שמו לעד

A: Build a grid system !!!
-------------------------
a: build full grid (908 items) ;VV
- used for loop inside func compo - almost copied code from
https://www.akashmittal.com/for-loop-inside-react-jsx/

b: give index/key to each item ;VV
c: desing it to be full table ;VV
d: make it responsive = full for all screens ;VV 
- set the gridItems padding to 8px 
- (and make the grid be 908 units)

d: acsses the items object (for manipulate their color e.g) -- no neccery, meanwhile / ";VV"
c: display start position for snake (= 5 items with background color) ;VV
d: display fruits in rand position (= 1 item with background color) ;VV

------
e: display fruits in rand time ;VV
** FAKE SOLUTION - usuing css animation/delay/duration = the apple is their but hide - 
bad for edgae case where the snake eats an apple even he didn't saw it

REAL SOLUTIN: PROBLEMS: 
======================
1. div inside div. / maybe not crutial for the keyboard game and indexes
2. animation duration isn't working
=====================

import React, { useEffect, useState } from 'react';
import './Apple.css';

const randTime = Math.floor(Math.random() * 4000) + 2000;

// setTimeout is a side effect and must exist inside of a useEffect hook. Use it to update state. Then conditionally render your component.
const Apple = () => {

  const [state, setState] = useState(false);

    useEffect(() => setTimeout(()=>setState(true), randTime), []);

  return (
    <div>
      {state === true ? <div className="Apple"></div> : null}
    </div>
  );
};

export default Apple;

-----

1. create a snake ;VV
a: define head ;VV
b: define tail ;VV
c: define body ;VV
d: define all as one item/array ;VV

-------

=====================
keyborad events - understand how it works!!!

a: find arrow keyboard code ;VV
- or: keycode - 37, 38, 39, 40 
- or: someFunc("ArrowUp/Down/Left/Right") and call the func inside useEffect

************************************************
: LEARN AND REFRFRSH NODEJS (for the jobs i send cv as fullstack) ;VV - leraend from w3scools
: LEARN AND REFRFRSH MONGODB +  23  common operators (for the jobs i send cv as fullstack) ; VV w3schools + bmc.com (23 operators)
: LEARN AND REFRFRSH EXPRESS (for the jobs i send cv as fullstack) ; VV express official website
: LEARN AND REFRFRSH MONGOOSE (for the jobs i send cv as fullstack) ; VV mongoose official website
************************************************

=============================
=============================
=============================

*/