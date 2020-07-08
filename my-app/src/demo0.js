import React , { useState } from 'react';

function Demo0() {
  const [count , setCount] = useState(0);
  return (
    <div>
      <button
        onClick={
          ()=>setCount(count+1)
        }
      >setCount</button>
      <p>count:{count}</p>
    </div>
  );
}

export default Demo0;