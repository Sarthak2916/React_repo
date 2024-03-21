import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=8;

function App() {
  // const [count, setCount] = useState(0)
  // useState hook.
  let [counter,setCount]=useState(8);
  //arrow function
  let addOne =()=>{
    console.log(counter);
    counter=counter+1;
    setCount(counter);
  }
  let subOne =()=>{
    console.log(counter);
    counter=counter-1;
    setCount(counter);
  }
  
  return (
    <>
    <h1>This is my react app from vite.</h1>
    <h1>Counter: {counter}</h1>
    <button onClick={addOne}>Add</button>
    <br /><br />
    <button onClick={subOne}>Minus</button>
    </>
  )
}

export default App
