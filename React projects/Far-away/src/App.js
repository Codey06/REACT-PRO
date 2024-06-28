import { useState } from "react"
import Logo from "./Components/Logo"
import Form from "./Components/Form"
import { PackingList } from "./Components/PackingList"
import { Stats } from "./Components/Stats"
// const initialItems = [
//   {
//     id:1,description:"Passports",quatity:2, packed:false
//   },
//   {
//     id:2,description:"Socks",quatity:12, packed:false
//   },
//   {
//     id:3,description:"Charrger",quatity:1, packed:true
//   },
// ]
  


export default function App() {
  const [items, setItems] = useState([])
  
  
  function handleAddItems(item) {
    setItems((items)=>[...items, item])
    
  }
  function handleDalete(id) {
    setItems((items) => items.filter((item) => item.id !== id))
    
  }
  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed}:item))
  }
  function handleClearList(){
    const confirmed=window.confirm('Are you sure you want to delete all items?')
    if(confirmed)setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={ handleDalete}onToggleItem={handleToggleItem} onClearList={handleClearList}/>
      <Stats items={items} />
    
    </div>
 
  )

}





