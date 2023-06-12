import React from "react";
import "./Input.css";

import { useItem } from "./DataProvider";
import { useState } from "react";
function Input() {
 
  const {addItem} = useItem()
  const [item,setItem] = useState('');
  const add = () => {
    addItem(item)
    setItem('')
  };
  return (
    <div className="input-container">
      <h1>TODO LIST</h1>
      <div>
        <input
          style={{ width: "30vw" }}
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;
        <button onClick={add}>ADD ITEM</button>
      </div>
    </div>
  );
}

export default Input;
