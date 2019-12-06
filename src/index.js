import React , { useState } from 'react';
import ReactDOM from 'react-dom';
function App() {
  const [count , setCount] = useState(0);
  return(
    <div className='App'>
      <button 
        onClick={
          () => setCount(parseInt(Math.random()*10))
        }
      >setCount</button>
      <p>count: {count}</p>
    </div>
  );
}
ReactDOM.render( <App />,mountNode);