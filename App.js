import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [state, setState] = React.useState([]);
  const [limit , setLimit] = React.useState(10)

  async function handleClick(){
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`)
    const data = await res.json();
    console.log(data.products)
    setState(data.products)
    console.log(state)
  }
  async function addItems(){
   if(limit <= 150){
    setLimit(limit + 10);
    handleClick();
   }
  }
  const dataEL = state.map((item,index)=> {
    return(
      <div style={{listStyleType:"none"}} key={index}>
      <li>{item.brand}</li>
       <li>{item.title}</li> 
      <li>{item.description}</li>
      <hr></hr>
     </div>
    )
  })
  return (
    <div className="App">
      <button onClick={handleClick}>Fetch API</button>
        <div>{dataEL}</div>
      {state.length > 0 && <button onClick={addItems}>Load More Items...</button>}
    </div>
  );
}

export default App;
