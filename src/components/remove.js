import React from "react";

const Item = ({ item, onDelete }) => {
  console.log(item,'item')
  return (
  
          <tr>
            <td>{item.username}</td>
            <td>
              <button className="btn" onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
      
  );
};

export default Item;
