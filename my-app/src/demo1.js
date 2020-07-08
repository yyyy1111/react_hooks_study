import React , { useState } from 'react';
import './App.css';
function Demo1() {
  const [display , setDisplay] = useState(false);
  return (
    <div>
      {display ? <p>我出现了！</p> :null}
      <button
        onClick={
          ()=>setDisplay(!display)
        }
      >点我切换</button>
    </div>
  )
}
export default Demo1;