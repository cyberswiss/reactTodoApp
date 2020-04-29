import React from "react";

import "./Listitems.css";

function ListItems(props) {
  const items = props.items;

  //map functiuon is like for loop it takes singular element of the array as the argument and returns what we want to do


  const listitems = items.map(item => {
    return (
      <div className="list" key={item.key}>
        <p>
            <input className="text" value={item.text}  id={item.key}   type="text"   onChange={ (e)=>props.setUpdate(e.target.value,item.key)}     ></input>
            
            </p>
        <button className="delete"  onClick={  ()=>props.deleteItem(item.key)}   ></button>
      </div>
    );
  });

  return <div>{listitems}</div>;
}

export default ListItems;
