import { useState } from "react"

function App() {
  return (
    <div className="bg-green-400 text-black">Hello world</div>
  )
}

function FirstCode(){
  
  let [counter , setCounter] = useState(0)

  const increaseCount = () => {
    if(counter < 20){
      setCounter(counter + 1)
      setCounter(prevCounter=>prevCounter + 1)
      setCounter(prevCounter=>prevCounter + 1)
      console.log("Count Increased !! Count :",counter);
    }
  }
  
let decreaseCount = () => {
  if(counter > 0){
    setCounter(counter - 1)
    console.log("Count Decreased !! Count :",counter);

  }
  
}

  return (
    <>
      <h1>Count : {counter} </h1>
      <button onClick={increaseCount} >Increase Counter {counter}</button>
      <button onClick={decreaseCount}>Decrease Counter {counter}</button>
    </>
  )
}



export default FirstCode;
