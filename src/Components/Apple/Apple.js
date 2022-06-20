import React, { useEffect, useState } from 'react';
import './Apple.css';

const randTime = Math.floor(Math.random() * 5000) + 2000;

// setTimeout is a side effect and must exist inside of a useEffect hook. 
// Use it to update state. Then conditionally render your component.
const Apple = () => {

  const [state, setState] = useState(false);

    useEffect( () => setTimeout( () => setState(true), randTime), [] );

  return (
    <div>
      {state === true ? <div className="Apple"></div> : null}
    </div>
  );
};

export default Apple;