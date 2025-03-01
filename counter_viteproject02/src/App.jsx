import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0) // Application of hooks

  const addValue = () => {
    setCounter(counter + 1)
    // OR:
    // counter = counter + 1
    // setCounter(counter)
  }

  const decreaseValue = () => {
    if (counter - 1 === -1) {
      setCounter(counter = 0)
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Tea and React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={decreaseValue}
      >Remove value</button>
    </>
  )
}

export default App
