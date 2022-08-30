import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';

import React, { useState } from "react";
import Button from "./components/Buttons";


export default function App() {
  const [count, setCount] = useState(0);
  const [global_count, setGlobalCount] = useState(0);

  let incrementCount = () => {
    if(count =="Zero" || count == 0){
      setCount(1);  
      setGlobalCount(global_count+1);
    } else{
      setCount(count + 1);
    }
  };

  let decrementCount = () => {
    
    if(count > 0)
    {
      setCount(count - 1);
    }

    if(count == 0)
    {
      setCount("Zero");
    }

    if(count == 1)
    {
      setGlobalCount(global_count - 1)
    }
  };

  let deleteTheRow = () => {

  }

  return (
    <div className="app">
      <Container className="p-3">
        <div>
          <div class="count">
            <h3>Cart: {global_count}</h3>
          </div>
          <div class="count">
            <h3>Count: {count}</h3>
          </div>
          <div class="buttons">
            <p> Product 1 </p>
            <Button title={"-"} action={decrementCount} count={count} />
            <Button title={"+"} action={incrementCount} count={count}/>
          </div>
        </div>
      </Container>
    </div>
  );
}