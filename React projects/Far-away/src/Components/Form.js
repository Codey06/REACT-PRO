import React, { useState } from 'react'

function Form({onAddItems}) {
    const [description,setDescription]=useState('')
    const [quatity,setQuantity]=useState(1)
  
    function handleSubmit(e) {
      e.preventDefault()
      if(!description)return
      const newItem = { description, quatity, packed:false, id: Date.now() }
      console.log(newItem)
      
  onAddItems(newItem)
      setDescription('')
      setQuantity('')
    }
    return (
      <form className="add-form"onSubmit={handleSubmit}>
        <h3>What Did You Need For your 😍 trip</h3>
        <select value={quatity} onChange={(e)=>setQuantity(e.target.value)}>
          {
            Array.from({ length: 20 }, (_, i) => i + 1).map(num => <option value={num} key={num}>{ num}</option>)}
        </select>
        <input type="text" placeholder="item...." value={description}
        onChange={(e)=>setDescription(e.target.value)}/>
        <button >Add</button>
      </form>
    )
  }

export default Form
