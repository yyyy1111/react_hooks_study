import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count , setCount] = useState(0);
  return (
    <div className="App">
      <button
        onClick={
          ()=>setCount((prevCount) => {
            return prevCount + 1
          })
        }
      >setCount</button>
      <p>count:{count}</p>
    </div>
  );
}

export default App;
