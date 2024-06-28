import React from 'react'

function Items({item,onDeleteItem,onToggleItem}) {
    return <li>
      <input type="checkbox" value={item.packed} onChange={()=>onToggleItem(item.id)}/>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
      {item.quatity} {item.description}</span>
    <button onClick={()=>onDeleteItem(item.id)}>❌</button></li>
  }

export default Items